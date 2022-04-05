const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")


const app = express();
const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
    cors: {
      origin: "http://localhost:5500"
    }
});

app.use(cors())

app.get("/", (req, res) => {
    res.send("App de tareas en tiempo real con socket.io")
})

io.on("connection", (socket) => {
    console.log("User connected");
    io.emit("Bienvenido", {"mensaje":"Bienvenido a las tareas alguien se conecto"})
})


serverHttp.listen(3000, () => {
    console.log("Listening on port 3000");
})
