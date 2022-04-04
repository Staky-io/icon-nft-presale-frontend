<template>
    <DocsSection title="Store">
        <DocsCode
            class="col-span-full"
            title="Use the template `~/assets/scripts/template/store.js` to create a new store."
        >
            <pre>

<red>import</red> <yellow>{</yellow>
    <cyan>mutations</cyan> <red>as</red> <cyan>modelMutations</cyan><white>,</white>
    <cyan>actions</cyan> <red>as</red> <cyan>modelActions</cyan><white>,</white>
    <cyan>getters</cyan> <red>as</red> <cyan>modelGetters</cyan><white>,</white>
<yellow>}</yellow> <red>from</red> <blue>'~/assets/scripts/utils/store'</blue>

<red>export const</red> <green>state</green> <white>=</white> <yellow>()</yellow> <magenta>=></magenta> <yellow>(</yellow><red>{</red>
<red>}</red><yellow>)</yellow>

<red>export const</red> <cyan>mutations</cyan> <white>=</white> <yellow>{</yellow>
    <red>...</red><cyan>modelMutations</cyan><white>,</white>
<yellow>}</yellow>

<red>export const</red> <cyan>actions</cyan> <white>=</white> <yellow>{</yellow>
    <red>...</red><cyan>modelActions</cyan><white>,</white>
<yellow>}</yellow>

<red>export const</red> <cyan>getters</cyan> <white>=</white> <yellow>{</yellow>
    <red>...</red><cyan>modelGetters</cyan><white>,</white>
<yellow>}</yellow>
</pre>
        </DocsCode>
        <DocsCode
            class="col-span-full"
            title="Do not use `mapStates` and `mapMutations`. Create getters and actions to call these states and mutations."
        >
            <pre>

&lt;<cyan>template</cyan>&gt;
    &lt;<cyan>button</cyan>
        <red>v-if</red><white>=</white>"<magenta>storeUser</magenta><white>.</white><green>isLoggedIn</green>"
        <white>@</white><red>click</red><white>=</white>"<cyan>logOut</cyan>"
    &gt;
        <white>Log out</white>
    &lt;/<cyan>button</cyan>&gt;
&lt;/<cyan>template</cyan>&gt;

&lt;<cyan>script</cyan>&gt;
<red>import</red> <yellow>{</yellow> <cyan>mapGetters</cyan><white>,</white> <cyan>mapActions</cyan> <yellow>}</yellow> <red>from</red> <blue>'vuex'</blue>

<red>export default</red> <yellow>{</yellow>
    <green>computed</green><white>:</white> <green>mapGetters</green><red>(</red><blue>'user'</blue><white>,</white> <cyan>{</cyan> <green>storeUser</green><white>:</white> <blue>'data'</blue> <cyan>}</cyan><red>)</red><white>,</white>
    <green>methods</green><white>:</white> <red>{</red>
        <red>...</red><green>mapActions</green><red>(</red><blue>'api/user'</blue><white>,</white> <yellow>[</yellow><blue>'disconnect'</blue><yellow>]</yellow><red>)</red><white>,</white>
        <red>...</red><green>mapActions</green><red>(</red><blue>'user'</blue><white>,</white> <yellow>{</yellow> <green>setUser</green><white>:</white> <blue>'setData'</blue> <yellow>}</yellow><red>)</red><white>,</white>
        <red>async</red> <green>logOut</green><cyan>()</cyan> <cyan>{</cyan>
            <red>await</red> <red>this</red><white>.</white><green>disconnect</green><yellow>()</yellow>
            <red>this</red><white>.</white><green>setUser</green><yellow>(</yellow><red>{</red> <green>isLoggedIn</green><white>:</white> <orange>false</orange> <red>}</red><yellow>)</yellow>
        <cyan>}</cyan><white>,</white>
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
