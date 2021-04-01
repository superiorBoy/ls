<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">修改{{ state == 1 ? '昵称' :state == 2 ? 'QQ':state == 3 ?'微信':state == 4 ? '邮箱' :'简介' }}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="xiu_top hei_30">
				<view class="xiu_top_title">{{state == 1 ? '用户名' :state == 2 ? 'QQ号':state == 3 ?'微信号':state == 4 ?'邮箱': '简介'}}：</view>
				<view class="xiu_top_shuru"><input type="text" value="" v-model="shuru" class="hei_30" /></view>
				<view class="tishi qian_24" v-if="state==1">以英文字母或汉字开头，限4-16个字符，一个汉字为2个字符</view>

				<button type="" class="bai_30" @click="save()">确认修改</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shuru: '',
			user:''
		};
	},
	created() {},
	onLoad(option) {
		this.state = option.state;
		// 获取用户信息
		this.$http
			.post({
				url: '/mapi/user/user'
			})
			.then(res => {
				
				if(this.state==1){
					this.shuru=res.data.user.nickname
				}else if(this.state==2){
					this.shuru=res.data.user.qq
				}else if(this.state==3){
					this.shuru=res.data.user.weixin
				}else if(this.state==4){
					this.shuru=res.data.user.email
				}else if(this.state==5){
					this.shuru=res.data.user.beizhu
				}
				this.user=res.data.user

			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		
		save() {
			if(this.state==1){
				this.$http
					.post({
						url: '/mapi/user/upnickname',
						data: {
							nickname:this.shuru,
							img:this.user.photourl
						}
					})
					.then(res => {
						console.log(res.code);
						if (res.code == 0) {
							uni.showToast({
								title: '修改成功',
								duration: 2000,
								icon: 'none'
							});
							setTimeout(function(){
								uni.navigateBack();
							},1000)
						}
					});
					return false
			}else if(this.state==2){
				var data={
					qq:this.shuru,
					weixin:this.user.weixin,
					email:this.user.email,
					beizhu:this.user.beizhu,
				}
			}else if(this.state==3){
				var data={
					weixin:this.shuru,
					email:this.user.email,
					beizhu:this.user.beizhu,
					qq:this.user.qq
				}
			}else if(this.state==4){
				var data={
					email:this.shuru,
					weixin:this.user.weixin,
					beizhu:this.user.beizhu,
					qq:this.user.qq
				}
			}else if(this.state==5){
				var data={
					email:this.user.email,
					weixin:this.user.weixin,
					beizhu:this.shuru,
					qq:this.user.qq
				}
			}
             
			this.$http
				.post({
					url: '/mapi/user/upuser',
					data: data
				})
				.then(res => {
					console.log(res.code);
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000,
							icon: 'none'
						});
						setTimeout(function(){
							uni.navigateBack();
						},1000)
					}
				});

			// console.log(this.name, this.shouji, this.qq, this.weixin, this.youxiang);
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.xiu_top {
	padding: 0 30rpx 0 30rpx;
}
.tishi {
	padding-top: 20rpx;
	
}
.xiu_top button {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 370rpx;
}
.xiu_top_title {
	line-height: 126rpx;
}
.xiu_top_shuru {
	height: 70rpx;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f0f0f0;
}
.xiu_top_shuru input{
	width: 100%;
}
</style>
