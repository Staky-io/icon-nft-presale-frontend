<template>
    <DocsSection title="<UtilsTooltip />">
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Hover me"
        >
            <UtilsTooltip position="top">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Hover me"
        >
            <UtilsTooltip position="bottom">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Hover me"
        >
            <UtilsTooltip position="left">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Hover me"
        >
            <UtilsTooltip position="right">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="No arrow"
        >
            <UtilsTooltip
                position="right"
                no-arrow
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Active"
        >
            <UtilsTooltip
                position="right"
                is-active
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Stylized"
        >
            <UtilsTooltip
                position="right"
                bg-color="grey-300"
                label-color="primary"
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex-center"
            caption="Shifted"
        >
            <UtilsTooltip
                position="right"
                :translate-x="48"
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex justify-start"
            caption="Parent with flex start"
        >
            <UtilsTooltip position="bottom">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex justify-end"
            caption="Parent with flex end"
        >
            <UtilsTooltip position="bottom">
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex"
            caption="Self inset positioning"
        >
            <UtilsTooltip
                position="bottom"
                class="left-0"
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
        <DocsChip
            class="tooltip-container relative flex"
            caption="Self inset positioning"
        >
            <UtilsTooltip
                position="bottom"
                class="right-0"
            >
                Hello!
            </UtilsTooltip>
        </DocsChip>
    </DocsSection>
</template>

<script>
export default {
}
</script>
