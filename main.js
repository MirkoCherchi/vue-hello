const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Benvenuto in Vue Js',
        color: 'coloretitolo',
        immagine: 'https://cdn.sanity.io/images/8edntncj/production/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png'
      }
    }
  }).mount('#app')