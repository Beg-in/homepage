<template lang="pug">
main
  .header-shadow-cover
  .hero
    .frow-container
      .frow.column-start
          h2 Featured Work
          .col-md-2-3
            h5 Begin is a web app and cross-platform development agency for companies that need scalable, resource-conscious technology.
            h5 The Begin team has developed a unique customer-centered process. This process leads our clients to outperform their expectations and put their new tech-based solutions to work faster than what they ever thought was possible.
  .frow.column-center.projects
    .project(v-for="(client, index) in clients" :class="{'odd': !(index % 2 == 0)}")
        .frow-container.height-100
          .frow.column-center
            .card-title
              h2
                router-link( :to="client.link" :title="client.title") {{ client.clientName }}
            .frow.row-start.justify-around.nowrap.width-100
              router-link( :to="client.link" :title="client.title")
                img.shadow-light(:src="client.picture")
              .card-description
                h5 {{ client.header }}
                p {{ client.description }}
                router-link( :to="client.link" :title="client.title") 
                  p 
                    strong
                      | Read More
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
  background-color: $primary-color
  color: #fff
  text-shadow: 1px 1px 1px #777
  text-align: left
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  padding: 50px 0 110px;
  p
    color: #fff
    font-size: 20px

.green-shade
  height: 10px
  background-color: $primary-color
  align-items: center
  justify-content: center
  position: relative

.projects
  // margin: 20px 20px

.project
  margin: 0px 60px 30px
  width: 100%

  img
    width: 500px
    margin: 30px 50px

  &.odd
    // background: $light-background

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
