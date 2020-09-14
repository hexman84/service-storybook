<template lang="pug">
    button(class="men-button" :class="[{'-disabled':dataDisabled, '-blue':dataBlue, '-red':dataRed,'-active': dataActive,'-hover':dataHover,'-focus':dataFocused},dataSize]")
        span(class="data-feather" v-html="iconSvg()")
        span
            slot Test
</template>

<script lang="ts">
import './menu-button.styl'
import { defineComponent } from '@vue/composition-api'
import { icons } from 'feather-icons'
export default defineComponent({
    props: {
        dataFocused: {
            type: Boolean,
            default: false
        },
        dataHover: {
            type: Boolean,
            default: false
        },
        dataActive: {
            type: Boolean,
            default: false
        },
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
        dataSize: {
            type: String,
            default: ''
        },
        dataIcon: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        const iconSvg = function () {
            if (typeof props.dataIcon === 'undefined' || props.dataIcon === '') return
            return icons[props.dataIcon].toSvg({ width: 18, height: 18 })
        }
        return { iconSvg }
    }
})

</script>
