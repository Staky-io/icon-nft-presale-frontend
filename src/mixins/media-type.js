/**
 * @param {Object} params
 * @param {String} params.src
 * @return {Object}
 */
export default ({
    src,
}) => ({
    data() {
        return {
            mediaType: '',
            isMediaLoaded: false,
            isImageLoaded: false,
            isVideoLoaded: false,
            isAudioLoaded: false,
        }
    },
    watch: {
        [src]: {
            immediate: true,
            async handler(value) {
                if (value) {
                    const response = await fetch(value)
                    const contentType = response.headers.get('content-type')

                    switch (contentType.split('/')[0]) {
                        case 'image':
                            this.mediaType = 'image'
                            break
                        case 'video':
                            this.mediaType = 'video'
                            break
                        case 'audio':
                            this.mediaType = 'audio'
                            break
                        default:
                            this.mediaType = 'unsupported'
                            break
                    }
                }
            },
        },
    },
})
