const { createApp } = Vue

createApp({
    data(){
         return{
               EventArr: [],
               eventFilt: [],
               check: []
         }
    },
    created(){

         fetch("https://mindhub-xj03.onrender.com/api/amazing")
         .then(response => response.json())
         .then(data => {
                this.EventArr = data.events
                let aux = location.search
                let params = new URLSearchParams(aux)
                let id = params.get('id')
                console.log(id)
                this.eventFilt = this.EventArr.find(evento => evento._id == id)
                console.log(this.eventFilt)
         })
         .catch(error => console.log(error))
    },
    methods:{},
    computed:{},
    
}).mount("#app")