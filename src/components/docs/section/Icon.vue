<template>
    <DocsSection
        title="<UtilsIcon />"
        subtitle="&lt;UtilsIcon /&gt; requires a name and can be customized with its size and color."
    >
        <template v-for="(icon, i) in icons">
            <div
                v-for="(style, j) in styles"
                :key="`style-${i}-${j}`"
                class="regular-border text-0"
            >
                <UtilsIcon
                    :name="icon"
                    :width="style.width"
                    :color="style.color"
                />
            </div>
        </template>
    </DocsSection>
</template>

<script>
export default {
    data() {
        return {
            icons: ['ChevronLeft', 'ChevronRight'],
            styles: [
                { width: 12, color: 'primary-100' },
                { width: 24, color: 'primary' },
                { width: 48, color: 'primary-500' },
                { width: 96, color: 'primary-700' },
            ],
        }
    },
}
</script>
