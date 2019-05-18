var cacheAllowed = /.=\.(js|css|png|jpg|jpeg|php|ico|json)$/;
self.addEventListener('fetch', function (event) {
	// console.log(event.request.url);
	// if (event.request.method === 'GET' && cacheAllowed.test(event.request.url)) {
	event.respondWith(
		caches.match(event.request.url)
			.then(response => {
				if (response) {
					// console.warn('response', response)
					return response;
				} else {
					console.warn('no response!')
					console.warn('event.request.url', event.request.url)

					return fetch(event.request)
						.then(res => {
							return caches.open('cache-version-1')
								.then(cache => {
									console.log('Catch!')
									cache.put(event.request.url, res.clone());
									return res;
								})

						})
						.catch(err => {
							console.log('silense!')
						})
				}
			})
	);
	// }
})