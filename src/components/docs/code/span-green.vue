<template>
    <span :class="$style.text">
        <slot />
    </span>
</template>

<style lang="stylus" module>
.text {
    color: #86de74;
}
</style>
