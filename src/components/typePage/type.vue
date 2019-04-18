<template>
    <section class="type-wrap">
    	<div class="type-layer">
    		<type-list></type-list>
    	</div>
    	<slidebar-left></slidebar-left>
    </section>
</template>

<script type="text/javascript">
	import slidebarLeft from '../ssi/sidebarLeft'  //左侧栏
	import typeList from './e/typeList'

	export default{
		components: {
			slidebarLeft,
			typeList
		},
		name: "rank",
		data(){
			return{
			}
		},
		computed: {
		},
    	watch: {
		},
		beforeCreate(){},
		created(){
			this.$nextTick(function(){

			});
		},
		beforeMount(){},
		mounted(){
			this.$nextTick(function(){
			})
		},
		beforeUpdate(){},
		updated(){},
		methods: {
		}
	}
</script>


<style lang="less" scoped>

@import (reference) url(../../assets/css/base.less);


</style>


