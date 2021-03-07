<template>
	<view class="body">
	<index v-if="muban!=2" ref="shouye"></index>
	<xiaohua v-if="muban==2" ref="shouye"></xiaohua>		
    </view>
</template>

<script>
import index from '@/components/index/index.vue';
import xiaohua from '@/components/xiaohua/index.vue';

export default {
	data() {
		return {
			muban:''
			
		};
	},
	components: {
		index,
		xiaohua
	},
	created() {
	this.$http
		.post({
			url: '/mapi/index/getzhantemplate'
		})
		.then(res => {
			this.muban=res.data.template
		});
	},
	onLoad() {
		
	},
	onShow() {
		this.$refs.shouye.shuxin_zujian();
	},
	methods: {


	
	},

};
</script>

<style>

</style>
