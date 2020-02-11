<style lang="sass" scoped>
.contact
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw))
  padding-bottom: 90px

  // .svg-wrapper
  //   width: 260px
  svg
    height: auto
    width: 150px
    padding: 10px

  .title
    margin: 0 0 22px 0

  p
    padding: 15px
    text-align: center

.contact-info
  margin: 20px 0

  a
    display: block
    font-size: 30px
    font-weight: 700
    color: #fff
</style>

<template lang="pug">
main
  .header-shadow-cover
  .contact.green-site-section
    .frow.column-center
      .svg-wrapper
        talkSvg
      h2.title
        | Contact Us
      .col-md-1-1
        h5
          | Feel free to get in touch with us using the contact information below! We'd love to hear
          |  from you.
    .contact-info
      .frow.height-100
        .frow.centered-column
          a(href="mailto:info@beg.in") info@beg.in
          a(href="tel:847-204-4261") 847-204-4261
</template>

<script>
import talkSvg from '@/assets/svgs/talk.svg';
export default {
  metaInfo: {
    title: 'Contact Us',
  },
  components: {
    talkSvg,
  },
};
</script>
