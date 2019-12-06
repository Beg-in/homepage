<template lang="pug">
.footer-cta.green-site-section
  .frow-container.height-100
    .frow.centered-column.height-100
      .frow.row-center
        h2
          | We'd love to hear from you!
      .frow
          p
            | Let's chat about your project, product, or venture.
      .frow
        router-link.begin-button2.white-background(to="/contact", title="Contact", type="button") Say Hello!
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
  background-color: #fff
  color: #333
  padding: 60px 0
  p
    color: #333



</style>
