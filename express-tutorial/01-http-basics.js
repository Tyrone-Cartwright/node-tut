const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url

  if (url === '/') {
    // Home Page
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>Home Page</h1>')
    res.end()
  } else if (url === '/about') {
    // About Page
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()

  } else {
    // 404 Page
    res.writeHead(404, {'content-type':'text/html'})
    res.write('<h1>Page Not Found</h1>')
    res.end()

  }
})

server.listen(5000)