<template>
    <DocsSection title="<CardFaq />">
        <CardFaq
            v-for="(entry, i) in entries"
            :key="`entry-${i}`"
            :question="entry.question"
            :answer="entry.answer"
            class="w-full col-span-full xl:col-span-2 xxl:col-span-3"
        />
    </DocsSection>
</template>

<script>
export default {
    data() {
        return {
            entries: [
                { question: 'How does <CardFaq /> work ?', answer: 'Open file ~/src/components/card/Faq.vue to check out the component and file ~/src/components/docs/section/CardFaq.vue to see how it is used.' },
                { question: 'Does markdown text work with <CardFaq /> ?', answer: 'Partially. It uses the component <UtilsLinksExtractor />. For example: click [here](/).' },
            ],
        }
    },
}
</script>
