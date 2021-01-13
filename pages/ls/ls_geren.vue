<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">个人简介</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

			<!-- <view class="shiming_list hei_28">
				<view class="shiming_list_left">
					律师姓名及职务
				</view>
				<input type="text" value="" class="hei_26" v-model="zhiwu" />
			</view> -->

			<view class="jianjie hei_28">
				个人简介
				<textarea value="" placeholder="请介绍一下自己，让大家更好的认识你..."maxlength="5000" class="jianjie_txt" v-model="jianjie" />
		    </view>



		</view>




	</view>



</template>

<script>
	export default {

		data() {
			return {
				zhiwu:'',
				jianjie:''
		
			}
		},
		created() {

		},
		onLoad(option) {
             //     this.$http
		 	// .post({
		 	// 	url: '/mlawyerapi/lawyer/lawyerinfo',
				// data:{
				// 	state:1
				// }
		 	// })
		 	// .then(res => {
            // this.zhiwu=res.data.lawyer.nickname
		 	// });
		this.$http
		.post({
			url: '/mlawyerapi/lawyer/lawyerinfo',
			data:{
				state:10
			}
		})
		.then(res => {	
		  	this.jianjie=res.data.lawyer.miaoshu
		});

		},
		onShow() {
			
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
         save(){
			 // if(this.zhiwu==''){
				//  uni.showToast({
				//  	title: '请输入律师姓名及职务',
				//  	duration: 2000,
				//  	icon: "none"
				//  });
				//  return false
			 // }else 
			 if(this.jianjie_txt==''){
				 uni.showToast({
				 	title: '请输入个人简介',
				 	duration: 2000,
				 	icon: "none"
				 });
				 return false
			 }
			 
			 this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:10,
					jianjie_txt:this.jianjie
			 	}
			 })
			 .then(res => {	
			        if(res.code==0){
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					}
			 });
			 
	        console.log(this.zhiwu,this.jianjie)
	       }


		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.shiming_list {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #E8E8E8;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.shiming_list input {
		width: 500rpx;
		padding-left: 10rpx;
		box-sizing: border-box;
	}

	.shiming_list_left {
		width: 200rpx;
	}

	.jianjie{
		padding: 0 30rpx;
		line-height: 100rpx;
	}
	.jianjie_txt{
		font-size:28rpx ;
		width: 100%;
		min-height: 800rpx;
	}
</style>
