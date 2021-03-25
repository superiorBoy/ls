<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">服务管理</view>
			<view class=" head_right hei_30_bold" ></view>
		</view>

		<view class="zi_body ">
			<view class="fuwu_top">
				
		
			<view class="fuwu_list">
				<view class="fuwu_list_left qian_24">
				<image src="@/static/lsimg/ls_guanli1.png" mode=""></image>	<text class="hei_30 fuwu_leixing">服务范围</text> 
				<text v-if="zhuanchang_arry[lawyerauth.expertise1] && zhuanchang_arry[lawyerauth.expertise1].shanchangname" class="youshi">{{zhuanchang_arry[lawyerauth.expertise1].shanchangname}}</text>
				<text v-if="zhuanchang_arry[lawyerauth.expertise2] && zhuanchang_arry[lawyerauth.expertise2].shanchangname" class="youshi">{{zhuanchang_arry[lawyerauth.expertise2].shanchangname}}</text>
				<text v-if="zhuanchang_arry[lawyerauth.expertise3] && zhuanchang_arry[lawyerauth.expertise3].shanchangname" class="youshi">{{zhuanchang_arry[lawyerauth.expertise3].shanchangname}}</text>
				</view>
				<view class="fuwu_list_right">
					<image src="@/static/lsimg/go_r.png" mode=""></image>
				</view>
			</view>
			<view class="fuwu_list">
				<view class="fuwu_list_left qian_24">
				  <image src="@/static/lsimg/ls_guanli2.png" mode=""></image> <text class="hei_30 fuwu_leixing">	服务地区</text> {{lawyerauth.province}} {{lawyerauth.city}}
				</view>
				<view class="fuwu_list_right">
					<image src="@/static/lsimg/go_r.png" mode=""></image>
				</view>
			</view>
			</view>
			<view class="fuwu_top">
				
					
			<view class="fuwu_list">
				<view class="fuwu_list_left qian_24">
					<image src="@/static/lsimg/ls_guanli3.png" mode=""></image><text class="hei_30 fuwu_leixing">在线咨询</text>结算金额￥<text class="hong_24">{{user.chatprice}}</text>/单
				</view>
				<view class="fuwu_list_right">
					<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#0eb77e'/>
				</view>
			</view>
			<view class="fuwu_list">
				<view class="fuwu_list_left qian_24">
				  <image src="@/static/lsimg/ls_guanli4.png" mode=""></image> <text class="hei_30 fuwu_leixing">电话咨询</text>结算金额￥<text class="hong_24">{{user.phoneprice}}</text>/单
				</view>
				<view class="fuwu_list_right">
					<switch name="switch" :disabled="true" @click="tanchu" :checked='kaiqi' color='#0eb77e'/>
				</view>
			</view>
			</view>
			
		</view>
	<view class="bg" v-if="is_tan">
		<view class="tan_tishi" >
			<view class="tan_tishi_top hei_30_bold">
				<view class="tan_tishi_top_left hong_30_bold">
			       <image src="@/static/lsimg/jinggao.png" mode=""></image>	<text>提示</text>
					</view>
				 <image src="@/static/img/tan_close.png" mode="" @click="close" class="guanbi"></image>
			</view>
			<view class="hui_24 tan_tishi_txt">
				必须是 vip会员 才可以开启
			</view>
			<button type="" class="bai_26" @click="close">知道啦</button>
		</view>
	</view>	
		
	</view>
</template>

<script>
export default {
	data() {
		return {
          is_tan:false,
		  user:'',
		  lawyerauth:'',
		  zhuanchang_arry:[],
		  kaiqi:false,
		  userid:''
			
		};
	},
	created() {},
	onLoad(option) {
		// 获取分类
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				this.user = res.data.user;
			});
			// 
			this.$http
				.post({
					url: '/mapi/lawyer/getshanchang'
				})
				.then(res => {
					this.zhuanchang_arry = res.data.shanchang;
					this.huoqu_lawyerauth();
				});
		
		
			this.huoqu_kaiqi()
	},
	onShow() {
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_lawyerauth(){
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data:{
						type:2
					}
				})
				.then(res => {
					this.lawyerauth = res.data.lawyerauth;
				});
		},
		huoqu_kaiqi(){
			this.$http
				.post({
					url: '/mlawyerapi/consult/auto_match'
				})
				.then(res => {
					if(res.data.lawyer){
						// this.userid=res.data.lawyer.userid
						
						if(res.data.lawyer.auto_match==1){
							this.kaiqi=true
						}else{
							this.kaiqi=false
						}
					}
					
					
				});
		},
		tanchu(){
			if(!this.kaiqi){
				this.is_tan=true
			}else{
				this.$http
					.post({
						url: '/mlawyerapi/consult/auto_matchclose'
					})
					.then(res => {
						if(res.code==0){
							uni.showToast({
								title: '已关闭',
								duration: 2000,
								icon: 'none'
							});
							this.huoqu_kaiqi()
						}
						
					});
				
			}
			
		},
		close(){
			this.is_tan=false
		}
		
	}
};
</script>

<style>
	page{
		background-color: #f3f3f3;
	}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.fuwu_top{
	padding: 0 30rpx;
	background-color: #FFFFFF;
	margin-bottom: 20rpx;
}
.fuwu_list{
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2rpx solid #e8e8e8;
	
}
.fuwu_list_left{
	display: flex;
	align-items: center;
}
.fuwu_list_left image{
	width: 36rpx;
		height: 36rpx;
		margin-right: 20rpx;
		border-radius: 5rpx;
}
.fuwu_list:last-child{
	border: none;
}
.fuwu_leixing{
	margin-right: 22rpx;
}
.fuwu_list_right{

}
.fuwu_list_right image{
	width: 10rpx;
		height: 17rpx;
}
.tan_tishi{
				width: 472rpx;
				height: 290rpx;
				background-color: #ffffff;
				border-radius: 5rpx;
			
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			padding: 0 20rpx;
			box-sizing: border-box;
	}
	.tan_tishi_top_left{
		display: flex;
		align-items: center;
	}
	.tan_tishi_top_left image{
			width: 31rpx;
			height: 27rpx;
			margin-right: 10rpx;
	}
	.bg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
		position: fixed;
		top: 0;
	}
	.tan_tishi_top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 86rpx;
		border-bottom: 1rpx solid #cccccc;
	}
	.guanbi {
		width: 17rpx;
			height: 17rpx;
	}
	.tan_tishi button{
			width: 167rpx;
			height: 50rpx;
			background-color: #0eb77e;
			border-radius: 5rpx;
			line-height: 50rpx;
	}
	.tan_tishi_txt{
		margin: 40rpx 0;
	}
	.youshi{
		margin-right: 10rpx;
	}
</style>
