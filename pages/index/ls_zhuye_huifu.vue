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
						<text  v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
						<text  v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
						<text  v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
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
					<view class="bottom_fenxiang" @click="share">
						<image src="@/static/img/share.png" mode=""></image>
						<view class="hui_26">分享</view>
					</view>
					<view class="bottom_guanzhu" @click="guanzhu">
						<image :src="type==1 ? '../../static/img/guanzhu_on_icon.png' : '../../static/img/guanzhu_icon.png'"    mode="" style="width: 41rpx;height: 38rpx;"></image>
						<view class="hui_26">{{type==1?'已关注':'关注'}}</view>
					</view>
					<view class="bottom_pingjia" @click="go_chat()">
						<image src="@/static/img/siliao.png" mode=""></image>
						<view class="hui_26">私聊</view>
					</view>
					<view class="dianhua lv_26" >
						<!-- <image src="@/static/img/dianhua_lv.png" mode=""></image> -->
					 <view class="lv_24 bottom_jiage" v-if="baojia&&baojia.jianmian" @click="tan(5,baojia.jianmian)">
					 	￥<text class="lv_32">{{baojia.jianmian}}</text>
					 </view>
					 <view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.jianmian ">
					 	<text class="lv_32">未报价</text>
					 </view>
						见面咨询
					</view>
					<view class="zaixian bai_26" >
						<!-- <image src="@/static/img/zaixian_bai.png" mode=""></image> -->
						<view class="bai_24 bottom_jiage" v-if="baojia&&baojia.zaixian1" @click="tan(1,baojia.zaixian1)">
							￥<text class="bai_32">{{baojia.zaixian1}}</text>
						</view>
						<view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.zaixian1 ">
							<text class="bai_32">未报价</text>
						</view>
						在线咨询
					</view>
				</view>
			</view>
		</view>
		<uni-popup type="bottom" ref="popup">
			<view class="tan_jiage">
			<view class="tan_jiage_top">
				<image :src="img_url + lvshi.photourl" mode=""></image>
			<view class="tan_jiage_top_right">
				<view class="hong_24">
					￥<text class="hong_38">{{pay_money}}</text>
				</view>
				<view class="tan_shanchang hui_26">
					擅长：		
				  <text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
				  <text v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
				  <text v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
				</view>
				<view class="hui_24">
					{{tan_jia_jianjie}}
				</view>
			</view>		
				
			</view>	
				
			<view class="tan_jiage_bottom" v-if="baojia">
				<view class="tan_jiage_title hei_28_bold">
					服务类型
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_leixing">
					<text v-for="(item,index) in all_dalei" @click="huan_leixing(item.serviceid)" :class="leixing_index==item.serviceid?'tan_xuan_active':''">{{item.name}}</text>
				</view>
				<view class="tan_jiage_title hei_28_bold">
					服务时长
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" >
					<text v-for="(item,index) in erjijia_list" :class="shichang_index==index?'tan_xuan_active':''" @click="huan_shichang(index,baojia[item.baojiamode],item.name,item.upserviceid)">{{item.name}}<text v-if="item.upserviceid!=1&&item.upserviceid!=2" class="danwei">/{{item.unit}}</text></text>
				</view>
			
			</view>	
					
				<view class="tan_jiage_btn">
					<button type="" @click="go_pay(lawyerid,1)">立即购买</button>
				</view>
				
			</view>	
		</uni-popup>
	</view>
</template>

<script>
	import unpopup from '@/components/uni-popup/uni-popup-share.vue';
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
			yeshu:0,
			type:2,
			leixing_index:1,
			shichang_arry:['1天','3天','1个月'],
			shichang_index:-1,
			tan_jia_jianjie:'实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。',
			baojia:'',
			pay_money:0,
			shichang_txt:'',
			baojia_list:[],
			all_dalei:[],
			jiage_arry:[],
			erjijia_list:[]
		};
	},
	components: {
		unpopup
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
		this.huoqu_baojia()
		this.huoqu_baojia_list()
		// 检测是否关注
		this.$http
			.post({
				url: '/index/login/islogin'
			})
			.then(res => {
				if(res.data.user!=''){
					this.$http
						.post({
							url: '/mapi/index/findbrowse',
							data:{
								state:2,
								lawyerid:this.lawyerid
							}
						})
						.then(res => {
							this.type=res.data.type
						});
					
				}else{
					
				}
			});
		
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
		// 获取报价信息
		huoqu_baojia_list(){
			this.$http
				.post({
					url: '/mapi/index/lawyerservice'
				})
				.then(res => {
					this.baojia_list=res.data
					res.data.forEach((item, index, array) => {
						if (!item.upserviceid) {
							this.all_dalei.push(item);
							this.jiage_arry.push([]);
						}
					});
					this.huan_leixing(this.all_dalei[0].serviceid)
				});
			
			
		},
		huoqu_baojia(){
			this.$http
				.post({
					url: '/mapi/index/baojia',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					this.baojia=res.data.lawyer
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
		go_chat(){
			uni.navigateTo({
				url:'chat?lawyerid='+this.lawyerid
			})
		},
		guanzhu(){
			this.$http
				.post({
					url: '/mapi/index/guanzhu',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.type=res.data.type
						uni.showToast({
							title: res.message,
							duration: 2000,
							icon: 'none'
						});
					}
				});
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
				url:'pingjia?lawyerid='+this.lawyerid
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
		go_pay(lawyerid,type){
			
			console.log(this.leixing_index,this.shichang_txt)
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid+'&type='+ this.leixing_index +'&time='+this.shichang_txt+'&pay_money='+this.pay_money
			})
		},
       // 底部弹窗
		tan(type,money) {
			if(!this.baojia){
				return false
			}
			this.$refs.popup.open();
			this.pay_money=money
			this.shichang_index=0
			this.leixing_index=type
			this.huan_erjilist(type)
			if(type==1){
				this.shichang_txt='1小时'
			}else if(type==2){
				this.shichang_txt='20分钟'
			}else{
				this.shichang_txt='1次'
			}
			
		},
		huan_erjilist(serviceid){
			this.$http
				.post({
					url: '/mapi/index/lawyerservice',
					data: {
						upserviceid: serviceid,
						
					}
				})
				.then(res => {
					this.erjijia_list=res.data
					
				});
		},
		huan_leixing(serviceid){
			
			this.huan_erjilist(serviceid)
		
			this.leixing_index=serviceid
			this.pay_money=0
			this.shichang_index = -1
		
			if(serviceid==1){
				this.tan_jia_jianjie='实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。'
			    
			}else if(serviceid==2){
				this.tan_jia_jianjie='实时对话，快速沟通，高效解答，服务期内提问100%解答，规定时间内不限拨打次数。'
			    
			}else if(serviceid==3){
				this.tan_jia_jianjie='3天内交付，7天有效期内不限修改次数。'
				
			}else if(serviceid==4){
				this.tan_jia_jianjie='会见当事人，了解真实案例，监督侦察工作，提前保存证据，保障当事人合法权益。'
			    
			}else{
				this.tan_jia_jianjie=''
			}
		},
		huan_shichang(index,money,text){
			this.shichang_index=index
			this.pay_money=money
		    this.shichang_txt=text
		},
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
	padding: 10rpx 0 0;
	height: 120rpx;
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
	width: 100rpx;
}
.bottom_fenxiang image {
	width: 38rpx;
	height: 36rpx;
}

.bottom_pingjia image {
	width: 38rpx;
	height: 38rpx;
}
.dianhua {
	width: 225rpx;
	height: 100%;
	box-sizing: border-box;
	text-align: center;
	background-color: #ceffee;
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
	width: 225rpx;
	height: 100%;
	background-color: #0eb77e;
	text-align: center;
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

.ls_jianjie {
	padding: 0 30rpx 30rpx;
	line-height: 36rpx;
	border-bottom: 20rpx solid #f3f3f3;
}
.ls_jianjie_title {
	line-height: 90rpx;
}
.xixin_title {
	margin: 20rpx 0 20rpx;
}
.jiben_xixin,
.lianxi {
	padding: 0 0rpx 0 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.jiben_xixin {
	border-bottom: 20rpx solid #f3f3f3;
}
.jiben_xixin_list {
	display: flex;
	padding: 0 22rpx;
	margin-bottom: 20rpx;
}
.jiben_xixin_list_right {
	margin-left: 85rpx;
}
.lianxi_right {
	max-width: 77%;
	margin-left: 25rpx;
}
.bottom_jiage{
	margin: 16rpx 0 6rpx;
}

.tan_jiage_top{
	display: flex;
}
.tan_jiage_top image{
	width: 151rpx;
		height: 151rpx;
		border-radius: 100%;
}
.tan_jiage_top_right{
	margin-left: 20rpx;
	width: 550rpx;
}
.tan_shanchang{
	margin: 6rpx 0;
}
.tan_shanchang text{
		height: 43rpx;
		background-color: #f5f5f5;
		display: inline-block;
		padding:  0 20rpx;
		margin-right: 8rpx;
}
.tan_shanchang text:last-child{
	margin-right: 0;
}
.tan_jiage{
	padding:30rpx;
	background-color: #FFFFFF;
	padding-bottom: 50rpx;
}

	.tan_jiage_title_leixing{
		display: flex;
		flex-wrap: wrap;
	}
	.tan_jiage_title_leixing text{
			width: 154rpx;
			height: 57rpx;
			background-color: #ffffff;
			border-radius: 5rpx;
			border: solid 2rpx #c6c6c6;
			display: inline-block;
			line-height: 57rpx;
			text-align: center;
			margin-right: 18rpx;
			margin-bottom: 10rpx;
			
	}
	.tan_jiage_title_leixing text:nth-child(4n){
		margin-right: 0;
	}
.tan_jiage_title_list_shichang text{
	display: inline-block;
	height: 57rpx;
		border-radius: 5rpx;
		border: solid 2rpx #c6c6c6;
		padding: 0 20rpx;
		line-height: 57rpx;
		text-align: center;
		margin-right: 18rpx;
		margin-bottom: 10rpx;
}
	
.tan_jiage_title {
	line-height: 80rpx;
}
.tan_jiage_btn{
	margin-top: 120rpx;
}
.tan_jiage_btn button{
		height: 88rpx;
		background-color: #0eb77e;
		border-radius: 44rpx;
		font-size: 38rpx;
		color: #FFFFFF;
	}
.tan_xuan_active{
		border: solid 2rpx #0eb77e !important;
		color:#0eb77e ;
}
.danwei{
	width: auto;
display: inline-block;
margin: 0 !important;
border: none !important;
padding: 0  !important;
}
</style>
