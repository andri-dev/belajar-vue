// Vue Hello

const app = new Vue({
  el: '#app',
  data: {
    newTask: '',
    todolists: [
      { done: true, task: 'Belajar Vuejs di Petani Kode' },
      { done: false, task: 'Siram tanaman di kebun' },
      { done: false, task: 'Beli bibit kopi' },
    ],
  },
  methods: {
    addTask: function () {
      this.todolists.push({ done: false, task: this.newTask });
      this.newTask = '';
    },
  },
});
