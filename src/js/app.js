import Vue from 'vue';
require('file?name=../[name].[ext]!../index.html');


Vue.component('envelope', {
  template: '<li>{{name}}: ${{value}}</li>',
  props: ['name', 'value']
});


const app = new Vue({
  el: '#budget',
  data() {
    return {
      name: '',
      value: '',
      envelopes: [
        {
          name: 'gas',
          value: 30,
        },
        {
          name: 'car payment',
          value: 100,
        }
      ]
    }
  },
  methods: {
    addEnvelope: function() {
      this.envelopes.push({
        name: this.name,
        value: this.value
      });
    }
  },
});
