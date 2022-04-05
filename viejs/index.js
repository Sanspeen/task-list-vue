const APP_VUE ={
    //DATA: Estado de la información
    data(){
        return{
            titulo:"TASK LIST",
            nombre:"Santiago Franco",
            contador: 0,
            tareas: [],
            tituloTarea: ""
            
        }
    },
    methods:{
        agregarTarea(){
            this.tareas.push(this.tituloTarea)
            console.log(this.tituloTarea)
            this.contador++
        },
        reset(){
            this.contador = 0
            this.tareas.pop()
        },
        generateTasks(){
            for (let index = 0; index < tareas.length; index++) {
                
            }
        }
    }

}
Vue.createApp(APP_VUE).mount("#app")