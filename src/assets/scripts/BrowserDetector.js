export default class BrowserDetector {
    constructor() {
        this.dataBrowser = [
            { string: navigator.userAgent, subString: 'Edge', identity: 'Edge' },
            { string: navigator.userAgent, subString: 'MSIE', identity: 'Explorer' },
            { string: navigator.userAgent, subString: 'Trident', identity: 'Explorer' },
            { string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox' },
            { string: navigator.userAgent, subString: 'Opera', identity: 'Opera' },
            { string: navigator.userAgent, subString: 'OPR', identity: 'Opera' },
            { string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome' },
            { string: navigator.userAgent, subString: 'Safari', identity: 'Safari' },
        ]

        this.browser = this.searchString(this.dataBrowser) || 'Other'
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || 'Unknown'

        return {
            browser: this.browser.toLowerCase(),
            version: this.version,
        }
    }

    searchString(data) {
        for (let i = 0; i < data.length; i++) {
            const dataString = data[i].string
            this.versionSearchString = data[i].subString

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity
            }
        }

        return null
    }

    searchVersion(dataString) {
        const index = dataString.indexOf(this.versionSearchString)
        if (index === -1) {
            return null
        }

        const rv = dataString.indexOf('rv:')
        if (this.versionSearchString === 'Trident' && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3))
        }

        return parseFloat(
            dataString.substring(index + this.versionSearchString.length + 1),
        )
    }
}
