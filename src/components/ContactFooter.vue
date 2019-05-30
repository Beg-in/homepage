<template lang="pug">
.footer-cta.site-section
  .frow-container.height-100
    .frow.centered-column.height-100
      .title
        .frow.row-center
          h2
            | We'd love to hear from you!
      .frow
          p
            | Let's chat about your project, product, or venture.
      .frow
        router-link.begin-button(to="contact", title="Contact", type="button") Say Hello!
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
@import @/assets/styles/variables.sass
.footer-cta
  background-color: $primary-color
  color: #fff

  p
    color: #fff
</style>
