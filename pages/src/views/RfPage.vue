<template>
  <div class="rf-page" :id="page.getName()">
    <b-row class="section" v-for="section in page.getSections()" :key="section.getName()">
      <b-col cols="12" :sm="12/section.getColumns()"
             v-for="component in section.getComponents()" :key="component.getName()">
        <template v-if="component.getType() === types.TextComponent">
          <rf-text :text="component"></rf-text>
        </template>
        <template v-if="component.getType() === types.ImageComponent">
          <rf-image :image="component"></rf-image>
        </template>
      </b-col>
    </b-row>

  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Page from '@/models/page';
  import {RfComponentType} from '@/models/rfComponents/rfComponent';
  import rfImage from '@/components/rfComponents/RfImageComp.vue';
  import rfText from '@/components/rfComponents/RfTextComp.vue';

  @Component({
    components: {
      rfImage,
      rfText,
    },
  })
  export default class RfPage extends Vue {
    @Prop({required: true})
    private page!: Page;
    private types = RfComponentType;
  }
</script>
