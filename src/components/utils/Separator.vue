<template>
    <div :class="[`mx-${marginX}`, `my-${marginY}`, { 'h-full': isVertical }]">
        <div :class="[isVertical ? `w-${thickness} h-full` : `h-${thickness} w-full`, `bg-${color}`]" />
    </div>
</template>

<script>
export default {
    props: {
        isVertical: {
            type: Boolean,
            default: false,
        },
        marginX: {
            type: [Number, String],
            default: 0,
        },
        marginY: {
            type: [Number, String],
            default: 0,
        },
        color: {
            type: String,
            default: 'grey-400',
        },
        thickness: {
            type: [Number, String],
            default: 1,
        },
    },
}
</script>
