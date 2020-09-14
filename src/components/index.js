import { storiesOf } from '@storybook/vue'
import { withDesign } from 'storybook-addon-designs'
import Button from '@/components/button/button.vue'
import markdown from '@/components/button/button.md';
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters } from '@storybook/client-api';
import sButton from '@/components/secondary-button/secondary-button.vue'
import tButton from '@/components/tertiary-button/tertiary-button.vue'
import mButton from '@/components/menu-button/menu-button.vue' 
import combutton from '@/components/comboboxes/comboboxes.vue' 
import myinput from '@/components/input/input.vue'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// button
storiesOf('Controls|Button/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
    template: '<mybutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</mybutton>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  }).add('size', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
    template: '<div><mybutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</mybutton> <mybutton dataSize="-l">{{ButtonText}}</mybutton> <mybutton dataSize="-n">{{ButtonText}}</mybutton> <mybutton dataSize="-m">{{ButtonText}}</mybutton><mybutton dataSize="-s">{{ButtonText}}</mybutton></div>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })

  //secondary-button
  storiesOf('Controls|Secondary Button/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'кнопка')
        }
    },
    components: {smbutton: sButton},
    template: '<smbutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</smbutton>'
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  }).add('size', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'Hello')
        }   
    },
    components: {smbutton: sButton},
    template: '<div><smbutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</smbutton> <smbutton dataSize="-n">{{ButtonText}}</smbutton> <smbutton dataSize="-m">{{ButtonText}}</smbutton><smbutton dataSize="-s">{{ButtonText}}</smbutton></div>'
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })




  // tertiary-button
  storiesOf('Controls|Tertiary Button/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'Поддержка')
        }
    },
    components: {terbutton: tButton},
    template: '<terbutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</terbutton>',
  }),
  
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  }).add('size', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'Поддержка')
        }
    },
    components: {terbutton: tButton},
    template: '<div><terbutton :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</terbutton>  <terbutton dataSize="-n">{{ButtonText}}</terbutton> <terbutton dataSize="-m">{{ButtonText}}</terbutton><terbutton dataSize="-s">{{ButtonText}}</terbutton></div>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })



// menu-button
  storiesOf('Controls|Menu Button/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'Основное')
        }
    },
    components: {menbutton: mButton},
    template: '<menbutton :dataFocused="dataFocused" :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</menbutton>',
  }),
  
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  }).add('size', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
        dataDisabled: {
          default: boolean('Disabled', false)
        },
        dataBlue: {
          default: boolean('Blue', false)
        },
        dataRed: {
          default: boolean('Red', false)
        },
        ButtonTextOne: {
          default: text('Текст', 'Обзор')
        },
        ButtonTextTwo: { 
          default: text('Текст2', 'Отчеты')
        },
        ButtonTextThree: { 
          default: text('Текст3', 'Настройки')
        },
    },
    
    components: {menbutton: mButton},
    template: '<div><menbutton :dataFocused="dataFocused" :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonTextOne}}</menbutton>  <menbutton dataSize="-n" dataIcon="airplay">{{ButtonTextTwo}}</menbutton> <menbutton dataSize="-m">{{ButtonTextThree}}</menbutton><menbutton dataSize="-s">{{ButtonTextThree}}</menbutton></div>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })


  
// group-buttons
  storiesOf('Controls|Group Buttons/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
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
          default: text('Текст', 'Не выбрана')
        }
    },
    components: {menbutton: mButton},
    template: '<menbutton :dataFocused="dataFocused" :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonText}}</menbutton>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  }).add('size', () =>  ({
    props: {
        dataHover :{
          default: boolean('Hover', false)
        }, 
        dataActive :{
          default: boolean('Active', false)
        },
        dataDisabled: {
          default: boolean('Disabled', false)
        },
        dataBlue: {
          default: boolean('Blue', false)
        },
        dataRed: {
          default: boolean('Red', false)
        },
        ButtonTextOne: {
          default: text('Текст', 'Наведена')
        },
        ButtonTextTwo: { 
          default: text('Текст', 'Нажата')
        },
        ButtonTextThree: { 
          default: text('Текст', 'Фокус')
        },
        ButtonTextFour: { 
          default: text('Текст', 'Не активна')
        },        
    },
    components: {menbutton: mButton},
    template: '<div><menbutton :dataFocused="dataFocused" :dataDisabled="dataDisabled" :dataBlue="dataBlue" :dataRed="dataRed" :dataActive="dataActive"  :dataHover="dataHover" >{{ButtonTextOne}}</menbutton>  <menbutton >{{ButtonTextTwo}}</menbutton> <menbutton >{{ButtonTextThree}}</menbutton><menbutton >{{ButtonTextFour}}</menbutton></div>',
  }),
  { 
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook-Web',
    },
    notes: markdown
  })

// comboboxes
  storiesOf('Controls|Comboboxes/desktop', module)
  .addDecorator(withDesign)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () => ({
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
    scomponents: {mycombo: combutton},
    template: '<mycombo :dataArray="[\'Гостиница Космос\', \'Отель Стэнли\', \'Отель Гранд-Будапешт\']"> </mycombo> ',
  }),
  {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook..',
  },
  notes: markdown
}).add('size', () => ({
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
    components: {mycombo: combutton},
    template: '<div style="display:flex;justify-content:space-between;"><mycombo :dataDisabled="dataDisabled" :dataArray="[\'Гостиница Космос\', \'Отель Стэнли\', \'Отель Гранд-Будапешт\']" :dataSize="-l"></mycombo> <mycombo :dataArray="[\'Гостиница Космос\', \'Отель Стэнли\', \'Отель Гранд-Будапешт\']" ></mycombo><mycombo :dataArray="[\'Гостиница Космос\', \'Отель Стэнли\', \'Отель Гранд-Будапешт\']" dataSize="-m"> </mycombo> <mycombo :dataArray="[\'Гостиница Космос\', \'Отель Стэнли\', \'Отель Гранд-Будапешт\']" dataSize="-s"> </mycombo></div>',
}),
{
  design: {
  type: 'figma',
  url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook..',
  },
  notes: markdown
})


//input
storiesOf('Controls|Inputs/desktop', module)
.addDecorator(withDesign)
.addDecorator(withA11y)
.addDecorator(withKnobs)
.add('default', () => ({
  props: {
      dataDisabled: {
          default: boolean('Disabled', false)
      },
      dataBackcolor: {
          default: boolean('Backcolor',false)
      },
      dataPlaceholder: {
        default:text('Placeholder','Введен')
      }
  },
  components: {inputy: myinput},
  template: '<inputy :dataDisabled="dataDisabled" :dataBackcolor="dataBackcolor" :dataPlaceholder="dataPlaceholder"></inputy>'
}), 
{
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/z3236T7KvjIz1ULgKwBxju/ServiceBook..',
  }
})