    <template lang="pug">
    button(class="b-button" :class="[{'-disabled':dataDisabled, '-blue':dataBlue, '-red':dataRed,'-active': dataActive,'-hover':dataHover},dataSize]")
        span
            slot Test
</template>

<script lang="ts">
import './button.styl'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        dataHover:{
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
        }
    }
})
</script>
