<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">咨询详情</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<view class="erji_weizhi hui_26_bold">
				<text @click="go_index()">首页</text>	
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<view @click="navigateBack()" v-if="data.consult">{{fenlei_list[data.consult.typeid].typename}}</view> 
				<image src="@/static/img/zhishi_weizhi.png" mode=""></image>
				<text class="hei_30">咨询详情</text>
			</view>
			<view class="wenti hei_28" v-if="data != ''">
				{{ data.consult.information }}
				<view class="wenti_center qian_24">
					<text>{{ data.consult.province }}-{{ data.consult.city }}用户发布</text>
					<text>{{ data.consult.addtime | timeStamp }}</text>
				</view>
				<view class="wenti_bottom">
					<view class="wenti_bottom_left hei_24">
						<image src="@/static/img/zixun_wen.png" mode=""></image>
						问题大致一样，细节不同？
					</view>
					<text class="lv_24">点击获取针对性解答></text>
				</view>
			</view>
			<view class="huida_num hei_28">
				共
				<text class="hong_28">{{ data.consult_replycount }}</text>
				位律师回复
			</view>
			<view class="ls_list">
				<view class="huifu_item" v-for="item in huifu_list">
					<view class="huifu_item_top">
						<image :src="img_url + item.photourl" mode="" @click="go_zhuye(item.userid)"></image>
						<view class="huifu_item_top_r">
							<view class="huifu_item_name">
								<view class="hei_30 ls_name"  @click="go_zhuye(item.userid)">
									{{ item.nickname }}律师
									<image src="@/static/img/renzheng.png" mode=""></image>
								</view>
								<view class="qian_24">
									已解答
									<text class="lv_24">{{ item.replynum }}</text>
									次
								</view>
							</view>
							<button type="" class="bai_24" @click="go_chat(item.userid)">咨询TA</button>
						</view>
					</view>
					<view class="hei_26 huida_txt">{{ item.information }}</view>
					<view class="zhui_list">
						<view class="zhui_item" v-for="zhui_item in item.zhuiwen">
							<text class="zhuiwen qian_20">{{ zhui_item.type == 1 ? '追问' : '追答' }}</text>
							<text class="zhuiwen_body qian_24">{{ zhui_item.information }}</text>
						</view>
					</view>
					<view class="qian_24 huida_time">{{ item.addtime | timeStamp }}回答</view>
				</view>
			</view>

			<view class="get_more hei_26" @click="get_more()" v-if="!is_all">查看更多></view>

			<view class="manyi">
				<view class="hei_30">律师解答不满意？想要更详细的答案？</view>
				<button type="" class="bai_26" @click="go_lvshi">
					<image src="@/static/img/shouzhi_icon.png" mode=""></image>
					开始提问，获取专业解答
				</button>
				<view class="manyi_bottom">
					<view class="manyi_bottom_item hei_26">
						<image src="@/static/img/duihao.png" mode=""></image>
						更快速
					</view>
					<view class="manyi_bottom_item hei_26">
						<image src="@/static/img/duihao.png" mode=""></image>
						更准确
					</view>
					<view class="manyi_bottom_item hei_26">
						<image src="@/static/img/duihao.png" mode=""></image>
						更全面
					</view>
				</view>
			</view>

			<view class="zixun_bottom">
				<view class="shipin_dibu">
					<view class="shipin_dibu_left">
						<view class="shipin_dibu_item " @click="go_index">
							<image src="@/static/img/zhu_shouye.png" mode="" style="width: 43rpx;height:36rpx;"></image>
							<view class="hei_20">首页</view>
						</view>
						<view class="shipin_dibu_item " @click="shoucang">
							<image :src="shou ? '../../static/img/yi_shoucang.png' : '../../static/img/zhu_shoucang.png'" mode="" style="width: 36rpx;height: 36rpx;"></image>
							<view class="hei_20">收藏</view>
						</view>
						<view class="shipin_dibu_item " @click="share">
							<image src="@/static/img/zhu_fenxiang.png" mode="" style="width: 36rpx;height: 36rpx;"></image>
							<view class="hei_20">分享</view>
						</view>
					</view>
					<button type="" class="bai_32" @click="go_lvshi">
						<view class="bai_30_bold">在线问律师</view>
						<view class="bai_20">向律师说明问题，获取专业法律意见</view>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	onShow() {
		
	
		
	},
	onLoad(option) {
		console.log(option);
		if (option.id != undefined) {
			
			// 获取分类
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.fenlei_list = res.data.type;
					this.get_xq(option.id);
				});
			
			this.wenid = option.id;
		}
	},
	data() {
		return {
			is_zhankai: true,
			shou: false,
			img_url: uni.getStorageSync('img_url'),
			data: '',
			huifu_list: [],
			wenid: '',
			is_all: false,
			fenlei_list:[]
		};
	},
	created() {},

	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		get_xq(id) {
			this.$http.post({
					url: '/mapi/consult/zixun_xq',
					data: {
						consultid: id
					}
				})
				.then(res => {
					console.log(res);
					this.data = res.data;
					this.huifu_list = res.data.consult_reply;
					if (res.data.consult_replycount < 5) {
						this.is_all = true;
					}
				});
		},

		zhan() {
			this.is_zhankai = !this.is_zhankai;
		},
		go_index() {
			uni.switchTab({
				url: 'index'
			});
		},
		shoucang() {
			uni.showToast({
				title: '已收藏',
				duration: 2000
			});
			this.shou = true;
		},
		go_zixun(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(id){
			uni.navigateTo({
				url:'pay?lawyerid='+id+'&type=1'
			})
		},
		go_lvshi() {
			uni.switchTab({
				url: 'lvshi'
			});
		},
		go_zhuye(id) {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid='+id
			});
		},
		// 获取更多回复
		get_more() {
			var last_id = this.huifu_list[this.huifu_list.length - 1].crid;
			this.$http.post({
					url: '/mapi/consult/getconsult_reply',
					data: {
						consultid: this.wenid,
						crid: last_id
					}
				})
				.then(res => {
					console.log(res);
					if (res.data.consult_reply.length < 5) {
						this.is_all = true;
					}
					for (var i = 0; i < res.data.consult_reply.length; i++) {
						this.huifu_list.push(res.data.consult_reply[i]);
					}
				});
		},
		// 分享
		share(){
			uni.navigateTo({
				url:'sucai?state=1'
			})
		},
	},
	filters: {
		timeStamp: function(value) {
			if(value==null){
				return 'null'
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.head {
	border-bottom: 2rpx solid #e8e8e8;
}

.wenti {
	padding: 19rpx 30rpx;
	background-color: #ffffff;
	margin-bottom: 20rpx;
}
.wenti_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20rpx 0;
}
.wenti_bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60rpx;
	background-color: #f5f5f5;
	border-radius: 5rpx;
	padding: 0 24rpx 0 15rpx;
}
.wenti_bottom_left image {
	width: 22rpx;
	height: 22rpx;
	margin-right: 10rpx;
}

.huida_num {
	height: 90rpx;
	line-height: 90rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid #f7f7f7;
	padding: 0 30rpx;
}

.ls_list {
	padding: 0 30rpx;
	background-color: #ffffff;
}
.huifu_item {
	border-bottom: 2rpx solid #f7f7f7;
	padding: 30rpx 0;
}
.huifu_item_top {
	display: flex;
}
.huifu_item_top_r {
	display: flex;
	justify-content: space-between;
	width: 83%;
}

.huifu_item_top image {
	width: 95rpx;
	height: 95rpx;
	border-radius: 100%;
	margin-right: 23rpx;
}

.huifu_item_name image {
	width: 17rpx;
	height: 14rpx;
	margin-left: 14rpx;
}
.ls_name {
	margin-bottom: 12rpx;
}
.huifu_item_top button {
	width: 120rpx;
	height: 44rpx;
	background-color: #0eb77e;
	border-radius: 22rpx;
	line-height: 44rpx;
	margin: 0;
	padding: 0;
}

.huida_txt {
	margin: 20rpx 0 15rpx;
}
.manyi {
	padding: 0 80rpx;
	margin: 88rpx 0 200rpx;
	text-align: center;
}
.manyi button {
	height: 74rpx;
	background-color: #0eb77e;
	border-radius: 37rpx;
	margin: 29rpx 0;
	line-height: 74rpx;
}
.manyi button image {
	width: 26rpx;
	height: 23rpx;
	margin-right: 8rpx;
}
.manyi_bottom {
	display: flex;
	justify-content: center;
}
.manyi_bottom image {
	width: 26rpx;
	height: 26rpx;
	margin-right: 9rpx;
}
.manyi_bottom_item {
	display: flex;
	align-items: center;
	margin-right: 70rpx;
}
.manyi_bottom_item:last-child {
	margin-right: 0;
}
.shipin_dibu {
	position: fixed;
	height: 100rpx;
	bottom: 00;
	width: 100%;
	padding: 0 0 0 30rpx;
	display: flex;
	box-sizing: border-box;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(0, 0, 0, 0.13);
	max-width: 750px;
}
.shipin_dibu_left {
	display: flex;
	width: 38%;
	align-items: center;
}
.shipin_dibu button {
	width: 62%;
	height: 100%;
	background-color: #0eb77e;
	border-radius: 0;
	padding: 12rpx 0 0;
}
.shipin_dibu button view {
	line-height: 30rpx;
	margin-bottom: 14rpx;
}
.shipin_dibu_item {
	width: 33.33%;
	text-align: center;
}
.shipin_dibu_item image {
	margin-bottom: 6rpx;
}
.zhui_list {
	margin-bottom: 6rpx;
}
.zhuiwen {
	
	border: 1px solid #EEEEEE;
	padding: 0rpx 6rpx;
	line-height: 32rpx;
	height: 32rpx;
	border-radius:14rpx;
	/* 	position: relative;
	top: 6rpx; */
	margin-right: 6rpx;
}
.zhui_item {
	display: flex;
	align-items: flex-start;
	margin-bottom: 8rpx;
}
.zhuiwen_body {
	max-width: 90%;
	line-height: 34rpx;
}
.get_more {
	height: 90rpx;
	background-color: #dcdcdc;
	line-height: 90rpx;
	text-align: center;
}
.erji_weizhi {
	height: 70rpx;
	background-color: #f9f9f9;
	display: flex;
	align-items: center;
	margin: 0rpx 0 0rpx;
	padding-left: 30rpx;
	border-bottom: 1px solid #e8e8e8;
}
.erji_weizhi image {
	margin: 0 13rpx 0 20rpx;
	width: 24rpx;
	height: 100%;
}
</style>
