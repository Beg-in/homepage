let { team } = require('../data/team');

module.exports = {
  components: {
    cubeSvg: require('./images/cube.svg'),
    statsSvg: require('./images/stats.svg'),
    slateSvg: require('./images/slate.svg'),
    vaultSvg: require('./images/vault.svg'),
    multiSvg: require('./images/multi.svg'),
    craneSvg: require('./images/crane.svg'),
    robotSvg: require('./images/robot.svg'),
    cbox1Svg: require('./images/creative-box.svg'),
    cbox2Svg: require('./images/creative-box-2.svg'),
    brainSvg: require('./images/brainstorm.svg'),
  },

  data: () => ({
    team,
  }),
};