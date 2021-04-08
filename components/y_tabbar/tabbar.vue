<template>
	<view class="tabBar">
		<view v-for="(item, index) in tabBar" :key="item.url" class="tabbar_item" :class="{ active: item.url == currentPage }" @click="navTo(item, index)">
		<view class="">
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
		</view>	
			<view class="" v-if="index != 2"><image v-if="item.url != currentPage" :src="item.imgNormal" mode="widthFix"></image></view>
			<view class="tuqi" v-if="index == 2"><image :src="item.imgNormal" mode=""></image></view>

			<text v-if="index == 3 && num > 0" class="weidu">{{ num }}</text>
			<view class="text" v-if="index != 2">{{ item.text }}</view>
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
					url: 'index/tiwen',
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
			num: 0,
			closenum:0,
			muban:''
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
		this.huoqu_muban()
		this.is_login()
		this.$http
			.post({
				url: '/mapi/index/getopenshenhe'
			})
			.then(res => {
				if(res.data.zhan.openshenhe==1){
					this.tabBar[3].text='咨询'
					this.tabBar[3].url='index/tiwen'
				}
			});
			
	},

	methods: {
		navTo(item, index) {
			let _this = this;
			if (item.url == 'index/tiwen') {
				uni.navigateTo({
					url: '../../pages/index/tiwen'
				});
			} else {
				if (item.url !== _this.currentPage) {
					var isUrl = `/pages/${item.url}`;
					const that = this;
					// uni.redirectTo({
					// 	url: isUrl
					// });
					uni.switchTab({
						url:isUrl
					})
				} else {
					/* this.$parent.toTop() */
				}
			}
		},
		is_login(){
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if(res.data.user!=''){
	                 console.log('login')
						
						//  setInterval( () => {
						//    	this.huoqunum()	
						// }, 1000)
						
					}else{
						console.log('no')
					}
				});
		},
		huoqu_muban(){
			
			this.$http
				.post({
					url: '/mapi/index/getzhantemplate'
				})
				.then(res => {
					if(res.data.template==2 ||res.data.template==3){
						this.tabBar[0].imgNormal='/static/img/xh_tabber1.png'
						this.tabBar[0].imgClick='/static/img/xh_tabber1_on.png'
		                this.tabBar[1].imgNormal='/static/img/xh_tabber2.png'
						this.tabBar[1].imgClick='/static/img/xh_tabber2_on.png'
						this.tabBar[2].imgNormal='/static/img/xhfly.png'
						this.tabBar[2].imgClick='/static/img/xhfly.png'
						this.tabBar[3].imgNormal='/static/img/xh_tabber3.png'
						this.tabBar[3].imgClick='/static/img/xh_tabber3_on.png'
						this.tabBar[4].imgNormal='/static/img/xh_tabber4.png'
						this.tabBar[4].imgClick='/static/img/xh_tabber4_on.png'
					}
					
				});
		},
		huoqu_xiaoxi_list(){
			
			console.log('获取未读')
			this.$http
				.post({
					url: '/mapi/consult/messagecount'
				})
				.then(res => {
					if(res.code==0){
					this.num=res.data.messagecount-this.closenum
					}
				});
		},
		huoqunum(){
			this.$http
				.post({
					url: '/mapi/consult/messagecount1'
				})
				.then(res => {
					if(res.code==0){
					this.num=res.data.messagecount
					}
				});
			// this.$http
			// 	.post({
			// 		url: '/mapi/consult/messagelist'
			// 	})
			// 	.then(res => {
			// 		for (var i in res.data.messagelist){
			// 		if(!res.data.messagelist[i].user_to){
			// 			this.closenum+=res.data.messagelist[i].messagecount
			// 		}
			// 		}
			// 		// console.log(this.closenum)
			// 		this.huoqu_xiaoxi_list()
			// 	});
			
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
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	max-width: 750px;
}
.tabBar .tabbar_item {
	width: 20% !important;
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
	width: 20% !important;
}

.tabBar image {
	width: 42upx;
	height: 42upx;
	margin-left: 5upx;
	margin-bottom: 2rpx;
}
.active image{
	width: 42upx;
	height: 42upx;
	margin-left: 5upx;
	margin-bottom: 2rpx;
}
.weidu {
	width: auto;
	height: 32rpx;
	line-height: 32rpx;
	border-radius: 32rpx;
	min-width: 32rpx;
	padding: 0 4rpx;
	font-size: 24rpx;
	text-align: center;
	white-space: nowrap;
	position: absolute;
	top: 0;
	right: 21%;
	box-sizing: border-box;
	background-color: #f43a51;
	color: #ffffff;
}
.tuqi {
	position: relative;
	top: -20rpx;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

}
.tuqi image {
	width: 98rpx;
	height: 98rpx;
	box-shadow: 0px -2px 2px #dddddd;
	position: relative;
	left: -2rpx;
	border: 10rpx solid #FFFFFF;
	border-radius: 100%;
}
</style>
