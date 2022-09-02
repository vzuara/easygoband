<template>
  <v-card elevation="0">
    <h2>Method</h2>
    <div>
      <MashTempMethod :data="methods.mash_temp" v-if="methods.mash_temp" />
    </div>
    <div class="my-5">
      <FermentationMethod
        :data="methods.fermentation"
        v-if="methods.fermentation"
      />
    </div>
    <TwistMethod :data="methods.twist" v-if="methods.twist" />
  </v-card>
</template>

<script>
import MashTempMethod from './methods/MashTempMethod.vue';
import FermentationMethod from './methods/FermentationMethod.vue';
import TwistMethod from './methods/TwistMethod.vue';

export default {
  name: 'Method',
  components: {
    MashTempMethod,
    FermentationMethod,
    TwistMethod,
  },
  props: {
    methods: {
      type: Object,
      require: true,
    },
  },
};
</script>
