<template>
    <aside
        class="relative l:sticky grid gap-40 s:gap-60 l:gap-20 self-start content-start l:h-screen-h py-20 l:py-40 overflow-hidden"
        :class="`l:top-${top}`"
    >
        <h1
            v-if="title"
            class="typo-h3 overflow-hidden text-ellipsis"
        >
            {{ title }}
        </h1>
        <PartialsNavigationTabs
            is-vertical
            :buttons="anchors"
            :current-index="currentAnchor"
            class="overflow-auto overflow-shadow"
            @update="currentAnchor = $event"
        />
    </aside>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        anchors: {
            type: Array,
            default: () => [],
        },
        top: {
            type: Number,
            default: 0,
        },
        offset: {
            type: Number,
            default: 0.5,
        },
    },
    data() {
        return {
            currentAnchor: 0,
        }
    },
    beforeDestroy() {
        window.removeEventListener('wheel', this.scroll)
        this.$nuxt.$off('SCROLL_TOP')
    },
    mounted() {
        window.addEventListener('wheel', this.scroll)
        this.$nuxt.$on('SCROLL_TOP', () => { this.currentAnchor = 0 })
    },
    methods: {
        scroll() {
            const { scrollY: scroll, innerHeight: height } = window
            const firstAnchorOffset = document.querySelector(this.anchors[0].target).offsetTop
            this.currentAnchor = this.anchors.length - 1 - [...this.anchors]
                .reverse()
                .findIndex((anchor) => {
                    const currentOffset = document.querySelector(anchor.target).offsetTop
                    return currentOffset <= scroll + firstAnchorOffset + height * this.offset
                })
        },
    },
}
</script>
