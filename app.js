var app = Vue.createApp({
  data(){
    return {
      msg: "Welcome Vue Js",
      inforLink:{
        name:"Youtube",
        link:"https://www.youtube.com/",
      },
      htmlcode:'<a href="https://www.google.com/">Google</a>',
    }
  }
});
app.mount('#app');