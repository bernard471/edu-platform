import WebSocket from 'ws';
import { spawn } from 'child_process';
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws) => {
  const shell = spawn('bash');

  shell.stdout.on('data', (data) => {
    ws.send(data.toString());
  });

  shell.stderr.on('data', (data) => {
    ws.send(`Error: ${data}`);
  });

  shell.on('close', (code) => {
    ws.send(`Shell closed with code ${code}`);
    ws.close();
  });

  ws.on('message', (message) => {
    shell.stdin.write(message);
  });

  ws.on('close', () => {
    shell.kill();
  });
});

console.log('WebSocket server is running on ws://localhost:3001');
