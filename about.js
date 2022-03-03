// API for get requests
let url = fetch("https://jsonplaceholder.com/li/1");
      
// fetchRes is the promise to resolve
// it by using.then() method
url.then(res =>
    res.json()).then(d => {
        console.log(d)
})
