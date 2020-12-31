<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">教育背景</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					入学时间
				</view>
				<picker mode='date' @change="ruxue_change">
					<view :class="['zhuanchang_xuan',ruxue==''?'qian_26':'hei_26']">{{ruxue==''?'请选择':ruxue}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					毕业时间
				</view>
				<picker mode='date' @change="biye_change">
					<view :class="['zhuanchang_xuan',biye==''?'qian_26':'hei_26']">{{biye==''?'请选择':biye}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					学校
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="xuexiao" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					学位
				</view>
				<picker :range="jiating" @change="xuewei_change">
					<view :class="['zhuanchang_xuan',xuewei==''?'qian_26':'hei_26']"><text>{{xuewei==''?'请选择':xuewei}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					专业
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="zhuanye" />
			</view>
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {

				ruxue: '',
				biye: '',
				xuexiao: '',
				xuewei: '',
				jiating: [],
				zhuanye: '',
				index:'',
				id:'',
				xuewei_id:'',
				xue:[]
			}
		},
		created() {

		},
		onLoad(option) {
			console.log(option)
			if(option.index!=undefined){
			this.index=option.index
				
			}
             this.$http
			 .post({
			 	url: '/mlawyerapi/lawyer/lawyerinfo',
			 	data:{
			 		state:5
			 	}
			 })
			 .then(res => {	
				 var array = [];
				 for (var key in res.data.xueli) {
				 	array.push(res.data.xueli[key]);
				 }
				 this.xue = res.data.xueli;
				  this.jiating=array
				  if(this.index!=''){
					  this.id=res.data.lawyerinfo[this.index].lyinfoid
				     this.ruxue=res.data.lawyerinfo[this.index].starttime
					 this.biye=res.data.lawyerinfo[this.index].endtime
					 this.xuexiao=res.data.lawyerinfo[this.index].school
					 this.xuewei=res.data.xueli[res.data.lawyerinfo[this.index].xueli]
					 this.zhuanye=res.data.lawyerinfo[this.index].zhuanye  
				  }
 
			 });

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			ruxue_change(data) {

				this.ruxue = data.detail.value
			},
			biye_change(data) {
				this.biye = data.detail.value

			},
			xuewei_change(data) {
				this.xuewei = this.jiating[data.detail.value]
				
			},
			save() {
						 for(let key  in this.xue){
								if(this.xue[key]==this.xuewei){
									this.xuewei_id=key
								}
								
						  }
				if (this.ruxue == '请选择') {
					uni.showToast({
						title: '请选择入学时间',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.biye == '请选择') {
					uni.showToast({
						title: '请选择毕业时间',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.xuexiao == '') {
					uni.showToast({
						title: '请填写学校',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.xuewei == '请选择') {
					uni.showToast({
						title: '请选择学位',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhuanye == '') {
					uni.showToast({
						title: '请填写专业',
						duration: 2000,
						icon: "none"
					});
					return false
				}
				
        this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:5,
					shijian:this.ruxue,
					shijian2:this.biye,
					xuexiao:this.xuexiao,
					zhuanye:this.zhuanye,
					xueli:this.xuewei_id,
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

				console.log(this.ruxue, this.biye, this.xuexiao, this.xuewei, this.zhuanye)
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

	.jianjie {
		padding: 0 30rpx;
		line-height: 100rpx;
	}

	.jianjie_txt {
		font-size: 28rpx;
		width: 100%;
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
