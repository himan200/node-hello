const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Node</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5, #acb6e5);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
        }
        p {
          color: #555;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #74ebd5;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background-color: #acb6e5;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello Node!</h1>
        <p>Welcome to your styled Node.js server.</p>
        <button onclick="alert('You clicked me!')">Click Me</button>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
