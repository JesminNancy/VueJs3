var app = Vue.createApp({
  data(){
    return {
      count: 0,
      baseMultiple:5,
      name: 'Jesmin'
    }
  },
  methods: {
    getCurrentTime(){
      let ct = new Date()
      return new Date()
    },
        increment(num){
          this.count += num
        },
        decrement(num){
          this.count -= num
        },
        add(a,b,c){
          return a+b+c
        },
        multipy(num){
          return num * this.baseMultiple
        },
        changeName(){
          this.name = 'Radifa'
        }
      },
});
app.mount('#app');