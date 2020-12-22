<template>
  <div class="rf-image">
    <b-img fluid thumbnail :src="image.src" :title="image.title"
           :alt="image.alttext" :rounded="image.rounded?'circle':true"></b-img>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import rfImageComponent from '@/models/rfComponents/rfImageComponent';

  @Component
  export default class RfImageComp extends Vue {
  @Prop({required: true})
  public image!: rfImageComponent;
  }
</script>
<style scoped>
</style>
