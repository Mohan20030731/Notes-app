const fs = require("fs");
const path = require("path");
const { CommandEmitter } = require("./events");

// Show current path
CommandEmitter.on("path", () => {
  console.log(`Current path: ${process.cwd()}`);
});

// Create folder or file
CommandEmitter.on("create", (type, name) => {
  if (!type || !name) {
    return console.log("Usage: create <folder/file> <name>");
  }

  try {
    if (type === "folder") {
      if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
        console.log(`Folder "${name}" created successfully.`);
      } else {
        console.log(`Folder "${name}" already exists.`);
      }
    } else if (type === "file") {
      fs.writeFileSync(name, "");
      console.log(`File "${name}" created successfully.`);
    } else {
      console.log('Type must be "folder" or "file"');
    }
  } catch (err) {
    console.error(`Error creating ${type}:`, err.message);
  }
});

// Write to file
CommandEmitter.on("write", (fileName, ...content) => {
  if (!fileName || !content.length) {
    return console.log("Usage: write <file> <content>");
  }

  try {
    fs.writeFileSync(fileName, content.join(" "));
    console.log(`Content written to "${fileName}" successfully.`);
  } catch (err) {
    console.error("Error writing file:", err.message);
  }
});

// Read file
CommandEmitter.on("read", (fileName) => {
  if (!fileName) {
    return console.log("Usage: read <file>");
  }

  try {
    const content = fs.readFileSync(fileName, "utf8");
    console.log(`Content of "${fileName}":\n${content}`);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
});

// Append to file
CommandEmitter.on("append", (fileName, ...content) => {
  if (!fileName || !content.length) {
    return console.log("Usage: append <file> <content>");
  }

  try {
    fs.appendFileSync(fileName, content.join(" ") + "\n");
    console.log(`Content appended to "${fileName}" successfully.`);
  } catch (err) {
    console.error("Error appending to file:", err.message);
  }
});

// Delete file
CommandEmitter.on("delete", (fileName) => {
  if (!fileName) {
    return console.log("Usage: delete <file>");
  }

  try {
    fs.unlinkSync(fileName);
    console.log(`File "${fileName}" deleted successfully.`);
  } catch (err) {
    console.error("Error deleting file:", err.message);
  }
});

// Remove folder
CommandEmitter.on("remove", (folderName) => {
  if (!folderName) {
    return console.log("Usage: remove <folder>");
  }

  try {
    fs.rmdirSync(folderName);
    console.log(`Folder "${folderName}" removed successfully.`);
  } catch (err) {
    console.error("Error removing folder:", err.message);
  }
});

// Export the module
module.exports = {
  createFolder: (name) => CommandEmitter.emit("create", "folder", name),
  createFile: (name) => CommandEmitter.emit("create", "file", name),
  writeFile: (name, content) => CommandEmitter.emit("write", name, content),
  readFile: (name) => CommandEmitter.emit("read", name),
  appendFile: (name, content) => CommandEmitter.emit("append", name, content),
  deleteFile: (name) => CommandEmitter.emit("delete", name),
  removeFolder: (name) => CommandEmitter.emit("remove", name),
  showPath: () => CommandEmitter.emit("path"),
};
