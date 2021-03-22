<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">案件委托</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<image src="@/static/img/weituo_top.png" mode="widthFix" class="weituo_banner"></image>
			<view class="weituo_buzhou">
			<view class="weituo_buzhou_top">
				<image src="@/static/img/weituo1.png" mode="" style="width:30rpx ;height: 34rpx;"></image>
				<image src="@/static/img/weituo2.png" mode=""style="width:33rpx ;height: 34rpx;"></image>
				<image src="@/static/img/weituo3.png" mode=""style="width:34rpx ;height: 33rpx;"></image>
			</view>	
			<view class="buzou_tiao">
				<image src="@/static/img/weituo_buzhou.png" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view class="buzou_bottom qian_26">
				<text class="lv_26">提交案件</text>
				<text>平台筛选律师</text>
				<text>联系律师</text>
			</view>
			</view>
			<view class="weituo_bottom">
				<view class="miaoshu">
					<view class="miaoshu_title hei_26">
						案件描述
					</view>
				   <textarea value="" placeholder="请简要描述案件经过，以及您希望通过法律途径得到的结果（不少于30字）" v-model="miaoshu" class="hei_26"/>
				</view>
				<view class="weituo_list">
					<text class="hei_26">案件类型</text>
					<picker :range="type_arry" @change="lei_change" :range-key="'typename'">
						<text  :class="['',leixing==''?'qian_30':'hei_30']">{{leixing==''?'请选择':leixing}}</text>
						<image src="@/static/lsimg/go_r.png" mode="" style="width: 12rpx;height: 21rpx;margin-left: 22rpx;vertical-align: middle;"></image>
					</picker>
				</view>
				<view class="weituo_list">
					<text class="hei_26">所在城市</text>
					<pickerAddress @change="change" >
						
						<text  :class="['',dizhi==''?'qian_30':'hei_30']">{{dizhi==''?'请选择':dizhi}}</text>
						<image src="@/static/lsimg/go_r.png" mode="" style="width: 12rpx;height: 21rpx;margin-left: 22rpx;vertical-align: middle;"></image>
					</pickerAddress>
				</view>
				<view class="weituo_list">
					<text class="hei_26">联系人</text>
					<view class="weituo_list_lianxi hei_26">
						<input type="text" value="" placeholder="请输入联系人" class="hei_26" v-model="lianxi"/>
						<label class="radio" @click="radio(1)" >
							<radio value="1" :checked="sex == 1"/><text style="margin-left: 6rpx;">先生</text>
						</label>
						<label class="radio" @click="radio(2)">
							<radio value="2" :checked="sex == 2"/><text style="margin-left: 6rpx;">女士</text>
						</label>
						
					</view>	
				</view>
				<view class="weituo_list weituo_list_dianhua">
					<text class="hei_26">联系电话</text>
					<input type="text" value="" v-model="dianhua" placeholder="请输入联系电话" class="hei_26"/>
				</view>
				<view class="tishi qian_22">
					* 联系电话仅用于平台及接案律师与您联系确认
				</view>
				<button type="" @click="tijiao" class="bai_30">提交案件</button>
				<view class="xiyi hui_22">
					<image src="@/static/img/lan_tongyi.png" mode=""></image>
					已阅读并同意
					<navigator url="xieyi" class="lan">《用户协议》</navigator>
					<navigator url="yinsi"  class="lan">《隐私政策》</navigator>
				
				</view>
			</view>
			
			
		
		</view>
	</view>
</template>

<script>
	import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			miaoshu:'',
			leixing:'',
			typeid:'',
			type_arry:[],
			dizhi:'',
			lianxi:'',
			sex:'',
			dianhua:'',
			fenlei:''
		
		};
	},
	components: {
		pickerAddress2,
		pickerAddress
	},
	created() {
	},
	onLoad(option) {
			// 获取分类
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					this.fenlei = res.data.type;
					var array = [];
					for (var key in res.data.type) {
						array.push(res.data.type[key]);
					}
					this.type_arry = array;
					
				});
			
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		// 类型选择
		lei_change(e){
		
				this.leixing = this.fenlei[e.detail.value].typename;
				this.typeid = this.fenlei[e.detail.value].typeid;
				console.log(this.typeid);
			
		},
		change(data) {
			console.log(data);
			this.dizhi = data.data.join('-');
		},
		radio(i) {
			this.sex = i;
		},
		tijiao(){
			var di=this.dizhi.split('-');
			this.$http
				.post({
					url: '/index/zixun/weituo',
					data:{
						typeid:this.typeid,
						province:di[0],
						city:di[1],
						area:di[2],
						chenghu:this.lianxi,
						shouji:this.dianhua,
						sex:this.sex,
						miaoshu:this.miaoshu
					}
				})
				.then(res => {
					if(res.code==0){
						uni.showToast({
							title: '提交成功',
							duration: 2000
						});
						setTimeout(function() {
							uni.navigateTo({
								url:'weituo_list'
							})
						}, 2000);
						
					}
					
				});
			console.log(this.miaoshu,this.typeid,di,this.lianxi,this.sex,this.dianhua)
		}
		

	}
};
</script>

<style>
page {
	
}
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.weituo_banner{
	width: 100%;
}
.weituo_buzhou{
	padding: 23rpx 50rpx 23rpx;
	border-bottom: 2rpx solid #f1f1f1;
}
.weituo_buzhou_top{
	display: flex;
	justify-content: space-between;
	padding: 0 38rpx;
}
.buzou_tiao{
	margin: 10rpx 0;
	padding: 0 40rpx;
}
.buzou_bottom{
	display: flex;
	justify-content: space-between;
}
.weituo_bottom{
	padding: 0 30rpx;
}
.miaoshu_title{
	line-height: 70rpx;
	margin-top: 16rpx;
}
.miaoshu{
	padding-bottom: 26rpx;
border-bottom: 2rpx solid #f1f1f1;	
}
.miaoshu textarea{
	line-height: 40rpx;
		height: 180rpx;
		background-color: #f8f8f8;
		border-radius: 3rpx;
		padding: 10rpx;
		box-sizing: border-box;
		width: 100%;
}
.weituo_list{
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #f1f1f1;
}
.weituo_list_lianxi{
	display: flex;
	align-items: center;
}
.weituo_list_lianxi input{
	text-align: right;
	padding-right: 10rpx;
}
.weituo_list_lianxi radio{
	margin-left: 12rpx;
}
.weituo_list_dianhua input{
	text-align: right;
}
.tishi{
	line-height: 80rpx;
}
.weituo_bottom button{
	height: 88rpx;
		background-color: #0eb77e;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin: 40rpx 0 24rpx;
}
.lan{
	color:#31a2f6 ;
}
.xiyi{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 30rpx;
}
.xiyi image{
	width: 22rpx;
	height: 22rpx;
	margin-right: 2rpx;
}
</style>
