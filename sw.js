self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./assets/cat.png"])
        })
    )
})

self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for: ${e.request.url}`)
})