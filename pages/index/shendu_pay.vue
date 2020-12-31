<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold" style="width: 60%;">确认服务并支付</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="pay_top">
				<view class="pay_top_left">
					<image src="@/static/img/tuwen_pay.png" mode=""></image>
					<view class="pay_top_name">
						<view class="hei_30">深度图文咨询服务</view>
						<view class="hui_26 jiage">
							<text class="hong_26">
								￥
								<text class="hong_30_bold">19.80</text>
							</text>
							<text style="margin-left: 20rpx;">限时60分钟</text>
						</view>
					</view>
				</view>
				<text class="lv_26" @click="kan()">费用说明</text>
			</view>

			<view class="jiejue qian_26">
				<view class="jiejue_wenti">
					<image src="@/static/img/jiejue_wenti.png" mode=""></image>
					问题解决率高达99%
				</view>
				<view class="jiejue_manyi">
					<image src="@/static/img/jiejue_manyi.png" mode=""></image>
					不满意自动退款
				</view>
			</view>

			<view class="pay_neirong">
				<view class="pay_neirong_list pay_neirong_txt">
					<text class="hei_30_bold">服务内容：</text>
					<text class="qian_26">（根据自信内容智能分析，仅供参考)</text>
				</view>
				<view class="pay_neirong_list hei_26">
					<image src="/static/img/zhifu_xuan_bg.png" mode=""></image>
					案情剖析以及相关法律条文举证
				</view>
				<view class="pay_neirong_list hei_26">
					<image src="/static/img/zhifu_xuan_bg.png" mode=""></image>
					法律关系及利害分析
				</view>
				<view class="pay_neirong_list hei_26">
					<image src="/static/img/zhifu_xuan_bg.png" mode=""></image>
					给出专业建议
				</view>
			</view>
			<view class="pay_liucheng">
				<view class="pay_liucheng_title hei_30_bold">服务流程：</view>
				<view class="hei_26 pay_liucheng_txt">由系统指派专业对口、服务优秀的律师解答，响应最快的律师将为您服务。</view>
				<view class="chakan qian_26">
					<view class="chakan_list">
						<image src="@/static/img/tx.png" mode=""></image>
						<image src="@/static/img/tx.png" mode=""></image>
						<image src="@/static/img/tx.png" mode=""></image>
					</view>
					孙旭权等律师已查看
				</view>
			</view>

			<view class="pay_bottom">
				<button type="" class="bai_30 weixin_pay" @click="weixin_pay()">
					<image src="@/static/img/tuwen_weixin.png" mode=""></image>
					微信支付（19.80）
				</button>
				<button type="" class="bai_30 zhifubao_pay" @click="zhifubao_pay()">
					<image src="@/static/img/tuwen_zhifubao.png" mode=""></image>
					支付宝支付（19.80）
				</button>
				<view class="qian_24">网站由阿里云提供安全保障，请放心支付</view>
			</view>
		</view>

		<uni-popup type="center" ref="popup">
			<view class="tan_jiage">
				<view class="tan_title"><image src="@/static/img/tan_close.png" mode="" @click="close"></image></view>
				<view class="feiyong_title hei_30_bold">服务费用说明</view>
				<view class="tan_bottom hei_26">
					<view class="">【费用】依据各地区《律服务收费行业指导标准》，您的线上服务将比线下咨询优惠。</view>
					<view class="">【支持退款】如律师未能在12小时内做出答复，平台将在2个工作日内原路退回支付金额。同时，对律师服务不满意，可以在服务后投诉，申请退款。</view>
					<view class="">该服务律师仅对您提交的法律问题及其相关问题做出解答，非法律问题律师有权不做解答，且不会退回支付金额；</view>
					<view class="">该服务律师仅对您的咨询做出解答和建议，不包含文字 审查、代写、陪同、案件代理等其他非法律咨询服务；</view>
					<view class="">律师给出的解答遵循国家法律法规及当地政策，不同的 律师给出不同答案时需要您结合实际情况做出判断。</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
export default {
	data() {
		return {};
	},
	components: {
		unpopup
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		kan() {
			this.$refs.popup.open();
		},
		close() {
			this.$refs.popup.close();
		},
		// 微信支付
		weixin_pay() {},
		// 支付宝支付
		zhifubao_pay() {}
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
.pay_top {
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	background-color: #ffffff;
	align-items: flex-end;
}
.pay_top_left {
	display: flex;
}
.pay_top image {
	width: 110rpx;
	height: 110rpx;
	margin-left: 30rpx;
	margin-right: 39rpx;
}
.jiage {
	margin-top: 26rpx;
}
.pay_top_name {
	padding-top: 6rpx;
}
.jiejue {
	display: flex;
	height: 65rpx;
	align-items: center;
	padding: 0 30rpx;
}
.jiejue_wenti {
	margin-right: 55rpx;
}
.jiejue_wenti image,
.jiejue_manyi image {
	width: 22rpx;
	height: 22rpx;
	margin-right: 14rpx;
}
.pay_neirong {
	background-color: #ffffff;
	padding: 30rpx 30rpx 35rpx;
	border-bottom: 2rpx solid #f7f7f7;
}

.pay_neirong_list {
	display: flex;
	align-items: center;
	margin-bottom: 16rpx;
}
.pay_neirong_list image {
	width: 26rpx;
	height: 26rpx;
	margin-right: 15rpx;
}
.pay_neirong_txt {
	margin-bottom: 26rpx;
}
.pay_liucheng {
	padding: 0 30rpx 30rpx;
	background-color: #ffffff;
}
.pay_liucheng_title {
	padding: 30rpx 0 24rpx;
}
.pay_liucheng_txt {
	line-height: 40rpx;
}
.chakan {
	display: flex;
	align-items: center;
	margin-top: 20rpx;
}
.chakan_list {
	margin-right: 20rpx;
}
.chakan_list image {
	width: 58rpx;
	height: 58rpx;
	margin-left: -10rpx;
}
.chakan_list image:first-child {
	margin-left: 0;
}
.pay_bottom {
	padding: 0 30rpx;
	margin: 85rpx 0 60rpx;
	text-align: center;
}
.weixin_pay {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-bottom: 16rpx;
	text-align: left;
	padding-left: 190rpx;
}
.weixin_pay image {
	width: 36rpx;
	height: 31rpx;
	margin-right: 10rpx;
}
.zhifubao_pay {
	height: 88rpx;
	background-color: #0078ff;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-bottom: 20rpx;
	vertical-align: middle;
	text-align: left;
	padding-left: 190rpx;
}
.zhifubao_pay image {
	width: 39rpx;
	height: 39rpx;
	margin-right: 10rpx;
	vertical-align: middle;
}
.tan_jiage {
	width: 691rpx;
	background-color: #ffffff;
	border-radius: 8rpx;
}
.tan_title {
	display: flex;
	justify-content: flex-end;
	padding: 0 38rpx;
	align-items: center;
	height: 78rpx;
}
.tan_title image {
	width: 26rpx;
	height: 26rpx;
}
.feiyong_title {
	text-align: center;
	margin-bottom: 68rpx;
}
.tan_bottom {
	padding: 0 24rpx 100rpx;
}
.tan_bottom view {
	margin-bottom: 20rpx;
	line-height: 40rpx;
}
</style>
