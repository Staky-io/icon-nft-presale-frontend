<template>
    <component
        :is="component"
        :class="[`typo-${typo}`, `text-${color}`]"
    >
        <template v-for="(part, i) of extracted(text)">
            <span
                v-if="typeof part === 'string'"
                :key="`text-${i}`"
                class="text-0"
            >
                <span :class="`typo-${typo}`">{{ part }}</span>
            </span>
            <ButtonLink
                v-else
                :key="`link-${i}`"
                v-bind="isExternalLink(part.link)
                    ? { title: part.text, href: part.link }
                    : { to: part.link }
                "
            >
                {{ part.text }}
            </ButtonLink>
        </template>
    </component>
</template>

<script>
export default {
    props: {
        component: {
            type: [Object, String],
            default: 'div',
        },
        text: {
            type: String,
            required: true,
        },
        typo: {
            type: String,
            default: 'body-2',
        },
        color: {
            type: String,
            default: 'black',
        },
    },
    computed: {
        extracted() {
            return (paragraph) => {
                const matches = paragraph.match(/(\[])|\[(.*?)\]\(.*?\)/gm)

                return matches
                    ? matches
                        .reduce((accu, match) => {
                            const [mdContents, ...rest] = [...accu].reverse()
                            const [format, text, link] = /\[([^[]+)\]\((.*)\)/.exec(match)
                            const [prev, next] = mdContents.split(format)

                            return [
                                ...[...rest].reverse(),
                                prev,
                                { text, link },
                                next,
                            ]
                        }, [paragraph])
                        .filter(Boolean)
                    : [paragraph]
            }
        },
        isExternalLink() {
            return (link) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(link)
                && window.location.origin !== (new URL(link)).origin
        },
    },
}
</script>
