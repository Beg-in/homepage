let { team } = require('../data/team');

module.exports = {
  components: {
    pictureSvg: require('../home/images/cube.svg'),
  },

  data: () => ({
    team,
  }),
};

