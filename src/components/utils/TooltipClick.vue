<template>
    <component
        :is="component"
        class="tooltip-click-container relative flex-center"
        @click="startCountdown"
        v-on="$listeners"
    >
        <slot />
        <UtilsTooltip
            :is-active="isVisible"
            :position="tooltipPosition"
        >
            <slot name="tooltip" />
        </UtilsTooltip>
    </component>
</template>

<script>
export default {
    props: {
        component: {
            type: [Object, String],
            default: 'button',
        },
        duration: {
            type: Number,
            default: 500,
        },
        tooltipPosition: {
            type: String,
            default: 'top',
        },
    },
    data() {
        return {
            isVisible: false,
            timeOut: null,
        }
    },
    methods: {
        startCountdown() {
            this.isVisible = true

            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => { this.isVisible = false }, this.duration)
        },
    },
}
</script>
