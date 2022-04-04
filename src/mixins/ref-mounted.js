/**
 * @param {Object} params
 * @param {String} params.ref
 * @param {String} params.method
 * @param {String} params.status
 * @return {Object}
 */
export default ({
    ref,
    method,
    status,
}) => ({
    data() {
        return {
            [status]: false,
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs[ref]) {
                this[method]()
            } else {
                const unwatch = this.$watch(status, (value) => {
                    if (value && this.$refs[ref]) {
                        this[method]()
                        unwatch()
                    }
                }, { immediate: true })
            }
        })
    },
})
