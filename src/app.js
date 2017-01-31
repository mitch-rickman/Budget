import Vue from 'vue';

const app = new Vue({
  el: '#budget',
  data: {
    name: "",
    value: "",
    categories: [
      {
        name: 'gas',
        value: 30,
      },
      {
        name: 'car payment',
        value: 100,
      }
    ]
  },
  template: '<li>{{category.name}} : ${{category.value}}</li>',
  watch: {
    categories: (value) => {

    }
  },
  methods: {
    addCategory: () => {
      this.categories.push({
        name: this.name,
        value: this.value
      });
    }
  },
});
