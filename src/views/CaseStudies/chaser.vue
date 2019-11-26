<template lang="pug">
main
  .hero
    .frow-container.height-100
      .frow
        h2
          | Our Work
  .frow.column-center.projects
    .frow.column-center
      .card-title
        h2
          | {{ client.title }}
      .frow.row-start.width-100
        img.shadow-light(:src="client.picture")
        .card-description
          | {{ client.description }}
</template>
<script>
import { clients } from '../data/clients';

export default {
  data() {
    return {
      clients,
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
