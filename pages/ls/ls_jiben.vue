<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">基本信息</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					姓名
				</view>
				<input type="text" value="" placeholder="" class="hei_26" v-model="name" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					性别
				</view>
				<picker :range="xing_arry" @change="jiating_change">
					<view class="zhuanchang_xuan hei_26">{{xingbie}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
				
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					生日
				</view>
				<picker mode='date' @change="shengri_change" >
					<view :class="['zhuanchang_xuan',shengri==''?'qian_26':'hei_26']">{{shengri==''?'例如：1990-08-20':shengri}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					身份证号
				</view>
				<input type="text" value="" placeholder="未填写" class="hei_26" v-model="shenfenhao" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					属相
				</view>
				<input type="text" value="" placeholder="未填写" class="hei_26" v-model="shuxiang" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					民族
				</view>
				<input type="text" value="" placeholder="未填写" class="hei_26" v-model="minzu" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					星座
				</view>
				<input type="text" value="" placeholder="未填写" class="hei_26" v-model="xingzuo" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					家庭
				</view>
			    <input type="text" value="" placeholder="单身贵族/为人父母" class="hei_26" v-model="jiating_txt" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					故乡
				</view>
				<input type="text" value="" placeholder="具体到市区" class="hei_26" v-model="guxiang" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					语言
				</view>
				<input type="text" value="" placeholder="语言能力，如：普通话，英语，日语等" class="hei_26" v-model="yuyan" />
			</view>
		</view>




	</view>



</template>

<script>
	export default {

		data() {
			return {
				name: '',
				xingbie: '',
				shengri: '',
				shenfenhao: '',
				shuxiang: '',
				minzu: '',
				xingzuo: '',
				jiating_txt: '',
				guxiang: '',
				yuyan: '',
				xing_arry: ['男', '女'],
			}
		},
		created() {

		},
		onLoad(option) {
	         this.$http
			 .post({
			 	url: '/mlawyerapi/lawyer/lawyerinfo',
			 	data:{
			 		state:1
			 	}
			 })
			 .then(res => {	
				   this.name=res.data.lawyer.nickname
				   if(res.data.lawyer.sexid==1){
					   this.xingbie='男'
					   }else{
						   this.xingbie='女'
					   }
					   this.shengri=res.data.lawyer.birthday
					   this.shenfenhao=res.data.lawyer.idcard
					   this.shuxiang=res.data.lawyer.shuxiang
					   this.minzu=res.data.lawyer.mingzu
					   this.xingzuo=res.data.lawyer.xingzuo
					   this.jiating_txt=res.data.lawyer.jiating
					   this.guxiang=res.data.lawyer.hometown
					   this.yuyan=res.data.lawyer.yuyan
				   
			 });

		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			shengri_change(data) {
				this.shengri = data.detail.value
			},
			jiating_change(data) {
				this.xingbie = this.xing_arry[data.detail.value]
			},
			save() {
if(this.name==''){
	uni.showToast({
		title: '请输入姓名',
		duration: 2000,
		icon: "none"
	});
	return false
}else if(this.xingbie==''){
	uni.showToast({
		title: '请输入性别',
		duration: 2000,
		icon: "none"
	});
	return false
}else if(this.xingbie==''){
	uni.showToast({
		title: '请输入性别',
		duration: 2000,
		icon: "none"
	});
	return false
}else if(this.shengri==''){
	uni.showToast({
		title: '请选择生日',
		duration: 2000,
		icon: "none"
	});
	return false
}else if(this.shenfenhao==''){
	uni.showToast({
		title: '请输入身份证号',
		duration: 2000,
		icon: "none"
	});
	return false
}

  if(this.xingbie=='男'){
	 var  xingbie_id='1'
	}else if(this.xingbie=='女'){
		 var  xingbie_id='2'
	 }

  this.$http
            .post({
            	url: '/lawyer/user/zx_geren',
            	data:{
            		state:1,
            		xingming:this.name,
					xingbie:xingbie_id,
					shengri:this.shengri,
					shenfen:this.shenfenhao,
					guxiang:this.guxiang,
					shuxiang:this.shuxiang,
					xingzuo:this.xingzuo,
					minzu:this.minzu,
					jiating:this.jiating_txt,
					yuyan:this.yuyan
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
				console.log(this.name, this.xingbie, this.shengri, this.shenfenhao, this.shuxiang, this.minzu, this.xingzuo, this.jiating_txt,
					this.guxiang, this.yuyan)
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
		width: 500rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;

	}
</style>
