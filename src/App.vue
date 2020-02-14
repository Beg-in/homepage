<style lang="sass">
@forward "node_modules/frow/frow"
@use "src/assets/sass/variables" as *
// @use "src/assets/sass/global-setup" as *
// @use "src/assets/sass/animations" as *
// @use "src/assets/sass/backgrounds" as *
// @use "src/assets/sass/global" as *
// @use "node_modules/frow/variables" as *
// @use "node_modules/frow/frow" as *

@debug "app: #{$off-black}"

.shadow-light2
  box-shadow: $shadow-light

.logo
  height: auto

  svg
    fill: #fff
    height: 30px

.header
  // background-color: $primary-color
  // height: $header-height
  padding: 0 20px
  position: fixed
  width: 100%
  z-index: 4

  .nav
    font-size: 20px

    a
      color: #fff
      text-decoration: none
      text-align: center
      margin-left: 25px

      &:hover, &:active, &:focus
        font-weight: bold

      &::after
        box-sizing: border-box
        display: block
        content: attr(title)
        font-weight: bold
        height: 1px
        color: transparent
        overflow: hidden
        visibility: hidden

/* XS */
@media (max-width: 767px)
  .header .nav a
    font-size: 16px
    margin-left: 15px


.header-shadow
  // height: $header-height
  position: fixed
  width: 100%
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 2px 10px rgba(0, 0, 0, 0.28)
  z-index: 2

main
  display: block
  // padding-top: $header-height

.footer

  .logo
    svg
      fill: $off-black
      margin-bottom: 10px
  a
    margin: 0 10px

  .github
    margin-top: 32px

    svg
      margin-top: 5px
      width: 48px
      fill: $off-black

  .copyright
    margin-top: 32px
</style>

<template lang="pug">
#main.height-100
  .header
    .frow.height-100
      .col-xs-1-4.height-100
        .frow.justify-start.items-center.height-100
          router-link.logo(to="/")
            logoSvg
      .col-xs-3-4.height-100
        .nav.height-100.shadow-light
          .frow.justify-end.items-center.height-100
            router-link(to="/case-studies", title="Case Studies") Case Studies
            // router-link(to="slate", title="Slate") Slate
            router-link(to="/team", title="Our Team") Our Team
            // router-link(to="faq", title="FAQ") FAQ
            router-link(to="/contact", title="Contact") Contact
  .header-shadow
  transition
    router-view
  .footer.site-section
    .frow.column-center
      .col-md-1-3
        .frow.column-center
          .logo
            router-link(to="/")
              .width-auto
                logoSvg
          .nav
            .frow.items-center.height-100
              // router-link(to="our-work", title="Our Work") Our Work
              router-link(to="/case-studies", title="Case Studies") Case Studies
              router-link(to="/team", title="Our Team") Our Team
              // router-link(to="faq", title="FAQ") FAQ
              router-link(to="/contact", title="Contact") Contact
          .github
            .frow.column-center
              p
                | Don't forget to check out our work on:
              a(href="https://github.com/beg-in" target="_blank")
                githubSvg
          .copyright
            p
              | &copy; {{new Date().getFullYear()}}, Begin, LLC
</template>

<script>
import logoSvg from '@/assets/svgs/logo.svg';
import githubSvg from '@/assets/svgs/github-logo.svg';
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Begin',
    // all titles will be injected into this template
    titleTemplate: '%s | Begin',
  },
  components: {
    logoSvg,
    githubSvg,
  },
};
</script>
