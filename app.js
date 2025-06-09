#!/usr/bin/env node

const readline = require("readline");
const NotesManager = require("./notesManager");
const { CommandEmitter } = require("./events");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Notes Application - Type "help" for commands');

// Handle user commands
rl.on("line", (input) => {
  const [command, ...args] = input.trim().split(" ");
  CommandEmitter.emit(command, ...args);
});

// Help command
CommandEmitter.on("help", () => {
  console.log(`
Available Commands:
  create <folder/file> <name> - Create a folder or file
  write <file> <content>     - Write content to a file
  read <file>                - Read content from a file
  append <file> <content>    - Append content to a file
  delete <file>              - Delete a file
  remove <folder>            - Remove a folder
  path                       - Show current working directory
  server                     - Start HTTP server
  exit                       - Exit the application
  `);
});

// Exit command
CommandEmitter.on("exit", () => {
  console.log("Goodbye!");
  process.exit(0);
});

// Handle unknown commands
CommandEmitter.on("unknown", (command) => {
  console.log(
    `Unknown command: ${command}. Type "help" for available commands.`
  );
});
