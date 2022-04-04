<template>
    <div class="px-20 py-10 bg-grey-500 hover:bg-grey-600 rounded-full shadow-m transition-background">
        <span class="typo-caption text-white">{{ caption }}</span>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        caption: {
            type: String,
            required: true,
        },
    },
}
</script>
