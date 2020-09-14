<template lang="pug"> 
  div
    button(@click="onClick(index)" v-for="(item,index) in items" class="button" :class="{'-pressed':item.pressed}" :key="item.id") Ок
</template>

<script lang="ts">

import Vue from 'vue'    
import  VueCompositionApi,{ defineComponent,reactive } from '@vue/composition-api'
Vue.use(VueCompositionApi);

export default defineComponent ({
  setup () {
    const items = reactive([
      {pressed:false, id: 1},
      {pressed:false, id: 2},
      {pressed:false, id: 3},
    ]);

    const onClick = function (index) {
      items[index].pressed=!items[index].pressed
    }
    
    return {
      onClick,
      items
    }
  }
})
</script>

<style>
.button {
  background:white;
}
.button.-pressed {
  background:black;
}
</style>