<template>
    <client-only>
        <code
            :class="$style.code"
            class="w-full h-full p-10 rounded-5 break-words overflow-auto"
        >
            <div v-if="title">
                // {{ title }}
            </div>
            <slot />
            <div v-if="output !== undefined">
                // {{ output }}
            </div>
        </code>
    </client-only>
</template>

<script>
import Vue from 'vue'

import black from './code/span-black.vue'
import blue from './code/span-blue.vue'
import cyan from './code/span-cyan.vue'
import green from './code/span-green.vue'
import magenta from './code/span-magenta.vue'
import orange from './code/span-orange.vue'
import red from './code/span-red.vue'
import white from './code/span-white.vue'
import yellow from './code/span-yellow.vue'

Vue.component('black', black)
Vue.component('blue', blue)
Vue.component('cyan', cyan)
Vue.component('green', green)
Vue.component('magenta', magenta)
Vue.component('orange', orange)
Vue.component('red', red)
Vue.component('white', white)
Vue.component('yellow', yellow)

export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        output: {
            type: [Array, BigInt, Boolean, Number, Object, String],
            default: undefined,
        },
    },
}
</script>

<style lang="stylus" module>
.code {
    background-color: #2a2a2e;
    color: #909090;
}
</style>
