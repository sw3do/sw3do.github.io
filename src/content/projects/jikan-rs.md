---
name: jikan-rs
tagline: A Rust library for the Jikan (MyAnimeList) API. It's async, covers every endpoint, and handles rate limiting for you.
tech: [Rust, async, tokio, serde, crates.io]
repo: https://github.com/sw3do/jikan-rs
demo: https://sw3do.github.io/jikan-rs/
demoLabel: Docs
---

## Problem

MyAnimeList doesn't have a nice official API, so the community built Jikan. The problem was that using it from Rust meant writing the same HTTP calls, response types and rate-limit handling again and again, for every single endpoint. It got repetitive and easy to get wrong.

## Approach & why

So I turned all of that into a library. Every Jikan v4 endpoint is a method on a `JikanClient`, the responses are typed with serde, and it all runs async on tokio. Two things mattered most to me:

- Rate limiting is built in (3 requests per second, burst of 5), so you can't accidentally get throttled.
- Errors have real types instead of being plain strings, which makes them much easier to debug.

I published it to crates.io so anyone can just `cargo add jikan-rs`, and I put the docs on GitHub Pages.

```toml
[dependencies]
jikan-rs = "0.1.0"
tokio = { version = "1.0", features = ["full"] }
```

## A real challenge

Jikan's rate limit is strict, so my first version got `429` errors almost right away. It was just firing requests in a loop. I moved the rate limiting inside the client so it paces the requests for you, and callers don't have to think about it. Turning every failure into a typed error took some patience, but it really paid off the first time I had to debug a flaky endpoint.

## Outcome

A published Rust crate that covers the anime, manga, character, club, watch and random endpoints, with typed responses, proper error handling, and hosted docs.

## What I'd improve next

- Optional caching and retry/backoff.
- Recorded HTTP responses for the tests, so the test suite doesn't hit the live API.
- A flag to change the rate limit for users who have a higher quota.
