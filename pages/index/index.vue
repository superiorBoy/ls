<template>
	<view class="body">
		<view class="index_top" :style="{ background: topbg }" :class="[ 'index_top', current == 0 ? 'index_top0' : current == 1 ? 'index_top1' : current == 2 ? 'index_top2' : current == 3 ? 'index_top3' : current == 4 ? 'index_top4' : '']"
		>
			<view class="index_top_dingwei" :style="{ background: topbg }">
				<view class="dingwei bai_20">
					<image src="@/static/img/dingwei.png" mode=""></image>
					<pickerAddress @change="xuandizhi">{{ dizhi }}</pickerAddress>
					<!-- <text>{{dizhi}}</text> -->
				</view>
				<view class="index_sousuo qian_24">
					<image src="@/static/img/sousuo.png" mode=""></image>
					<input confirm-type="search" @confirm="confirm" type="text" v-model="sou_txt" placeholder="详实输入案情经过，获得更精准的解答" class="hei_26" />
				</view>
			</view>

			<view class="tab">
				<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" class="fenlei bai_26"></wuc-tab>
				<image src="@/static/img/qita.png" mode=""></image>
			</view>

			<view class="lunbo">
				<swiper
					:indicator-dots="false"
					:autoplay="true"
					circular="true"
					easing-function="default"
					:interval="5000"
					indicator-color="#c7c7c7"
					indicator-active-color="#ffffff"
					:duration="500"
					class="swiper"
					@change="swiperchang"
				>
					<swiper-item v-for="item in banner">
						<view class="swiper-item"><image :src="item.img"></image></view>
					</swiper-item>
				</swiper>

				<view class="dots">
					<block v-for="(item, index) in banner"><view :class="['dot', index == current ? 'active' : '']"></view></block>
				</view>
			</view>
		</view>

		<view class="index_tab hei_24">
			<view class="index_tab_item">
				<navigator url="tiwen">
					<image src="@/static/img/tab1.png" mode=""></image>
					<view>问律师</view>
				</navigator>
			</view>

			<view class="index_tab_item" @click="tiaozhuan">
				<image src="@/static/img/tab2.png" mode=""></image>
				<view>找律师</view>
			</view>
			<navigator url="changshi" class="index_tab_item">
				<image src="@/static/img/tab3.png" mode=""></image>
				<view>法律知识</view>
			</navigator>
			<navigator url="changshi" class="index_tab_item">
				<image src="@/static/img/tab4_4.png" mode=""></image>
				<view>法律法规</view>
			</navigator>
			<view class="index_tab_item" @click="go_ls_list">
				<image src="@/static/img/tab5.png" mode=""></image>
				<view>在线咨询</view>
			</view>
			<navigator url="dianhua_zixun" class="index_tab_item">
				<image src="@/static/img/tab6.png" mode=""></image>
				<view>电话咨询</view>
			</navigator>

			<navigator url="tuanzhang" class="index_tab_item">
				<image src="@/static/img/tab7.png" mode=""></image>
				<view>升级团长</view>
			</navigator>

			<navigator url="yaoqing" class="index_tab_item">
				<image src="@/static/img/tab8.png" mode=""></image>
				<view>邀请好友</view>
			</navigator>
		</view>

		<view class="index_wenti">
			<navigator url="tiwen"><image src="@/static/img/guanggao.png" mode=""></image></navigator>
			<view class="index_wenti_bottom hei_24">
				<view class="wenti_item">
					今日咨询:
					<block class="" v-if="data != ''">
						<text v-for="item in data.serve.today">{{ item }}</text>
					</block>
					人
				</view>
				<view class="wenti_item">
					本月咨询:
					<block class="" v-if="data != ''">
						<text v-for="item in data.serve.month">{{ item }}</text>
					</block>

					人
				</view>
				<view class="wenti_item">
					律师解答:
					<block class="" v-if="data != ''">
						<text v-for="item in data.serve.todayreply">{{ item }}</text>
					</block>
					条
				</view>
				<view class="wenti_item">
					本月解答:
					<block class="" v-if="data != ''">
						<text v-for="item in data.serve.monthreply">{{ item }}</text>
					</block>
					条
				</view>
			</view>
		</view>

		<view class="zhineng">
			<navigator url="zhineng_pay?type=1" class="zhineng_item zhineng_zaixian">
				<view class="hei_26_bold zhineng_item_type">
					在线咨询
					<image src="@/static/img/index_remen.png" mode=""></image>
				</view>
				<view class="hui_20 zhineng_item_jiage">{{ zhineng.zaixiantime }}小时 /￥{{ zhineng.zaixianprice }}</view>
				<view class="qian_22 zhineng_item_txt">律师在线解答,</view>
				<view class="qian_22">规定范围内不限次数。</view>
			</navigator>
			<navigator url="zhineng_pay?type=2" class="zhineng_item zhineng_dianhua">
				<view class="hei_26_bold zhineng_item_type">
					电话咨询
					<image src="@/static/img/index_tuijian.png" mode=""></image>
				</view>
				<view class="hui_20 zhineng_item_jiage">{{ zhineng.dianhuatime }}分钟 /￥{{ zhineng.dianhuaprice }}</view>
				<view class="qian_22 zhineng_item_txt">律师主动打电话与您联系，</view>
				<view class="qian_22">沟通效率更高。</view>
			</navigator>
		</view>

		<view class="index_zixun">
			<view class="zixun_tab qian_28">
				<text @tap="change(1)" :class="{ hei: btnnum == 1 }">最新解答</text>
				<text @tap="change(0)" :class="{ hei: btnnum == 0 }">最新咨询</text>
			</view>
			<view class="index_zixun_list">
				<block class="" v-if="data != ''">
					<block v-for="item in data.consultlist.new" v-if="btnnum == 0">
						<view class="index_zixun_item" @click="zixun_xq(item.consultid)">
							<view class="zixun_title hei_26">{{ item.information }}</view>
							<view class="index_zixun_item_bottom qian_22">
								<view class="shijian">
									<image src="@/static/img/shijian.png" mode=""></image>
									<!-- <text class="hong_22">5</text> -->
									{{ item.addtime | timeStamp }}
								</view>
								<view class="biaoqian">
									<image src="@/static/img/biaoqian.png" mode=""></image>
									{{ tabList[item.typeid].typename }}
								</view>
								<view class="dizhi">
									<image src="@/static/img/dizhi.png" mode=""></image>
									{{ item.province }}-{{ item.city }}
								</view>
							</view>
						</view>
					</block>
				</block>
				<block class="" v-if="data != ''">
					<block v-for="item in data.consultlist.reply" v-if="btnnum == 1">
						<view class="index_zixun_item" @click="zixun_xq(item.consultid)">
							<view class="zixun_title hei_26">{{ item.information }}</view>
							<view class="index_zixun_item_bottom qian_22">
								<view class="shijian">
									<image src="@/static/img/shijian.png" mode=""></image>
									<!-- <text class="hong_22">5</text> -->
									{{ item.replytime | timeStamp }}
								</view>
								<view class="biaoqian">
									<image src="@/static/img/biaoqian.png" mode=""></image>
									{{ tabList[item.typeid].typename }}
								</view>
								<view class="dizhi">
									<image src="@/static/img/dizhi.png" mode=""></image>
									{{ item.province }}-{{ item.city }}
								</view>
							</view>
						</view>
					</block>
				</block>
			</view>
		</view>
		<button type="" class="qian_26 ls_more" @click="tiaozhuan_zixun">
			<image src="@/static/img/gengduo.png" mode=""></image>
			查看更多咨询>>
		</button>
		<view class="tuijian">
			<view class="tuijian_top"><image src="@/static/img/tuijian_title.png" mode=""></image></view>
			<view class="tuijian_list">
				<block v-for="item in data.loginlawyer">
					<view class="tuijian_item">
						<view class="tuijian_item_left" @click="go_zhuye(item.userid)"><image :src="url + item.photourl" mode=""></image></view>
						<view class="tuijian_item_right">
							<view class="ls_name">
								<view class="ls_name_left hei_30_bold" @click="go_zhuye(item.userid)">
									{{ item.nickname }}
									<image src="@/static/img/renzheng.png" mode=""></image>
								</view>
								<view class="ls_name_right lv_20" @click="tochat(item.userid)">
									<image src="@/static/img/xiaoxi.png" mode=""></image>
									在线咨询
								</view>
							</view>
							<view class="ls_gongsi hui_24">
								<text class="bai_20 tese_ls">特色律师</text>
								{{ item.zhiwu }}
							</view>
							<view class="ls_dizhi qian_22">
								<image src="@/static/img/dizhi.png" mode=""></image>
								{{ item.lvsuo }}
							</view>
							<view class="ls_bottom qian_22">
								<view class="ls_fuwu">
									<image src="@/static/img/xin.png" mode=""></image>
									已服务
									<text class="lv_22">{{ item.replynum }}</text>
									人
								</view>
								<view class="ls_pingjia">
									<image src="@/static/img/pingjia.png" mode=""></image>
									评价
									<text class="lv_22">{{ item.haopingnum }}</text>
									人
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			<button type="" class="qian_26 ls_more" @click="tiaozhuan">
				<image src="@/static/img/gengduo.png" mode=""></image>
				查看更多律师>>
			</button>
		</view>
		<div id="allmap" style="display: none"></div>
		<view class="zhuanti">
			<view class="index_fazhi hei_32_bold">
				<image src="@/static/img/index_fazhi.png" mode=""></image>
				法律知识
			</view>
			<view class="zhuanti_list hei_26">
				<view class="" v-for="item in fa_zhishi" @click="go_zhishi_xq(item.knowledgetypeid, item.knowledgetypename)">{{ item.knowledgetypename }}</view>
				<!-- 	<view class="hot">醉酒驾驶处罚的新标准</view>
				<view class="">拆迁法规</view>
				<view class="hot">交通事故怎么赔偿</view>
			     -->
			</view>
			<navigator url="changshi" class="qian_26 more_zhuanti">
				<image src="@/static/img/gengduo.png" mode=""></image>
				查看更多热门专题>>
			</navigator>

			<view class="tab_bg" v-if="is_gengxin">
				<view class="tan">
					<view class="tan_top"><image src="@/static/img/gengxin.png" mode=""></image></view>
					<view class="tan_bottom hui_27">
						<view class="">解决了旧版本中已知BUG</view>
						<view class="tan_txt">优化了一部分不合理的功能</view>
						<image src="@/static/img/gengxin_btn.png" mode="widthFix" @click="down"></image>
					</view>
				</view>
			</view>
		</view>
		
		<tabBar :currentPage="currentPage" :num='weidu'></tabBar>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import pickerAddress from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
import socket from 'plus-websocket';
import tabBar from '@/components/y_tabbar/tabbar.vue';
//#ifdef H5
import $ from '@/common/jquery-3.4.1.min.js';
import { loadBMap } from '@/common/map.js';
//#endif
export default {
	data() {
		return {
			sou_txt: '',
			dizhi: '定位中',
			topbg: '#86dbbe',
			url: uni.getStorageSync('img_url'),
			data: '',
			tabList: '',
			currentPage:'index/index',
			TabCur: 0,
			// tabList: [
			// 	{
			// 		name: '全部'
			// 	},
			// 	{
			// 		name: '婚姻家庭'
			// 	},
			// 	{
			// 		name: '交通事故'
			// 	},
			// 	{
			// 		name: '形势辩护'
			// 	},
			// 	{
			// 		name: '劳动工伤'
			// 	},
			// 	{
			// 		name: '婚姻家庭'
			// 	}
			// ],
			current: 0,
			banner: [
				{
					img: '../../static/img/banner1.jpg'
				},
				{
					img: '../../static/img/banner2.jpg'
				},
				{
					img: '../../static/img/banner3.jpg'
				},
				{
					img: '../../static/img/banner4.jpg'
				},
				{
					img: '../../static/img/banner5.jpg'
				}
			],
			btnnum: 1,
			fa_zhishi: '',
			is_gengxin: false,
			banben: '',
			down_url: '',
			tiao_type: 1,
			zhineng: ''
		};
	},
	components: {
		WucTab,
		pickerAddress,
		tabBar
	},
	created() {
		var that = this;
		uni.getLocation({
			type: 'gcj02',
			geocode: true, //设置该参数为true可直接获取经纬度及城市信息
			success: function(res) {
				console.log(res, '');
				uni.request({
					url: 'http://api.map.baidu.com/geocoder/v2/?ak=GPCxs0BGTWyIpUmkft16DNzH9wUUofzQ&output=json&pois=1&location=' + res.latitude + ',' + res.longitude,
					success(res) {
						console.log(res);

						that.dizhi = res.data.result.addressComponent.city;
						// console.log(res.data.result.addressComponent.city,'')
						uni.setStorage({
							key: 'dizhi',
							data: {
								sheng: res.data.result.addressComponent.province,
								shi: res.data.result.addressComponent.city,
								qu: res.data.result.addressComponent.district
							}
						});
					}
				});
			},
			fail: function(err) {
				console.log(err);
				// uni.showToast({
				// 	title: '获取地址失败,请手动选择',
				// 	icon: 'none'
				// });
			}
		});

		// #ifdef H5
		window.initBaiduMapScript = () => {
			// console.log(BMap);
			this.getlocation();
		};
		loadBMap('initBaiduMapScript');
		//#endif
	},
	onLoad() {
		// if (this._isMobile()) {
		//      alert("手机端");
		//    } else {
		//      alert("pc端");
		//    }
		//#ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, wgtinfo => {
			console.log(JSON.stringify(wgtinfo));
			console.log('版本号', wgtinfo.versionCode); //应用版本号
			this.banben = wgtinfo.versionCode;
			this.huiqu_banben();
		});

		this.kaiqi();
		//#endif
	},
	onShow() {
		this.$http
			.post({
				url: '/mapi/index/geturl'
			})
			.then(res => {
				this.url = res.data.url;
				uni.setStorageSync('img_url', res.data.url);
			});

		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.tabList = res.data.type;
			});

		// 获取首页信息
		this.$http
			.post({
				url: '/mapi/index/index'
			})
			.then(res => {
				this.data = res.data;
			});
		// 获取知识一级
		this.$http
			.post({
				url: '/mapi/index/knowledgetype'
			})
			.then(res => {
				this.fa_zhishi = res.data.type[1];
			});

		// 获取跳转链接
		this.$http
			.post({
				url: '/mapi/index/getzixunjump'
			})
			.then(res => {
				this.tiao_type = res.data.zhan.zixunjump;
			});
		// 查看只能服务报价
		this.$http
			.post({
				url: '/mapi/index/getzixun'
			})
			.then(res => {
				this.zhineng = res.data.zhan;
			});
	},
	methods: {
		down() {
			//#ifdef APP-PLUS
			var urlStr = encodeURI(this.down_url); //把字符串作为url进行编码
			plus.runtime.openURL(urlStr);
			//#endif
		},
		huiqu_banben() {
			this.$http
				.post({
					url: '/mapi/index/banben'
				})
				.then(res => {
					console.log(res.data.banben, '版本');
					if (uni.getSystemInfoSync().platform == 'ios') {
						console.log('ios', this.banben);
						if (this.banben != res.data.banben.ios) {
							this.is_gengxin = true;
							this.down_url = res.data.banben.iosurl;
							uni.hideTabBar();
						}
					} else if (uni.getSystemInfoSync().platform === 'android') {
						console.log('android', this.banben);
						if (this.banben != res.data.banben.android) {
							this.is_gengxin = true;
							this.down_url = res.data.banben.androidurl;
							uni.hideTabBar();
						}
					}
				});

			const clientInfo = plus.push.getClientInfo();
			console.log(clientInfo, '6666');
		},
		huoqu_weidu() {
			this.$http
				.post({
					url: '/mapi/consult/messagecount'
				})
				.then(res => {
					if (res.data.messagecount > 0) {
						uni.setTabBarBadge({
							index: 3,
							text: '' + res.data.messagecount
						});
					} else {
						uni.removeTabBarBadge({
							index: 3
						});
					}
				});
		},
		kaiqi() {
			let that = this;
			Object.assign(uni, socket);
			console.log(Object.assign(uni, socket));
			var url = that.$http.WebSocket_url;
			socket.connectSocket({
				url: 'ws://' + url + ':3348',
				success(data) {
					console.log('websocket已连接', JSON.stringify(data));
				}
			});
			socket.onSocketOpen(function(res) {
				console.log('WebSocket连接已打开！');
			});
			socket.onSocketError(function(res) {
				console.log('WebSocket连接打开失败，请检查！', JSON.stringify(res));
			});
			socket.onSocketMessage(function(res) {
				console.log('收到服务器内容：' + res.data);
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
						void plus.push.createMessage('用户端收到一条新消息');
						that.huoqu_weidu();
					}
				} else {
					console.log('else');
				}
				console.log(data);
			});
			socket.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
		},
		tabChange(index) {
			this.TabCur = index;
			uni.switchTab({
				url: 'zixun'
			});
			uni.setStorage({
				key: 'zhuanchang',
				data: this.tabList[index].typename
			});
		},
		_isMobile() {
			let flag = navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			);
			return flag;
		},
		/* 键盘上完成的事件 */
		confirm() {
			var that = this;
			//搜索的代码
			console.log(that.sou_txt);
		},

		swiperchang(e) {
			this.current = e.detail.current;
			if (e.target.current == 0) {
				this.topbg = '#86dbbe';
			} else if (e.target.current == 1) {
				this.topbg = '#4075fc';
			} else if (e.target.current == 2) {
				this.topbg = '#d6992a';
			} else if (e.target.current == 3) {
				this.topbg = '#45adc3';
			} else if (e.target.current == 4) {
				this.topbg = '#b83947';
			}
		},

		change(e) {
			this.btnnum = e;
		},
		xuandizhi(data) {
			this.dizhi = data.data[1];
			//                this.txt = data.data.join('')
			//                console.log(data.data.join(''))
		},
		tiaozhuan() {
			uni.switchTab({
				url: 'lvshi'
			});
		},
		tiaozhuan_zixun() {
			uni.switchTab({
				url: 'zixun'
			});
		},
		zixun_xq(id) {
			uni.navigateTo({
				url: 'zhuye_zixun_xq?id=' + id
			});
		},
		tochat(lawyerid) {
			if (this.tiao_type == 1) {
				uni.navigateTo({
					url: 'chat?lawyerid=' + lawyerid
				});
			} else {
				uni.navigateTo({
					url: 'ls_zhuye?lawyerid=' + lawyerid
				});
			}
		},
		go_ls_list() {
			uni.switchTab({
				url: 'lvshi'
			});
		},
		go_zhuye(id) {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid=' + id
			});
		},

		// 获取经纬度
		getlocation() {
			const that = this;
			// var wei_url=''

			// if (process.env.NODE_ENV == 'development') {
			//     wei_url='/dpc'
			// 	// #ifndef H5
			// 	wei_url='http://api.map.baidu.com'
			// 	// #endif
			// } else {
			//     wei_url = 'http://api.map.baidu.com' // 生产环境
			// }

			this.$nextTick(function() {
				try {
					const geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition(function(r) {
						$.ajax({
							url: 'http://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude,
							type: 'GET',
							async: false, //设置同步。ajax默认异步
							dataType: 'jsonp',
							jsonp: 'callback', //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
							jsonpCallback: 'callback', //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
							timeout: 5000,
							contentType: 'application/json; charset=utf-8',
							success: function(res) {
								that.dizhi = res.result.addressComponent.city;
								uni.setStorage({
									key: 'dizhi',
									data: {
										sheng: res.result.addressComponent.province,
										shi: res.result.addressComponent.city,
										qu: res.result.addressComponent.district
									}
								});
							}
						});
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
		},
		go_zhishi_xq(knowledgetypeid, name) {
			uni.navigateTo({
				url: 'changshi_erji?typeid=' + knowledgetypeid + '&name=' + name
			});
		}
	},

	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
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
};
</script>

<style>
.tab {
	display: flex;
	align-items: center;
	margin-top: 50rpx;
	padding: 0 20rpx;
}

.tab image {
	width: 23rpx;
	height: 24rpx;
}

.index_top {
	height: 200rpx;
	/* background-color: #86dbbe; */
	/* border-radius: 0 0rpx 200rpx 200rpx; */
	padding: 38rpx 0rpx 0;
	position: relative;
}

.index_top1 {
}
.index_top0::after {
	content: '';
	width: 100%;
	height: 100rpx;
	position: absolute;
	display: inline-block;
	left: 0rpx;
	bottom: -100rpx;
	z-index: -1;
	border-radius: 0 0 62% 62%;
	background: #86dbbe;
}
.index_top1::after {
	content: '';
	width: 100%;
	height: 100rpx;
	position: absolute;
	display: inline-block;
	left: 0rpx;
	bottom: -100rpx;
	z-index: -1;
	border-radius: 0 0 62% 62%;
	background: #4075fc;
}
.index_top2::after {
	content: '';
	width: 100%;
	height: 100rpx;
	position: absolute;
	display: inline-block;
	left: 0rpx;
	bottom: -100rpx;
	z-index: -1;
	border-radius: 0 0 62% 62%;
	background: #d6992a;
}
.index_top3::after {
	content: '';
	width: 100%;
	height: 100rpx;
	position: absolute;
	display: inline-block;
	left: 0rpx;
	bottom: -100rpx;
	z-index: -1;
	border-radius: 0 0 62% 62%;
	background: #45adc3;
}
.index_top4::after {
	content: '';
	width: 100%;
	height: 100rpx;
	position: absolute;
	display: inline-block;
	left: 0rpx;
	bottom: -100rpx;
	z-index: -1;
	border-radius: 0 0 62% 62%;
	background: #b83947;
}
.index_top_dingwei {
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 99;
	padding: 30rpx 20rpx;
	width: 100%;
	box-sizing: border-box;
	top: 0;
	max-width: 750px;
}

.fenlei {
	width: 670rpx;
}

.dingwei {
	margin-right: 14rpx;
	display: flex;
	align-items: center;
}

.dingwei image {
	width: 23rpx;
	height: 28rpx;
	margin-right: 8rpx;
	vertical-align: text-top;
}

scroll-view ::-webkit-scrollbar {
	width: 0;
	height: 0;
	background-color: transparent;
}

.index_sousuo {
	width: 552rpx;
	height: 55rpx;
	background-color: #ffffff;
	border-radius: 28rpx;
	display: flex;
	align-items: center;
}

.index_sousuo input {
	width: 85%;
	height: 55rpx;
}

.index_sousuo image {
	width: 23rpx;
	height: 24rpx;
	margin: 0 19rpx;
}

.swiper {
	height: 300rpx;
	position: relative;
	padding: 0 20rpx;
}

.swiper-item {
	height: 100%;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 30, 20, 0.35);
	border-radius: 10rpx;
}

.swiper-item image {
	width: 100%;
	height: 100%;
	border-radius: 10rpx;
}

.index_tab {
	margin-top: 280rpx;
	display: flex;
	flex-wrap: wrap;
}

.index_tab_item {
	text-align: center;
	width: 25%;
	margin-bottom: 40rpx;
}

.index_tab_item image {
	width: 82rpx;
	height: 82rpx;
	margin-bottom: 10rpx;
}

.index_wenti {
	padding: 0 20rpx;
}

.index_wenti image {
	height: 197rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(188, 188, 188, 0.35);
	border-radius: 10rpx;
	margin-bottom: 50rpx;
	width: 100%;
}

.index_wenti_bottom {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0 20rpx 24rpx;
}

.index_wenti_bottom text {
	height: 25rpx;
	background-color: #0eb77e;
	border-radius: 2rpx;
	display: inline-block;
	margin-right: 5rpx;
	padding: 0 6rpx;
	line-height: 25rpx;
	font-size: 24rpx;
	color: #ffffff;
}

.index_wenti_bottom text:first-child {
	margin-left: 2rpx;
}

.wenti_item {
	width: 50%;
	margin-bottom: 10rpx;
}

.index_zixun_item_bottom {
	display: flex;
}

.index_zixun_item:first-child {
	border-top: 1px solid #d9d9d9;
}

.index_zixun_item {
	border-bottom: 1px solid #d9d9d9;
	padding: 30rpx 20rpx;
	word-break: break-all;
}

.index_zixun_item_bottom view {
	margin-right: 50rpx;
}

.zixun_title {
	margin-bottom: 14rpx;
	line-height: 36rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.shijian image {
	width: 21rpx;
	height: 21rpx;
	margin-right: 10rpx;
}

.biaoqian image {
	width: 21rpx;
	height: 20rpx;
	margin-right: 10rpx;
}

.dizhi image {
	width: 18rpx;
	height: 20rpx;
	margin-right: 10rpx;
}

.zixun_tab {
	display: flex;
	border-top: 20rpx solid #f7f7f7;
	padding: 15rpx 0;
	align-items: center;
}

.zixun_tab text {
	width: 50%;
	display: inline-block;
	text-align: center;
	height: 50rpx;
	line-height: 50rpx;
}

.zixun_tab text:first-child {
	border-right: 1px solid #d9d9d9;
}

.hei {
	color: #333333;
}

.tuijian {
	border-bottom: 20rpx solid #f7f7f7;
	padding-bottom: 13rpx;
}

.tuijian_top {
	padding: 6rpx 64rpx 0;
	margin-bottom: 30rpx;
}

.tuijian_top image {
	width: 100%;
	height: 198rpx;
}

/* 推荐律师	 */
.tuijian_list {
	padding: 0 20rpx;
}

.tuijian_item {
	display: flex;
	padding: 32rpx 0;
	border-bottom: 1px solid #d9d9d9;
}

.tuijian_item:last-child {
	border: none;
}

.tuijian_item_left {
	width: 130rpx;
	margin-right: 20rpx;
}

.tuijian_item_left image {
	width: 100%;
	height: 131rpx;
	background-color: #1073ea;
	border-radius: 100%;
}

.tuijian_item_right {
	width: 560rpx;
}

.ls_name {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.ls_name_left image {
	width: 22rpx;
	height: 20rpx;
	margin-left: 11rpx;
}

.ls_name_right {
	padding: 0 10rpx;
	height: 44rpx;
	background-color: #ffffff;
	border-radius: 22rpx;
	border: solid 2rpx #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
}

.ls_name_right image {
	width: 18rpx;
	height: 18rpx;
	margin-right: 5rpx;
}

.ls_gongsi {
	display: flex;
	align-items: center;
	margin-top: 6rpx;
}

.ls_dizhi {
	margin: 10rpx 0 10rpx;
}

.ls_dizhi image {
	width: 19rpx;
	height: 20rpx;
	margin-right: 12rpx;
}

.ls_fuwu image {
	width: 26rpx;
	height: 22rpx;
	margin-right: 10rpx;
}
.ls_fuwu text,
.ls_pingjia text {
	margin: 0 4rpx;
}
.ls_fuwu,
.ls_pingjia {
	display: flex;
	align-items: center;
}

.ls_pingjia image {
	width: 25rpx;
	height: 23rpx;
	margin-right: 10rpx;
}

.tese_ls {
	display: inline-block;
	padding: 0rpx 10rpx;
	margin-right: 9rpx;
	background-color: #ffad2b;
	border-radius: 3rpx;
	border-radius: 6rpx;
}

.ls_bottom {
	display: flex;
	align-items: center;
}

.ls_fuwu {
	margin-right: 60rpx;
}

.ls_more {
	height: 70rpx;
	background-color: #f7f7f7;
	width: 100%;
	border-radius: 0;
	line-height: 70rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.ls_more image {
	width: 27rpx;
	height: 27rpx;
	margin-right: 11rpx;
}

.ls_more::after {
	border-left: none !important;
	border-right: none;
	border-radius: 0;
}

.zhuanti_title {
	height: 100rpx;
	line-height: 100rpx;
	position: relative;
	padding: 0 20rpx;
}

.zhuanti_title::after {
	content: '';
	display: inline-block;
	width: 132rpx;
	height: 18rpx;
	background-color: #0eb77e;
	border-radius: 9rpx;
	opacity: 0.5;
	position: absolute;
	left: 20rpx;
	bottom: 25rpx;
}

.zhuanti_list {
	padding: 0 20rpx;
	display: flex;
	flex-wrap: wrap;
}

.zhuanti_list view {
	padding: 10rpx 30rpx;
	background-color: #f8f8f8;
	border-radius: 25rpx;
	margin: 0 20rpx 28rpx 0;
}

.hot {
	position: relative;
	margin-right: 60rpx !important;
}

.hot::after {
	position: absolute;
	right: -40rpx;
	content: '';
	display: inline-block;
	width: 50rpx;
	height: 30rpx;
	background: url(../../static/img/hot.png) no-repeat;
	background-size: 100% 100%;
	border-radius: 5rpx;
}

.more_zhuanti {
	width: 100%;
	text-align: center;
	height: 70rpx;
	background-color: #f7f7f7;
	line-height: 70rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.more_zhuanti image {
	width: 27rpx;
	height: 27rpx;
	margin-right: 11rpx;
}
.lunbo {
	position: relative;
}

.dot {
	width: 8rpx;
	height: 8rpx;
	background-color: #c7c7c7;
	margin-right: 5rpx;
	border-radius: 100%;
}

.dots {
	margin: auto;
	position: absolute;
	left: 0;
	bottom: 20rpx;
	right: 0;
	display: flex;
	height: 10rpx;
	width: 200rpx;
	justify-content: center;
}

.active {
	width: 30rpx;
	height: 8rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.index_fazhi image {
	margin-right: 9rpx;
	width: 47rpx;
	height: 35rpx;
}
.index_fazhi {
	padding-left: 25rpx;
	margin: 30rpx 0 40rpx;
}
.tan {
	width: 523rpx;
	height: 627rpx;
	background-color: #ffffff;
	border-radius: 25rpx;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.tan_top image {
	width: 100%;
	height: 354rpx;
}
.tan_bottom {
	text-align: center;
	padding: 20rpx 0 0;
}
.tan_bottom image {
	width: 126rpx;
}
.tan_txt {
	margin: 10rpx 0;
}
.tab_bg {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 99999;
}

.zhineng {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx 20rpx;
	border-top: 20rpx solid #f7f7f7;
	border-bottom: 20rpx solid #f7f7f7;
}
.zhineng_item {
	width: 345rpx;
	height: 210rpx;
	padding: 30rpx 0 0 28rpx;
	box-sizing: border-box;
}
.zhineng_zaixian {
	background: url(../../static/img/zhineng1_bg.png) no-repeat;
	background-size: 100% 100%;
}
.zhineng_dianhua {
	background: url(../../static/img/zhineng2_bg.png) no-repeat;
	background-size: 100% 100%;
}
.zhineng_item_type image {
	width: 36rpx;
	height: 20rpx;
	margin-left: 8rpx;
}
.zhineng_item_jiage {
	margin: 6rpx 0 6rpx;
}
.zhineng_item_txt {
	margin-bottom: 6rpx;
}
</style>
