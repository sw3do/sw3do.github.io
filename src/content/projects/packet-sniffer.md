---
name: packet-sniffer
tagline: A small Go tool that captures network traffic in real time, reads the common protocols, and prints what it finds.
tech: [Go, Networking, libpcap, BPF, Linux]
repo: https://github.com/sw3do/packet-sniffer
---

## Problem

I wanted to actually see what my computer sends and receives over the network, without opening a big GUI like Wireshark every time. So I built a small command-line tool that captures live traffic, reads the common protocols, and flags anything that looks suspicious. It runs the same way on Linux, macOS and Windows.

## Approach & why

I wrote it in Go on top of libpcap (Npcap on Windows). The capture is basically a loop: open a network device, attach a filter, and read packets as they come in.

I split it into two files so each one has a clear job:

- `main.go` has the CLI and the capture loop. A `PacketSniffer` struct holds the session, and each packet becomes a `PacketInfo` value.
- `analyzer.go` reads the protocols (TCP, UDP, ICMP, HTTP, DNS) and does the stats.

I also added BPF filters, so you only capture the packets you care about. The output is colored so it's easy to read, and you can save it to a file.

## A real challenge

The tricky part was permissions and platforms. Raw capture needs root or admin rights, and the pcap backend is different on each OS (libpcap on Linux and macOS, Npcap on Windows). To get one codebase working everywhere, I had to keep the platform setup separate and write down the privilege requirement clearly. I also made the loop handle an interface that returns no packets, instead of just freezing.

## Outcome

It's a small cross-platform CLI (MIT licensed) that captures in real time, filters with BPF, reads the main protocols, flags suspicious traffic, and can export what it captured.

## What I'd improve next

- Export to the standard `.pcap` format so captures open in Wireshark.
- A few more protocol decoders.
- A small TUI so I can filter live while a capture is running.
