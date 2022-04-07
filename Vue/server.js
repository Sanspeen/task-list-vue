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

let misTareas = [
    {nombre: "Tarea 1", estado: false},
    {nombre: "Tarea 2", estado: true},
    {nombre: "Tarea 3", estado: false}
]

io.on("connection", (socket) => {
    console.log("User connected " + socket.id);
    
    socket.emit("tareas-evento", misTareas)
    
    socket.on("agregar-tarea", (data) => {
        misTareas.push(data)
        io.emit("tareas-evento", misTareas)
    })
})


serverHttp.listen(3000, () => {
    console.log("Listening on port 3000");
})
