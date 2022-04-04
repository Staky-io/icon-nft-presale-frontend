export default {
    data() {
        return {
            copyTimeOut: null,
            currentTextCopying: '',
        }
    },
    methods: {
        copyText(text, value = '') {
            navigator.clipboard.writeText(text)
            clearTimeout(this.copyTimeOut)
            this.currentTextCopying = value || text

            this.copyTimeOut = setTimeout(() => {
                this.currentTextCopying = ''
            }, 1000)
        },
    },
}
