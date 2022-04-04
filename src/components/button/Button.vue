<template>
    <component
        :is="$attrs.to ? 'nuxt-link' : $attrs.href ? 'a' : 'button'"
        :class="[
            position,
            isUnclickable || isLoading ? 'cursor-not-allowed': 'cursor-pointer',
            `px-${paddingX}`,
            `py-${paddingY}`,
            `rounded-${rounded}`,
            {
                'filter-grayscale': isUnclickable,
                'pointer-events-none': isLoading,
                'text-white border-1 border-primary bg-primary hover:border-primary-400 hover:bg-primary-400': version === 'primary',
                'text-primary border-1 border-grey-400 hover:border-primary': version === 'secondary',
            }
        ]"
        class="
            tooltip-container
            flex-center
            typo-UI
            border-1
            border-solid
            whitespace-no-wrap
            select-none
            transform
            scale-100
            active:scale-95
            transition-all
            duration-100
            will-change-transform
        "
        v-bind="{ ...$attrs, ...$attrs.href && { rel: 'noopener noreferrer', target: 'blank' } }"
        v-on="{ ...!isUnclickable && $listeners }"
    >
        <div
            class="grid-col grid-center gap-6 transition-opacity duration-200"
            :class="{ 'opacity-0': isLoading }"
        >
            <UtilsIcon
                v-if="icon"
                :name="icon"
                color="current"
                :width="16"
                :class="{ 'order-last': isReversed }"
            />
            <span v-if="label">
                {{ label }}
            </span>
        </div>
        <transition name="fade-quick">
            <UtilsLoader
                v-if="isLoading"
                color="current"
                :size="20"
                class="absolute"
            />
        </transition>
        <UtilsTooltip
            v-if="tooltip"
            :position="tooltipPosition"
        >
            {{ tooltip }}
        </UtilsTooltip>
    </component>
</template>

<script>
export default {
    props: {
        version: {
            type: String,
            default: 'primary',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isReversed: {
            type: Boolean,
            default: false,
        },
        isUnclickable: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'relative',
        },
        paddingX: {
            type: Number,
            default: 24,
        },
        paddingY: {
            type: Number,
            default: 10,
        },
        rounded: {
            type: Number,
            default: 15,
        },
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        tooltip: {
            type: String,
            default: '',
        },
        tooltipPosition: {
            type: String,
            default: 'top',
        },
    },
}
</script>
