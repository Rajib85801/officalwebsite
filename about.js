let url = fetch("https://jsonplaceholder.com/li/1");

url.then(res =>
    res.json()).then(d => {
        console.log(d)
})
