<template>
    <DocsSection title="<UtilsTooltipClick />">
        <UtilsTooltipClick
            component="button"
            tooltip-position="right"
        >
            <DocsChip caption="Click me" />
            <template slot="tooltip">
                Hello!
            </template>
        </UtilsTooltipClick>
    </DocsSection>
</template>

<script>
export default {
}
</script>
