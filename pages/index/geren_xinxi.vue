<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text></view>
		</view>

		<view class="zi_body shiming_body">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">账号昵称</view>
				<input type="text" value="" placeholder="" class="hei_26" v-model="name" disabled="true" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">手机号码</view>
				<input type="text" value="" placeholder="" class="hei_26" v-model="shouji" disabled="true" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">Q Q</view>
				<input type="text" value="" placeholder="请输入qq" class="hei_26" v-model="qq" />
			</view>

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">微信</view>
				<input type="text" value="" placeholder="请输入微信" class="hei_26" v-model="weixin" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">电子邮箱</view>
				<input type="text" value="" placeholder="请输入电子邮箱" class="hei_26" v-model="youxiang" />
			</view>
			<navigator url="xieyi" class="shiming_list hei_28">
				<view class="shiming_list_left">用户协议</view>
				<image src="@/static/lsimg/go_r.png" mode="" style="width: 20rpx;height: 30rpx;"></image>
			</navigator>
			<navigator url="yinsi" class="shiming_list hei_28">
				<view class="shiming_list_left">隐私政策</view>
				<image src="@/static/lsimg/go_r.png" mode="" style="width: 20rpx;height: 30rpx;"></image>
			</navigator>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">客服电话</view>
				<text>0576-83885500</text>
			</view>
			<view class="youshi">
				<view class="youshi_top qian_28">简介</view>
				<textarea value="" placeholder="请输入" class="hei_26" v-model="youshi" maxlength="5000" />
			</view>
			<view class="tuichu hei_30" @click="tuichu">退出登录</view>
		</view>
	</view>
</template>

<script>
import socket from 'plus-websocket';
export default {
	data() {
		return {
			name: '',
			shouji: '',
			qq: '',
			weixin: '',
			youxiang: '',
			youshi: '',
			data: '',
			userid: ''
		};
	},
	created() {},
	onLoad(option) {
		// 获取用户信息
		this.$http
			.post({
				url: '/mapi/user/user'
			})
			.then(res => {
				this.data = res.data.user;
				this.name = res.data.user.nickname;
				this.shouji = res.data.user.mobile;
				this.qq = res.data.user.qq;
				this.weixin = res.data.user.weixin;
				this.youxiang = res.data.user.email;
				this.userid = res.data.user.userid;
				this.youshi = res.data.user.beizhu;
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		save() {
			// 修改用户信息
			this.$http
				.post({
					url: '/mapi/user/upuser',
					data: {
						email: this.youxiang,
						qq: this.qq,
						weixin: this.weixin,
						beizhu: this.youshi
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					}
				});
			console.log(this.name, this.shouji, this.qq, this.weixin, this.youxiang, this.youshi);
		},
		tuichu() {
			var that = this;
			// 修改用户信息
			this.$http
				.post({
					url: '/index/login/logout'
				})
				.then(res => {
					if (res.code == 0) {
						var url = that.$http.WebSocket_url;
						socket.closeSocket({
							url: 'wss://' + url + ':3348'
						});

						socket.onSocketClose(function(res) {
							console.log('WebSocket 已关闭！');
						});
						uni.switchTab({
							url: 'my'
						});
					}
				});
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #f7f7f7;
}

.shiming_list {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #f7f7f7;
	padding-left: 30rpx;
	padding-right: 30rpx;
	position: relative;
}

.youshi {
	padding-left: 30rpx;
	padding-right: 30rpx;
	height: 240rpx;
}
.youshi textarea {
	width: 100%;
	height: 100rpx;
	background-color: #fcfcfc;
	padding: 10rpx;
	box-sizing: border-box;
}

.youshi_top {
	line-height: 100rpx;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}
.shiming_list_right {
	display: flex;
	align-items: center;
}

.tuichu {
	text-align: center;
	line-height: 100rpx;
	border-top: 2rpx solid #eeeeee;
	border-bottom: 2rpx solid #eeeeee;
	height: 100rpx;
}
</style>
