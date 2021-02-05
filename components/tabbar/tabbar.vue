<template>
	<view class="tabBar">
		<view v-for="(item, index) in tabBar" :key="item.url" class="tabbar_item" :class="{ active: item.url == currentPage }" @click="navTo(item, index)">
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>

			<image v-else :src="item.imgNormal" mode=""></image>
            <text v-if="index==1&&num>0" class="weidu">{{num}}</text>
			<view class="text">{{ item.text }}</view>
		</view>
	</view>
	
</template>

<script>
export default {
	props: {
		currentPage: {
			type: String,
			default: 'index'
		}

	},
	data() {
		return {
			tabBar2: [
				{
					url: 'ls/index',
					text: '接单',
					imgNormal: '/static/lsimg/tab_jiedan_no.png',
					imgClick: '/static/lsimg/tab_jiedan_on.png'
				},
				{
					url: 'ls/xiaoxi',
					text: '消息',
					imgNormal: '/static/lsimg/tab_xiaoxi_no.png',
					imgClick: '/static/lsimg/tab_xiaoxi_on.png'
				},
				{
					url: 'ls/yaoqing',
					text: '邀请',
					imgNormal: '/static/lsimg/tab_yaoqing_no.png',
					imgClick: '/static/lsimg/tab_yaoqing_on.png'
				},
				{
					url: 'ls/my',
					text: '我的',
					imgNormal: '/static/lsimg/tab_my_no.png',
					imgClick: '/static/lsimg/tab_my_on.png'
				}
			],
			tabBar: [
				{
					url: 'ls/index',
					text: '接单',
					imgNormal: '/static/lsimg/tab_jiedan_no.png',
					imgClick: '/static/lsimg/tab_jiedan_on.png'
				},
				{
					url: 'ls/xiaoxi',
					text: '消息',
					imgNormal: '/static/lsimg/tab_xiaoxi_no.png',
					imgClick: '/static/lsimg/tab_xiaoxi_on.png'
				},
				
				{
					url: 'ls/my',
					text: '我的',
					imgNormal: '/static/lsimg/tab_my_no.png',
					imgClick: '/static/lsimg/tab_my_on.png'
				}
			],
			level: '3',
			num:0,
			
			
		};
	},
	mounted() {
		let userlevel = uni.getStorageSync('level');
		console.log(userlevel);
		let _this = this;
		// if (userlevel == 1) {
		// 	_this.tabBar.splice(3, 1);
		// } else {
		// 	_this.tabBar.splice(1, 1);
		// 	_this.tabBar.splice(1, 1);
		// }
	},
	created() {
		uni.hideTabBar({});
		this.huiqu_login()
		this.huo_qu_is_yaoqing()
		this.$http
			.post({
				url: '/mapi/index/getopenshenhe'
			})
			.then(res => {
				if(res.data.zhan.openshenhe==1){
					this.tabBar[1].text='咨询'
					this.tabBar[1].url='index/tiwen'
				}
			});
	},
	methods: {
		navTo(item, index) {
			let _this = this;
			console.log(item.url);

			if (item.url !== _this.currentPage) {
				var isUrl = `/pages/${item.url}`;
				const that = this;
				uni.redirectTo({
					url: isUrl
				});
			} else {
				/* this.$parent.toTop() */
			}
		},
		huo_qu_is_yaoqing(){
			this.$http
				.post({
					url: '/mapi/index/openinvite'
				})
				.then(res => {
					
					this.is_yaoqing=res.data.openinvite
					if(res.data.openinvite==1){
						this.tabBar=this.tabBar2
					}
				});
		},
		huiqu_login() {
			this.$http
				.post({
					url: '/lawyer/login/islogin'
				})
				.then(res => {
					if (res.data.user != '') {
						this.huoqunum()
					} else {
						
						
					}
				});
		},
		huoqunum(){
			this.$http
				.post({
					url: '/mlawyerapi/consult/messagecount'
				})
				.then(res => {
					if(res.code==0){
					this.num=	res.data.messagecount
					if(res.data.messagecount>0){
						
						void plus.push.createMessage('律师端有未读消息');
						console.log('111')
					}
					}
				});
		}
	}
};
</script>

<style>
.tabBar {
	width: 100vw;
	height: 100upx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 998;
	background-color: white;
	color: 999;
	border-left: 1px solid #eeeeee;
	border-top: 1px solid #eeeeee;
	border-right: 1px solid #eeeeee;
	display: flex;
	justify-content: space-around;
	border-top-right-radius: 20upx;
	border-top-left-radius: 20upx;
	box-sizing: border-box;
	overflow: hidden;
	max-width: 750px;
}
.tabBar .tabbar_item {
	width: 25%;
	font-size: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}
.tabBar .active {
	/* border-left: $isBorder;
                border-top: $isBorder; */
	background: white;
	color: #f43a51;
}

.tabBar image {
	width: 42upx;
	height:42upx;
	margin-left: 5upx;
	margin-bottom: 8rpx;
}
.weidu{
	    width: auto;
	    height: 32rpx;
	    line-height: 32rpx;
	    border-radius: 32rpx;
	    min-width:32rpx;
	    padding: 0 4rpx;
	    font-size: 24rpx;
	    text-align: center;
	    white-space: nowrap;
		position: absolute;
		top: 0;
		right: 30%;
		box-sizing: border-box;
		background-color:#f43a51 ;
		color: #FFFFFF;
}
</style>
