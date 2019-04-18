<template>
	<div v-show="isShow">loading</div>
</template>
<script type="text/javascript">
	export default {
		components: {},
	    name: "",
	    data(){
	      return{

	      }
	    },
	    computed: {
	    	isShow(){
	    		return this.$store.getters.isShow;
	    	}
	    },
	}
</script>