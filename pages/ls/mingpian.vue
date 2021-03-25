<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">我的名片</view>
			<view class=" head_right hei_30_bold" ></view>
		</view>

		<view class="zi_body ">
			<view class="mingpain_top">
				<view class="mingpain_top_tx">
					<image :src="img_url+user.photourl" mode="" class="tx"></image>
					<image src="../../static/img/renzheng2.png" mode="" class="ren"></image>
				</view>
				<view class="bai_40_bold">
					{{user.nickname}}律师
				</view>
				<view class="mingpian_dizhi bai_28">
					<image src="../../static/lsimg/bai_dizhi.png" mode=""></image>{{zhiye_ren.province}}·{{zhiye_ren.city}}
				</view>
				<view class="mingpian_lvsuo bai_28">
					<image src="../../static/lsimg/bai_lvsuo.png" mode=""></image>{{zhiye_ren.lvsuo}}
				</view>
				<view class="mingpian_zhuanchang bai_26">
									<text v-if="zhuanchang_arry[zhiye_ren.expertise1] && zhuanchang_arry[zhiye_ren.expertise1].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise1].shanchangname}}</text>
									<text v-if="zhuanchang_arry[zhiye_ren.expertise2] && zhuanchang_arry[zhiye_ren.expertise2].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise2].shanchangname}}</text>
									<text v-if="zhuanchang_arry[zhiye_ren.expertise3] && zhuanchang_arry[zhiye_ren.expertise3].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise3].shanchangname}}</text>
				</view>
			</view>
               <view class="ming_pian">
               	<image :src="codeImg" mode=""></image>
				<view class="qian_26">
					扫描二维码，法律问题来咨询
				</view>
               </view>
			   <view class="fenxiang hui_26">
			   	<text></text>分享名片<text></text>
			   </view>
			<view class="fenxiang_list hui_26">
				<view class="fenxiang_item" @click="fenxiang_weixin()">
					<image src="../../static/lsimg/weixin.png" mode=""></image>
					<view class="">
						微信
					</view>
				</view>
				<view class="fenxiang_item" @click="fenxiang_pengyouquan()">
					<image src="../../static/lsimg/pengyouquan.png" mode=""></image>
					<view class="">
						朋友圈
					</view>
				</view>
				<view class="fenxiang_item" @click="baocun()">
					<image src="../../static/lsimg/baocun.png" mode=""></image>
					<view class="">
						保存图片
					</view>
				</view>
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
			img_url: uni.getStorageSync('img_url'),
			zhuanchang_arry:[],
			zhiye_ren:'',
			user:'',
			erweima:'',
			codeImg:''
		};
	},
	created() {},
	onLoad(option) {
		
		this.huoqu_zhangchang_lei()
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				
				this.user=res.data.user
		
			});
		this.tupain()
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tupain(){
			var that=this
			uni.request({
				url: that.$http.baseUrl + '/mlawyerapi/user/lawyer_qrcode',
				method: 'POST',
                responseType: "arraybuffer",
				success: function(res) {
                let datas = res.data
				that.codeImg = 'data:image/png;base64,' + btoa(
													new Uint8Array(datas).reduce((datas, byte) => datas + String.fromCharCode(byte), '')
												);                
				},
				fail: function(resp) {}
			});
		},
	 urlTobase64(img) {
	
	 },
	

		huoqu_zhangchang_lei(){
			this.$http
				.post({
					url: '/mapi/index/getshanchang'
				})
				.then(res => {
					this.huoqu_renzheng()
					this.zhuanchang_arry=res.data.shanchang
				});
		},
		huoqu_renzheng(){
			// 获取用户信息
					this.$http
						.post({
							url: '/mlawyerapi/lawyer/auth',
							data:{
								type:2
							}
						})
						.then(res => {
							this.zhiye_ren=res.data.lawyerauth
							
						});
		},
		baocun() {
					const that = this;
					uni.downloadFile({url,
						success: res => {
							if (res.statusCode === 200) {
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										this.tools.toast('保存成功');
									},
									fail: function() {
										this.tools.toast('保存失败，请稍后重试');
									}
								});
							} else {
								this.tools.toast('下载失败');
							}
						}
					});
		},
        fenxiang_weixin(){
			uni.share({
			    provider: "weixin",
			    scene: "WXSceneSession",
			    type: 2,
			    imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		},
		fenxiang_pengyouquan(){
			uni.share({
			    provider: "weixin",
			    scene: "WXSenceTimeline",
			    type: 2,
			    imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		}
		
		
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.mingpain_top{
		height: 543rpx;
		background: url(../../static/lsimg/ming_bg.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		padding-top: 40rpx;
		box-sizing: border-box;
}
.mingpain_top_tx{
	width: 150rpx;
		height: 151rpx;
		background-color: #3c86c7;
		border: solid 3rpx #ceffee;
		border-radius: 100%;
		position: relative;
		margin: 0rpx auto 20rpx;
}
.tx{
	width: 100%;
	height: 100%;
	border-radius: 100%;
	
}
.ren{
		width: 18rpx;
		height: 18rpx;
		background-color: #ffad2b;
		border: solid 2rpx #ffffff;
		border-radius: 100%;
		position: absolute;
		bottom: 10rpx;
		right: 10rpx;
}
.mingpian_dizhi{
	margin: 20rpx 0;
}
.mingpian_dizhi image{
		width: 28rpx;
		height: 29rpx;
		vertical-align: middle;
		margin-right: 10rpx;
}
	
.mingpian_lvsuo image{
		width: 34rpx;
			height: 33rpx;
		vertical-align: middle;
		margin-right: 10rpx;
}
.mingpian_zhuanchang{
	margin-top: 36rpx;
}
.mingpian_zhuanchang text{
	display: inline-block;
		height: 60rpx;
		background-color: #39bf84;
		line-height: 60rpx;
		padding: 0 30rpx;
		margin-right: 20rpx;
}
.mingpian_zhuanchang text:last-child{
	margin-right: 0;
}
.ming_pian{
	text-align: center;
	margin-top: 65rpx;
}
.ming_pian image{
		width: 254rpx;
		height: 258rpx;
		margin-bottom: 30rpx;
}
.fenxiang{
	margin: 160rpx 0 50rpx;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.fenxiang text{
	width: 150rpx;
	height: 2rpx;
	background-color: #c6c6c6;
	display: inline-block;
}
.fenxiang text:first-child{
	margin-right: 20rpx;
}
.fenxiang text:last-child{
	margin-left: 20rpx;
}
.fenxiang_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 100rpx 100rpx;
}
.fenxiang_item{
	text-align: center;
}
.fenxiang_item image{
		width: 62rpx;
		height: 61rpx;
		margin-bottom: 20rpx;
}
</style>
