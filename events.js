const EventEmitter = require("events");

// Create a custom EventEmitter
class CommandEmitter extends EventEmitter {}

const commandEmitter = new CommandEmitter();

// Handle unknown commands
commandEmitter.on("command", (command, ...args) => {
  if (!commandEmitter.eventNames().includes(command)) {
    commandEmitter.emit("unknown", command);
  }
});

module.exports = {
  CommandEmitter: commandEmitter,
};
