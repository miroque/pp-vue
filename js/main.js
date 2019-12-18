Vue.component('pp-fio', {
  props: ['first','last','middle'],
  template: `
  <div>
  <div><h2>{{first}} {{last}}</h2></div>
  <div><h4>{{middle}}</h4></div>
  </div>
  `
})

Vue.component('pp-avatar', {
  props: ['source'],
  template: `<div><img v-bind:src="source"></img></div>`
})

  var app = new Vue({
    el: '#app',
    template: `
    <div>
      <pp-avatar source="https://dummyimage.com/136x136/e0e0e0.png" />
      <pp-fio first="Aleksander" last="Panov" middle="Vladimirovich" />
    </div>
    `,
    data: {
      title: 'Personal Profile'
    }
  })