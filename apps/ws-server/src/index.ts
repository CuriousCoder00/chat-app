import WebSocket, { WebSocketServer } from "ws";

const cfg = { wsPort: 8080 }; // Define cfg with wsPort property
const ws = new WebSocketServer({ port: cfg.wsPort });

// client connection
ws.on("connection", (socket, req) => {
  console.log(`connection from ${req.socket.remoteAddress}`);

  const originAllowed = req.headers.origin === "http://localhost:3000";
  if (!originAllowed) return socket.close();

  // received message
  socket.on("message", (msg, binary) => {
    // broadcast to all clients
    ws.clients.forEach((client) => {
      client.readyState === WebSocket.OPEN && client.send(msg, { binary });
    });
    ws.emit("message", msg);
  });

  // closed
  socket.on("close", () => {
    console.log(`disconnection from ${req.socket.remoteAddress}`);
  });
});
