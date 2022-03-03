let url = fetch("https://jsonplaceholder.com/li/2");

url.then(res =>
    res.json()).then(d => {
        console.log(d)
})
