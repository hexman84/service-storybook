<template lang="pug">
    input(class="input" :class="{'-disabled':dataDisabled, '-backcolor':dataBackcolor}" :placeholder="dataPlaceholder")
</template>

<script lang="ts">
import './input.styl'

import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    props: {
            dataDisabled: {
                type: Boolean,
                default: false
            },
            dataBackcolor: {
                type: Boolean,
                default:false
            },
            dataPlaceholder:{
                type: String,
                default: ''
            }
    }
})
</script>