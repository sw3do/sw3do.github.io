---
title: Building a cross-platform packet sniffer in Go
description: Notes from writing a small network tool in Go that runs the same on Linux, macOS and Windows.
date: 2026-04-22
tags: [Go, Networking, Systems]
---

I wanted to really understand what my computer sends over the network, and I didn't want to open a big GUI every time. So I wrote a small packet sniffer in Go. It captures live traffic, reads the common protocols, and flags things that look off. And it runs the same on Linux, macOS and Windows.

## Why Go and libpcap

Go made the cross-compiling and the concurrency easy, and libpcap (Npcap on Windows) does the hard part of pulling packets off the network card. The capture itself is just a loop: open a device, attach a filter, read frames as they come.

The thing that surprised me was how much a good BPF filter helps. Instead of decoding everything and dropping most of it, a filter like `tcp port 443` means the kernel only gives you the packets you asked for. That keeps the tool fast even on a busy connection.

## How I structured it

I kept it to two files so the jobs stay clear:

- `main.go` is the CLI and the capture loop. A `PacketSniffer` struct holds the session, and each frame becomes a `PacketInfo`.
- `analyzer.go` reads the protocols (TCP, UDP, ICMP, HTTP, DNS) and the stats.

Splitting "get the bytes" from "understand the bytes" made it easy to add a new protocol later without touching the capture code.

## The cross-platform part

Raw capture needs root or admin rights, and the pcap backend is different per OS: libpcap on Linux and macOS, Npcap on Windows. Ignoring that is how you end up with something that only works on your own laptop. So I made the setup explicit. I documented the dependency for each platform, showed a clear message when the rights are missing, and made the loop survive an interface that reports nothing. None of that is exciting, but it's the difference between a demo and a tool someone else can actually run.

## What's next

The obvious next step is exporting to `.pcap` so captures open in Wireshark, plus a few more decoders. But even at this size, writing it taught me more about how the network actually works than reading about it ever did.
