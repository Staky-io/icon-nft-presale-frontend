<template>
    <!-- eslint-disable max-len -->
    <DocsSection title="$mixin">
        <DocsCode
            class="col-span-full"
            title="Access global mixin utils at `~/plugins/mixin.js`."
        />
        <DocsCode :output="$capitalize('word')">
            <green>$capitalize</green><yellow>(</yellow><blue>'word'</blue><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$unit({ word: 'dollar', quantity: 10 })">
            <green>$unit</green><yellow>(</yellow><red>{</red> <green>word</green><white>:</white> <blue>'dollar'</blue><white>,</white> <green>quantity</green><white>:</white> <blue>10</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$truncate({ string: '89724230342052990283', start: 8, end: 4 })">
            <green>$truncate</green><yellow>(</yellow><red>{</red> <green>string</green><white>:</white> <blue>'89724230342052990283'</blue><white>,</white> <green>start</green><white>:</white> <blue>8</blue><white>,</white> <green>end</green><white>:</white> <blue>4</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$isBreakpoint('l', 'xl')">
            <green>$isBreakpoint</green><yellow>(</yellow><blue>'l'</blue><white>,</white> <blue>'xl'</blue><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$format({ value: 3979123 })">
            <green>$format</green><yellow>(</yellow><red>{</red> <green>value</green><white>:</white> <blue>3979123</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$format({ value: 24282.232, limit: 1 })">
            <green>$format</green><yellow>(</yellow><red>{</red> <green>value</green><white>:</white> <blue>24282.232</blue><white>,</white> <green>limit</green><white>:</white> <blue>1</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$format({ value: 10, prefix: '$', suffix: 'per unit' })">
            <green>$format</green><yellow>(</yellow><red>{</red> <green>value</green><white>:</white> <blue>10</blue><white>,</white> <green>prefix</green><white>:</white> <blue>'$'</blue><white>,</white> <green>suffix</green><white>:</white> <blue>'per unit'</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
        <DocsCode :output="$format({ value: 83923897, hasSNA: true, limitSNA: 5 })">
            <green>$format</green><yellow>(</yellow><red>{</red> <green>value</green><white>:</white> <blue>83923897</blue><white>,</white> <green>hasSNA</green><white>:</white> <cyan>true</cyan><white>,</white> <green>limitSNA</green><white>:</white> <blue>5</blue> <red>}</red><yellow>)</yellow>
        </DocsCode>
    </DocsSection>
</template>

<script>
export default {
}
</script>
