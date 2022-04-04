<template>
    <client-only>
        <div class="grid l:grid-cols-12 l:gap-40">
            <Container class="hidden l:block l:col-span-3 shadow-m">
                <PartialsNavigationSidebar
                    :anchors="sections"
                    title="Documentation"
                />
            </Container>
            <Container class="grid gap-60 l:col-span-9 py-20 l:py-40">
                <component
                    :is="section.component"
                    v-for="(section, i) in sections"
                    :id="section.target.replace(/^#(.+)/, '$1')"
                    :key="`section-${i}`"
                />
            </Container>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                { label: '$mixin', target: '#mixin', component: () => import('~/components/docs/section/Mixin.vue') },
                { label: '<UtilsIcon />', target: '#icon', component: () => import('~/components/docs/section/Icon.vue') },
                { label: '<UtilsLinksExtractor />', target: '#links-extractor', component: () => import('~/components/docs/section/LinksExtractor.vue') },
                { label: '<UtilsLoader />', target: '#loader', component: () => import('~/components/docs/section/Loader.vue') },
                { label: '<UtilsSeparator />', target: '#separator', component: () => import('~/components/docs/section/Separator.vue') },
                { label: '<UtilsTooltip />', target: '#tooltip', component: () => import('~/components/docs/section/Tooltip.vue') },
                { label: '<UtilsTooltipClick />', target: '#tooltip-click', component: () => import('~/components/docs/section/TooltipClick.vue') },
                { label: '<Button />', target: '#button', component: () => import('~/components/docs/section/Button.vue') },
                { label: '<ButtonLink />', target: '#button-link', component: () => import('~/components/docs/section/ButtonLink.vue') },
                { label: '<CardFaq />', target: '#card-faq', component: () => import('~/components/docs/section/CardFaq.vue') },
                { label: '<PartialsNavigationSidebar />', target: '#sidebar', component: () => import('~/components/docs/section/Sidebar.vue') },
                { label: 'Store', target: '#store', component: () => import('~/components/docs/section/Store.vue') },
                { label: 'Mixins', target: '#mixins', component: () => import('~/components/docs/section/Mixins.vue') },
            ],
        }
    },
    head() {
        return {
            title: 'Documentation | Starter',
            meta: [
                { id: 'description', name: 'description', content: 'This is the documentation' },
            ],
        }
    },
}
</script>
