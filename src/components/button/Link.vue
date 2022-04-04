<template>
    <component
        :is="$attrs.to ? 'nuxt-link' : $attrs.href ? 'a' : 'button'"
        :class="[$style.link, `text-${color}`]"
        class="relative inline-block after"
        v-bind="{ ...$attrs, ...$attrs.href && { rel: 'noopener noreferrer', target: 'blank' } }"
        v-on="{ ...!isUnclickable && $listeners }"
    >
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        isUnclickable: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="stylus" module>
.link::after {
    @apply absolute -bottom-2 left-0 right-0 w-full h-1 bg-current transform scale-x-0 origin-right transition-transform duration-200 will-change-transform;
}

.link:hover::after {
    @apply scale-x-100 origin-left;
}
</style>
