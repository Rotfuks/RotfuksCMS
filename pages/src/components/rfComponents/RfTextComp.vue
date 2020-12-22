<template>
  <div class="rf-text">
    <h3>{{ text.title }}</h3>
    <vue-simple-markdown :source="text.getMarkuptext()"></vue-simple-markdown>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import RfTextComponent from '@/models/rfComponents/rfTextComponent';

  @Component({})
  export default class RfTextComp extends Vue {
    @Prop({required: true})
    public text!: RfTextComponent;
  }
</script>
<style scoped>
</style>
