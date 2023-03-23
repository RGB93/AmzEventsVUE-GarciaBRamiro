const { createApp } = Vue

createApp({
    data(){
         return{
              EventArr: [],
              nameInput: '',
              eventFilt: [],
              CategFil: [],
              check: []
         }
    },
    created(){

         fetch("https://mindhub-xj03.onrender.com/api/amazing")
         .then(response => response.json())
         .then(data => {    
              this.EventArr = data.events
              this.UpChecks(this.EventArr)
              this.eventFilt = this.EventArr
         })
         .catch(error => console.log(error))
    },
    methods:{
     UpChecks(array){
          let categorias=[]
          let CategFil = []
          for (categoria of array){
              categorias.push(categoria.category);
          }
          CategFil = categorias.filter((cat, indice) => {
              return categorias.indexOf(cat) === indice;
          })
          this.CategFil = CategFil
          this.filter()
      },

     filter (){
          this.eventFilt = this.EventArr.filter( evento => {
           return (this.check.includes(evento.category) || this.check.length === 0) && evento.name.toLowerCase().includes(this.nameInput.toLowerCase())
          })
      }
    },
    computed:{},
    
}).mount("#app")
