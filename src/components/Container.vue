<template>
    <component
        :is="component"
        class="container mx-auto px-20"
    >
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        component: {
            type: [Object, String],
            default: 'div',
        },
    },
    mounted() {
        this.$emit('mount')
    },
}
</script>
