<template>
	<view class="body">
	<index v-if="muban==1" ref="shouye"></index>
	<xiaohua v-if="muban==2" ref="shouye"></xiaohua>	
	<lvyi v-if="muban==3" ref="shouye"></lvyi>
    </view>
</template>

<script>
import index from '@/components/index/index.vue';
import xiaohua from '@/components/xiaohua/index.vue';
import lvyi from '@/components/lvyi/index.vue';
import socket from 'plus-websocket';
export default {
	data() {
		return {
			muban:''
			
		};
	},
	components: {
		index,
		xiaohua,
		lvyi
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
	onHide() {

	// #ifdef APP-PLUS
	socket.closeSocket();
	// #endif
	},
	onShow() {
		
			
		// this.$refs.shouye.shuxin_zujian();
	
	},
	onReady() {
	},
	methods: {


	
	},

};
</script>

<style>

</style>
