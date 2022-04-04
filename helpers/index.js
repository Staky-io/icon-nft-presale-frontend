module.exports = {
    shareEntries: (keys, values) => keys
        .reduce((accu, curr) => ({ ...accu, [curr]: values }), {}),
    fractions: (number) => [...new Array(number)]
        .reduce((accu, _, index) => ({ ...accu, [`${index + 1}fr`]: `${index + 1}fr` }), {}),
    combineRules: (rules, length) => [...new Array(length)]
        .reduce((result, _, index) => ({
            ...result,
            ...Object.entries(rules)
                .map((entry) => [...new Array(index)]
                    .reduce((accu) => accu
                        .map(([currentKey, currentValue]) => Object.entries(rules)
                            .map(([subKey, subValue]) => [
                                `${currentKey}-${subKey}`,
                                `${currentValue} ${subValue}`,
                            ]))
                        .flat(), [entry]))
                .flat()
                .reduce((accu, [key, value]) => ({ ...accu, [key]: value }), {}),
        }), {}),
}
