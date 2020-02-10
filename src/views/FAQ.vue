<style lang="sass" scoped>
@import @/assets/styles/variables.sass
.faq-section
  margin-bottom: 72px

label.faq-question
  color: $off-black

.faq-question
  padding: 7px 13px

  &:hover
    background-color: rgba(18, 216, 183, 0.11)
    border-radius: 2px

  input
    display: none

.faq-quick-title-menu-title
  h4
    padding-bottom: 8px
    border-bottom: solid 2px rgba(38, 38, 38, 0.09)
    margin-bottom: 32px

.faq-quick-title-menu
  margin-bottom: 45px

  .faq-title
    border-bottom: none
    font-size: 22px

  .faq-section
    margin-bottom: 0

.faq-title
  border-bottom: solid 2px rgba(38, 38, 38, 0.09)
  margin-bottom: 32px
  padding-bottom: 8px

  h4
    border-bottom: none

  .faq-section
    margin-bottom: 0px

.faq-answer
  overflow: hidden
  max-height: 0
  transition: max-height $animate-speed

  input:checked ~ &
    max-height: 200px
    display: block


@media screen and (min-width: 1048px)
  .faq-quick-title-menu
    position: sticky
    top: $header-height

@media screen and (max-width: 767px)
  .faq-answer
    input:checked ~ &
      max-height: 450px
</style>

<template lang="pug">
main
  .frow-container
    .site-section
      .frow.column-start
        h2
          | FAQs
        p
          | Find some answers to common questions about Begin
    .frow.row-start.items-start.gutters
      .col-md-1-4.faq-quick-title-menu
        .faq-quick-title-menu-title
          h4
            | Categories
        .faq-section(v-for="section, title in questions")
          h4.faq-title.clickable(@click="doScroll(title)") {{title}}
      .col-md-3-4
        .faq-section(v-for="section, title in questions")
          h4.faq-title(:ref="title") {{title}}
          span(v-for="answer, question in section")
            label.faq-question
              h5
                | {{question}}
              input(type="checkbox")
              .faq-answer
                p
                  | {{answer}}
  ContactFooter
</template>
<script>
import ContactFooter from '@/components/ContactFooter';

import questions from '../data/questions';
export default {
  components: {
    ContactFooter,
  },
  data() {
    return {
      questions,
    };
  },
  methods: {
    async doScroll(ref) {
      this.$refs[ref][0].scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
