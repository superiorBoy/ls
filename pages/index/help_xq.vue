<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">帮助中心</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body help_xq_body">
			<view class="help_xq_top hei_30_bold">{{title}}</view>
			<view class="help_txt hui_28">
				
				
				<u-parse :content="body"></u-parse>
			<!-- 	<view class="">
					<view>第一步：进入免费注册页面</view>
					<view>点击网站顶部的【免费注册】按钮，进入小虎律师网站 注册页面</view>
				</view>
				<view class="">
					第二步：根据自身情况选择适合的账号注册 律师网注册用户分为三种：公众用户、律师用户、律所用户；请根据提示填写自己的手机号、邮箱、密码。
					如：选择【公众用户】类型后，点击【注册公众立会员 】按钮进行注册。请确认您填写的手机号和电子邮箱地址正确有效，以便及时接收小虎律师网邮件提醒，以及在
					忘记登录密码时找回密码。
				</view>
				<view class="">第三步：完善资料：【*】代表必须填写的内容</view>
				<br />
				<view>（1）公众用户注册后需要完善个人资料，公众用户的个人资料不需要审核。</view>
				<br />
				<view>（2）律师和律所用户在注册后需要填写相关信息进行提交，稍后会有工作人员对其信息进行审核，审核认证后才可以成为小虎律师网正式用户，审核需要一个工作日。</view>
				<br />
				<view>
					【注】为了保证本站律师团队质量，律师网律师注册仅限执业律师，实习律师暂未开放注册。律师及律所用户请在个人资料中填写真实姓名，联系电话及执业证号等，
					以便您的资料尽快通过律师网审核，及时使用本站对正式注册律师开放的各种功能。
				</view>
				<br />
				第四步：完成注册 -->
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue';
export default {
	data() {
		return {
			title:'',
			body:'',
			item:''
		};
	},
	components: {
		uParse
	},
	created() {},
	onLoad(option) {
		// console.log(option);
		this.title=option.title
		  this.body=option.body
		   // this.item=JSON.parse(option.item)
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}

.help_xq_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
}

.help_xq_top {
	padding: 25rpx 0;
}

.help_txt {
	line-height: 40rpx;
}
</style>
