<template>
    <header class="sticky top-0 z-100 bg-white shadow-m py-16">
        <Container class="grid-col gap-24 justify-between items-center">
            <nuxt-link :to="{ name: 'index' }">
                Logo
            </nuxt-link>
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
    </header>
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
    @apply p-10 text-grey-600 transition-color duration-100;

    &:hover {
        @apply text-grey-900;
    }
}
</style>
