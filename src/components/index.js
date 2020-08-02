import { storiesOf } from '@storybook/vue'
import { withDesign } from 'storybook-addon-designs'
import Button from '@/components/button/button.vue'
import markdown from '@/components/button/button.md';

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters } from '@storybook/client-api';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});


storiesOf('Controls|Button/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataDisabled: {
            default: boolean('Disabled', false)
        },
        dataBlue: {
            default: boolean('Blue', false)
        },
        dataRed: {
            default: boolean('Red', false)
        },
        ButtonText: {
            default: text('Текст', 'Обычная кнопка')
        }
    },
    components: {mybutton: Button},
    template: '<mybutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed">{{ButtonText}}</mybutton>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })