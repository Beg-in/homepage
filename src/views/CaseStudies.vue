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

.case-study
  margin: 20px 0

/* Check global.sass for more case study styles */

@media screen and (max-width: 767px)
  .hero
    margin-bottom: 50px
</style>

<template lang="pug">
main
  .header-shadow-cover
  .hero
    .frow-container
      .frow.column-start
          h2 Featured Work
          .col-md-2-3
            h5 The Begin team has developed a unique customer-centered process. This process leads our clients to outperform their expectations and put our solutions to work faster than what they ever thought was possible.
            h5 We'd love your for you check out some of our recent projects below!
  .frow.column-center.projects
    .case-study(v-for="(client, index) in clients" :class="{'odd': !(index % 2 == 0)}")
        .frow-container.height-100
          .frow.column-center
            .frow.row-start.justify-around.width-100.gutters
              .col-md-1-2
                .frow
                  .case-study-thumb
                    router-link( :to="client.link" :title="client.title")
                      //- .blog-thumb-parent
                      //-   h2 Begin Case Study & walkthrough of:
                      //-   img.shadow-dark(:src="client.logo")
                      img.shadow-light(:src="client.blogThumb")
              .col-md-1-2
                .card-description
                  .card-title
                    h3
                      router-link( :to="client.link" :title="client.title") {{ client.clientName }}
                  h5 {{ client.header }}
                  p {{ client.description }}
                  router-link( :to="client.link" :title="client.title") 
                    p 
                      strong
                        | Read More
  ContactFooter
</template>

<script>
import chaserLogo from '@/assets/svgs/chaser-logo.svg';
import { clients } from '../data/clients';
import ContactFooter from '@/components/ContactFooter';

export default {
  components: {
    ContactFooter,
  },
  data() {
    return {
      clients,
    };
  },
};
</script>
