<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">收藏</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<view class="jingxuan_body ">
				<view class="shangxue_list" v-for="item in shoucang_list">
					<view class="shangxue_item">
						<view class="shangxue_item_left" @click="go_xq(item.consultid)"><image src="@/static/img/shangxue1.png" mode=""></image></view>
						<view class="shangxue_item_right">
							<view class="shangxue_item_title hei_28_bold">
								<text class="shoucang_wenzhang bai_22">咨询</text>
								<!-- 小虎律师 常见问题 -->
							</view>
							<view class="shangxue_item_body hui_26" @click="go_xq(item.consultid)">{{item.information}}</view>
							<view class="quxiao qian_24">
								<view class="quxiao_left hei_24"></view>
								<view class="quxiao_btn" @click="quxiao(item.consultid)">取消收藏</view>
							</view>
						</view>
					</view>
					<!-- <view class="shangxue_item">
						<view class="shangxue_item_left"><image src="@/static/img/shangxue2.png" mode=""></image></view>
						<view class="shangxue_item_right ">
							<view class="shangxue_item_tit_anli hei_28_bold ">
								<text class="shoucang_anli bai_22">案例</text>
								商业大楼公共通道被错误登记
								在个人名下十四年，律师团队全力
								调查认定为业主共有
							</view>
						
							<view class="quxiao qian_24">
								<view class="quxiao_left hei_24">
									<image src="@/static/lsimg/moren_tx.png" mode=""></image>
									李正霞律师
								</view>
								<view class="quxiao_btn">取消收藏</view>
							</view>
						</view>
					</view> -->
				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	onShow() {},

	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			shoucang_list: []
		};
	},
	created() {},
	onLoad(option) {
		this.huoqu_shoucang()
	},

	methods: {
	
		navigateBack() {
			uni.navigateBack();
		},
	
		huifu() {
			// this.$refs.huifu.open()
		},

		huoqu_shoucang() {
			this.$http
				.post({
					url: '/mapi/index/shoucanglist'
				})
				.then(res => {
					this.shoucang_list=res.data.list
				});
		},
		quxiao(consultid){
			this.$http
				.post({
					url: '/mapi/index/shoucang',
					data:{
						consultid:consultid
					}
				})
				.then(res => {
					if(res.code==0){
						
						uni.showToast({
							title: res.message,
							duration: 2000,
							icon: 'none'
						});
						this.huoqu_shoucang()
					}
				});
		},
		go_xq(consultid){
			uni.navigateTo({
				url: 'zhuye_zixun_xq?id=' + consultid
			});
		}

	
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
	min-height: 100%;
}

.shoucang_wenzhang {
	width: 60rpx;
	height: 30rpx;
	background-color: #0eb77e;
	border-radius: 2rpx;
	text-align: center;
	line-height: 30rpx;
	display: inline-block;
	margin-right: 6rpx;
}
.shoucang_anli {
	width: 60rpx;
	height: 30rpx;
	background-color: #f43a51;
	border-radius: 2rpx;
	display: inline-block;
	text-align: center;
	line-height: 30rpx;
	margin-right: 6rpx;
}
.shangxue_item_title {
  word-break: break-all;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
width: 430rpx;
}
.shangxue_item_tit_anli{
	margin-bottom: 10rpx;
}
.shangxue_list {
	margin-top: 20rpx;
}
.shangxue_item {
	background-color: #ffffff;
	padding: 19rpx 19rpx 19rpx 41rpx;
}
.shangxue_item_time image {
	width: 22rpx;
	height: 22rpx;
	margin-right: 10rpx;
}
.shangxue_item_left image {
	width: 240rpx;
	height: 172rpx;
	background-color: #ededef;
	border-radius: 10rpx;
	margin-right: 19rpx;
}
.shangxue_item {
	display: flex;
	margin-bottom: 20rpx;
}
.shangxue_item_right {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.quxiao {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.quxiao_left {
	display: flex;
	align-items: center;
}
.quxiao_left image {
	width: 42rpx;
	height: 43rpx;
	border-radius: 100%;
	margin-right: 9rpx;
}
.quxiao_btn {
	width: 116rpx;
	height: 42rpx;
	background-color: #ffffff;
	border-radius: 21rpx;
	border: solid 2rpx #dedede;
	line-height: 42rpx;
	text-align: center;
}
.shangxue_item_body {
	word-break: break-all;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	margin: 15rpx 0;
}
</style>
