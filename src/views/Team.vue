<style lang="sass" scoped>
@import @/assets/styles/variables.sass

.hero
  background-color: $primary-color
  // background: $case-study-bg
  background-attachment: fixed
  // background-size: cover
  // /* background by SVGBackgrounds.com */
  color: #fff
  text-shadow: 1px 1px 1px #777
  text-align: left
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  padding: 50px 0 110px;
  p
    color: #fff
    font-size: 20px
  h5
    font-weight: 400

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
  background-color: $beige
  box-shadow: $beige-box-shadow
  padding: 20px
  min-height: 540px
  border-radius: 5px


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
    max-width: 220px
    border-radius: 4px
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

.fav-tech.site-section
  margin-bottom: 0

.tech-box
  margin-bottom: 55px
  text-align: center
  svg
    width: auto
    height: 55px
    max-width: 170px;
    margin-bottom: 19px
  h5
    font-weight: 500
  .frow-logo
    fill: #339BE8
  .pwa-logo
    svg
      height: 40px
      margin-bottom: 34px
</style>

<template lang="pug">
main
  .header-shadow-cover
  .hero
    .frow-container
      .frow.column-start
          h2 Meet The Team
          .col-md-2-3
            h5
              | With the experience and understanding of what is needed to deliver effective and
              | responsive tech solutions for modern businesses, we look forward to helping you
              | create and scale tech that works for your business.
  .people
    .frow
      .col-sm-1-2.col-md-1-4(v-for="member in team")
        .person
          .frow.column-center
            img.shadow-light(:src="member.img")
            .card-title
              | {{`${member.firstName} ${member.lastName}`}}
            .card-description
              .frow
                h6
                  | {{member.title}}
                | {{member.description}}
    .frow
      router-link.begin-button2.white-background(
        to="/case-studies"
        title="Case Studies"
        type="button")
        | Read our Case Studies

  .fav-tech.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          .frow.row-center
            h2 Our favorite tech 
            h5
              | We have experience with many frameworks, languages, and tools, and we would work to
              | select the stack that's most appropriate for your project. Here are a handful we use
              | most often.
        .tech-parent-box.width-100
          .frow.gutters
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  vueLogo
                  h5
                    | Vue.js
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  nodeLogo
                  h5
                    | Node.js
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  .pwa-logo
                    pwaSvg
                  h5
                    | Progressive Web Apps
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  .frow-logo
                    frowLogo
                  h5
                    | Frow.css
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  cordovaLogo
                  h5
                    | Cordova
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  djangoLogo
                  h5
                    | Django
            .col-md-1-4.col-sm-1-2.col-xs-1-3
              .tech-box
                .frow.column-center
                  awsLogo
                  h5
                    | Amazon Web Services
  ContactFooter
</template>

<script>
import ContactFooter from '@/components/ContactFooter';
import { team } from '../data/team';
import vueLogo from '@/assets/svgs/vue.svg';
import nodeLogo from '@/assets/svgs/nodejs.svg';
import awsLogo from '@/assets/svgs/aws.svg';
import djangoLogo from '@/assets/svgs/django.svg';
import cordovaLogo from '@/assets/svgs/cordova.svg';
import frowLogo from '@/assets/svgs/frow.svg';
import pwaSvg from '@/assets/svgs/pwa.svg';

export default {
  metaInfo: {
    title: 'Meet The Team',
  },
  components: {
    ContactFooter,
    vueLogo,
    nodeLogo,
    awsLogo,
    djangoLogo,
    cordovaLogo,
    frowLogo,
    pwaSvg,
  },
  data() {
    return {
      team,
    };
  },
};
</script>
