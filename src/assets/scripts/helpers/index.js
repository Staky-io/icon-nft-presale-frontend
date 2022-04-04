export const isRequired = (param, fn) => { throw new Error(`\`${param}\` parameter in ${fn} is required.`) }

export const mod = (n, m) => ((n % m) + m) % m
