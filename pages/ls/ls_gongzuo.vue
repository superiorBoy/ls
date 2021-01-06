<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">工作经历</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					开始时间
				</view>
				<picker mode='date' @change="time_change">
					<view :class="['zhuanchang_xuan',time==''?'qian_26':'hei_26']">{{time==''?'请选择':time}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
       <view class="shiming_list hei_28">
				<view class="shiming_list_left">
					结束时间
				</view>
				<picker mode='date' @change="time_change2">
					<view :class="['zhuanchang_xuan',time==''?'qian_26':'hei_26']">{{time2==''?'请选择':time2}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
	
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					任职机构
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="jigou" />
			</view>
         <view class="shiming_list hei_28">
				<view class="shiming_list_left">
					职务
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="zhiwu" />
			</view>
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				time:'',
				time2:'',
				jigou: '',
				zhiwu:'',
				id:''
			}
		},
		created() {

		},
		onLoad(option) {
			
    	if(option.item!=undefined){
			var item =JSON.parse(option.item)
				this.time=item.starttime
				this.time2=item.endtime
				this.jigou=item.school
				this.zhiwu=item.zhuanye
				this.id=item.lyinfoid
			}

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			time_change(data) {
				this.time = data.detail.value
			
			},
			time_change2(data) {
				this.time2 = data.detail.value
			
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
						title: '请填写任职机构',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhiwu == '') {
					uni.showToast({
						title: '请填写职务',
						duration: 2000,
						icon: "none"
					});
					return false
				} 

        this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:11,
					shijian:this.time,
					shijian2:this.time2,
					jigou:this.jigou,
					zhiwu:this.zhiwu,
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
