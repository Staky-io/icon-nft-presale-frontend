<template>
    <button
        class="rounded-15 bg-grey-200 px-20 select-none overflow-hidden text-left shadow-s transition-all duration-200"
        :class="`py-${py}`"
        :style="{ height: `${height}px` }"
        @click="isOpened = !isOpened"
    >
        <div
            ref="question"
            class="relative grid-col gap-12 justify-between items-center"
        >
            <div class="text-grey-800 typo-product-list-2">
                {{ question }}
            </div>
            <div class="text-primary">
                <transition
                    name="morph-rotate"
                    mode="out-in"
                >
                    <UtilsIcon
                        v-if="isOpened"
                        name="MathMinus"
                        color="current"
                        :width="12"
                    />
                    <UtilsIcon
                        v-else
                        name="MathPlus"
                        color="current"
                        :width="12"
                    />
                </transition>
            </div>
        </div>
        <div
            ref="answer"
            class="pt-16 typo-body-1"
        >
            <UtilsLinksExtractor
                :class="isOpened ? 'opacity-100' : 'opacity-0'"
                class="transition-opacity duration-100"
                :text="answer"
                color="grey-600"
            />
        </div>
    </button>
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        py: {
            type: Number,
            default: 16,
        },
    },
    data() {
        return {
            isOpened: false,
            size: {
                question: 0,
                answer: 0,
            },
        }
    },
    computed: {
        height() {
            return this.size.question + this.py * 2 + (this.isOpened ? this.size.answer : 0)
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.calculateSize)
            this.calculateSize()
        })
    },
    destroyed() {
        window.removeEventListener('resize', this.calculateSize)
    },
    methods: {
        calculateSize() {
            this.size.question = this.$refs.question.getBoundingClientRect().height
            this.size.answer = this.$refs.answer.getBoundingClientRect().height
        },
    },
}
</script>
