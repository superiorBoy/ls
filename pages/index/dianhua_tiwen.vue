<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">付费电话</view>
			<view class=" head_right"></view>
		</view>

		<view class="zi_body ">
		
	    <view class="dianhua_num hui_26">
	    	手机号码：<input type="text" value="" v-model="dianhua_num" class="hei_24"/>
	    </view>
			<view class="shuru">
				<view class="shuru_box">
					<textarea value="" placeholder="请输入您想要问的问题..." class="hei_26" maxlength="5000" @input="bianhua" v-model="shuru_txt" />
					<view class="qian_24 jisuan_num">
						
					<picker mode="selector"  :range="fenlei_arry" @change="jiating_change" :range-key="'typename'">
						<view :class="['zhuanchang_xuan',fenlei=='选择类别'?'qian_26':'hei_26']">{{fenlei}}
						</view>
					</picker>
					<text>{{ yishu_num }}/2000</text>
					
					
					</view>
				</view>
			</view>
			<view class="dizhi qian_24" id="allmap">
				<pickerAddress @change="change" class="aaaaaa">
					<image src="@/static/img/xuandizhi.png" mode=""></image>
					{{ dizhi }}
				</pickerAddress>
			</view>
			<view class="tiwen_bottom">
				<button type="" class="bai_30" @click="tijiao">提交订单{{lvshi.phoneprice}}元</button>
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
			dizhi: '请选择省-市-区',
			isCheck: true,
			shuru_txt: '',
			yishu_num: 0,
			shujv:'',
			is_tishi: true,
			fenlei: '选择类别',
			fenlei_arry: [],
			leiid:'',
			dianhua_num:'',
			lawyerid:'',
			lvshi:''
		};
	},
	onLoad(option) {
		this.lawyerid=option.lawyerid
		this.$http.post({
			url: '/mapi/lawyer/lawyer',
			data:{
				lawyerid:option.lawyerid
			}
		}).then(res => {
			this.lvshi=res.data.lawyer
		})
		
	},
	created() {
		// #ifdef APP-PLUS
		var that = this;
			plus.geolocation.getCurrentPosition(function(p){
						that.dizhi = p.address.province+'-'+ p.address.city+'-'+ p.address.district;
						
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
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
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
			if(this.dianhua_num==''){
				uni.showToast({
					title: '请输入电话号码',
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
			
			this.$http.post({
				url: '/index/consult/addconsult_phone',
				data:{
					lawyerid:this.lawyerid,
					information:this.shuru_txt,
					typeid:this.leiid,
					province:di[0],
					city:di[1],
					area:di[2],
					phone:this.dianhua_num
				},
				
			}).then(res => {
				if(res.code==0){
				
				uni.navigateTo({
					url:'pay?lawyerid='+this.lawyerid+'&type=2'+'&consultid='+res.data+'&information='+this.shuru_txt
					
				})	
					
					
				}
				console.log(res)
			})
			

		},
		// 获取经纬度
		getlocation() {
			const that = this;
			this.$nextTick(function() {
				try {
					
										const geolocation = new BMap.Geolocation();
										geolocation.getCurrentPosition(function(r) {
					$.ajax({
					    url: 'http://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude,
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
	padding: 38rpx 30rpx 0;
	background-color: #ffffff;
}
.shuru_box {
	border-bottom: 2rpx solid #dcdcdc;
	padding-bottom: 26rpx;
}
.shuru_box textarea {
	width: 100%;
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
	padding: 0 30rpx;
}
.dizhi image {
	width: 22rpx;
	height: 26rpx;
	margin-right: 17rpx;
	vertical-align: text-bottom;
}
.tiwen_bottom {
	padding: 0 30rpx;
	text-align: center;
}
.tiwen_bottom button {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin: 164rpx 0 18rpx;
}
.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 30rpx;

	}
	.dianhua_num{
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #EEEEEE;
		height: 60rpx;
		padding-left: 30rpx;
	}
	.dianhua_num input{
		width: 80%;
		
	}
</style>
