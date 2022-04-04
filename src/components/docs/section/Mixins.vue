<template>
    <!-- eslint-disable max-len -->
    <DocsSection title="Mixins">
        <DocsCode
            class="col-span-full"
            title="Copy text."
        >
            <div class="grid gap-6">
                <pre>

&lt;<cyan>template</cyan>&gt;
    &lt;<cyan>button</cyan> <white>@</white><red>click</red><white>=</white>"<green>copyText</green><yellow>(</yellow><blue>'copied string'</blue><yellow>)</yellow>"&gt;
        <white>Copy string</white>
    &lt;/<cyan>button</cyan>&gt;
&lt;/<cyan>template</cyan>&gt;

&lt;<cyan>script</cyan>&gt;
<red>import</red> <cyan>CopyText</cyan> <red>from</red> <blue>'~/mixins/copy-text'</blue>

<red>export default</red> <yellow>{</yellow>
    <green>mixins</green><white>:</white> <red>[</red><cyan>CopyText</cyan><red>]</red><white>,</white>
<yellow>}</yellow>
&lt;/<cyan>script</cyan>&gt;

<black>// Example:</black>
</pre>
                <div class="grid grid-cols-1fr-auto-auto gap-12 w-full px-16 py-8 bg-white rounded-5 font-inter text-grey-600">
                    <input
                        type="text"
                        readonly
                        :value="randomString"
                    >
                    <UtilsSeparator is-vertical />
                    <UtilsTooltipClick
                        class="typo-UI text-grey-600 hover:text-primary transition-color duration-200"
                        @click="copyText(randomString)"
                    >
                        Copy the hash
                        <template slot="tooltip">
                            Copied!
                        </template>
                    </UtilsTooltipClick>
                </div>
            </div>
        </DocsCode>
        <DocsCode
            class="col-span-full"
            title="Get media type from API."
        >
            <pre>

&lt;<cyan>template</cyan>&gt;
    &lt;<cyan>img</cyan>
        <red>v-if</red><white>=</white>"<cyan>mediaType</cyan> <red>===</red> <blue>'image'</blue>"
        <white>:</white><red>src</red><white>=</white>"<cyan>media</cyan>"
        <red>alt</red><white>=</white>""
        <white>@</white><red>load</red><white>=</white>"<cyan>isMediaLoaded</cyan> <white>=</white> <cyan>isImageLoaded</cyan> <white>=</white> <cyan>true</cyan>"
    /&gt;
    &lt;<cyan>audio</cyan>
        <red>v-else-if</red><white>=</white>"<cyan>mediaType</cyan> <red>===</red> <blue>'audio'</blue>"
        <white>:</white><red>src</red><white>=</white>"<cyan>media</cyan>"
        <white>@</white><red>play</red><white>=</white>"<cyan>isMediaLoaded</cyan> <white>=</white> <cyan>isAudioLoaded</cyan> <white>=</white> <cyan>true</cyan>"
    /&gt;
    &lt;<cyan>video</cyan>
        <red>v-else-if</red><white>=</white>"<cyan>mediaType</cyan> <red>===</red> <blue>'video'</blue>"
        <white>:</white><red>src</red><white>=</white>"<cyan>media</cyan>"
        <white>@</white><red>play</red><white>=</white>"<cyan>isMediaLoaded</cyan> <white>=</white> <cyan>isVideoLoaded</cyan> <white>=</white> <cyan>true</cyan>"
    /&gt;
&lt;/<cyan>template</cyan>&gt;

&lt;<cyan>script</cyan>&gt;
<red>import</red> <cyan>MediaType</cyan> <red>from</red> <blue>'~/mixins/media-type'</blue>

<red>export default</red> <yellow>{</yellow>
    <green>mixins</green><white>:</white> <red>[</red><green>MediaType</green><cyan>(</cyan><yellow>{</yellow> <green>src</green><white>:</white> <blue>'source'</blue> <yellow>}</yellow><cyan>)</cyan><red>]</red><white>,</white>
    <green>data</green><red>()</red> <red>{</red>
        <red>return</red> <cyan>{</cyan>
            <green>source</green><white>:</white> <blue>'https://myapi.com/img_id'</blue><white>,</white>
        <cyan>}</cyan>
    <red>}</red><white>,</white>
<yellow>}</yellow>
&lt;/<cyan>script</cyan>&gt;
</pre>
        </DocsCode>
        <DocsCode
            class="col-span-full"
            title="
                Wait for the `<Container />` to be mounted to access a method which requires a DOM reference`.
                Starting from v2.13, Nuxt can auto import components when used in templates.
                However, this feature still contains a bug when the current component is mounted: parent components in the template are not immediatly mounted (e.g `<Container` /> in this example).
                Therefore, we need to emit the mounted status from these parents components, and use the `RefMounted` mixin to check the status.
                Then, we can access every reference component inside these parent components.
            "
        >
            <pre>

&lt;<cyan>template</cyan>&gt;
    &lt;<magenta>Container</magenta> <white>@</white><red>mount</red><white>=</white>"<cyan>isContainerMounted</cyan> <white>=</white> <cyan>true</cyan>"&gt;
        &lt;<cyan>div</cyan> <red>ref</red><white>=</white>"<magenta>wrapper</magenta>"&gt;
            &lt;!-- --&gt;
        &lt;/<cyan>div</cyan>&gt;
    &lt;/<magenta>Container</magenta>&gt;
&lt;/<cyan>template</cyan>&gt;

&lt;<cyan>script</cyan>&gt;
<red>import</red> <cyan>RefMounted</cyan> <red>from</red> <blue>'~/mixins/ref-mounted'</blue>

<red>export default</red> <yellow>{</yellow>
    <green>mixins</green><white>:</white> <red>[</red><green>RefMounted</green><cyan>(</cyan><yellow>{</yellow>
        <green>ref</green><white>:</white> <blue>'wrapper'</blue><white>,</white>
        <green>method</green><white>:</white> <blue>'getWrapperSize'</blue><white>,</white>
        <green>status</green><white>:</white> <blue>'isContainerMounted'</blue><white>,</white>
    <yellow>}</yellow><cyan>)</cyan><red>]</red><white>,</white>
    <green>methods</green><white>:</white> <red>{</red>
        <green>getWrapperSize</green><cyan>()</cyan> <cyan>{</cyan>
            <red>const</red> <yellow>{</yellow> <cyan>clientWidth</cyan><white>,</white> <cyan>clientHeight</cyan> <yellow>}</yellow> = <red>this</red><white>.</white><magenta>$refs</magenta><white>.</white><green>wrapper</green>
            // ...
        <cyan>}</cyan><white>,</white>
    <red>}</red><white>,</white>
<yellow>}</yellow>
&lt;/<cyan>script</cyan>&gt;
</pre>
        </DocsCode>
    </DocsSection>
</template>

<script>
import CopyText from '~/mixins/copy-text'

export default {
    mixins: [CopyText],
    data() {
        return {
            randomString: 'eadddf12b3b83c1dac63ebab526e72a3be57ed5d728a9561bcfe13be8d303cb2e213aa0b291b618a3c4abc4f4beb9dd6f35a70ef2f6753c79ced2902d9cf46bd8e868d2805129ae7328876d4a1f6bd77cc5e9bb5b3a7d5684971a62ba24ac229640b02ba96d0f9789cd308871eb38caf6523b4a10a9b4a3881320a2e1c0603f5b5110249333aeeed7088a06e1d9e097369fb6fb6b707899eb171075c4575ffc5',
        }
    },
}
</script>
