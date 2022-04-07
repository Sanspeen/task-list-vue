import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const url_socket = "http://localhost:3000";

const APP_VUE = {
  beforeMount() {
    this.socket = io(url_socket);
    this.socket.on("tareas-evento", (data) => {
      this.tareas = data;
    });
  },
  
  //DATA: Estado de la información
  data() {
    return {
      titulo: "TASK LIST",
      nombre: "Santiago Franco",
      contador: 0,
      tareas: [],
      tituloTarea: "",
    };
  },
  
  methods: {
    agregarTarea() {
      let tarea = { estado: false };
      tarea.nombre = this.tituloTarea;

      this.socket.emit("agregar-tarea", tarea);

      this.tareas.push(this.tituloTarea);
      console.log(this.tituloTarea);
      this.contador++;
    },
    
    reset() {
      if (this.tareas.length > 0) {
        this.contador--;
        this.tareas.pop();
      }
    },
  },
};
Vue.createApp(APP_VUE).mount("#app");
