const http = require('http');
const PORT = 3000;

const requestListener = (req, res) => {
  if (req.method === 'GET' && req.url === '/mensagem') {
    const payload = { mensagem: 'Olá, esta é sua API sem dependências!' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
