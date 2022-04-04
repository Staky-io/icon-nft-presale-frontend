<template>
    <div
        class="
            tooltip
            hidden
            m:flex
            absolute
            z-1
            flex-center
            w-auto
            max-w-none
            px-8
            py-4
            rounded-5
            typo-caption
            scale-90
            whitespace-no-wrap
            select-none
            pointer-events-none
            opacity-0
            transform
            transition-composite
            ease-reveal-xl
            duration-200
            will-change-all
        "
        :class="[
            `bg-${bgColor}`,
            `text-${labelColor}`,
            `tooltip-${position}`,
            {
                [`bottom-full ${isTYPositive ? '-' : ''}translate-y-${absTY}`]: position === 'top',
                [`top-full ${!isTYPositive ? '-' : ''}translate-y-${absTY}`]: position === 'bottom',
                [`right-full ${isTXPositive ? '-' : ''}translate-x-${absTX}`]: position === 'left',
                [`left-full ${!isTXPositive ? '-' : ''}translate-x-${absTX}`]: position === 'right',
                'isActive': isActive,
            }
        ]"
    >
        <div
            v-if="!noArrow"
            class="absolute w-0 h-0 border-0 border-solid"
            :class="[
                `${position}-full`,
                `border-${bgColor}`,
                `border-${position[0]}-4`,
                {
                    [arrowStyle(positionsY)]: positionsX.includes(position),
                    [arrowStyle(positionsX)]: positionsY.includes(position),
                }
            ]"
        />
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        noArrow: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: 'top',
        },
        translateX: {
            type: [Number, String],
            default: 12,
        },
        translateY: {
            type: [Number, String],
            default: 16,
        },
        bgColor: {
            type: String,
            default: 'black',
        },
        labelColor: {
            type: String,
            default: 'white',
        },
    },
    data() {
        return {
            positionsX: ['left', 'right'],
            positionsY: ['top', 'bottom'],
        }
    },
    computed: {
        arrowStyle() {
            return (positions) => positions.reduce((accu, curr) => `${accu} border-${curr[0]}-4 border-${curr[0]}-transparent`.trim(), '')
        },
        isTXPositive() {
            if (typeof this.translateX === 'number') return this.translateX >= 0
            return this.translateX[0] !== '-'
        },
        absTX() {
            if (typeof this.translateX === 'number') return Math.abs(this.translateX)
            return this.isTXPositive ? this.translateX : `${this.translateX}`.substring(1)
        },
        isTYPositive() {
            if (typeof this.translateY === 'number') return this.translateY >= 0
            return this.translateY[0] !== '-'
        },
        absTY() {
            if (typeof this.translateY === 'number') return Math.abs(this.translateY)
            return this.isTYPositive ? this.translateY : `${this.translateY}`.substring(1)
        },
    },
}
</script>

<style lang="stylus">
.tooltip-container {
    &:hover .tooltip,
    .tooltip.isActive {
        @apply opacity-100 scale-100;
    }

    &:hover .tooltip-top,
    .tooltip-top.isActive {
        @apply -translate-y-8;
    }

    &:hover .tooltip-bottom,
    .tooltip-bottom.isActive {
        @apply translate-y-8;
    }

    &:hover .tooltip-left,
    .tooltip-left.isActive {
        @apply -translate-x-8;
    }

    &:hover .tooltip-right,
    .tooltip-right.isActive {
        @apply translate-x-8;
    }
}

.tooltip-click-container {
    .tooltip.isActive {
        @apply opacity-100 scale-100;
    }

    .tooltip-top.isActive {
        @apply -translate-y-8;
    }

    .tooltip-bottom.isActive {
        @apply translate-y-8;
    }

    .tooltip-left.isActive {
        @apply -translate-x-8;
    }

    .tooltip-right.isActive {
        @apply translate-x-8;
    }
}
</style>
