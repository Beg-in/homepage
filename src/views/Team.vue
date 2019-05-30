<template lang="pug">
main
  .frow-container
    .site-section
      .frow.column-start
        h2
          | Meet Our Core Team
    .people
      .frow
        .col-sm-1-2.col-md-1-3(v-for="member in team")
          .person
            .frow.column-center
              img(:src="member.img")
              .card-title
                | {{`${member.firstName} ${member.lastName}`}}
              .card-description
                .frow
                  h6
                    | {{member.title}}
                  | {{member.description}}
  ContactFooter
</template>
<script>
import ContactFooter from '@/components/ContactFooter';
import { team } from '../data/team';
export default {
  components: {
    ContactFooter,
  },
  data() {
    return {
      team,
    };
  },
};
</script>
<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.hero
  height: 100px
  // background: url("./green-vine.jpg")
  background-color: $primary-color
  color: #fff
  text-shadow: 1px 1px 1px #777

.green-shade
  height: 10px
  background-color: $primary-color
  align-items: center
  justify-content: center
  position: relative

.people
  margin: 20px 20px

.person
  margin: 10px 12px 30px

  .card-title
    color: #000
    max-width: 400px
    padding-top: 15px

  .card-description
    font-weight: 300
    font-size: 15px
    padding-bottom: 20px
    line-height: 22px

  img
    max-width: 170px
    border-radius: 20%
    margin-bottom: 11px

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
