<template lang="pug">
main
  .frow-container.height-100
    .frow.column-center.case-study
      .frow
        h1
          | {{ clients.Govflex.blogTitle }}
      .frow.justify-center
        img.shadow-light(:src="clients.Govflex.picture")
        //- {{ clients.Govflex.videoEmbed }}
      .frow.row-start.items-start.gutters
        .col-md-2-3
          .blog-body
            p Govflex is a startup innovating the event creation, management, ticketing, and attendance industry. To date, the event management industry is fragmented and prone  to cheating and fraud. As a customer, you have to manage your tickets: Did you have them sent to your email, ask for will-call, print them on paper? As an organizer, where do you post the event online, how do you ensure people are not using duplicate tickets, how do you manage re-entry, etc? Govflex has an answer to the fragmentation.
            p  On Govflex, as a customer, your profile contains a unique Govflex ID which acts as your ticket to all events. When scanned by event security, Govflex’s unique system can tell if your ID should be admitted, if it’s been copied, screenshotted, if the attendee is re-entering the event, their gender, etc. This information leads to incredibly safe, and secure events for everyone. As an organizer, all event management and ticketing is handled in one place.
            p Begin engaged with Govflex to develop a web application focused on their event-organizing user and an android app focused on event-attending users. The goal of the web-app was an easy-to-use dashboard for event creation, invitations, ticket processing, etc. The goal for the android app was to accompany their existing native iOS app. Completing these two projects would enable Govflex to address both sides of their market.
            h2 Our solution
            p With early-stage products, our goal at Begin is to determine the most resource-effective yet scalable strategy. Using a cross-platform development approach addresses this goal harmoniously by enabling us more-or-less  write one code-base for both projects. As with all/most? hybrid approaches, the web application comes first. We chose to develop the web application using Vue.js and worked closely with Govflex’s CTO, Marshall, to integrate with their firebase backend.. When it became appropriate to start on android 
            p The entire project took about 3 months ?and cost $X dollars?. Cross-platform is the key reason achieving that timeline and budget was possible. We believe taking an alternative, native development strategy, would have taken twice as long and been twice as expensive.
            br
            p November 30, 2019
        .col-md-1-3
          .blog-sidebar
            .sidebar-block
              h3 Project Details:
              p Industry: Government Software
              p Services: Application Development
              p Duration: 3 months
              p Max team size: 3 developers, 1 Designer
            .sidebar-block
              h3 Technology Used:
              .frow.row-start
                vueLogo
                pwaSvg
            .sidebar-block
              h3 Website:
              a(:href="clients.Govflex.website" :title="clients.Govflex.website" target="_blank") govflex.com
            .sidebar-block
              h3 Verified Clutch Review:
              a(:href="clients.Govflex.clutchReview" :title="clients.Govflex.clutchReview" target="_blank") View on Clutch.co
  ContactFooter
</template>
<script>
import { clients } from '../../data/clients';
import ContactFooter from '@/components/ContactFooter';
import vueLogo from '@/assets/svgs/vue.svg';
import pwaSvg from '@/assets/svgs/pwa.svg';

export default {
  components: {
    ContactFooter,
    vueLogo,
    pwaSvg,
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

.blog-sidebar
  .sidebar-block
    margin: 0 0 45px
  svg
    height: 25px
    margin-right: 15px

.case-study
  width: 100%

  h1
    margin: 70px 0
    font-size: 40px
    text-align: center
  h2
    font-size: 37px
    margin: 50px 0 10px
  h3 
    font-size: 22px
    margin-bottom: 12px

  img
    width: 100%
    margin: 0px 0px 30px

  &.odd
    background: $light-background

    .case-study-title ~ .frow
      flex-direction: row-reverse

  .case-study-title
    color: #000
    max-width: 400px
    padding-top: 15px
    padding-bottom: 20px

  .blog-body
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
