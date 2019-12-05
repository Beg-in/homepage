<template lang="pug">
main
  .frow-container.height-100
    .case-study
      .frow
        h1
          | {{ client.blogTitle }}
      .frow.justify-center
        img.shadow-light(v-if="!client.videoEmbed" :src="client.blogThumb")
      .youtube-wrapper(v-if="client.videoEmbed")
        iframe(width='100%', height='100%', :src='`https://www.youtube.com/embed/${client.videoEmbed}?rel=0&color=white`', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
      .frow.row-start.items-start.gutters
        .col-md-2-3
          .blog-body
            h2 Back Story
            p GovFlex is a marketplace that connects service providers or freelance consultants with government contractors and agencies. It is the “Upwork” for the Government sector. The US government uses several different web databases to post grant and RFP information. Service providers and freelancers use GovFlex to find and manage Government contracts.
            p  One of the key things we learned through this process was how resource intensive pursuing a federal opportunity can be. GovFlex engaged with Begin to develop an analytics and suggestion tool for service providers and freelancers to gain insight on their probability of winning a given federal opportunity. GovFlex calls this tool “Opportunity Analytics.” The GovFlex team provided a business logic algorithm developed and tasked us with the programmatic implementation of it.
            h2 Our solution
            p The GovFlex algorithm provided needed data from seven different data sources to produce it’s analytics scores to users. For all seven data sources, we proceeded to both connect  with APIs or scrape data where an API was lacking. Then worked with our UI designer to build a beautiful interface for the report.
            .quote
              .frow.row-start
                .quote-icon
                  quoteSvg
                .quote-body
                  p Internally, it’s reliable. Some of the underlying data we use comes from systems we don’t control. They deserve credit for looking into calculations that weren’t working properly and writing specialized code that will alert us if these external systems suddenly stop working. Their code is protecting us from the repercussions of that. We feel very confident in the work they did. - Dwayne Robinson, COO, GovFlex
            br
            p November 30, 2019
        .col-md-1-3
          .blog-sidebar
            .sidebar-block
              h3 Project Details:
              p Industry: Government Software
              p Services: Application Development, UI Design
              p Duration: 3 months
              p Max team size: 4 developers
            .sidebar-block
              h3 Technology Used:
              .frow.row-start
                djangoSvg
                vueLogo
                awsSvg
            .sidebar-block
              h3 Website:
              a(:href="client.website" target="_blank") {{ client.website }}
            //- .sidebar-block
            //-   h3 Verified Clutch Review:
            //-   a(:href="client.clutchReview" :title="client.clutchReview" target="_blank") View on Clutch.co
  ContactFooter
</template>
<script>
import { clients } from '../../data/clients';
import ContactFooter from '@/components/ContactFooter';
import vueLogo from '@/assets/svgs/vue.svg';
import awsSvg from '@/assets/svgs/aws.svg';
import djangoSvg from '@/assets/svgs/django.svg';
import quoteSvg from '@/assets/svgs/quotes.svg';

export default {
  components: {
    ContactFooter,
    vueLogo,
    awsSvg,
    quoteSvg,
    djangoSvg,
  },
  data() {
    return {
      client: clients.Govflex,
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

.quote
  background-color: $beige
  padding: 15px 20px 5px
  svg
    height: 40px
    color: $primary-color
    fill: $primary-color
.blog-sidebar
  // background-color:
  // box-shadow: $beige-box-shadow
  padding: 15px
  margin-top: 50px
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
    border-radius: 5px

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
