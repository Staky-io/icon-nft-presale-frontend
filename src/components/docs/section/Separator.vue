<template>
    <DocsSection title="<UtilsSeparator />">
        <div
            v-for="(style, j) in styles"
            :key="`style-vertical-${j}`"
            class="grid-col"
        >
            Hello
            <UtilsSeparator
                is-vertical
                :margin-x="10"
                :color="style.color"
                :thickness="style.thickness"
            />
            world!
        </div>
        <div
            v-for="(style, j) in styles"
            :key="`style-horizontal-${j}`"
        >
            Hello
            <UtilsSeparator
                :margin-y="10"
                :color="style.color"
                :thickness="style.thickness"
            />
            world!
        </div>
    </DocsSection>
</template>

<script>
export default {
    data() {
        return {
            styles: [
                { thickness: 1, color: 'primary-100' },
                { thickness: 2, color: 'primary' },
                { thickness: 4, color: 'primary-500' },
                { thickness: 8, color: 'primary-700' },
            ],
        }
    },
}
</script>
