---
name: jikan-rs
tagline: Async Rust client library for the Jikan (MyAnimeList) API — full endpoint coverage and built-in rate limiting.
tech: [Rust, async, tokio, serde, crates.io]
repo: https://github.com/sw3do/jikan-rs
demo: https://sw3do.github.io/jikan-rs/
demoLabel: Docs
---

## Problem

MyAnimeList has no convenient official REST API; the community-run **Jikan** API fills that gap, but consuming it from Rust meant hand-writing HTTP calls, response models, and rate-limit handling for every endpoint — repetitive and easy to get wrong.

## Approach & why

I built a typed, async client that wraps the **entire Jikan v4 surface**: each endpoint is a method on a `JikanClient`, responses are strongly typed with **serde**, and everything runs on **tokio**. Two design choices mattered most:

- **Built-in rate limiting** (3 requests per second, burst of 5) so callers can't accidentally trip Jikan's limits.
- **Explicit error types** instead of stringly-typed failures, which makes integration code far easier to debug.

I published it to **crates.io** so anyone can `cargo add jikan-rs`, and host the generated API docs on GitHub Pages.

```toml
[dependencies]
jikan-rs = "0.1.0"
tokio = { version = "1.0", features = ["full"] }
```

## A real challenge

Jikan enforces strict rate limits — fire requests naively and you get throttled with `429`s. I added an internal limiter that paces requests transparently, so consumers get correct behaviour without writing their own backoff logic. Modelling every failure mode into a typed error (rather than a generic string) took discipline but paid off the first time I had to debug a flaky endpoint.

## Outcome

A published Rust crate with complete anime, manga, character, club, watch, and random endpoint coverage, type-safe responses, comprehensive error handling, and hosted documentation.

## What I'd improve next

- Optional response caching and configurable retry/backoff.
- Recorded HTTP fixtures to expand test coverage without hitting the live API.
- A feature flag to tune the rate limit for users with higher quotas.
