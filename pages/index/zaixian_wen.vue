<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">在线咨询</view>
			<view class=" head_right hong_30"></view>
		</view>
		<!-- 		<view class="tab_top hui_30" v-if="!user">
			<text class="lv_30">说明问题</text> > 接入律师 > 获取答案
		</view> -->

		<view class="zi_body">
			<view class="chat_body">
				<!-- 		<view class="tishi hui_30" v-if="!user">
					小虎律师法律咨询，信的过的好律师品牌，
					已经累计为3亿人次提供方便的法律解答。
					本次沟通已经加密，请放心输入你的问题，
					提交问题默认同意<text class="lv_30"> 《小虎律师用户协议》</text>
				</view> -->
				<view class="wen_jiage">
					<view class="wen_jiage_list wen_jiage_list1">
						<text class="bai_24">在线图文咨询</text>
						<text class="bai_26">58元/24小时</text>
						<view class="dianji" @click="go_tuwen_pay()">立即咨询</view>
					</view>
					<view class="wen_jiage_list wen_jiage_list2">
						<text class="bai_24">付费电话咨询</text>
						<view class="bai_26 fufei_wen">
							98元/20分钟
							<image src="@/static/img/fufei_wen.png" mode=""></image>
						</view>
						<view class="dianji">付费咨询</view>
					</view>
					<view class="wen_jiage_list wen_jiage_list3">
						<text class="bai_24">免费拨打电话</text>
						<text class="bai_24">{{ dianhua }}</text>
						<view class="dianji" @click="kan_dianhua">点击查看</view>
					</view>
				</view>

				<view class="chat_list chat_left">
					<image src="@/static/img/wen_kefu.png" mode="" class="tx"></image>
					<view class="chat_left_txt hei_26 " style="padding-bottom: 30rpx;">
						欢迎使用“小虎律师”在线法律咨询服务。请在下方输入框输入您的问题。
						<view class="hei_26_bold lin_hig" style="margin: 10rpx 0;">请简单说明您的问题：</view>
						<view class="qian_26 lin_hig">1、问题发生的简要背景，时间</view>
						<view class="qian_26 lin_hig">2、目前的进展或状况</view>
						<view class="qian_26 lin_hig">3、您的具体疑问题</view>
					</view>
				</view>
				<view class="chat_list chat_left">
					<image src="@/static/img/wen_kefu.png" mode="" class="tx"></image>
					<view class="chat_left_txt hei_26">你好，请问您遇见了什么法律问题？</view>
				</view>

				<view class="chat_list chat_right" v-for="item in my_message">
					<view class="chat_right_txt hei_26">{{ item }}</view>
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
				</view>
			</view>
			<view class="huifu_anxiu hui_22">
				<input type="text" value="" v-model="huifu_txt" placeholder="说说你遇见的问题吧~" class="hei_26" />
				<button type="" class="bai_26" @click="huifu">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '提问详情',
			huifu_txt: '',
			my_message: [],
			dianhua: '点击查看显示电话号码',
			userid: '',
			mobile:'',
			
		};
	},
	created() {},
	onLoad(option) {
		this.userid = option.user;
		this.mobile=option.mobile
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huifu() {
			if (this.huifu_txt == '') {
				uni.showToast({
					title: '请输入问题',
					duration: 2000,
					icon: 'none'
				});
				
				return false;
			}
	
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage.html',
					data: {
						userid_to: this.userid,
						msg: this.huifu_txt,
						type: 1
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.huifu_txt = '';
						this.my_message.push(this.huifu_txt);
					}
				});
			
			console.log(this.huifu_txt);
			
		},
		kan_dianhua() {
			this.dianhua = this.mobile;
		},
		go_tuwen_pay() {
			uni.navigateTo({
				url: 'pay'
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.tab_top {
	text-align: center;
	padding: 0rpx 38rpx 16rpx;
	background-color: #ffffff;
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}

.tishi {
	width: 630rpx;
	height: 200rpx;
	background-color: #e8e8e8;
	border-radius: 10rpx;
	margin: 33rpx auto 96rpx;
	box-sizing: border-box;
	padding: 12rpx 30rpx 30rpx;
}

.huifu_anxiu {
	display: flex;
	align-items: center;
	padding: 4rpx 30rpx 0;
	box-sizing: border-box;
	position: fixed;
	bottom: 0rpx;
	height: 150rpx;
	width: 100%;
	justify-content: space-between;
	background-color: #ffffff;
}

.huifu_anxiu input {
	width: 469rpx;
	height: 68rpx;
	background-color: #f7f7f7;
	border-radius: 34rpx;
	background-color: #f5f5f5;
	border: solid 1rpx #d5d5d5;
	padding-left: 35rpx;
	box-sizing: border-box;
}

.huifu_anxiu button {
	width: 196rpx;
	height: 68rpx;
	background-color: #0eb77e;
	border-radius: 34rpx;
	line-height: 68rpx;
	padding: 0;
	box-sizing: border-box;
}

.chat_list {
	display: flex;
	align-items: flex-start;
	margin-bottom: 30rpx;
}

.chat_list .tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
}

.chat_left .tx {
	margin-right: 34rpx;
}

.chat_body {
	padding: 0 30rpx 150rpx;
	overflow: auto;
}

.chat_body_jia {
	padding-bottom: 354rpx;
}

.chat_left_txt {
	max-width: 470rpx;
	position: relative;
	padding: 20rpx 20rpx;
	background-color: #ffffff;
}

.chat_left_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 0rpx;
	left: -26rpx;
	width: 26rpx;
	height: 30rpx;
	background: url(../../static/img/wen_chat_l.png) no-repeat;
	background-size: 100% 100%;
}

.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}

.chat_right_txt {
	max-width: 470rpx;
	background-color: #ffffff;
	position: relative;
	padding: 20rpx 20rpx;
}

.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 0rpx;
	right: -26rpx;
	width: 26rpx;
	height: 30rpx;
	background: url(../../static/img/wen_chat_r.png) no-repeat;
	background-size: 100% 100%;
}

.chat_right {
	justify-content: flex-end;
	display: flex;
}

.chat_right .tx {
	margin-left: 34rpx;
}

.lin_hig {
	line-height: 44rpx;
}
.wen_jiage {
	margin-bottom: 34rpx;
	padding-top: 20rpx;
}
.wen_jiage_list {
	margin-bottom: 20rpx;
	height: 81rpx;

	border-radius: 10rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 43rpx;
}
.dianji {
	width: 163rpx;
	height: 41rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	font-size: 24rpx;
	line-height: 41rpx;
	text-align: center;
}
.wen_jiage_list1 .dianji {
	color: #0eb77e;
}
.fufei_wen image {
	width: 20rpx;
	height: 20rpx;
	margin-left: 10rpx;
}
.wen_jiage_list1 {
	background: url(../../static/img/fufei_jia1.png) no-repeat;
	background-size: 100% 100%;
}
.wen_jiage_list2 {
	background: url(../../static/img/fufei_jia2.png) no-repeat;
	background-size: 100% 100%;
}
.wen_jiage_list3 {
	background: url(../../static/img/fufei_jia3.png) no-repeat;
	background-size: 100% 100%;
}
.wen_jiage_list2 .dianji {
	color: #bcb198;
}
.wen_jiage_list3 .dianji {
	color: #ef995f;
}
</style>
