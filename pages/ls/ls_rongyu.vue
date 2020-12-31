<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">荣誉奖励</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					时间
				</view>
				<picker mode='date' @change="time_change">
					<view :class="['zhuanchang_xuan',time==''?'qian_26':'hei_26']">{{time==''?'请选择':time}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>

	
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					颁发机构/荣誉名称
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="jigou" />
			</view>
<!-- <view class="shiming_list hei_28">
				<view class="shiming_list_left">
					荣誉名称
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="name" />
			</view> -->
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				time:'',
				jigou: '',
				id:''
			}
		},
		created() {

		},
		onLoad(option) {
			console.log(option)
    	if(option.id!=undefined){
				this.id=option.id
				this.time=option.time
				this.jigou=option.jigou
			}

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			time_change(data) {
				this.time = data.detail.value
			
			},
			save() {

				if (this.time == '请选择') {
					uni.showToast({
						title: '请选择时间',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.jigou == '') {
					uni.showToast({
						title: '请填写颁发机构',
						duration: 2000,
						icon: "none"
					});
					return false
				} 

        this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:7,
					riqi:this.time,
					jigou:this.jigou,
					lyinfoid:this.id
			 	}
			 })
			 .then(res => {	
				if(res.code==0){
					uni.showToast({
						title: '操作成功',
						duration: 2000
					});
					setTimeout(function(){
									uni.navigateBack()
								},2000)
				}
  
			 });

				console.log(this.time, this.jigou)
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
		width: 300rpx;
	}

	.zhuanchang_xuan {
		/* width: 500rpx; */
		padding-right: 30rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: right;
		text-align: right;
	}

	.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;

	}
</style>
