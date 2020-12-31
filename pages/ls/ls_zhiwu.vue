<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">社会职务</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					状态
				</view>
				<picker :range="jiating" @change="xuewei_change">
					<view :class="['zhuanchang_xuan',zhuangtai==''?'qian_26':'hei_26']"><text>{{zhuangtai==''?'请选择':zhuangtai}}</text>
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
				zhuangtai: '',
				jigou: '',
				zhiwu: '',
				jiating: ['曾任', '现任'],
				id:''
			}
		},
		created() {

		},
		onLoad(option) {
            console.log(option)
			if(option.id!=undefined){
				this.id=option.id
				this.jigou=option.jigou
				this.zhiwu=option.zhiwu
				if(option.zhuangtai==1){
					this.zhuangtai='曾任'
				}else{
					this.zhuangtai='现任'
				}
				
			}

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			xuewei_change(data) {
				this.zhuangtai = this.jiating[data.detail.value]
			},
			save() {

				if (this.zhuangtai == '请选择') {
					uni.showToast({
						title: '请选择状态',
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
				if(this.zhuangtai=='曾任'){
					var zhuang_id=1
				}else if(this.zhuangtai=='现任'){
					var zhuang_id=2
				}
				

    this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:6,
					zwzhuangtai:zhuang_id,
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

				console.log(this.zhuangtai, this.jigou, this.zhiwu)
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
