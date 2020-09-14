<template lang="pug">
    div(class="combobox" :class="[{'-disabled':dataDisabled},dataSize]" )
        button(@click='onClick($event)' class="combobox__button" @blur='fullstop')
            span {{namehostel}}
            span(class="combobox__button-feather" v-html="iconSvg()")
        div(class='combobox__foot')
            ul(v-if="flag" class='combobox__foot-sim')
                li(v-for='(item,index) in items' :key="item.id" class="combobox__foot-combox" @mousedown='poisk(index)') {{item.title}}
</template>

<script lang="ts">
interface itemInterface{
    id : number;
    title : string;
}

import './comboboxes.styl'
import { defineComponent, computed, ref } from '@vue/composition-api'
import { icons } from 'feather-icons'


export default defineComponent({
    props: {
        dataDisabled: {
            type: Boolean,
            default: false
        },
        dataBlue: {
            type: Boolean,
            default: false
        },
        dataRed: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        dataArray: {
            type: Array,
            default: () => []
        },
        dataid : {
            type: Number,
            default: 1
        },
        dataIcon: {
            type: String,
            default:''
        },
        dataSize: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const flag = ref(false)
        const iconSvg = function () {
            return icons['chevron-down'].toSvg({ width: 20, height: 20 })
        }
        const vTitle = computed(() => '-' + props.title + '-');
        const items = ref<Array <itemInterface>>([
        {
            id : 1,
            title : 'Отель Белладжио'
        },
        {
            id : 2,
            title: 'Гостиница Космос'
        },
        {
            id : 3,
            title:'Отель Стэнли'
        },
        {
            id : 4,
            title:'Отель Гранд-Будапешт'
        }
        ]);
        const onClick = function(event){
            flag.value = !flag.value
            if(flag.value === true)
                event.target.focus()
            }
        const fullstop = function(){
            flag.value = false
        }
        const nameid = ref(0);
        const namehostel = computed<String>(() => {
        const item:itemInterface | undefined = items.value.find(item=>item.id === nameid.value)
        if (typeof item === 'undefined') return 'Не выбрана'
            return item.title
        })
        const poisk = function(index){
            nameid.value = items.value[index].id
            flag.value = false
        }
    return {
        vTitle,
        onClick,
        items,
        iconSvg,
        flag,
        namehostel,
        poisk,
        fullstop
        };
    }
})
</script>