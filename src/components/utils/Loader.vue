<template>
    <div
        :class="[$style.loader, `w-${size}`, `h-${size}`, `text-${color}`, `border-${thickness}`]"
        class="rounded-full border-solid border-transparent border-t-current animate-spin will-change-transform"
    />
</template>

<style lang="stylus" module>
.loader {
    animation-timing-function: cubic-bezier(.5, 0, 0, .75);
}
</style>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        size: {
            type: Number,
            default: 24,
        },
        thickness: {
            type: Number,
            default: 1,
        },
    },
}
</script>
