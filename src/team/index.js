let { team } = require('../data/team');

module.exports = {
  components: {
    contactFooter: require('../contact-footer/vue.pug'),
    pictureSvg: require('../home/images/cube.svg'),
  },

  data: () => ({
    team,
  }),
};

