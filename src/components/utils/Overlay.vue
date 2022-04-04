<template>
    <transition name="fade">
        <section
            class="fixed position-full flex-center z-90 pointer-events-none"
            :class="[
                `bg-${color}`,
                `bg-opacity-${opacity}`,
            ]"
        />
    </transition>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'black',
        },
        opacity: {
            type: Number,
            default: 50,
        },
    },
}
</script>
