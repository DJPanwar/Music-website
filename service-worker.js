self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('music-app-cache').then(function(cache){
            return cache.addAll([
                '/',
                'home.html',
                'sound.png',
                'images/wp3631253.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});
