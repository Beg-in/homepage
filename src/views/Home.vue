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
          h3 Begin is a web application and hybrid development agency for technology companies who need scalable, resource conscious software.
  .were-good.site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          h5
            | there are a lot of dev agencies out there but
          h2
            | We believe we're different because:
      .service-box-parent
        .frow.gutters
          .col-md-4-10
            .service-box.card-shadow
              .frow.column-center
                diagnoseSvg
                h5
                  | Diagnosis First Approach
                p
                  | When presented with a problem to solve, we work tirelessly to diagnose the root causes before proposing a solution. We don't simply say "yes", resulting in the right solution for you and your business.
          .col-md-1-10
            .frow.centered
               span.plus
                | &
          .col-md-4-10
            .service-box.card-shadow
              .frow.column-center
                batterySvg
                h5
                  | Extensive Network
                p
                  | We have spent years developing a network of talented, trustworthy developers so that we are uniquely positioned to address a need for more horesepower or alternative skillsets.
          .frow
            router-link.begin-button2.white-background(to="contact", title="Contact", type="button") Start a project
  .testimonials.green-site-section
    .frow-container.height-100
      .frow.centered-column.height-100
        .title
          .frow.row-center
            h2
              | Kind words
        .testimonial-parent-box.width-100
          .frow.gutters
            .col-md-1-3
              .testimonial-box
                .frow.row-center
                  .client-logo.govflex-box
                    .frow.centered
                      .govflex-logo
                        .frow.centered
                          img(:src='clients.Govflex.logo')
                .frow.row-start
                  quoteSvg
                  p {{ clients.Govflex.testimonial }}
                  p Dwayne Robinson, COO, GovFlex
                .five-stars
                  .frow
                    starSvg
                    starSvg
                    starSvg
                    starSvg
                    starSvg
            .col-md-1-3
              .testimonial-box
                .frow.row-center
                  .client-logo.chaser-box
                    .frow.centered
                      .chaser-logo
                        .frow.centered
                          chaserLogo
                .frow.row-start
                  quoteSvg
                  p {{ clients.chaser.testimonial }}
                  p Ashton Asherian, CEO, Chaser
                .five-stars
                  .frow
                    starSvg
                    starSvg
                    starSvg
                    starSvg
                    starSvg
            .col-md-1-3
              .testimonial-box
                .frow.row-center
                  .client-logo.qikpix-box
                    .frow.centered
                      .qikpix-logo
                        .frow.centered
                          qikpixLogo
                .frow.row-start
                  quoteSvg
                  p {{ clients.qikpix.testimonial }}
                  p Jarek Hamilton, CEO, QikPix
                .five-stars
                  .frow
                    starSvg
                    starSvg
                    starSvg
                    starSvg
                    starSvg

      .frow
        a.begin-button2.clutch-button(href="https://clutch.co/profile/begin" target="_blank" type="button")
          | Read our verified reviews on
          img(src="@/assets/images/clutch2.png")
  .featured-case-study
    .frow-container.height-100
        .frow.centered-column.height-100
          .title
            .frow.row-center
              h2
                | Featured Case Study
    .case-study
      .frow-container.height-100
        .frow.column-center
          .frow.row-start.justify-around.width-100.gutters
            .col-md-1-2.col-sm-1-1
              .frow
                .case-study-thumb
                  router-link( :to="clients.chaser.link" :title="clients.chaser.title")
                    img.shadow-light(:src="clients.chaser.blogThumb")
            .col-md-1-2.col-sm-1-1
              .card-description
                .card-title
                  h3
                    router-link( :to="clients.chaser.link" :title="clients.chaser.title") {{ clients.chaser.clientName }}
                h5 {{ clients.chaser.header }}
                p {{ clients.chaser.description }}
                router-link( :to="clients.chaser.link" :title="clients.chaser.title") 
                  p 
                    strong
                      | Read More
    .frow
      router-link.begin-button2.white-background(to="case-studies", title="Case Studies", type="button") Read our Case Studies
  .team.green-site-section
    .frow-container.height-100
      .frow.row-start
        .col-md-1-1
          .frow.centered-column.height-100
            .title
              h2
                | Meet our core team
            .team-pic
              img(src="@/assets/images/team-pic-ivy.jpg")
              .names#Cody.wow.animated.bounceIn(data-wow-delay="2s")
                | Cody
                arrowSvg
              .names#Johnmark.wow.animated.bounceIn(data-wow-delay="2.2s")
                | Johnmark
                arrowSvg
              .names#Brandon.wow.animated.bounceIn(data-wow-delay="2.4s")
                | Brandon
                arrowSvg
            .statement
              h3 The Begin team is comprised of talented tech entrepreneurs and experienced freelancers who set out to provide better solutions than what was currently on the market. The Begin team believes in building transparent, long-term relationships with every client and partner.
            .frow
              router-link.begin-button2(to="/team", title="Team", type="button") About the team
  ContactFooter
</template>
<script>
import { clients } from '../data/clients';
import vueLogo from '@/assets/svgs/vue.svg';
import nodeLogo from '@/assets/svgs/nodejs.svg';
import awsLogo from '@/assets/svgs/aws.svg';
import djangoLogo from '@/assets/svgs/django.svg';
import cordovaLogo from '@/assets/svgs/cordova.svg';
import frowLogo from '@/assets/svgs/frow.svg';
import pwaSvg from '@/assets/svgs/pwa.svg';
import chaserLogo from '@/assets/svgs/chaser-logo.svg';
import diagnoseSvg from '@/assets/svgs/diagnose.svg';
import batterySvg from '@/assets/svgs/battery.svg';
import arrowSvg from '@/assets/svgs/arrow.svg';
import starSvg from '@/assets/svgs/star.svg';
import quoteSvg from '@/assets/svgs/quotes.svg';
import qikpixLogo from '@/assets/svgs/qikpix-logo.svg';
// import ogImage from '@/assets/images/chaser-casestudy-thumb.png';

import ContactFooter from '@/components/ContactFooter';
export default {
  metaInfo: {
    title: 'Begin',
    // override the parent template and just use the above title only
    titleTemplate: null,
    meta: [
      { property: 'og:title', content: 'Begin', vmid: 'og:title' },
      // { property: 'og:image', content: ogImage, vmid: 'og:image' },
      {
        property: 'og:description',
        content: 'Begin progressive web apps and product development',
        vmid: 'og:description',
      },
      { property: 'og:url', content: '//beg.in/home', vmid: 'og:url' },
    ],
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
    chaserLogo,
    diagnoseSvg,
    batterySvg,
    arrowSvg,
    starSvg,
    quoteSvg,
    qikpixLogo,
  },
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
  height: 700px
  background-color: $primary-color
  background: $hero-bg
  background-attachment: fixed
  background-size: cover
  /* background by SVGBackgrounds.com */
  color: #fff
  text-shadow: 1px 1px 1px #777
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))


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
  h3
    background-color: $beige
    border-radius: 5px
    box-shadow: 0 5px 20px 0 rgba(32, 32, 32, 0.12)
    padding: 32px

.were-good
  text-align: center
  // background-color: $light-background

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
      width: auto
      height: 100px
      margin-bottom: 15px

.featured-case-study
  padding: 50px 0

.team
  padding: 90px 0
  clip-path: polygon(0 0, 100% calc(0% + 5vw), 100% 100%, 0 100%)
  background: $cogs-bg
  background-color: $green
  background-attachment: fixed

  .statement h3
    background-color: inherit
    border-radius: 0
    box-shadow: none

.team-pic
  position: relative
  img
    max-width: 800px
    width: 100%
    margin-bottom: 0px
    box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.38)
    border-radius: 5px
  .names
    position: absolute
    color: #fff
    z-index: 10
    font-size: 24px
    font-family: 'Indie Flower', cursive

    &#Cody
      top: 9%
      left: 16%
      svg
        position: absolute
        left: 20px
        width: 40px
    &#Johnmark
      top: 12%
      left: 40%
      svg
        position: absolute
        left: 10px
        width: 45px
        top: 30px
        transform: rotateZ(19deg)
    &#Brandon
      top: 8%
      left: 77%
      svg
        position: absolute
        left: 10px
        width: 40px
        top: 30px
        transform: rotateZ(19deg)
        transform: rotateY(-180deg)



// .tech-box
//   margin-bottom: 55px
//   text-align: center
//   svg
//     width: auto
//     height: 100px
//     max-width: 170px;
//     margin-bottom: 19px
//   h5
//     font-weight: 500
//   .frow-logo
//     fill: #339BE8

.service-box
  padding: 32px 32px
  box-shadow: 0 5px 20px 0 rgba(32,32,32,.12)
  background-color: $beige
  border-radius: 5px
  margin-bottom: 45px

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

.testimonials
  background: $texture-bg
  background-color: $green
  background-attachment: fixed
  clip-path: polygon(0 0, 100% calc(0% + 5vw), 100% calc(100% - 5vw), 0 100%)
  padding: 120px 0


#home .testimonial-box p
  font-size: 17px
  line-height: 26px

.testimonial-box
  padding: 46px 28px 36px 28px
  background-color: $beige
  border-radius: 5px
  box-shadow: 0 5px 20px 0 rgba(32, 32, 32, 0.12)
  position: relative
  margin: 10px 20px
  color: #333
  text-align: left
  min-height: 335px

  svg
    height: 27px
    color: $primary-color
    fill: $primary-color

  .five-stars
    svg
      height: 21px
      padding: 0 3px
      path
        fill: $primary-color
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
    &.chaser-box
      background-color: #ff4067
    .chaser-logo
      svg
        fill: #fff
    &.govflex-box
      background-color: #fff
    &.qikpix-box
      background-color: #1a1a1a
      svg
        width: 160px

.clutch-button
  width: 350px
  padding: 10px 30px
  background-color: #fff
  img
    width: 90px
    margin-top: 8px

@media screen and (max-width: 767px)
  .statement h3
    font-size: 23px
    line-height: 36px
    padding: 20px

  .team
    padding: 80px 0

  .team-pic
    .names
      font-size: 21px
      &#Cody
        top: 6%
        left: 9%
        svg
          position: absolute
          left: 22px
          top: 22px
          width: 28px
      &#Johnmark
        top: 5%
        left: 35%
        svg
          position: absolute
          left: 16px
          width: 27px
          top: 26px
          transform: rotateZ(19deg)
      &#Brandon
        top: 5%
        left: 77%
        svg
          position: absolute
          left: 11px
          width: 36px
          top: 22px
          transform: rotateZ(19deg)
          transform: rotateY(-180deg)
  .tech-box
    svg
      height: 44px

  .testimonials
    padding: 50px 0
  .testimonial-box
    margin: 10px 20px 46px
</style>
