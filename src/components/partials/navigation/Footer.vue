<template>
    <footer class="py-16 text-white bg-black">
        <Container class="grid-col gap-24 justify-between items-center">
            <div class="grid-col gap-12 items-baseline">
                <nuxt-link :to="{ name: 'index' }">
                    Logo
                </nuxt-link>
                <p class="text-12">
                    © {{ new Date().getFullYear() }} - All rights reserved
                </p>
            </div>
            <div class="grid-col gap-16 items-center">
                <nuxt-link
                    v-for="(link, i) in links"
                    :key="`link-${i}`"
                    :to="link.to"
                    :class="$style.link"
                >
                    {{ link.name }}
                </nuxt-link>
            </div>
        </Container>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Documentation', to: { name: 'documentation' } },
            ],
        }
    },
}
</script>

<style lang="stylus" module>
.link {
    @apply p-10 text-grey-400 transition-color duration-100;

    &:hover {
        @apply text-grey-100;
    }
}
</style>
