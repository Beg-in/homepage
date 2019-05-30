<template lang="pug">
main
  .contact.site-section
    .frow.column-center
      svg(:src="talkSvg")
      h2.title
        | Contact Us
      .col-md-1-2
        p
          | Feel free to get in touch with us using the contact information below! We'd love to hear from you.
    .contact-infoi
      .frow.height-100
        .frow.centered-column
          a(href="mailto:info@beg.in") info@beg.in
          a(href="tel:847-204-4261") 847-204-4261
</template>
<script>
import talkSvg from '@/assets/svgs/talk.svg';
export default {
  data() {
    return {
      talkSvg,
    };
  },
};
</script>
<style lang="sass" scoped>
@import @/assets/styles/variables.sass
.contact.site-section
  background-color: $light-background

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

svg
  height: 100%
  width: 150px
</style>
