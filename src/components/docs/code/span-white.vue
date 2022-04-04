<template>
    <span :class="$style.text">
        <slot />
    </span>
</template>

<style lang="stylus" module>
.text {
    color: #e9f4fe;
}
</style>
