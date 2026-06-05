---
title: "Publishing my first Rust crate: jikan-rs"
description: Designing a typed, rate-limited async client for the Jikan API — and what shipping it to crates.io taught me about API design.
date: 2026-05-18
tags: [Rust, async, Open Source]
---

`jikan-rs` is a Rust client for the [Jikan API](https://jikan.moe/), the community REST API for MyAnimeList. It started because I kept hand-writing the same HTTP calls and response structs every time I touched that data — so I turned the boilerplate into a library and published it.

## A method per endpoint

The goal was simple: make every Jikan v4 endpoint a typed method on a `JikanClient`. Responses are deserialized with **serde** into real Rust types, so the compiler catches mistakes that a `serde_json::Value` would let through. Everything is `async` on **tokio**:

```rust
use jikan_rs::prelude::*;

#[tokio::main]
async fn main() -> Result<()> {
    let client = JikanClient::new();
    let anime = client.get_anime(1).await?;
    println!("{}", anime.data.title);
    Ok(())
}
```

## Rate limiting belongs in the library

Jikan enforces strict limits — around 3 requests per second. The first naive version happily fired requests in a loop and got `429`ed almost immediately.

I decided the limiter belonged *inside* the client, not in every caller's code. The client now paces requests transparently (3/second, burst of 5), so users get correct behaviour for free. That one decision is the thing I'm happiest with: a library should make the right thing the default.

## Typed errors over strings

The other discipline was error handling. It's tempting to return a string when something fails, but that pushes the work onto whoever calls you. Instead I modelled the failure modes into explicit error types. The first time I had to debug a flaky endpoint, that paid for itself.

## Shipping it

Publishing to **crates.io** and hosting the docs on GitHub Pages was its own small lesson — versioning, a clean public API, and documentation that a stranger can follow. Designing for *other people* is very different from writing code only you will read, and it made me a better engineer.

Next I'd like to add optional caching and recorded test fixtures so the suite doesn't depend on the live API.
