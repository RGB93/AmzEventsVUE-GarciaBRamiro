const { createApp } = Vue

createApp({
    data(){
         return{
            EventArr: [],
            nameInput: '',
            eventFilt: [],
            CategFil: [],
            check: [],
            PresentDay: ''  
         }
    },
    created(){

         fetch("https://mindhub-xj03.onrender.com/api/amazing")
         .then(response => response.json())
         .then(data => {
              this.PresentDay = Date.parse(data.currentDate)
              this.EventArr = data.events.filter(el => Date.parse(el.date) < this.PresentDay)
              this.eventFilt = this.EventArr
              this.crearChecks(this.EventArr)

         })
         .catch(error => console.log(error))
    },
    methods:{
     crearChecks(array){
          let categorias=[]
          let CategFil = []
          for (categoria of array){
              categorias.push(categoria.category);
          }
          CategFil = categorias.filter((cat, indice) => {
              return categorias.indexOf(cat) === indice;
          })
          this.CategFil = CategFil
      },
      filtro (){
          this.eventFilt = this.EventArr.filter( evento => {
           return (this.check.includes(evento.category) || this.check.length === 0) && evento.name.toLowerCase().includes(this.nameInput.toLowerCase())
          })
      }
    },
    computed:{}
}).mount("#app")