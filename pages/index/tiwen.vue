<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">我要咨询</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
			<!-- <view class="tishi hong_24" v-if="is_tishi"> -->
				<navigator url="zhineng_pay?type=1" class="tishi hong_24" v-if="is_tishi">
				<text>问题紧急，现在就想得到解答？ 立即在线咨询></text>
				<text class="hong_20_bold" @click="close">x</text>
			<!-- </view> -->
			</navigator>
			<view class="zixun_num qian_26">
				<view class="">
					今日咨询人数：
					<text class="hong_26">{{shujv.today}}</text>
					人
				</view>
				<view class="">
					今日律师解答：
					<text class="hong_26">{{shujv.reply}}</text>
					问题
				</view>
			</view>
			<view class="shuru">
					<view class="hei_30 tiwen_title">
						问题描述
					</view>
				<view class="shuru_box">
					<view class="shuru_box_body">
					<textarea value="" placeholder="请输入您想要问的问题..." class="hei_26"  @input="bianhua" v-model="shuru_txt" maxlength="5000"/>
					<view class="yishuru qian_24">
						{{ yishu_num }}/2000
					</view>
					</view>
				</view>
				<view class="tiwen_bottom">
					<view class="qian_24 xuan_list xaunleibie">
						<image src="@/static/img/tiwen_lei.png" mode=""></image>
					<picker mode="selector"  :range="fenlei_arry" @change="jiating_change" :range-key="'typename'">
						<view :class="['zhuanchang_xuan',fenlei=='选择类别'?'qian_26':'hei_26']">{{fenlei}}
						</view>
					</picker>
					</view>
					<view class="dizhi hei_24 xuan_list" id="allmap">
						<pickerAddress @change="change" class="aaaaaa">
							<image src="@/static/img/tiwen_dizhi.png" mode=""></image>
							{{ dizhi }}
						</pickerAddress>
					</view>
					
				</view>
				<view class="jiedan_ls">
					<view class="jiedan_ls_title hui_20">
						<text class="hei_30_bold">以下律师正在等待接单！</text>大数据会匹配最佳一位律师为您服务
					</view>
					<view class="jiedan_ls_list">
						<view class="jiedan_ls_item" v-for="item in lvshi">
							<image :src="img_url+item.photourl" mode=""></image>
							<view class="hei_26 jiedan_ls_name">
								{{item.nickname}}
							</view>
							<view class="qian_22 shanchang_txt">
								<text v-if="zhuanchang_arry[item.expertise1] && zhuanchang_arry[item.expertise1].shanchangname">{{zhuanchang_arry[item.expertise1].shanchangname}}</text>
							</view>
						</view>
						
					</view>
					<view class="jiedan_bottom hui_22">
						<text class="hong_24_bold">服务保障</text>
						<text class=""><image src="@/static/img/zhineng_duihao.png" mode=""></image>服务保障</text>
						<text class=""><image src="@/static/img/zhineng_duihao.png" mode=""></image>极速响应</text>
						<text class=""><image src="@/static/img/zhineng_duihao.png" mode=""></image>1对1解答</text>
						<text class=""><image src="@/static/img/zhineng_duihao.png" mode=""></image>隐私保护</text>
					</view>
					
				</view>
			</view>
		
			<view class="tiwen_bottom_btn">
				<button type="" class="bai_30" @click="tijiao">提交</button>
				<view class="qian_24">
					<checkbox :checked="isCheck" @click="checkBox($event)" />
					我已阅读并同意
					<text class="lv_24">《小虎网络服务协议》</text>
				</view>
			</view>
		</view>

		<div id="allmap" style="width: 0;height: 0; display: none;"></div>
	</view>
</template>

<script>
import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';

//#ifdef H5
import $ from '@/common/jquery-3.4.1.min.js'
import { loadBMap } from '@/common/map.js';
//#endif

export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			dizhi: '请选择省-市-区',
			isCheck: true,
			shuru_txt: '',
			yishu_num: 0,
			shujv:'',
			is_tishi: true,
			fenlei: '选择类别',
			fenlei_arry: [],
			leiid:'',
			lvshi:[],
			zhuanchang_arry:[]
		};
	},
	created() {
		// #ifdef APP-PLUS
		
		var that = this;
			plus.geolocation.getCurrentPosition(function(p){
						if(p.address.province!=undefined){
						that.dizhi = p.address.province+'-'+ p.address.city+'-'+ p.address.district;
							uni.setStorage({
								key: 'dizhi',
								data: {
									sheng: p.address.province,
									shi: p.address.city,
									qu: p.address.district
								},
								})
						}
						
					}, function(e){
						
					
			      })
			// #endif
		// var that = this;
		// uni.getLocation({
		// 	type: 'gcj02',
		// 	geocode: true, //设置该参数为true可直接获取经纬度及城市信息
		// 	success: function(res) {
		// 		console.log(res);
		// 		uni.request({
		// 			url: 'http://api.map.baidu.com/geocoder/v2/?ak=GPCxs0BGTWyIpUmkft16DNzH9wUUofzQ&output=json&pois=1&location=' + res.latitude + ',' + res.longitude,
		// 			success(res) {
		// 			uni.setStorage({
		// 			    key: 'dizhi',　　　　　　　　　　　　
		// 			    data: {sheng:res.data.result.addressComponent.province,shi:res.data.result.addressComponent.city,qu:res.data.result.addressComponent.district},　　　
		// 			}) 
		// 				that.dizhi =res.data.result.addressComponent.province+'-'+res.data.result.addressComponent.city+'-'+res.data.result.addressComponent.district;
		// 				console.log(res);
		// 			},
		// 			fail(err) {
		// 				console.log(err);
		// 			}
		// 		});
		// 	},
		// 	fail: function() {
		// 		// uni.showToast({
		// 		// 	title: '获取地址失败,请手动选择',
		// 		// 	icon: 'none'
		// 		// });
		// 	}
		// });

		// #ifdef H5
		
		window.initBaiduMapScript = () => {
			// console.log(BMap);
			this.getlocation();
		};
		loadBMap('initBaiduMapScript');
		//#endif
	},

	components: {
		pickerAddress
	},
	onShow() {
		
		// 获取提问数据
		this.$http.post({
			url: '/mapi/index/wen',
		}).then(res => {
			this.shujv=res.data.serve
		})

		// 获取分类
				this.$http.post({
					url: '/mapi/index/gettype',
				}).then(res => {
				  
				      var array = [];
				       for(var key in res.data.type){
				          array.push(res.data.type[key]);
				       }
					this.fenlei_arry=array		
					
				})
			this.$http
				.post({
					url: '/mapi/lawyer/getshanchang'
				})
				.then(res => {
					this.zhuanchang_arry = res.data.shanchang;
					this.huoqu_lvshi()
				});	
				
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_lvshi(){
			
			this.$http.post({
				url: '/mapi/lawyer/lvshilist',
				data:{
					type:1,
					page:0
				}
			
			}).then(res => {
				if(res.code==0){
					this.lvshi=res.data.lawyer
				}
				console.log(res)
			})
		},
	        jiating_change(data) {
				this.fenlei = this.fenlei_arry[data.detail.value].typename
				this.leiid=this.fenlei_arry[data.detail.value].typeid
			},
			
		change(data) {
			console.log(data);
			this.dizhi = data.data.join('-');
		},
		checkBox(e) {
			this.isCheck = !this.isCheck;
		},
		bianhua() {
			this.yishu_num = this.shuru_txt.length;
		},
		close() {
			this.is_tishi = false;
		},
		tijiao() {
			
			var di=this.dizhi.split('-');  
			console.log(di)
			
			if(this.shuru_txt==''){
				uni.showToast({
					title: '请输入问题',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			if(this.fenlei=='选择类别'){
				uni.showToast({
					title: '请选择类别',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			if(this.dizhi=='请选择省-市-区'){
				uni.showToast({
					title: '请选择地址',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			if(this.shuru_txt.length<10){
				uni.showToast({
					title: '请填写10个字以上的描述',
					duration: 2000,
					icon: 'none'
				});
				return false
				
			}
	var data={
				information:this.shuru_txt,
				typeid:this.leiid,
				province:di[0],
				city:di[1],
				area:di[2]
	}

	uni.navigateTo({
		url:'tiwen_pay_fs?data='+JSON.stringify(data)
	})
			// this.$http.post({
			// 	url: '/mapi/consult/addconsult',
			// 	data:{
			// 		information:this.shuru_txt,
			// 		typeid:this.leiid,
			// 		province:di[0],
			// 		city:di[1],
			// 		area:di[2]
			// 	},
				
			// }).then(res => {
			// 	if(res.code==0){
					
			// 		uni.navigateTo({
			// 			url:'tiwen_pay_fs?consultid='+res.data
			// 		})
					
			// 	}
			// 	console.log(res)
			// })
			

		},
		// 获取经纬度
		getlocation() {
			const that = this;
			this.$nextTick(function() {
				try {
					
										const geolocation = new BMap.Geolocation();
										geolocation.getCurrentPosition(function(r) {
					$.ajax({
					    url: '//api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude,
					    type: 'GET',
					    async:false,//设置同步。ajax默认异步
					    dataType: 'jsonp',
					    jsonp:'callback',//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
					    jsonpCallback:"callback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
					    timeout: 5000,
					    contentType: 'application/json; charset=utf-8',
					    success: function (res){
							that.dizhi =res.result.addressComponent.province+'-'+res.result.addressComponent.city+'-'+res.result.addressComponent.district;
					        		
											uni.setStorage({
												key: 'dizhi',
												data: {
													sheng: res.result.addressComponent.province,
													shi: res.result.addressComponent.city,
													qu: res.result.addressComponent.district
												}
											});
									
								}
							})
											// var url = wei_url+'/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude;
											// uni.request({
											// 	url: url,
											// 	success(res) {
											// 		console.log(res)
											// 		that.dizhi = res.data.result.addressComponent.city;
											// 		// console.log(res.data.result.addressComponent.city,'')
											// 		uni.setStorage({
											// 			key: 'dizhi',
											// 			data: {
											// 				sheng: res.data.result.addressComponent.province,
											// 				shi: res.data.result.addressComponent.city,
											// 				qu: res.data.result.addressComponent.district
											// 			}
											// 		});
											// 	}
											// });
										});
				} catch (e) {
					console.log(e);
				}
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
.tishi {
	height: 70rpx;
	background-color: #fff0f2;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	justify-content: space-between;
	border-bottom: 2rpx solid #f5f5f5;
}
.zixun_num {
	padding: 0 56rpx;
	display: flex;
	justify-content: space-between;
	height: 115rpx;
	align-items: center;
	margin-bottom: 20rpx;
	background-color: #ffffff;
}
.shuru {
	background-color: #ffffff;
	padding-bottom: 200rpx;
}
.tiwen_title{
	line-height: 84rpx;
	padding-left: 30rpx;
}
.shuru_box {
	border-bottom: 20rpx solid #f8f8f8;
		border-radius: 5rpx;
		padding: 0rpx 30rpx 26rpx;
}
.shuru_box_body{
	background-color: #f8f8f8;
}
.yishuru{
	text-align: right;
	padding-right: 20rpx;
	padding-bottom: 20rpx;
}
.shuru_box textarea {
	width: 100%;
	
	padding: 20rpx ;
	box-sizing: border-box;
	
}
.jisuan_num {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.dizhi {
	display: flex;
	align-items: center;
	height: 86rpx;
	background-color: #ffffff;
	
}
.dizhi image {
	width: 22rpx;
	height: 26rpx;
	margin-right: 17rpx;
	vertical-align: text-bottom;
}
.tiwen_bottom {
	padding:0 30rpx;
	text-align: center;
	

	box-sizing: border-box;
	background-color: #FFFFFF;
}
.tiwen_bottom_btn{
	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	background-color: #FFFFFF;
	text-align: center;
	padding: 30rpx 0;
	border-top: 2rpx solid #EEEEEE;
}
.tiwen_bottom_btn button {
	
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin:0rpx 0 18rpx;
}
.xuan_list{
	height: 90rpx;
	align-content: center;
	
}
.zhuanchang_xuan {
	width:600rpx;
	text-align: left;
}
.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;

	}
		
	.xaunleibie{
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #dcdcdc;
	}
	.xaunleibie image{
			width: 27rpx;
			height: 27rpx;
			margin-right: 13rpx;
	}
	.jiedan_ls{
		height: 420rpx;
		background-color: #FFFFFF;
		padding-left: 30rpx;
	}
	.jiedan_ls_title{
		line-height: 84rpx;
	}
	.jiedan_ls_list{
		display: flex;
		overflow-x: auto;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}
	.jiedan_ls_list::-webkit-scrollbar {
	  display: none; /* Chrome Safari */
	}
	.jiedan_ls_item{
		text-align: center;
		width: 150rpx;
		margin-right: 50rpx;
	}
	.jiedan_ls_item image{
		width: 110rpx;
			height: 110rpx;
			border-radius: 100%;
			vertical-align: bottom;
	}
	.shanchang_txt{
		overflow:hidden; 
		text-overflow:ellipsis; 
		white-space:nowrap; 
	}
	.jiedan_ls_name{
		margin: 10rpx 0 6rpx;
	}
	.jiedan_bottom{
		height:78rpx ;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 2rpx solid #dcdcdc;
		margin-top: 20rpx;
		padding-right: 30rpx;
	}
	.jiedan_bottom image{
		width: 20rpx;
			height: 20rpx;
			margin-right: 4rpx;
	}
	.jiedan_bottom text{
		
	}
</style>
