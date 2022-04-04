<template>
    <!-- eslint-disable max-len -->
    <DocsSection title="<PartialsNavigationSidebar />">
        <DocsCode
            class="col-span-full"
            title="Example from `~/pages/documentation.vue` and currently used in this page."
        >
            <pre>

&lt;<cyan>template</cyan>&gt;
    &lt;<cyan>client-only</cyan>&gt;
        &lt;<cyan>div</cyan> <red>class</red><white>=</white>"<magenta>grid l:grid-cols-12 l:gap-40</magenta>"&gt;
            &lt;<magenta>Container</magenta> <red>class</red><white>=</white>"<magenta>hidden l:block l:col-span-3</magenta>"&gt;
                &lt;<magenta>PartialsNavigationSidebar</magenta>
                    <white>:</white><red>anchors</red><white>=</white>"<cyan>sections</cyan>"
                    <red>title</red><white>=</white>"<magenta>Documentation</magenta>"
                /&gt;
            &lt;/<magenta>Container</magenta>&gt;
            &lt;<magenta>Container</magenta> <red>class</red><white>=</white>"<magenta>grid gap-60 l:col-span-9 py-20 l:py-40</magenta>"&gt;
                &lt;<cyan>component</cyan>
                    <white>:</white><red>is</red><white>=</white>"<magenta>section</magenta><white>.</white><green>component</green>"
                    <red>v-for</red><white>=</white>"<yellow>(</yellow><cyan>section</cyan><white>,</white> <cyan>i</cyan><yellow>)</yellow> <red>in</red> <cyan>sections</cyan>"
                    <white>:</white><red>id</red><white>=</white>"<magenta>section</magenta><white>.</white><magenta>target</magenta><white>.</white><green>replace</green><yellow>(</yellow><blue>/<red>^</red>#(.+)/</blue><white>.</white> <blue>'$1'</blue><yellow>)</yellow>"
                    <white>:</white><red>key</red><white>=</white>"<blue>`section-${<cyan>i</cyan>}`</blue>"
                /&gt;
            &lt;/<magenta>Container</magenta>&gt;
        &lt;/<cyan>div</cyan>&gt;
    &lt;/<cyan>client-only</cyan>&gt;
&lt;/<cyan>template</cyan>&gt;

&lt;<cyan>script</cyan>&gt;
<red>export default</red> <yellow>{</yellow>
    <green>data</green><red>()</red> <red>{</red>
        <red>return</red> <cyan>{</cyan>
            <green>sections</green><white>:</white> <yellow>[</yellow>
                <red>{</red> <green>label</green><white>:</white> <blue>'$mixin'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#mixin'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Mixin.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;UtilsIcon /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#icon'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Icon.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;UtilsSeparator /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#separator'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Separator.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;UtilsLoader /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#loader'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Loader.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;UtilsTooltip /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#tooltip'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Tooltip.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;UtilsTooltipClick /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#tooltip-click'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/TooltipClick.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;Button /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#button'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Button.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'&lt;PartialsNavigationSidebar /&gt;'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#sidebar'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Sidebar.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'Store'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#store'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Store.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
                <red>{</red> <green>label</green><white>:</white> <blue>'Mixins'</blue><white>,</white> <green>target</green><white>:</white> <blue>'#mixins'</blue><white>,</white> <green>component</green><white>:</white> <cyan>()</cyan> <magenta>=></magenta> <red>import</red><cyan>(</cyan><blue>'~/components/docs/section/Mixins.vue'</blue><cyan>)</cyan> <red>}</red><white>,</white>
            <yellow>]</yellow><white>,</white>
        <cyan>}</cyan>
    <red>}</red><white>,</white>
<yellow>}</yellow>
&lt;/<cyan>script</cyan>&gt;
</pre>
        </DocsCode>
    </DocsSection>
</template>

<script>
export default {
}
</script>
