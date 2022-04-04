<template>
    <div class="grid font-inter text-black text-16">
        <PartialsNavigationHeader v-if="hasNavigation" />
        <nuxt />
        <PartialsNavigationFooter v-if="hasNavigation" />
    </div>
</template>

<script>
export default {
    computed: {
        hasNavigation() {
            return ![
                'documentation',
            ].includes(this.$route.name)
        },
    },
}
</script>
