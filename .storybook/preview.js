import { configure } from '@storybook/vue'

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// import your custom components
import Button from '@/components/button/button.vue'

// register your custom components
Vue.component('sbutton', Button);


function loadStories() {
    // you can require as many stories as you need
    require('../src/components');
}
configure(loadStories, module);