<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">学术成果</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					成果类型
				</view>
				<input type="text" value="" v-model="wen_leixing"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					文章链接
				</view>
				<input type="text" value="" v-model="wen_lianjie"/>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					发表平台
				</view>
				<input type="text" value="" v-model="wen_pingtai" />
			</view>
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

			<view class="jianjie hei_28">
				成果
				<textarea value="" placeholder="请填写具体学术成果内容" class="jianjie_txt" v-model="jianjie_txt" />
				</view>

		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				time:'',
				jianjie_txt: '',
				wen_leixing:'',
				wen_lianjie:'',
				wen_pingtai:'',
				id:''
			
			}
		},
		created() {

		},
		onLoad(option) {
                  console.log(option)
				  if(option.id!=undefined){
				  		this.id=option.id
					
						this.wen_leixing=option.leixing
						this.wen_lianjie=option.lianjie
						this.wen_pingtai=option.pingtai
				  		this.time=option.time
				  		this.jianjie_txt=option.neirong
						if(option.leixing=="null"){
							this.wen_leixing=''
						}
						if(option.lianjie=="null"){
							this.wen_lianjie=''
						}
						if(option.pingtai=="null"){
							this.wen_pingtai=''
						}
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
				}else if (this.jianjie_txt == '') {
					uni.showToast({
						title: '请填写报道内容',
						duration: 2000,
						icon: "none"
					});
					return false
				}

          this.$http
			 .post({
			 	url: '/lawyer/user/zx_geren',
			 	data:{
			 		state:9,
					riqi:this.time,
					neirong:this.jianjie_txt,
					leixing:this.wen_leixing,
					lianjie:this.wen_lianjie,
					pintai:this.wen_pingtai,
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



				console.log(this.wen_leixing,this.wen_lianjie,this.wen_pingtai,this.time, this.jianjie_txt)
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
.shiming_list input{
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
