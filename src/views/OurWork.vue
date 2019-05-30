<template lang="pug">
main
  .hero
    .frow-container.height-100
      .frow
        h2
          | Our Work
  .frow.column-center.projects
    .project(v-for="(project, index) in projects" :class="{'odd': !(index % 2 == 0)}")
      .frow.column-center
        .card-title
          h2
            | {{ project.title }}
        .frow.row-start.width-100
          img.shadow-light(:src="project.picture")
          .card-description
            | {{ project.description }}
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'WDS',
          picture: require('@/assets/images/wds.png'),
          description: 'Health client',
        },
        {
          title: 'QikPix',
          picture: require('@/assets/images/qikpix.png'),
          description: 'Photography agency',
        },
        {
          title: 'Bit MALLL',
          description: '$$$ ;)',
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>
@import @/assets/styles/variables.sass
.hero
  height: 100px
  background-color: $primary-color
  color: #fff
  text-shadow: 1px 1px 1px #777

.green-shade
  height: 10px
  background-color: $primary-color
  align-items: center
  justify-content: center
  position: relative

.projects
  // margin: 20px 20px

.project
  margin: 30px 60px
  width: 100%

  img
    width: 500px
    margin: 30px 50px

  &.odd
    background: $light-background

    .card-title ~ .frow
      flex-direction: row-reverse

  .card-title
    color: #000
    max-width: 400px
    padding-top: 15px
    padding-bottom: 20px

  .card-description
    font-weight: 300
    font-size: 14px
    padding-bottom: 20px

.site-section .title
  margin: 0 0 62px 0

  h5
    margin: 24px 0

.service-box
  padding: 0 32px

  svg
    width: 88px
    margin-bottom: 32px
  p
    margin: 36px 0
</style>
