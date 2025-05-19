const { exec } = require('child_process');
const http = require('http');
const fs = require('fs');

// Configure port for Replit environment
const PORT = process.env.PORT || 5000;

console.log(`Starting Next.js on port ${PORT}`);

// We'll start Next.js in development mode on the specified port
const nextProcess = exec(`npx next dev -p ${PORT}`, (error) => {
  if (error) {
    console.error(`Error starting Next.js: ${error}`);
    process.exit(1);
  }
});

// Pipe stdout and stderr to the current process
nextProcess.stdout.pipe(process.stdout);
nextProcess.stderr.pipe(process.stderr);

// Create a simple HTTP server to maintain the process and handle Replit health checks
const server = http.createServer((req, res) => {
  // This just responds to any requests that Next.js doesn't handle
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Next.js server is running');
});

// Start listening on the port
server.listen(PORT, () => {
  console.log(`HTTP server ready on port ${PORT}`);
});

// Handle termination signals properly
process.on('SIGINT', () => {
  console.log('Shutting down Next.js server...');
  nextProcess.kill();
  server.close();
  process.exit(0);
});