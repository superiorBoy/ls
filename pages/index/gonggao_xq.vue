<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">网站公告</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">

        <view class="gg_xq_top">
        	<view class="xq_title hei_30_bold">
        		{{body.title}}
        	</view>
			<view class="qian_24">
				{{ body.addtime | timeStamp }}
			</view>
        </view>
			
<view class="xq_body hei_26">
	<u-parse :content="body.information"></u-parse>
	
<!-- 	<view >尊敬的用户：</view>
	<view >您好！</view>
	<view >为了给您提供更加优质、高效的服务，一淘文学网技术团队
对网站系统进行优化和升级。</view>
<view >【新版更新说明】</view>
<view >1、新增对PHP7.*系列运行环境的支持，兼容性更好。目前
系统完美支持PHP5.2到PHP7.2；</view>
<view >2、新增浏览器USER-AGENT验证功能，更高安全性：只有
包含指定信息的浏览器才可以访问后台，也就是说可以指定
某一台机器才能访问后台，更高安全性。；</view>
<view >3、新增支持HTTPS传输协议，更安全。可设置自动识别、
全站https、只后台https或者只前台https。；</view>
<view >4、COOKIE安全设置升级，更上一台阶：COOKIE信息保存
支持设置HttpOnly属性，后台直接设置。开启后JS无法获取
COOKIE信息，更安全。COOKIE信息保存支持设置secure
属性，后台直接设置。开启后只有https模式下才能获取
COOKIE信息，更安全。</view>
<view >在您浏览新版官网的过程中，发现页面或内容存在问题时，
请您尽快联系我们，我们会在第一时间进行核实修复！联系
方式：54512548@qq.com</view>
<view >小虎律师网以更好的用户体验为目标不断提升服务，感谢您
的支持与信任！</view>
<view >特此公告！</view>
<view style="text-align: right;margin-top: 20rpx;"> 小虎律师网运营团队</view>
<view style="text-align: right;">2020年10月19日</view> -->
</view>
			
		
		</view>

	</view>



</template>

<script>
	import uParse from '@/components/feng-parse/parse.vue';
	export default {
	components: {
		uParse
	},
		data() {
			return {
                  body:''
			}
		},
		created() {

		},
		onLoad(option) {

	this.$http
			.post({
				url: '/mapi/user/noticedetail',
				data:{
					noticeid:option.id
				}

			})
			.then(res => {
				this.body = res.data.notice;
			});

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			xq() {
				uni.navigateTo({
					url: 'help_xq?id=' + this.id1,
				})
			}
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
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #F7F7F7;
	}
.gg_xq_top{
	text-align: center;
	padding:30rpx 30rpx ;
}
.xq_title{
	margin-bottom: 10rpx;
}
.xq_body{
	padding: 0 30rpx;
	line-height: 44rpx;
}
</style>
