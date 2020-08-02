import { configure, addDecorator, addParameters } from '@storybook/vue'
// import { withKnobs } from "@storybook/addon-knobs";
// import { withA11y } from '@storybook/addon-a11y';
// import { withDesign } from 'storybook-addon-designs';


/* addParameters({
    options: {
        // theme: themes.light,
        showPanel: true,
        panelPosition: 'bottom',
    },
}); */

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// import your custom components
import Button from '@/components/button/button.vue'

//addDecorator(withKnobs);
// addDecorator(withA11y);
// addDecorator(withDesign);

// register your custom components
Vue.component('sbutton', Button);


function loadStories() {
    // you can require as many stories as you need
    require('../src/components');
}
configure(loadStories, module);