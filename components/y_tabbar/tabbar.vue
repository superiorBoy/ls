<template>
	<view class="tabBar">
		<view v-for="(item, index) in tabBar" :key="item.url" class="tabbar_item" :class="{ active: item.url == currentPage }" @click="navTo(item, index)">
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
			<view class=""v-if="index!=2">
			<image v-if="item.url != currentPage" :src="item.imgNormal" mode="" ></image>
			</view>
			<view class="tuqi"v-if="index==2">
				<image :src="item.imgNormal" mode=""></image>
			</view>
			
            <text v-if="index==1&&num>0" class="weidu">{{num}}</text>
			<view class="text" v-if="index!=2">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		currentPage: {
			type: String,
			default: 'index'
		},
		num:{
			type: String,
			default: "num"
			
		}
	},
	data() {
		return {
			tabBar: [
				{
					url: 'index/index',
					text: '首页',
					imgNormal: '/static/img/shouye_icon.png',
					imgClick: '/static/img/on_shouye_icon.png'
				},
				{
					url: 'index/lvshi',
					text: '律师',
					imgNormal: '/static/img/lvshi_icon.png',
					imgClick: '/static/img/on_lvshi_icon.png'
				},
				{
					url: 'ls/tiwen',
					text: '按钮',
					imgNormal: '/static/img/fly.png',
					imgClick: '/static/img/fly.png'
				},
				{
					url: 'index/xiaoxi',
					text: '消息',
					imgNormal: '/static/img/xiaoxi_icon.png',
					imgClick: '/static/img/on_xiaoxi_icon.png'
				},
				{
					url: 'index/my',
					text: '我的',
					imgNormal: '/static/img/my_icon.png',
					imgClick: '/static/img/on_my_icon.png'
				}
			],
			level: '3',
			weidu:0,
			
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

	box-sizing: border-box;
	box-shadow:  0px 0px 10px rgba(0,0,0,.2);
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
	color: #0eb77e;
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
.tuqi{
	position: relative;
	top: -20rpx;
	border: 10rpx solid #FFFFFF;
	background-color: #FFFFFF;
	border-radius: 100%;
	padding: 10rpx;
	
	display: flex;
	align-items: center;
	justify-content: center;
}
.tuqi image{
		width: 98rpx;
		height: 98rpx;
}
</style>
