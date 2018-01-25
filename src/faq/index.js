let questions = require('./questions');

const MAIN = window;

let delay = (duration = 100) => new Promise(resolve => setTimeout(() => resolve(), duration));

module.exports = {
  data: () => ({
    questions,
  }),

  methods: {
    async doScroll(ref) {
     this.$refs[ref][0].scrollIntoView({ behavior: 'smooth' });
    },
  },
};