---
title: "Publishing my first Rust crate: jikan-rs"
description: How I designed a typed, rate-limited Rust client for the Jikan API, and what putting it on crates.io taught me.
date: 2026-05-18
tags: [Rust, async, Open Source]
---

`jikan-rs` is a Rust client for the [Jikan API](https://jikan.moe/), the community API for MyAnimeList. I started it because I kept writing the same HTTP calls and response structs every time I touched that data, so I turned the boilerplate into a library and put it online.

## A method per endpoint

The idea was simple: make every Jikan v4 endpoint a method on a `JikanClient`. Responses get parsed with serde into real Rust types, so the compiler catches mistakes that a raw JSON value would let through. Everything is async on tokio:

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

## Rate limiting should live in the library

Jikan's limit is strict, around 3 requests per second. My first version just fired requests in a loop and got `429`ed almost right away.

I decided the rate limiting should be inside the client, not in every caller's code. Now the client paces the requests for you (3 per second, burst of 5). That's the part I'm happiest with, because a library should make the right thing the default.

## Typed errors instead of strings

The other thing I cared about was error handling. It's easy to just return a string when something breaks, but that pushes the work onto whoever uses your code. So I gave the failures real error types. The first time I had to debug a flaky endpoint, that decision paid for itself.

## Shipping it

Publishing to crates.io and putting the docs on GitHub Pages was its own little lesson: versioning, a clean public API, and docs that a stranger can actually follow. Writing code for other people is pretty different from writing code only you will read, and it made me better at it.

Next I want to add optional caching and recorded test responses, so the tests don't depend on the live API.
