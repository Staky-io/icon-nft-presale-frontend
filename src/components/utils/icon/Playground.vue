<template>
    <Container class="fixed bottom-40 z-100 pointer-events-none">
        <Button
            class="shadow-m opacity-50 hover:opacity-100 pointer-events-auto"
            version="primary"
            label="Icons playground"
            @click="isOpened = !isOpened"
        />
        <transition name="fade">
            <div
                v-if="isOpened"
                class="fixed top-0 right-0 bottom-0 left-0 z-100 flex justify-center bg-grey-800 bg-opacity-50 pointer-events-auto"
                @click="isOpened = !isOpened"
            >
                <div
                    class="absolute top-40 bottom-40 z-100 container grid gap-20 grid-rows-auto-1fr py-40 bg-white rounded-5"
                    @click.stop
                >
                    <div class="grid gap-40 grid-cols-auto-1fr items-center px-40">
                        <h2 class="text-20 font-semibold">
                            Icons playground
                        </h2>
                        <div class="grid gap-10 grid-cols-auto-1fr-auto items-center">
                            <label for="color">
                                Select a color name :
                            </label>
                            <div class="relative">
                                <input
                                    id="color"
                                    v-model="currentColor"
                                    class="relative z-100 w-full px-10 py-5 shadow-m outline-none"
                                    type="text"
                                    @focus="isChoosingColor = true"
                                    @blur="isChoosingColor = false"
                                >
                                <transition name="fade">
                                    <div
                                        v-if="isChoosingColor"
                                        class="absolute top-full z-50 w-full h-160 overflow-y-auto bg-white shadow-m"
                                    >
                                        <div
                                            v-for="color in colors"
                                            :key="color"
                                            class="px-10 py-5 cursor-pointer transition-bakcground duration-200 hover:bg-white-100"
                                            :class="{ ['bg-white-100']: currentColor === color }"
                                            @click="currentColor = color"
                                        >
                                            {{ color }}
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div
                                class="relative flex items-center px-4 bg-white-100 w-40 h-20 rounded-10 shadow-m cursor-pointer"
                                @click="isDark = !isDark"
                            >
                                <div
                                    class="absolute left-0 w-16 h-16 bg-primary rounded-full transform transition-all duration-200"
                                    :class="{ ['left-full -translate-x-full']: isDark }"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-20 items-start content-start py-20 px-40 overflow-y-auto overflow-y-shadow">
                        <div
                            v-for="name in Object.keys(icons)"
                            v-show="!['name', '_Ctor'].includes(name)"
                            :key="name"
                            :class="isDark ? 'bg-grey-800' : 'bg-white-100'"
                            class="relative grid gap-20 justify-items-center p-10 rounded-5 shadow-m transition-background duration-200"
                        >
                            <div class="border-1 border-primary text-0">
                                <UtilsIcon
                                    :name="name"
                                    :color="currentColor"
                                    class="w-auto h-20"
                                />
                            </div>
                            <span
                                class="grid grid-flow-col gap-10 justify-center items-center px-10 rounded-5 cursor-pointer transition-background duration-200"
                                :class="isDark ? 'hover:bg-grey-800' : 'hover:bg-white'"
                                @click="copyName(name)"
                            >
                                <span
                                    class="transition-color duration-200"
                                    :class="{ ['text-white']: isDark }"
                                >
                                    {{ name }}
                                </span>
                                <transition name="fade">
                                    <UtilsIcon
                                        v-if="currentNameCopying !== name"
                                        name="IconCopy"
                                        :color="isDark ? 'grey-500' : 'grey-800'"
                                        class="w-10"
                                    />
                                    <UtilsIcon
                                        v-else
                                        name="IconCheck"
                                        :color="isDark ? 'grey-500' : 'grey-800'"
                                        class="w-10"
                                    />
                                </transition>
                            </span>
                            <button
                                class="absolute top-10 right-10 flex-center w-32 h-20 bg-primary rounded-10 transition-bakcground duration-200 hover:bg-primaryHover"
                                @click="copyHtml(name)"
                            >
                                <transition name="fade">
                                    <UtilsIcon
                                        v-if="currentHtmlCopying !== name"
                                        name="IconCopy"
                                        color="white"
                                        class="w-10"
                                    />
                                    <UtilsIcon
                                        v-else
                                        name="IconCheck"
                                        color="white"
                                        class="w-10"
                                    />
                                </transition>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </Container>
</template>

<script>
import icons from './set'

export default {
    data() {
        return {
            copyTimeOut: null,
            currentColor: 'primary',
            currentNameCopying: '',
            currentHtmlCopying: '',
            isChoosingColor: false,
            isDark: false,
            isOpened: false,
            icons,
        }
    },
    computed: {
        colors() {
            return Object
                .entries(process.env.tailwindConfig.theme.colors)
                .map(([key, value]) => {
                    if (typeof value === 'string') return key
                    return Object.keys(value).map((variant) => `${key}${variant !== 'default' ? `-${variant}` : ''}`)
                })
                .flat()
        },
    },
    methods: {
        copyHtml(name) {
            navigator.clipboard.writeText(`<UtilsIcon name="${name}" color="${this.currentColor}" class="w-20" />`)
            clearTimeout(this.copyTimeOut)
            this.currentHtmlCopying = name
            this.currentNameCopying = ''

            this.copyTimeOut = setTimeout(() => {
                this.currentHtmlCopying = ''
            }, 1000)
        },
        copyName(name) {
            navigator.clipboard.writeText(name)
            clearTimeout(this.copyTimeOut)
            this.currentNameCopying = name
            this.currentHtmlCopying = ''

            this.copyTimeOut = setTimeout(() => {
                this.currentNameCopying = ''
            }, 1000)
        },
    },
}
</script>
