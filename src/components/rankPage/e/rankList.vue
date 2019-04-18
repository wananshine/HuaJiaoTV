<template>
    <div class="rank-column">
    	<h2 class="rank-title">{{rankObject.rankTitle}}</h2>
    	<div>
    		<mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
			    <mu-tab v-for="(tab, tabNo) in tabList" :key="tabNo">{{tab}}</mu-tab>
		  	</mu-tabs>

		  	<!-- 日榜 -->
			<div class="demo-text" v-if="active1 === 0">
			    <ul-group :data-list="rankObject.dayList"></ul-group>
			</div>

			<!-- 周榜 -->
			<div class="demo-text" v-if="active1 === 1">
			    <ul-group :data-list="rankObject.weekdayList"></ul-group>
			</div>

			<!-- 总榜 -->
			<div class="demo-text" v-if="active1 === 2">
			    <ul-group :data-list="rankObject.totalList"></ul-group>
			</div>
    	</div>
    </div>
</template>

<script type="text/javascript">
    import ulGroup from './temp/ulGroup'

    export default {
        components: {
            ulGroup,
        },
        name: "rankList",
        props: ["rankObject"],
        data() {
            return {
                active1: 0,
                tabList: ["日榜", "周榜", "总榜"]
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {},
        created() {
            this.$nextTick(function() {
                console.log(this.rankObject);
            });
        },
        beforeMount() {},
        mounted() {
            this.$nextTick(function() {})
        },
        beforeUpdate() {},
        updated() {},
        methods: {}
    }

</script>

<style lang="less" scoped>
    @import (reference) url(../../../assets/css/base.less);

    .rank-title {
        background-color: @f8f8;
        padding: 32px 0 12px;
        color: @333;
        text-align: left;
    }

    .rank-column {
        .all;
        background: @fff;
    }

</style>
