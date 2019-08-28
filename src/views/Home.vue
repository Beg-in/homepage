<template lang="pug">
main#home
  .header-shadow-cover
  .hero
    .frow-container.height-100
      .frow.column-center.justify-center.height-100
        .hero-content
          h2
            | No-headache software development.
          h4
            | Reliable & transparent technology consulting.
  .statement.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
          | Begin is a web application and hybrid development agency for technology companies who need scalable, resource conscious software.        
  .were-good.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          h5
            | there's a lot of dev agencies out there but
          h2
            | We believe we're different because:
      .service-box-parent
        .frow.gutters
          .col-md-4-10
            .service-box.card-shadow
              .frow.column-center
                cbox1Svg
                h5
                  | Diagnosis first approach
                p
                  | When presented with a problem to solve, we work tirelessly to diagnose the root causes before proposing a solution. We don't simply say "yes", resulting in the right solution for you and your business.
          .col-md-1-10
            .frow.centered
               span.plus
                | &
          .col-md-4-10
            .service-box.card-shadow
              .frow.column-center
                brainSvg
                h5
                  | Freelance Network
                p
                  | We have spent years developing a network of talented, trustworthy developers so that we are uniquely positioned to address a need for more horesepower or alternative skillsets. 
          .frow
            router-link.begin-button(to="contact", title="Contact", type="button") Start a project
  .team.site-section
    .frow-container.height-100
      .frow.row-start
        .col-md-1-1
          .frow.centered-column.height-100
            .title
              h2
                | Meet our team
            .team-pic
              img(src="@/assets/images/temp-bg-photo.jpg")
            .statement
              | We believe in a transparent, long-term relationships with everyone we have the opportunity to work with. We are all entrepreneurs and understand what it takes to stand up and scale software at all stages.
  .fav-tech.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          .frow.row-center
            h2
              | Our favorite tech
        .tech-parent-box.width-100
          .frow.gutters
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  vueLogo
                  h5
                    | Vue.js
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  nodeLogo
                  h5
                    | Node.js
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  .frow-logo
                    frowLogo
                  h5
                    | Frow.css
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  cordovaLogo
                  h5
                    | Cordova
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  awsLogo
                  h5
                    | Amazon Web Services
            .col-md-1-3.col-sm-1-2
              .tech-box
                .frow.column-center
                  djangoLogo
                  h5
                    | Django
  .testimonials.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          .frow.row-center
            h2
              | Our favorite people
        .testimonial-parent-box.width-100
          .frow.gutters
            .col-md-1-2.col-sm-1-1
              .testimonial-box
                .frow.row-center
                  .client-logo.chaser-box
                    .frow.centered
                      .chaser-logo
                        .frow.centered
                          chaserLogo
                .frow.row-start
                  | This is an example testimonial. Begin is such a breath of fresh-air from the standard dev agency experience. They we'ren't just focused on the money or time. They would suggest things that gave them less work or we're cheaper because they believed it was better for us. I highly recommend working with them if you want an honest, transparent relationship with your developer team. We <3 Begin
            .col-md-1-2.col-sm-1-1
              .testimonial-box
                .frow.row-center
                  .client-logo
                    .frow.centered
                      .govflex-logo
                        .frow.centered
                          img(src="@/assets/images/GovFlex_Logo.png")
                .frow.row-start
                  | This is an example testimonial. Begin is such a breath of fresh-air from the standard dev agency experience. They we'ren't just focused on the money or time. They would suggest things that gave them less work or we're cheaper because they believed it was better for us. I highly recommend working with them if you want an honest, transparent relationship with your developer team. We <3 Begin
  ContactFooter
</template>
<script>
import { team } from '../data/team';
import cubeSvg from '@/assets/svgs/cube.svg';
import statsSvg from '@/assets/svgs/stats.svg';
import slateSvg from '@/assets/svgs/slate.svg';
import vaultSvg from '@/assets/svgs/vault.svg';
import multiSvg from '@/assets/svgs/multi.svg';
import craneSvg from '@/assets/svgs/crane.svg';
import robotSvg from '@/assets/svgs/robot.svg';
import cbox1Svg from '@/assets/svgs/creative-box.svg';
import cbox2Svg from '@/assets/svgs/creative-box-2.svg';
import brainSvg from '@/assets/svgs/brainstorm.svg';
import vueLogo from '@/assets/svgs/vue.svg';
import nodeLogo from '@/assets/svgs/nodejs.svg';
import awsLogo from '@/assets/svgs/aws.svg';
import djangoLogo from '@/assets/svgs/django.svg';
import cordovaLogo from '@/assets/svgs/cordova.svg';
import frowLogo from '@/assets/svgs/frow.svg';
import chaserLogo from '@/assets/svgs/chaser-logo.svg';

import ContactFooter from '@/components/ContactFooter';
export default {
  components: {
    ContactFooter,
    cubeSvg,
    statsSvg,
    slateSvg,
    vaultSvg,
    multiSvg,
    craneSvg,
    robotSvg,
    cbox1Svg,
    cbox2Svg,
    brainSvg,
    vueLogo,
    nodeLogo,
    awsLogo,
    djangoLogo,
    cordovaLogo,
    frowLogo,
    chaserLogo,
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

.header-shadow-cover
  top: $header-height - 2px
  position: absolute
  width: 100%
  background-color: $primary-color
  height: 13px
  z-index: 3

.hero
  height: 700px
  background-color: $primary-color
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%2312d8b7' width='11' height='11'/%3E%3Crect fill='%2314d7b6' x='10' width='11' height='11'/%3E%3Crect fill='%2316d6b6' y='10' width='11' height='11'/%3E%3Crect fill='%2318d5b5' x='20' width='11' height='11'/%3E%3Crect fill='%2319d4b5' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%231bd3b4' y='20' width='11' height='11'/%3E%3Crect fill='%231cd2b3' x='30' width='11' height='11'/%3E%3Crect fill='%231ed1b3' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231fd0b2' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2320cfb2' y='30' width='11' height='11'/%3E%3Crect fill='%2321ceb1' x='40' width='11' height='11'/%3E%3Crect fill='%2323cdb0' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2324ccb0' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2325cbaf' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2326caaf' y='40' width='11' height='11'/%3E%3Crect fill='%2327c9ae' x='50' width='11' height='11'/%3E%3Crect fill='%2328c7ad' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2329c6ad' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%232ac5ac' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%232bc4ab' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%232cc3ab' y='50' width='11' height='11'/%3E%3Crect fill='%232dc2aa' x='60' width='11' height='11'/%3E%3Crect fill='%232dc1aa' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%232ec0a9' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%232fbfa8' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%2330bea8' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%2331bda7' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%2331bca6' x='70' width='11' height='11'/%3E%3Crect fill='%2332bba6' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2333baa5' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2334b9a4' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2334b8a4' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2335b7a3' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2336b6a2' x='80' width='11' height='11'/%3E%3Crect fill='%2336b5a2' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%2337b4a1' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2337b3a0' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2338b2a0' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2339b19f' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2339b09e' x='90' width='11' height='11'/%3E%3Crect fill='%233aaf9e' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%233aae9d' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%233bad9c' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%233cac9b' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%233cab9b' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%233daa9a' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%233da999' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%233ea899' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%233ea798' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%233fa697' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%233fa597' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2340a496' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2340a395' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%2340a294' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2341a194' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2341a093' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23429f92' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23429e91' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23439d91' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23439c90' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")
  background-attachment: fixed
  background-size: cover
  /* background by SVGBackgrounds.com */
  color: #fff
  text-shadow: 1px 1px 1px #777

.hero-content
  max-width: 1240px
  text-align: center
  width: 100%

  h2
    margin-bottom: 30px

.statement
  text-align: center
  font-size: 34px
  line-height: 60px

.were-good
  text-align: center
  background-color: $light-background

  .plus
    font-size: 82px
    font-weight: 500
    color: $primary-color
    margin: 34px 0 44px
    display: none

#home
  p
    font-size: 19px
    line-height: 28px

  .service-box
    svg
      width: 138px
      height: auto
      margin-bottom: 15px

.team.site-section .title
  text-align: left

.team-pic
  img
    max-width: 1000px
    height: 500px
    width: 100%
    margin-bottom: 40px

.tech-box
  margin-bottom: 55px
  svg
    width: auto
    height: 108px
    margin-bottom: 19px
  h5
    font-weight: 500
  .frow-logo
    fill: #339BE8

.service-box
  padding: 32px 32px
  box-shadow: 0 5px 20px 0 rgba(32,32,32,.12)
  background-color: #fff

  p
    margin: 10px 0 28px 0
    text-align: center

  h5
    font-weight: 500

.team-box
  img
    width: 140px
    border-radius: 20%
    margin-bottom: 11px

.testimonial-box
  padding: 46px 28px 36px 28px
  background-color: #fff
  border-radius: 5px
  box-shadow: 0 5px 20px 0 rgba(32, 32, 32, 0.12)
  font-size: 20px
  line-height: 31px
  position: relative
  margin: 10px 20px
  .client-logo
    width: 165px
    height: 65px
    border-radius: 10px
    box-shadow: 0 5px 20px 0 rgba(32,32,32,.12)
    position: absolute
    top: -29px
    background-color: #fff

    svg
      width: 130px
      height: auto
      padding: 10px
    img
      width: 130px
      height: auto
      padding: 2px
    .chaser-logo
      svg
        fill: #fff
  .client-logo.chaser-box
    background-color: #ff4067



.slate
  background-color: $light-background

  .slate-logo
    svg
      margin-right: 8px
      margin-bottom: 0
      width: 38px

@media screen and (max-width: 767px)
  .team-box
    img
      width: 100px
    h6
      margin-bottom: 8px
</style>
