<template>
    <component
        :is="icon"
        :class="{ [`text-${color}`]: !isHexadecimal(color) }"
        class="inline-block transition-all duration-100"
        v-bind="{ ...$attrs, ...isHexadecimal(color) && { style: { color: colorRGB(color) } } }"
        v-on="$listeners"
    />
</template>

<script>
import set from './set'

export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'black',
        },
    },
    computed: {
        icon() {
            return set[this.name]
        },
        isHexadecimal() {
            return (color) => /^#?(([a-f\d]){3}){1,2}$/i.test(color)
        },
        hexToRGB() {
            return (hex) => hex
                .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
                .substring(1)
                .match(/.{2}/g)
                .map((x) => parseInt(x, 16))
        },
        colorRGB() {
            return (hex) => {
                const [r, g, b] = this.hexToRGB(hex)
                return `rgb(${r}, ${g}, ${b})`
            }
        },
    },
}
</script>
