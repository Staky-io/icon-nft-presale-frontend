<template>
    <span :class="$style.text">
        <slot />
    </span>
</template>

<style lang="stylus" module>
.text {
    color: #ff9494;
}
</style>
