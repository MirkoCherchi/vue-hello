const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Benvenuto in Vue Js',
        color: 'coloretitolo'
      }
    }
  }).mount('#app')