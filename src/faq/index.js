let questions = require('./questions');

module.exports = {
  components: {
    contactFooter: require('../contact-footer/vue.pug'),
  },

  data: () => ({
    questions,
  }),

  methods: {
    async doScroll(ref) {
     this.$refs[ref][0].scrollIntoView({ behavior: 'smooth' });
    },
  },
};