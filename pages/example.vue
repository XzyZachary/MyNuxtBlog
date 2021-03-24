<template> </template>

<script>
export default {
    // validate  =>  asyncData  =>  fetch  =>  head
    head() {
        return {
            title: this.articInfo.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.articInfo.content,
                },
            ],
        };
    },
    validate({ params, query }) {
        return this.methods.validateParam(params.type);
    },
    async asyncData({ app, store, params, query, redirect, error }) {
        console.log(app, store, params, query, redirect, error);
        // 列表数据
        let list = await app.$axios
            .getIndexList({
                pageNum: 1,
                pageSize: 20,
                type: query.type ? query.type.toUpperCase() : "ALL",
                keyword: query.keyword,
                period: query.period ? query.period.toUpperCase() : "ALL",
            })
            .then((res) => (res.s === 1 ? res.d : []));
        return {
            list,
        };
    },
    watchQuery: ["keyword", "type", "period"],
    async fetch({ store, params }) {
        return axios.get("xxxxxxx").then((res) => {
            store.commit("setStars", res.data);
        });
    },
    components: {
        Posts,
    },
    head: {
        title: "Home",
    },
    methods: {
        validateParam(type) {
            let typeWhiteList = ["backend", "frontend", "android"];
            return typeWhiteList.includes(type);
        },
    },
};
</script>
