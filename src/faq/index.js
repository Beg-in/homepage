let questions = require('./questions');

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