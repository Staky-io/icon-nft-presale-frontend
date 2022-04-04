<template>
    <DocsSection title="<ButtonLink />">
        <ButtonLink>Simple link</ButtonLink>
        <ButtonLink :to="{ name: 'index' }">
            Redirection link
        </ButtonLink>
        <ButtonLink
            href="https://www.staky.io/"
            title="Staky.io"
        >
            External link
        </ButtonLink>
        <ButtonLink color="primary-700">
            Colorized link
        </ButtonLink>
    </DocsSection>
</template>

<script>
export default {
}
</script>
