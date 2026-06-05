---
name: packet-sniffer
tagline: Real-time network packet capture and analysis tool in Go, with live traffic parsing and detailed reporting.
tech: [Go, Networking, libpcap, BPF, Linux]
repo: https://github.com/sw3do/packet-sniffer
---

## Problem

Inspecting what actually crosses a network interface usually means reaching for a heavy GUI like Wireshark. I wanted a small, scriptable, cross-platform CLI that captures live traffic, decodes the common protocols, and highlights anything suspicious — something I could run on Linux, macOS, or Windows with the same binary.

## Approach & why

I wrote it in **Go** on top of **libpcap** (Npcap on Windows). The design splits cleanly into two files:

- `main.go` holds the capture loop and CLI. The `PacketSniffer` struct owns the device and capture session; `PacketInfo` carries a decoded packet through the pipeline.
- `analyzer.go` decodes protocols — TCP, UDP, ICMP, HTTP, DNS — and computes traffic statistics.

Capture is narrowed with **BPF (Berkeley Packet Filter)** expressions, so you only pay for the packets you care about. Output is colorized for fast reading and can be exported to a file.

## A real challenge

Raw capture is privileged and platform-specific: it needs root/admin and a different pcap backend per OS (libpcap on Linux/macOS, Npcap on Windows). Getting one codebase to build and run everywhere meant isolating the platform setup and documenting the privilege requirement up front, then making the capture loop tolerate interfaces that report no packets instead of hanging or panicking.

## Outcome

A cross-platform, MIT-licensed CLI that captures in real time, applies BPF filters, decodes the major protocols, flags suspicious activity, prints readable colorized output, and exports captured packets.

## What I'd improve next

- Export to the standard `.pcap` format for Wireshark interoperability.
- Add more protocol decoders and richer statistics.
- A small TUI for live filtering while a capture is running.
