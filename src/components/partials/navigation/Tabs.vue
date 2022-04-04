<template>
    <div
        class="relative grid justify-start justify-items-start content-start items-start text-left whitespace-no-wrap"
        :class="isVertical ? 'grid-flow-row' : 'grid-flow-col'"
    >
        <div
            ref="currentBar"
            class="absolute transform w-0 h-32 rounded-10 opacity-10 bg-primary transition-all duration-250 pointer-events-none"
        />
        <button
            v-for="(button, i) in buttons"
            :key="`button-${i}`"
            ref="buttons"
            v-scroll-to="{
                el: button.target,
                offset: -40,
            }"
            class="typo-UI hover:text-primary px-12 py-12 transition-color duration-250"
            :class="currentIndex === i ? 'text-primary' : 'text-grey-700'"
            @click="updateIndex(i)"
        >
            {{ button.label }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        isVertical: {
            type: Boolean,
            default: false,
        },
        buttons: {
            type: Array,
            required: true,
        },
        currentIndex: {
            type: Number,
            required: true,
        },
    },
    watch: {
        currentIndex(value) {
            this.setCurrentBar(value)
        },
    },
    mounted() {
        this.setCurrentBar(this.currentIndex)
    },
    methods: {
        setCurrentBar(index) {
            const { clientWidth, offsetLeft, clientHeight, offsetTop } = this.$refs.buttons[index]
            const { clientHeight: barHeight } = this.$refs.currentBar
            this.$refs.currentBar.style.width = `${clientWidth}px`
            this.$refs.currentBar.style.top = `${offsetTop - (barHeight - clientHeight) / 2}px`
            this.$refs.currentBar.style.left = `${offsetLeft}px`
        },
        updateIndex(index) {
            this.$emit('update', index)
        },
    },
}
</script>
