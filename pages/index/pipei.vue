<template>
	<view class="pipai_body">
		
	
	<view class="body">
		<view class="head" >
			<view class="head_back"><image src="@/static/img/bai_back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center bai_38_bold">匹配律师</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		
			<view class="pipei_body">
				<view class="bai_34 pipei_txt">
					{{txt}}
				</view>
				
				
				<view class="pipei_ls" v-if="yi_pipei">
					<view class="pipei_ls_top">
						<image :src="img_url+lvshi.photourl" mode="" class="pipei_ls_tx"></image>
						<image src="@/static/img/renzheng2.png" mode="" class="pipei_ls_ren"></image>
					</view>
					<view class="bai_30">
						{{lvshi.nickname}}律师
					</view>
					<view class="bai_22 jieda_num">
						已解答 {{lvshi.replynum}} 次
					</view>
					<view class="bai_24 shanchang_arry">
						擅长：
						<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
						<text v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
						<text v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
					</view>
					<button type="" class="lv_30" @click="chat()">前去咨询</button>
				</view>
				
				
			</view>
			
		
	</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			txt:'系统正在为您匹配律师中，请稍后...',
			yi_pipei:false,
			lvshi:'',
			lawyerid:'',
			zhuanchang_arry:[]
			
		};
	},
	created() {},
	onLoad(option) {
		
		this.$http.post({
			url: '/mapi/consult/consult_xq',
			data:{
				consultid:option.consultid
			}
		
		}).then(res => {
			if(res.code==0){
				this.lawyerid=res.data.consult.lawyerid
				this.huoqu_shanchang()
				
			}
			console.log(res)
		})
		
		var that=this
	setTimeout(function(){
			   console.log('11111')
			   that.yi_pipei=true
			   that.txt='系统已为您匹配到最优律师'
			   
	},1000)
	},
	onShow() {
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_shanchang(){
			this.$http
				.post({
					url: '/mapi/lawyer/getshanchang'
				})
				.then(res => {
					this.zhuanchang_arry = res.data.shanchang;
					this.huoqu_ls_xinxi()
				});
		},
		huoqu_ls_xinxi(){
			this.$http.post({
				url: '/mapi/lawyer/lawyer',
				data:{
					lawyerid:this.lawyerid
				}
			
			}).then(res => {
				if(res.code==0){
					this.lvshi=res.data.lawyer
				}
				console.log(res)
			})
		},
		chat(){
			uni.navigateTo({
				url:'chat?lawyerid='+this.lawyerid
			})
		}

	}
};
</script>

<style>
.head {
	/* background-color:#0eb77e ; */
	background: none;
}

page{
	height: 100%;
	background: url(../../static/img/pipei_bg.png) no-repeat;
	background-size: 100% auto;
	background-position: center;
	background-color:#0eb77e ;
	width: 100%;
}
.pipei_txt{
padding-top: 60%;
text-align: center;
}
.pipei_ls{
	text-align: center;
	position: fixed;
	width: 100%;
	bottom: 80rpx;
}
.pipei_ls_top{
		width: 150rpx;
		height: 150rpx;
		background-color: #3c86c7;
		border: solid 3rpx #ceffee;
		position: relative;
		border-radius: 100%;
		margin: 0 auto 20rpx;
}
.pipei_ls_tx{
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.pipei_ls_ren{
	position: absolute;
	bottom: 10rpx;
	right: 10rpx;
		width: 15rpx;
		height: 16rpx;
		background-color: #FFFFFF;
		border: solid 2rpx #ffffff;
		border-radius: 100%;
}
.jieda_num{
	margin: 10rpx 0;
}
.pipei_ls button{
	width: 406rpx;
		height: 88rpx;
		background-color: #ffffff;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin-top: 40rpx;
}
.shanchang_arry text{
	margin-right: 10rpx;
}
</style>
