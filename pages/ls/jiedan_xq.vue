<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">接单详情</view>
			<view class=" head_right hei_30_bold" >
				
			</view>
		</view>

		<view class="zi_body shiming_body">

		
			<view class="jiedan_top">
				<image :src="img_url+item.photourl" mode="" class="jiedan_tx"></image>
				<view class="jiedan_top_right">
					<view class="hei_30">
						{{item.nickname}}
					</view>
					<view class="hui_26 dianhua">
						{{yincang(item.phone) }}  <text class="kejian bai_26">接洽后可见</text>
					</view>
					<view class="jiedan_top_bot qian_22">
						<view class="dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>{{item.province}}-{{item.city}}
						</view>
						<view class="time">
							<image src="@/static/lsimg/shijian_icon.png" mode=""></image>{{ item.addtime | timeStamp }}
						</view>
					</view>
				</view>
			</view>
			
			<view class="anjian_xinxi">
				<view class="anjian_xinxi_title hei_30_bold">
					案件关键信息
				</view>
				<view class="guanjian hui_26" v-if="fenlei_list.length>0">
					案件关键词：<view class=" hei_26 guanjian_r">
						{{fenlei_list[item.typeid].typename}}
					</view>
				</view>
				<view class="guanjian hui_26">
					<text class="xq">案情详情：</text>
					<view class=" hei_26 guanjian_r">
						{{item.information}}
					</view>
				</view>
			</view>
			
			
	

				<view class="jiedan_zhanwei"></view>
			<view class="baocun_btn">
			<!-- 	<view class="qian_22 jiedan_tishi">
					<image src="@/static/lsimg/xiaolian.png" mode=""></image><view class="suoxiao">您是非认证律师,通过网站认证以后才能接洽本案哦~<navigator url="ls_renzheng">立即去认证</navigator></view>
				</view> -->
				<view class="baocun_btn_bott">
			<button type="" class="bai_30 baocun_b" @click="save">确认接单</button>
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
				yuming: '',
				beianhao: '',
				xingming: '',
				dianhua: '',
				shenfenzheng: '',
				qq: '',
				weixin: '',
				youshi_txt:'',
				is_dis:false,
				bt_txt:'提交申请',
				item:'',
				fenlei_list:[]
			}
		},
		created() {

		},
		onLoad(option) {
           this.item=JSON.parse(option.item)
		   // this.is_dis=true,
		   // this.bt_txt='此网站已开通'
		   console.log(this.item)
          // 获取分类
          this.$http
          	.post({
          		url: '/mapi/index/gettype'
          	})
          	.then(res => {
          		this.fenlei_list = res.data.type;
          	});
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},


			save() {
			this.$http
				.post({
					url: '/mlawyerapi/consult/qiangdan',
					data:{
						consultid:this.item.consultid
					}
				})
				.then(res => {
					if(res.code==0){
						uni.showToast({
							title: '抢单成功',
							duration: 2000
						});
						setTimeout(function(){
						 uni.navigateTo({
						 	url:'zixun_jilu'
						 })
						},2000) 
					}
				})
			},
			yincang(num){
		        num =num.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2")
				return num
			}

		},
		filters: {
			timeStamp: function(value) {
				if(value==null){
					return 'null'
				}
				var i = (value + '').length;
				while (i++ < 13) value = value + '0';
				value = Number(value);
				var date = new Date(value);
				//date.setTime(value);
				var month = date.getMonth() + 1;
				var hours = date.getHours();
				if (hours < 10) hours = '0' + hours;
				var minutes = date.getMinutes();
				if (minutes < 10) minutes = '0' + minutes;
				var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
				return time;
			}
		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.jiedan_tx{
			width: 87rpx;
			height: 87rpx;
			border-radius: 100%;
			margin-right: 17rpx;
	}
	.jiedan_top{
		padding:  30rpx; 
		display: flex;
		border-bottom: 2rpx solid #E8E8E8;
	}
	.dizhi image{
		width: 18rpx;
			height: 20rpx;
			margin-right: 10rpx;
	}
	.dizhi{
		margin-right: 46rpx;
	}
	.time image{
			width: 21rpx;
			height: 21rpx;
			margin-right: 10rpx;
	}
	.dianhua{
		margin: 14rpx 0;
	}
	.jiedan_top_bot{
		display: flex;
	}
	.kejian{
		display: inline-block;
		width: 156rpx;
			height: 44rpx;
			background-color: #f43a51;
			border-radius: 22rpx;
			line-height: 44rpx;
			text-align: center;
			margin-left: 17rpx;
	}
	.anjian_xinxi{
		padding: 0 30rpx 30rpx;
		border-bottom: 2rpx solid #E8E8E8;
	}
	.anjian_xinxi_title{
		padding-left: 16rpx;
		margin: 23rpx 0;
		position: relative;
	}
	.anjian_xinxi_title::before{
		content: '';
		position: absolute;
		width: 4rpx;
			height: 29rpx;
			background-color: #0eb77e;
			left: 0rpx;
			top: 8rpx;
		
	}
	.guanjian{
		display: flex;
		margin-bottom: 10rpx;
		line-height: 40rpx;
	}
	.guanjian_r{
		max-width: 520rpx
	}
	.xq{
		margin-left: 26rpx;
	}
	.jiedan_tishi{
		margin-bottom: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.jiedan_tishi .suoxiao{
	display: flex;
     -webkit-text-size-adjust:none;
   -webkit-transform-origin-x: 0;
             -webkit-transform: scale(0.9);
	}
	.jiedan_tishi image{
		width: 24rpx;
			height: 24rpx;
			margin-right: 4rpx;
			vertical-align: middle;
	}
	.jiedan_zhanwei{
		height:158rpx;
	}
	.baocun_btn{
		padding: 10rpx 0rpx 40rpx 30rpx;
		margin-top: 90rpx;
		position: fixed;
		bottom:0rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: #FFFFFF;
		border-top: 2rpx solid #E8E8E8;
		max-width: 750px;
	}
	.baocun_b {
			height: 88rpx;
			background-color: #0eb77e;
			border-radius: 44rpx;
			line-height: 88rpx;
			
	}
	.baocun_btn_bott{
		padding-right: 30rpx;
		padding-top: 20rpx;
	}
	.hui{
		background-color: #999999;
		color: #FFFFFF;
			border-radius: 44px;
	}
</style>
