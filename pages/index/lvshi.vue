<template>
	<view class="body">
		<view class="head">
			<pickerAddress2 @change="change" class="xuanze_diqu hei_24">
			<text class="xuanze_diqu_txt">{{ dizhi }}</text>	
				<image src="../../static/img/xuandizu_icon.png" mode=""></image>
			</pickerAddress2>
			<view class="sousuo">
				
				<input type="text" value="" placeholder="输入您要查找的律师姓名" confirm-type="search" class="hei_24" @confirm="search" v-model="sou_txt" @click="panduan" @input="shuruchange" />
				<view class="sou_tishi qian_24" v-if="!sou_txt">
					<image src="@/static/img/sousuo.png" mode="" />
					
				</view>
			</view>
		</view>
		<view class="tab_top hui_26">
	

			<picker mode="selector" :range="zhuanchang_arry" @change="zhuanchang_change" :range-key="'shanchangname'">
				{{ zhuanchang }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</picker>
            <picker mode="selector" :range="dengji_list" @change="dengji_change">
				{{ dengji?dengji:'律师等级' }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</picker>
			<picker :range="paixu_arry" @change="paixu_change">
				{{ paixu }}
				<image src="@/static/img/shaixuan.png" mode=""></image>
			</picker>
		</view>
		<view class="zi_body tab_zi_body">
			<view class="lvshi_list">
				<view class="tuijian_item_body" v-for="(item, index) in lslist" >
				<view class="lvshi_item">
					<view class="zixun lv_22" @click="go_chat(item.userid,item.chatprice)">
						<image src="@/static/img/xiaoxi.png" mode=""></image>
						在线咨询
					</view>
					<!-- <view class="zixun_jiage lv_22" >
					<text v-if="item.chatprice==0">未报价</text>	<text v-if="item.chatprice!=0">{{item.chatprice}}/天</text>
					</view> -->
					<view class="lvshi_left" @click="go_zhuye(item.userid)">
						<view class="lvshi_left_top">
						<image :src="img_url + item.photourl" mode="" class="tx"></image>
						<image src="../../static/img/renzheng2.png" mode="" class="renzheng_tx"></image>
						</view>
						<view class="hei_22 zhiye_nianfen">执业{{ item.zhiyenianfen }}年</view>
						</view>
					<view class="lvshi_right">
						<view class="hei_30_bold lvshi_name" @click="go_zhuye(item.userid)">
							{{ item.nickname }}律师
							<image src="@/static/img/renzheng.png" mode=""></image>
						</view>
						<view class="hui_24 lv_suo">
							<text class="tese bai_20">{{dengji_arry[item.level]}}</text>
							{{ item.lvsuo }}
						</view>
						<view class="qian_22 lvsuo_dizhi">
							<image src="@/static/img/dizhi.png" mode=""></image>
							{{ item.city }}{{ item.area }}{{ item.address }}
						</view>
						<view class="qian_22 lvshi_item_fuwu">
							<view class="fuwu">
								<image src="@/static/img/fuwu.png" mode=""></image>
								已服务
								<text class="lv_22">{{ item.replynum }}</text>
								人
							</view>
							<view class="">
								<image src="@/static/img/xingxing.png" mode=""></image>
								评价
								<text class="lv_22">{{ item.haopingnum }}</text>
								次
							</view>
						</view>
					</view>
				</view>
				
				<view class="tuijian_item_bottom">
					<view class="tuijian_item_bottom_title hui_24" :class="{ zhankai_on: zhankai_arry.indexOf(index) != -1 }">
						<view class="tuijian_item_bottom_title_left">
							
							<text v-if="zhuanchang_arry_txt[item.expertise1] && zhuanchang_arry_txt[item.expertise1].shanchangname">{{zhuanchang_arry_txt[item.expertise1].shanchangname}}</text>
							<text v-if="zhuanchang_arry_txt[item.expertise2] && zhuanchang_arry_txt[item.expertise2].shanchangname">{{zhuanchang_arry_txt[item.expertise2].shanchangname}}</text>
							<text v-if="zhuanchang_arry_txt[item.expertise3] && zhuanchang_arry_txt[item.expertise3].shanchangname">{{zhuanchang_arry_txt[item.expertise3].shanchangname}}</text>
						</view>
						
						<view class="tuijian_item_bottom_title_right" @click="zhankai(index)">{{zhankai_arry.indexOf(index) != -1?'收起':'展开'}}  <image src="../../static/img/xiangxia.png" mode=""></image></view>
					</view>
					<view class="tuijian_item_bottom_list hei_20"  :class="{ zhankai_on: zhankai_arry.indexOf(index) != -1 }">
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							在线咨询
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.zaixian1}}</text>/小时
						</view>
					</view>
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">在线咨询</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥
							<text class="">{{ item.zaixian1 }}</text>
							/小时
						</view>
					</view>

					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							法律顾问
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.legaladviser1}}</text>/年
						</view>
					</view>
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							合同审核
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.hetong_shenhe}}</text>/次
						</view>
					</view>
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							代写合同
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.hetong_daixie}}</text>/次
						</view>
					</view>
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							代写文书
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.hetong_wenshu}}</text>/次
						</view>
					</view>
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							律师会见
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.lvshi_huijian}}</text>/次
						</view>
					</view>
					
				<!-- 	<view class="tuijian_item_bottom_item"  @click="go_zhifu(item.userid,item.anjianzhidao,'案件指导',4)">
						<view class="tuijian_item_bottom_item_top">
							案件指导
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.anjianzhidao}}</text>/次
						</view>
					</view>
					<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid,item.jianmian,'1次',0)">
						<view class="tuijian_item_bottom_item_top">
							见面咨询
						</view>
						<view class="tuijian_item_bottom_item_bottom hong_20">
							￥<text class="">{{item.jianmian}}</text>/次
						</view>
					</view> -->                 
					
					<view class="tuijian_item_bottom_item"  @click="go_zhuye(item.userid)">
						<view class="tuijian_item_bottom_item_top">
							了解更多
						</view>
						<view class="tuijian_item_bottom_item_bottom qian_20">
							前往律师主页
						</view>
					</view>
					</view>
				</view>
				
				</view>
				
				
			</view>
	</view>
		<tabBar :currentPage="currentPage"  ref="mainindex"></tabBar>
	</view>
</template>

<script>
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
import tabBar from '@/components/y_tabbar/tabbar.vue';

export default {
	components: {
		unpopup,
		pickerAddress2,
		tabBar
	},
	onLoad(option) {
		//获取列表是否展开
		this.$http
			.post({
				url: '/mapi/index/getlawyerlistopen'
			})
			.then(res => {
				this.getlawyerlistopen = res.data.lawyerlistopen;
			});
			
		//获取等级
		this.$http
			.post({
				url: '/mapi/index/lawyerlevel'
			})
			.then(res => {
				this.dengji_arry = res.data;
				var array = [];
				for (var key in res.data) {
					array.push(res.data[key]);
				}
				
				this.dengji_list = array;
			});	
			
			
			
		  var that=this
		  this.page=0,
		  this.is_all=false,
		  this.lslist=[],
		  this.sheng='',
		  this.shi='',
		  this.dizhi= '不限地区',
		  this.zhuanchang= '不限专长',
		  this.shanchang_id='',
		this.get_shanchang();
	    // this.get_lvshilist();
		if(uni.getStorageSync("shanchangid") || uni.getStorageSync("level")){
			
		}else{
			
			
			this.get_lvshilist();
		}
		  
		
	this.$http
		.post({
			url: '/index/login/islogin'
		})
		.then(res => {
			if(res.data.user!=''){
	this.$http
		.post({
			url: '/mapi/user/useraddress'
		})
		.then(res => {
			if(res.data.provinces){
			 // this.dizhi=res.data.provinces+'-'+res.data.citys
			 that.citys=res.data.citys
			}
			 // this.sheng=res.data.province
		      // that.get_lvshilist();
		
		});
				
			}else{
				
			}
		});		
		// 获取地址

		
		// 获取跳转链接
		this.$http
			.post({
				url: '/mapi/index/getzixunjump'
			})
			.then(res => {
		
				this.tiao_type = res.data.zhan.zixunjump;
			});
		
	},
	onHide() {
		// #ifdef APP-PLUS
		 uni.closeSocket();
		// #endif
		uni.removeStorageSync('shanchangid');
		uni.removeStorageSync('level');
	},
	
	onShow() {
		// uni.getStorage({
		//     key: 'zhuanchang',
		//     success: function (res) {
		//         that.zhuanchang=res.data
		//     }
		// })
		
		uni.removeStorageSync('user_chat_list');
			
		this.$http
			.post({
				url: '/index/login/islogin'
			})
			.then(res => {
				if(res.data.user!=''){
					this.$refs.mainindex.huoqunum();
					//#ifdef APP-PLUS
					this.kaiqi();  
					//#endif
					
				}else{
					
				}
			});	
			
	var shanchangid=uni.getStorageSync("shanchangid")
	if(shanchangid){
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				var array = [];
				for (var key in res.data.shanchang) {
					array.push(res.data.shanchang[key]);
				}
				this.zhuanchang_arry = array;
				this.zhuanchang_arry_txt = res.data.shanchang;
				
				this.page=0,
				this.is_all=false,
				this.lslist=[],
				this.sheng='',
				this.shi='',
				this.dizhi= '不限地区',
				this.shanchang_id=shanchangid
				this.zhuanchang= this.zhuanchang_arry_txt[shanchangid].shanchangname,
				this.get_lvshilist();
				
				
			});
	
	}
	
	var level=uni.getStorageSync("level")
	if(level){
		
		  this.page=0,
		  this.is_all=false,
		  this.lslist=[],
		  this.sheng='',
		  this.shi='',
		  this.dizhi= '不限地区',
		  this.shanchang_id=''
		  this.level=level
		  this.dengji=this.dengji_arry[level]
		  this.zhuanchang= '不限专长'
		  this.get_lvshilist();
	}
		   
	  },

	data() {
		return {
			currentPage:'index/lvshi',
			dizhi: '不限地区',
			zhuanchang: '不限专长',
			zhuanchang_arry: [],
			paixu: '综合排序',
			paixu_arry: ['综合排序', '最新排序', '热门排序'],
			sou_txt: '',
			tishi: true,
			lslist: [],
			page: 0,
			img_url: uni.getStorageSync('img_url'),
			shanchang_id: '',
			sheng: '',
			shi: '',
			is_all:false,
			type:1,
			tiao_type:1,
			zhankai_arry:[],
			zhuanchang_arry_txt:'',
			citys:'',
			name:'',
			shanchangid:'',
			level:'',
			getlawyerlistopen: 2,
			dengji:'',
			dengji_arry:[],
			dengji_list:[]
		};
	},
	created() {
		
		
	},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page=0,
		this.is_all=false,
		this.lslist=[],
		this.sheng='',
		this.shi='',
		this.sou_txt=''
		this.dizhi= '不限地区',
		this.zhuanchang= '不限专长',
		this.shanchang_id='',
		this.level=''
		this.dengji=''
		uni.removeStorageSync('shanchangid');
		uni.removeStorageSync('level');
		this.get_lvshilist()

	},
	// stopPullDownRefresh:function(){

	// },
	methods: {
		zhankai(index){
					if (this.zhankai_arry.indexOf(index) == -1) {
						this.zhankai_arry.push(index); //选中添加到数组里
					} else {
						this.zhankai_arry.splice(this.zhankai_arry.indexOf(index), 1); //取消
					}
				},
				go_zhifu(lawyerid,money,time,type){
					uni.navigateTo({
						url:'pay?lawyerid='+lawyerid+'&type='+type+'&time='+time+'&pay_money='+money
					})
				},
		kaiqi() {
		
			let that = this;

			var url = that.$http.WebSocket_url;
		
			uni.connectSocket({
			    url: 'wss://' + url + ':3348',
				success:(data)=>{
					console.log("websocket连接成功",data);
				},
				fail:(err)=> {
				},
			    complete: (res)=> {
				
				}
			});
			
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！',res);
			 
			});
			
			uni.onSocketError(function (res) {
			  console.log('WebSocket连接打开失败，请检查！');
			  
			});
			uni.onSocketMessage(function (res) {
				var data = JSON.parse(res.data);
				if (data.type == 'init') {
					console.log('init');
					console.log('client_id', data.client_id);
					uni.request({
						url: that.$http.baseUrl + '/push/gatewayworker/bind',
						method: 'POST',
						data: {
							client_id: data.client_id
						},
						success: function(resp) {
							console.log(resp, 'bind');
						},
						fail: function(resp) {}
					});
				
				} else if (data.type == 'say') {
					console.log('say');
					
					if (data.state) {
					// #ifdef APP-PLUS
					void plus.push.createMessage('用户端收到一条新消息');
					// #endif
					
					
					 that.$refs.mainindex.huoqunum();
					}
				} else {
					console.log('else');
				}
				
			  
			});
			
			uni.onSocketClose(function (res) {
			  console.log('uniapp 已关闭！');
			});
			
	
		},
		//上拉加载
		onReachBottom() {
			
			if(this.is_all){
				uni.showToast({
					title: '没有更多内容了',
					duration: 2000,
					icon: "none"
				});
				uni.stopPullDownRefresh();
				return false
			}else{
				this.page++
				this.get_lvshilist()
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		// 按键搜索
		search(e) {
			this.page=0,
			this.citys=''
			this.is_all=false,
			this.lslist=[],
			this.sheng='',
			this.shi='',
			this.level=''
			this.dizhi= '不限地区',
			this.zhuanchang= '不限专长',
			this.shanchang_id='',
			this.get_lvshilist()
		},
		panduan() {
			this.tishi = false;
		},
		shuruchange() {
			if (this.sou_txt < 1) {
				this.tishi = true;
			}
		},
		// 地区选择
		change(data) {
			console.log(data);
			// this.dizhi = data.data.join('')
			this.sheng = data.data[0];
			this.shi = data.data[1];
			this.dizhi = this.sheng + '-' + this.shi;
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.citys='',
			this.get_lvshilist();
		},
		// 专长选择
		zhuanchang_change(e) {
			this.zhuanchang = this.zhuanchang_arry[e.detail.value].shanchangname;
			this.shanchang_id = this.zhuanchang_arry[e.detail.value].shanchangid;
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.get_lvshilist();
			console.log(this.shanchang_id);
		},
		//等级选择
		dengji_change(e){
			console.log(e.detail.value)
			this.dengji=this.dengji_list[e.detail.value]
			this.level=e.detail.value+1
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.get_lvshilist();
		},
		// 排序选择
		paixu_change(e) {
			console.log(e.detail.value)
			this.type=e.detail.value+1
			this.page=0,
			this.is_all=false,
			this.lslist=[],
			this.get_lvshilist();
			this.paixu = this.paixu_arry[e.detail.value];
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(lawyerid,price){
			if(this.tiao_type==1){
				uni.navigateTo({
					url:'chat?lawyerid='+lawyerid
				})
			}else{
				uni.navigateTo({
					url:'ls_zhuye?lawyerid='+lawyerid
				})
			}
			
			
		},
		go_zhuye(id) {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid='+id
			});
		},

		// 获取律师擅长信息
		get_shanchang() {
			this.$http
				.post({
					url: '/mapi/lawyer/getshanchang'
				})
				.then(res => {
					var array = [];
					for (var key in res.data.shanchang) {
						array.push(res.data.shanchang[key]);
					}
					this.zhuanchang_arry = array;
					this.zhuanchang_arry_txt = res.data.shanchang;
				});
		},
		get_lvshilist() {
			console.log(this.dizhi);
			this.$http
				.post({
					url: '/mapi/lawyer/lvshilist',
					data: {
						page: this.page,
						shanchangid: this.shanchang_id,
						province: this.sheng,
						city: this.shi,
						type:this.type,
						citys:this.citys,
						name:this.sou_txt,
						level:this.level
					}
				})
				.then(res => {
					this.lslist=this.lslist.concat(res.data.lawyer);
					
					this.zhankai_arry = [];
					if (this.getlawyerlistopen == 1) {
						for (var i = 0; i < this.lslist.length; i++) {
							this.zhankai_arry.push(i);
						}
					}
					
					
					if (res.data.lawyer.length < 10) {
						this.is_all = true;
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
.head_center input {
	width: 100%;
	height: 55rpx;
	background-color: #f3f3f3;
	border-radius: 28rpx;
}
.uni-searchbar {
	width: 100%;
	padding: 0;
}
.uni-searchbar__box {
	border-style: none !important;
	height: 55rpx !important;
}
.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16rpx 71rpx;
	background-color: #ffffff;
	position: fixed;
	top: 96rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}
.tab_top image {
	width: 16rpx;
	height: 8rpx;
	vertical-align: middle;
	margin-left: 22rpx;
}
.head_right image {
	width: 40rpx;
	height: 41rpx;
}
	
.lvshi_left{
	margin-right: 20rpx;
	text-align: center;
}
.lvshi_left_top{
	width: 130rpx;
	height: 130rpx;
	position: relative;
	margin-bottom: 10rpx;
}
.lvshi_left .tx {
	width: 100%;
	height: 100%;
	border-radius: 100%;
	
}
.lvshi_left .renzheng_tx {
		width: 24rpx;
		height: 25rpx;
	border-radius: 100%;
	position: absolute;
	bottom: 0;
	right: 10rpx;
}
.lvshi_list {
	margin-top: 30rpx;
	background-color: #ffffff;
}
.lvshi_item {
	display: flex;
	position: relative;
	padding: 26rpx 0rpx;
	/* border-bottom: 2rpx solid #e8e8e8; */
}
.lvshi_name image {
	width: 22rpx;
	height: 20rpx;
	margin-left: 11rpx;
}
.zixun {
	position: absolute;
	width: 150rpx;
	height: 44rpx;
		border: solid 1rpx #0eb77e;
		border-radius:22rpx;
	text-align: center;
	line-height: 44rpx;
	right: 0rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.zixun_jiage{
	position: absolute;
	width: 155rpx;
	height: 36rpx;
	background-color: #ffffff;
	box-sizing: border-box;
	border: solid 1rpx #0eb77e;
	text-align: center;
	line-height: 34rpx;
	right: 20rpx;
	top: 62rpx;
	border-radius: 22rpx;
}
.zixun image {
	width: 23rpx;
	height: 23rpx;
	margin-right: 5rpx;
}
.lvshi_item_fuwu {
	display: flex;
	margin-top: 10rpx;
}
.lvshi_item_fuwu image {
	width: 25rpx;
	height: 23rpx;
	margin-right: 10rpx;
}
.lvshi_item_fuwu text {
	margin: 0 4rpx;
}
.lv_suo {
	margin: 14rpx 0;
	word-break: break-all;
	max-width: 400rpx;
}
.tese {
	background-color: #ffad2b;
	border-radius: 3rpx;
	margin-right: 9rpx;
	padding: 0 6rpx;
	
}
.lvsuo_dizhi{
	word-break: break-all;
}
.lvsuo_dizhi image {
	width: 19rpx;
	height: 20rpx;
	margin-right: 12rpx;
}
.fuwu {
	margin-right: 60rpx;
}
.sousuo {
	width: 75%;
	position: relative;
}
.sou_tishi image {
	width: 25rpx;
	height: 26rpx;
	margin-right: 17rpx;
}
.sou_tishi {
	position: absolute;
	transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
	left: 22%;
	top: 50%;
	pointer-events: none;
	display: flex;
	align-items: center;
}
.sousuo input {
	width: 100%;
	height: 55rpx;
	background-color: #f3f3f3;
	border-radius: 28rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
	text-align: center;
}
.body{
	padding-bottom: 150rpx;
}

.tuijian_item_bottom_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rpx;
	
	
}
.tuijian_item_bottom_title_left text{
		height: 43rpx;
		background-color: #f5f5f5;
		border-radius: 3rpx;
		display: inline-block;
		padding: 0 20rpx;
		margin-right: 20rpx;
		line-height: 43rpx;
}
.tuijian_item_bottom_item{
		width: 165rpx;
		height: 91rpx;
		background: url(../../static/img/jia_beijing1.png) no-repeat;
		box-shadow: 0rpx 0rpx 7rpx 0rpx 
			rgba(0, 0, 0, 0.07);
		border-radius: 5rpx;
		margin:0 10rpx 10rpx 0;
		text-align: center;
		box-sizing: border-box;
		background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(2){
	background: url(../../static/img/jia_beijing2.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(3){
	background: url(../../static/img/jia_beijing3.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(4){
	background: url(../../static/img/jia_beijing4.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(5){
	background: url(../../static/img/jia_beijing5.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(6){
	background: url(../../static/img/jia_beijing6.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(7){
	background: url(../../static/img/jia_beijing7.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(8){
	background: url(../../static/img/jia_beijing8.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(9){
	background: url(../../static/img/jia_beijing9.png) no-repeat;
	background-size: 100% 100%;

}
.tuijian_item_bottom_item:nth-child(4n){
	margin-right: 0;
}
.tuijian_item_bottom_list{
	display: flex;
	display: none;
	flex-wrap: wrap;
	padding: 25rpx 0 20rpx;
	justify-content: space-between;
	border-top: 2rpx dashed   #dcdcdc  ;
}
.tuijian_item_body{
	padding: 0 20rpx;
	border-top: 2rpx solid #d9d9d9;
}
.tuijian_item_body:first-child{
	border: none;
}
.tuijian_item_bottom_item_top{
	margin: 10rpx 0 6rpx;
}
.suoxiao{
	
}
.tuijian_item_bottom_item image{
	width: 100% ;
	height: 100%;
}
.tuijian_item_bottom_title_right image{
		width: 18rpx;
		height: 10rpx;
		margin-left: 6rpx;
		vertical-align: middle;
}


.zhankai_on{
	display: flex;
}
.zhankai_on .tuijian_item_bottom_title_right image{
	transform:rotate(180deg);
	-ms-transform:rotate(180deg); 	/* IE 9 */
	-moz-transform:rotate(180deg); 	/* Firefox */
	-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
	-o-transform:rotate(180deg); 	/* Opera */
}
.tuijian_item_bottom_item_bottom {
	/* color: #12ab83; */
	/* display: inline-block; */
	/* transform: scale(0.83,0.83) ; */
}
.xuanze_diqu_txt{
	max-width: 100rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
}
.xuanze_diqu image{
		width: 18rpx;
		height: 10rpx;
		vertical-align: middle;
		margin-left: 12rpx;
}
</style>
