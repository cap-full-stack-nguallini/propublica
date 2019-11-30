fetch(url, init)
    .then(response => response.json())
    .then(datos => {
        data = datos;
        importScripts();
    })
    .catch(error => alert(errorMsg));