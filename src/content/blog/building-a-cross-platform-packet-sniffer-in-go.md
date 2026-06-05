---
title: Building a cross-platform packet sniffer in Go
description: What I learned writing a small libpcap-based network analyzer that runs the same on Linux, macOS and Windows.
date: 2026-04-22
tags: [Go, Networking, Systems]
---

I wanted to really understand what leaves my machine over the network, and I didn't want to launch a full GUI every time. So I built a small command-line packet sniffer in Go. It captures live traffic, decodes the common protocols, and flags anything that looks off — and it runs the same on Linux, macOS and Windows.

## Why Go and libpcap

Go made the concurrency and cross-compilation comfortable, and **libpcap** (with Npcap on Windows) does the heavy lifting of pulling packets off an interface. The capture itself is a loop: open a device, attach a filter, and read frames as they arrive.

The part that surprised me was how much value a good **BPF filter** adds. Instead of decoding everything and throwing most of it away, a filter like `tcp port 443` means the kernel only hands you the packets you asked for. That keeps the tool fast even on a busy interface.

## How I structured it

I kept it to two files so the responsibilities stay obvious:

- `main.go` — the CLI and the capture loop. A `PacketSniffer` struct owns the session, and each frame becomes a `PacketInfo` value.
- `analyzer.go` — protocol decoding (TCP, UDP, ICMP, HTTP, DNS) and statistics.

Splitting "get the bytes" from "make sense of the bytes" made it much easier to add a new protocol later without touching the capture path.

## The cross-platform gotcha

Raw capture is privileged. It needs root or administrator rights, and the pcap backend differs per OS — libpcap on Linux and macOS, Npcap on Windows. Pretending that difference doesn't exist is how you ship something that only works on your laptop.

So I made the setup explicit: document the dependency per platform, fail with a clear message when privileges are missing, and make the loop tolerate an interface that simply reports no packets instead of hanging. None of that is glamorous, but it's the difference between a demo and a tool someone else can actually run.

## What I'd do next

The obvious next step is exporting to the standard `.pcap` format so captures open in Wireshark, plus a few more decoders. But even at this size, writing it taught me more about how the network stack actually behaves than any amount of reading did.
