const app = Vue.createApp({
    data() {
        return {
            moreState: '+',
            moreDropdownShow: false,
        }
    },
    methods: {
        moreDropdownClick() {
            this.moreDropdownShow = ! this.moreDropdownShow
        }
    },
    watch: {
        moreDropdownShow: (n, o) => {
            this.moreState = n ? '-' : '+'
        }
    }
})

app.mount('#app')