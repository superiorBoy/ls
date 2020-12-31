<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">案情内容</view>
			<view class=" head_right hei_30_bold">
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body ">
			<view class="up_neirong" @click="zhanshi">
				<textarea value="" placeholder="" class=" hei_26" v-model="neirong_txt" maxlength="1000" />

				</view>
		
<view class="neirong hui_26"  v-if="!show" >
	<view class="">案情内容建议格式:</view>
	<view class="center" style="margin: 60rpx 0;">案情标题、案号、审理法院信息</view>
	<view class="">案情简介</view>
	<view class="">简述案情内容，需填写原告、被告、代理人、法定代表人等信息。</view>
	<view class="" style="margin-top: 80rpx;">案情简介</view>
	<view class="">简述描写办案的经过...</view>
	<view class=""style="margin-top: 80rpx;">案情结果</view>
	<view class="">简述案情的结果。写明判决结果及判决的理由，也可简述本案中应用的法条...</view>
	<view class=""style="margin-top: 80rpx;">审判人员</view>
	<view class="">裁判日期</view>
	<view class="center"style="margin-top: 80rpx;">请按照以上要求填写案件内容。</view>
	<view class="center">以中国裁判文书网的案例格式为准！</view>
</view>		

		
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				neirong_txt:'',
				show:false,
			}
		},
		created() {

		},
		onLoad(option) {
                var that=this
				uni.getStorage({
				    key: 'neirong',
				    success: function (res) {
						if(res.data!=''){
							that.neirong_txt=res.data
							that.show=true
						}
				        	
				    }
				}) 

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			change(){
				console.log(this.neirong_txt)
			},
			zhanshi(){
				this.show=true
			},
			save() {

uni.setStorage({
						key: 'neirong',　　　　　　　　　　　　
						data: this.neirong_txt,　
						success: function () {　 
							uni.navigateBack()
						}
					})   

				if (this.neirong_txt == '') {
					uni.showToast({
						title: '请输入内容',
						duration: 2000,
						icon: "none"
					});
					return false
				} 
					 
				console.log(this.neirong_txt)
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
		position: relative;
	}

	.shiming_list input {
		width: 500rpx;
		text-align: right;

	}

	.shiming_list_left {
		width: 170rpx;
	}
.up_neirong{
	width: 100%;
	height: 500rpx;
	position: absolute;
	left: 0;
}

.neirong,.up_neirong{
	padding: 30rpx;
	line-height: 40rpx;
	box-sizing: border-box;
}
.up_neirong textarea{
	padding: 0;
	width: 100%;
	min-height: 1000rpx;
}
.center{
	text-align: center;
}



</style>
