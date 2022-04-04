<template>
    <section class="grid gap-40">
        <div class="grid gap-20">
            <h2 class="typo-h3">
                {{ title }}
            </h2>
            <p
                v-if="subtitle"
                class="typo-body-2"
            >
                {{ subtitle }}
            </p>
        </div>
        <div
            class="
                grid
                gap-10
                grid-cols-1
                s:grid-cols-2
                m:grid-cols-3
                xl:grid-cols-4
                xxl:grid-cols-6
                justify-start
                justify-items-start
                content-start
                items-start
            "
        >
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            default: '',
        },
    },
}
</script>
