<template>
	<view class="body">
		<view class=" ">
			<view class="ls_top_bg">
				<view class="ls_top_bg_wai">
					<view class="head2">
						<view class="head_back"><image src="@/static/img/bai_back.png" mode="" @click="navigateBack()"></image></view>
						<view class="head_center bai_38_bold">律师主页</view>
						<view class=" head_right hei_30_bold"></view>
					</view>
				</view>
			</view>
			<view class="ls_padd">
				<view class="ls_top">
					<view class="ls_tx">
						<image :src="img_url+lvshi.photourl" mode="" class="ls_tx_img"></image>
						<image src="@/static/img/ls_ren.png" mode="" class="is_ren"></image>
					</view>
					<view class="hei_28_bold">{{lvshi.nickname}}</view>
					<view class="qian_26 ls_dizhi">
						<text>{{lvshi.province}}-{{lvshi.city}}</text>
						<text>专职律师</text>
					</view>
					<view class="hui_26 techang" v-if="lvshi!=''">
						<text>{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
						<text>{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
						<text>{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
					</view>
					<view class="ls_gaikuo">
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.replynum}}</view>
							<view class="qian_26">解答咨询</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.likenum}}</view>
							<view class="qian_26">获得点赞</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{lvshi.pingfen}}</view>
							<view class="qian_26">综合评分</view>
						</view>
					</view>
				</view>
			</view>

			<view class="fuwu_body">
				<view class="hei_28_bold ls_jilu">律师近期回复列表</view>

				<view class="huifu_list">
					<view class="huifu_item" v-for="item in list" @click="xq(item.consultid)">
						<view class="huifu_item_huida">
							<view class="huifu_item_huida_left hei_24">
								<image src="@/static/img/wenda_da.png" mode=""></image>
								我的回复：
							</view>
							<view class="hei_24 txt">{{item.crinformation}}</view>
						</view>
						<view class="huifu_item_wen qian_24">
							<view class=" ">用户提问：</view>
							<view class=" txt">{{item.information}}</view>
						</view>
						<view class="huifu_item_bottom qian_24">
							<text class="biaoqian">#{{type_list[item.typeid].typename}}</text>
							<text>{{ item.addtime | timeStamp }}</text>
						</view>
					</view>
				</view>

				<view class="fenye hei_26">
					<view class="shangyiye" @click="pre_ye()">
						<image src="@/static/img/shangye.png" mode="" style="width: 14rpx;height: 14rpx;"></image>
						上一页
					</view>
					<view class="yeshu qian_26">
						<text class="lv_26">{{page+1}}</text>
						/{{yeshu}}
					</view>
					<view class="xiayiye"@click="nextye()">
						下一页
						<image src="@/static/img/xiaye.png" mode="" style="width: 14rpx;height: 14rpx;"></image>
					</view>
				</view>

				<view class="zhanwei2" style="height: 120rpx;"></view>
				<view class="bottom">
					<view class="bottom_fenxiang"@click="share" >
						<image src="@/static/img/share.png" mode=""></image>
						<view class="hui_26">分享</view>
					</view>
					<view class="bottom_guanzhu" @click="guanzhu">
						<image src="@/static/img/guanzhu_icon.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
						<view class="hui_26">关注</view>
					</view>
					<view class="bottom_pingjia" @click="go_dianping()">
						<image src="@/static/img/go_pingjia.png" mode=""></image>
						<view class="hui_26">评价</view>
					</view>
					<view class="dianhua lv_26" @click="go_chat(lvshi.userid)">
						<image src="@/static/img/dianhua_lv.png" mode=""></image>
						电话咨询
					</view>
					<view class="zaixian bai_26" @click="go_chat(lvshi.userid)">
						<image src="@/static/img/zaixian_bai.png" mode=""></image>
						在线咨询
					</view>
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
			lawyerid:'',
			zhuanchang_arry:'',
			lvshi:'',
			page:0,
			is_all:false,
			type_list:[],
			list:[],
			yeshu:0
		};
	},
	created() {},
	onLoad(option) {
		// 获取分类
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.type_list = res.data.type;
			});
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi()
			});
		this.lawyerid=option.lawyerid
		this.huoqu_list()
		this.huiqu_num()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xq(id) {
			uni.navigateTo({
				url: 'zhuye_zixun_xq?id='+id
			});
		},
		// 律师信息
		huoqu_lvshi(){
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.lvshi=res.data.lawyer
					
					}
				});	
		},
		// 分享
		share(){
			uni.navigateTo({
				url:'sucai?state=1'
			})
		},
		// 获取回复列表
		huoqu_list(){
			this.$http
				.post({
					url: '/mapi/lawyer/consultlist',
					data: {
						lawyerid:this.lawyerid,
						page:this.page
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.list=res.data.consult;
						if(res.data.consult.length<10){
							this.is_all=true
						}
					}
				});	
		},
		// 获取回复总数
		huiqu_num(){
			this.$http
				.post({
					url: '/mapi/lawyer/consultlistcount',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.yeshu= Math.ceil(res.data.count/10); 
					}
				});	
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_chat(id){
			uni.navigateTo({
				url:'chat?lsid='+id
			})
		},
		guanzhu(){
			
		},
		pre_ye(){
			if(this.page==0){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page--
				this.huoqu_list()
			}
		},
		nextye(){
			if(this.is_all){
				uni.showToast({
					title: '暂无更多',
					duration: 2000,
					icon: 'none'
				});
				return false
			}else{
				this.page++
				this.huoqu_list()
			}
		
		},
		go_dianping(){
			uni.navigateTo({
				url:'pingjia?lsid='+this.lawyerid
			})
		},
		call(mobile) {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: ''+mobile,
				// 成功回调
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		},
		go_pay(lawyerid){
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid
			})
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
};
</script>

<style>
.ls_top_bg {
	width: 100%;
	height: 308rpx;
	background: url(../../static/img/ls_bg.png) no-repeat;
	background-size: 100% 100%;
}
.head2 {
	background: none;
	padding-top: 86rpx;
	display: flex;
	justify-content: space-between;
	/* position: fixed; */
	top: 0;
	width: 100%;
	padding: 96rpx 30rpx 26rpx;
	z-index: 99;
	box-sizing: border-box;
	align-items: center;
}
.ls_tx_img {
	width: 152rpx;
	height: 152rpx;
	margin-top: -76rpx;
	border-radius: 100%;
}
.is_ren {
	width: 24rpx;
	height: 22rpx;
	position: absolute;
	bottom: 26rpx;
	left: 364rpx;
}
.ls_top {
	height: 398rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(0, 0, 0, 0.13);
	border-radius: 10rpx;
	text-align: center;
	padding: 0 30rpx;
	box-sizing: border-box;
}
.ls_padd {
	padding: 0 30rpx;
	margin-top: -45rpx;
}
.ls_tx {
	text-align: center;
	position: relative;
	margin-bottom: 10rpx;
}
.ls_gaikuo {
	display: flex;
	justify-content: space-between;
}
.ls_top_bg_wai {
	background-color: rgba(0, 0, 0, 0.6);
	height: 308rpx;
}
.ls_dizhi text {
	margin-right: 30rpx;
}
.ls_dizhi {
	margin: 10rpx 0;
}
.techang {
	margin: 30rpx 0;
}

.techang text {
	height: 42rpx;
	background-color: #f5f5f5;
	line-height: 42rpx;
	margin-right: 20rpx;
	padding: 10rpx 10rpx;
}
.ls_gaikuo {
	border-top: 2rpx solid #f7f7f7;
	padding: 20rpx 0;
}
.ls_gaikuo_item {
	position: relative;
	width: 33.33%;
}
.ls_gaikuo_item::before {
	content: '';
	width: 2rpx;
	height: 36rpx;
	background-color: #f7f7f7;
	position: absolute;
	right: 0;
	top: 26rpx;
}
.ls_gaikuo_item:last-child::before {
	content: none;
}
.ls_gaikuo_num {
	margin-bottom: 8rpx;
}

.ls_jilu {
	padding-left: 30rpx;
	margin: 37rpx 0 15rpx;
}

.pingjia {
	padding: 30rpx 0rpx 0rpx;
}
.pingjia_title {
	margin: 32prx 0 18rpx;
	padding: 0 30rpx;
}

.bottom {
	display: flex;
	padding: 0 30rpx;
	height: 100rpx;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
.bottom_fenxiang,
.bottom_pingjia,
.bottom_guanzhu{
	text-align: center;
	margin-right: 22rpx;
}
.bottom_fenxiang image {
	width: 24rpx;
	height: 23rpx;
}

.bottom_pingjia image {
	width: 25rpx;
	height: 24rpx;
}
.dianhua {
	width: 230rpx;
	height: 74rpx;
	border: solid 1rpx #0eb77e;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10rpx 0 0 10rpx;
}
.dianhua image {
	width: 25rpx;
	height: 27rpx;
	margin-right: 16rpx;
}
.zaixian image {
	width: 26rpx;
	height: 26rpx;
	margin-right: 12rpx;
}
.zaixian {
	width: 230rpx;
	height: 74rpx;
	background-color: #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 10rpx 10rpx 0;
}

.qiun-charts {
	width: 100%;
	height: 500rpx;
	background-color: #ffffff;
	border-bottom: 2rpx solid #f7f7f7;
}
.charts {
	width: 100%;
	height: 100%;
	background-color: #ffffff;
}
.huifu_item_huida_left {
	/* display: flex; */
	/* align-items: center; */
}
.huifu_list {
	padding: 0 30rpx;
}
.huifu_item_huida {
	display: flex;
	line-height: 40rpx;
}
.huifu_item_huida_left image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 11rpx;
	/* vertical-align: middle; */
}
.huifu_item {
	border-bottom: 2rpx solid #eeeeee;
	padding: 12rpx 0;
}
.huifu_item:last-child {
	border: none;
}
.huifu_item_wen {
	padding-left: 35rpx;
	display: flex;
	margin: 10rpx 0;
	line-height: 40rpx;
}
.txt {
	max-width: 528rpx;
}
.biaoqian {
	margin-right: 34rpx;
}
.huifu_item_bottom {
	padding-left: 35rpx;
}
.fenye {
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
	height: 88rpx;
	background-color: #fcfcfc;
	align-items: center;
	margin-bottom: 50rpx;
	border-top: 2rpx solid #eeeeee;
	border-bottom: 2rpx solid #eeeeee;
}
.yeshu {
	height: 41rpx;
	border-radius: 20rpx;
	border: solid 1rpx #dcdcdc;
	line-height: 40rpx;
	padding: 0 40rpx;
}
.shangyiye,
.xiayiye {
	display: flex;
	align-items: center;
}
</style>
