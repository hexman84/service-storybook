<template lang="pug">
    button(class="b-button" :class="{'-disabled':dataDisabled, '-blue':dataBlue, '-red':dataRed }")
        span
            slot Test
</template>

<script lang="ts">
import './button.styl'

import { defineComponent } from '@vue/composition-api'

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
        }
    }
})
</script>
