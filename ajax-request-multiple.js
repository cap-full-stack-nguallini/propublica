const cachedFetch = (url, options) => {
    let expiry = 1440 * 60 // Expira cada 24 hs (Pues 1440/60 = 24)
    if (typeof options === 'number') {
        expiry = options
        options = undefined
    } else if (typeof options === 'object') {
        expiry = options.seconds || expiry
    }
    let cacheKey = url
    let cached = localStorage.getItem(cacheKey)
    let whenCached = localStorage.getItem(cacheKey + ':ts')
    if (cached !== null && whenCached !== null) {
        let age = (Date.now() - whenCached) / 1000
        if (age < expiry) {
            let response = new Response(new Blob([cached]))
            return Promise.resolve(response)
        } else {
            localStorage.removeItem(cacheKey)
            localStorage.removeItem(cacheKey + ':ts')
        }
    }
    return fetch(url, options).then(response => {
        if (response.status === 200) {
            let ct = response.headers.get('Content-Type')
            if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
                response.clone().text().then(content => {
                    localStorage.setItem(cacheKey, content)
                    localStorage.setItem(cacheKey + ':ts', Date.now())
                })
            }
        }
        return response
    })
}

cachedFetch(urlStates, initStates).then(response => response.json()).then(datosStates => {
        states = datosStates;
        cachedFetch(urlLegislators, initLegislators).then(response => response.json()).then(datosLegislators => {
            legislators = datosLegislators;
            importScripts();
        })
    })
    .catch(error => alert("The data could not be loaded. Come back later."));