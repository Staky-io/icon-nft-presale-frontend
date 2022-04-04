<template>
    <main>
        <h1>
            {{ error.statusCode }}
        </h1>
        <h2>
            {{ error.message }}
        </h2>
        <nuxt-link
            v-if="error.statusCode === 404"
            to="/"
        >
            Homepage
        </nuxt-link>
    </main>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>
