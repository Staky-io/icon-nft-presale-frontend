import Vue from 'vue'

import { isRequired } from '~/assets/scripts/helpers'
import { abbreviation } from '~/assets/scripts/utils/number'

Vue.mixin({
    computed: {
        $capitalize() {
            /**
             * @param {String} str - String to uppercase
             * @return {String}
             */
            return (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
        },
        $unit() {
            /**
             * @param {Object} options - Options to format the value
             * @param {String} options.word
             * @param {Number} options.quantity
             * @return {String}
             */
            return ({
                word = 'unit',
                quantity = isRequired('quantity', '$unit'),
            }) => `${this.$format({ value: quantity })} ${word}${(quantity > 1 || quantity === 0) ? 's' : ''}`
        },
        $format() {
            /**
             * @param {Object} options - Options to format the value
             * @param {Number} options.value
             * @param {String} options.prefix
             * @param {String} options.suffix
             * @param {Number} options.limit
             * @param {Boolean} options.hasSNA - Scientific Notation Abbreviation
             * @return {String}
             */
            return ({
                value = isRequired('value', '$format'),
                prefix = '',
                suffix = '',
                limit = 2,
                hasSNA = false,
                limitSNA = 3,
            }) => {
                const isWhole = (n) => (n - Math.floor(n)) === 0
                const nValue = Number(value)
                const nLimit = nValue === 0 || isWhole(nValue) ? 0 : limit
                const aboveOne = nValue > 1

                const [int, float] = nValue.toFixed(hasSNA && aboveOne ? 0 : nLimit).toString().split('.')
                const result = `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${float ? `.${float}` : ''}`.trim()

                if (!hasSNA || !aboveOne) return `${prefix}${result} ${suffix}`.trim()

                const parts = result.split(',')
                if (parts.length > abbreviation.length) throw new Error('value number is too big')

                const partIndex = parts.length - 1
                const mantissa = nValue / (1000 ** partIndex)
                const mantissaFixed = mantissa.toFixed(partIndex ? limitSNA - String(mantissa).split('.')[0].length : 0)
                const mantissaCleared = mantissaFixed.replace(partIndex && mantissaFixed.includes('.') ? /0+$/g : '', '').replace(/\.$/, '')

                return `${prefix}${mantissaCleared}${abbreviation[partIndex]} ${suffix}`.trim()
            }
        },
        $truncate() {
            /**
             * @param {Object} options - Options to format the value
             * @param {String} options.string
             * @param {Number} options.start
             * @param {Number} options.end
             * @return {String}
             */
            return ({
                string = isRequired('string', '$truncate'),
                start = 5,
                end = 3,
            }) => `${string.slice(0, start)}…${string.slice(string.length - end)}`
        },
        $isDev() {
            return process.env.isDev
        },
        $isMobile() {
            return ['xs', 's'].includes(this.$mq)
        },
        $isTablet() {
            return ['xs', 's', 'm'].includes(this.$mq)
        },
        $isDesktop() {
            return ['l', 'xl', 'xxl'].includes(this.$mq)
        },
        $isBreakpoint() {
            return (...args) => args.includes(this.$mq)
        },
    },
})
