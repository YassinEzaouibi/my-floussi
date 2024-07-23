#!/usr/bin/env node
import { exec } from "child_process";

// Execute the Vite command
const viteProcess = exec("vite");

// Listen for stdout data and print it
viteProcess.stdout.on("data", (data) => {
  console.log(data);
});

// Listen for stderr data and print it
viteProcess.stderr.on("data", (data) => {
  console.error(data);
});

// Handle process exit
viteProcess.on("exit", (code) => {
  console.log(`Vite process exited with code ${code}`);
});
console.log(
  "Hello, your application is now working, use the keyboard to play piano :)))",
);
