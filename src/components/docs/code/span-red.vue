<template>
    <span :class="$style.text">
        <slot />
    </span>
</template>

<style lang="stylus" module>
.text {
    color: #ff7de9;
}
</style>
