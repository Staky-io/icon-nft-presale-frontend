<template>
    <DocsSection title="<Button />">
        <Button label="Primary" />
        <Button
            label="Secondary"
            version="secondary"
        />
        <Button
            label="Loading"
            is-loading
        />
        <Button
            label="Unclickable"
            is-unclickable
        />
        <Button
            label="Icon at left"
            icon="ChevronLeft"
        />
        <Button
            label="Icon at right"
            icon="ChevronRight"
            is-reversed
        />
        <Button
            label="Stylized"
            :padding-x="40"
            :padding-y="20"
            :rounded="5"
        />
        <Button
            :label="`Clicked: ${count}`"
            @click="count += 1"
            @contextmenu.prevent="count = Math.max(0, count - 1)"
        />
        <Button
            label="Top tooltip"
            tooltip="Hello!"
            tooltip-position="top"
        />
        <Button
            label="Bottom tooltip"
            tooltip="Hello!"
            tooltip-position="bottom"
        />
        <Button
            label="Left tooltip"
            tooltip="Hello!"
            tooltip-position="left"
        />
        <Button
            label="Right tooltip"
            tooltip="Hello!"
            tooltip-position="right"
        />
    </DocsSection>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
}
</script>
