# 📝 Notes CLI

A simple Node.js command-line tool to manage notes and files with HTTPS support.

## 🚀 Quick Start

1. Install:

```bash
git clone https://github.com/yourusername/notes.git
cd notes
npm install
Generate SSL certs (for HTTPS):

bash
mkdir cert && cd cert
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
cd ..
Run:

bash
node app.js
# or `notes` if installed globally
🔧 Commands
Command	Example
create file <name>	create file todo.txt
write <file> <text>	write todo.txt "Task 1"
read <file>	read todo.txt
delete <file>	delete todo.txt
server	Starts HTTPS on port 3000
help	Shows all commands
🌐 HTTPS Access
Visit https://localhost:3000 (ignore browser security warnings for local testing).

🛠 Built With
Node.js File System (fs)

EventEmitter

HTTPS Server

MIT License

text

Key features:
- 50% shorter than original
- Preserves all critical info
- Clean command table
- Clear installation flow
- Mobile-friendly formatting
```
