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
	<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
	<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
	<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
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

				<view class="ls_renzheng qian_24">
					<view class="ls_renzheng_item ren_shiming">
						<image src="@/static/img/ls_shiming.png" mode=""></image>
						实名认证
					</view>
					<view class="ls_renzheng_item ren_zhiye">
						<image src="@/static/img/ls_zhiye.png" mode=""></image>
						执业认证
					</view>
					<view class="ls_renzheng_item ren_pingtai">
						<image src="@/static/img/ls_ping.png" mode="w"></image>
						平台认证
					</view>
				</view>
			</view>
			<view class="ls_tab qian_26">
				<navigator :url="'ls_zhuye?lawyerid='+lawyerid" class="ls_tab_item ">首页</navigator>
				<navigator :url="'ls_zhuye_index?lawyerid='+lawyerid" class="ls_tab_item ls_tab_item_active">律师服务</navigator>
				<navigator :url="'ls_xinxi?lawyerid='+lawyerid" class="ls_tab_item ">律师信息</navigator>
				<navigator :url="'ls_anli?lawyerid='+lawyerid" class="ls_tab_item ">律师案例</navigator>
				
				<!-- <view :class="['ls_tab_item', index == active ? 'ls_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="qiehuan(index)">{{ tab }}</view> -->
			</view>
			<view class="fuwu_body">
				<view class="fuwu_lei_list">
					<view class="fuwu_lei">
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
							<text class="hei_24_bold">在线咨询</text>	 
							<text v-if="baojia&&baojia.chatprice" class="hong_28"><text class="hong_22">￥</text>{{baojia.chatprice}}</text>
							<text v-if="!baojia || !baojia.chatprice ">未报价</text>
							
							</view>
							<text class="hui_20 fuwu_lei_title">简易需求,在线解答</text>
						</view>
					
						<view class="bai_24 lei_btn zaixian_btn" v-if="baojia&&baojia.chatprice " @click="tan()"><text>立即咨询</text></view>
						<view class="bai_24 lei_btn zaixian_btn" v-if="!baojia || !baojia.chatprice "><text>未开启</text></view>
					</view>
				
					<view class="fuwu_lei">
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
								<text class="hei_24_bold">电话咨询</text>
								<text v-if="baojia&&baojia.phoneprice "class="hong_28"><text class="hong_22">￥</text>{{baojia.phoneprice}}</text>
								<text v-if="!baojia || !baojia.phoneprice ">未报价</text>
							</view>
							<text class="hui_20 fuwu_lei_title">沟通方便，效率高</text>
						</view>
				
						<view class="lei_btn tuwen_btn bai_24" v-if="baojia&&baojia.phoneprice " @click="tan()"><text>立即咨询</text></view>
						<view class="lei_btn tuwen_btn bai_24" v-if="!baojia || !baojia.phoneprice "><text>未开启</text></view>
					</view>
					<view class="fuwu_lei">
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
								<text class="hei_24_bold">免费电话</text>
								<text class="hong_28"><text class="hong_22">￥</text>0</text>
				
							</view>
							<text class="hui_20 fuwu_lei_title">免费电话,方便快捷</text>
						</view>
					<!-- 	<view class=" dianhua_btn bai_30" v-if="lvshi!=''">
							<image src="@/static/img/zhuye_tab2.png" mode="widthFix" style="width: 12rpx;"></image>
							<text>{{ lvshi.mobile }}</text>
						</view> -->
						<view class="lei_btn boda_btn bai_24" @click="call(lvshi.mobile)"><text>拨打电话</text></view>
					</view>
				</view>

				<view class=" ls_jilu"><text class="hei_28_bold">律师服务记录</text><navigator :url="'./ls_zhuye_huifu?lawyerid='+lvshi.userid" class="qian_28">更多>></navigator></view>
				<!-- 图 -->

					<view class="qiun-charts" v-if="huifu_list.length!=0">
						<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
					</view>
		
				<view class="wenda_list">
					<view class="wenda" v-for="item in huifu_list" @click="go_tiwen_xq(item.consultid)">
						<view class="wenda_wen hei_24">
							<image src="@/static/img/wenda_wen.png" mode=""></image>
							用户提问：
							<view class="wenda_body">{{item.information}}</view>
						</view>
						<view class="wenda_da qian_24">
							<image src="@/static/img/wenda_da.png" mode=""></image>
							我的回复：
							<view class="wenda_body">{{item.crinformation}}</view>
						</view>
					</view>
				</view>

				<view class="tuwen">
					<view class="tuwen_title">
						<text class="hei_28_bold">图文解答</text>
						<navigator :url="'ls_zhuye_tuwen?lawyerid='+lvshi.userid" class="qian_28">更多>></navigator>
						
					</view>
					<scroll-view scroll-x="true" class="tuwen_list" v-if="tuwen_list.length!=0">
						<view class="tuwen_item" v-for="item in tuwen_list" @click="tuwen_xq(item.lytuwenid)">
							<image :src="img_url+item.pic" mode=""></image>
							<view class="tuwen_bottom">
								<text class="hei_26 tuwen_txt">{{item.title}}</text>
								<text class="qian_26">{{item.readnum}}次浏览</text>
							</view>
						</view>
					</scroll-view>
				</view>

				<view class="pingjia">
					<view class="pingjia_title qian_26">
						<text class="hei_28_bold">服务点评</text>
						(共{{pingjiatype.num}}条评价)
					</view>
					<view class="ping_tongji">
						<view class="ping_tongji_left" v-if="lvshi!=''">
							<text style="font-size: 40rpx;font-weight: bold;margin-right: 16rpx;">{{lvshi.pingfen}}</text>
							<image src="@/static/img/xing_on.png" mode="" v-for="img2 in quzheng(lvshi.pingfen)"></image>
							<image src="@/static/img/xing_no.png" mode="" v-for="img2 in 5-quzheng(lvshi.pingfen)"></image>
						</view>
						<view class="dianping qian_26" @click="go_dianping()">我要点评</view>
					</view>

					<view class="ping_list" v-for=" item in pingjia_list">
						<image src="@/static/lsimg/yh_tx.png" mode="" class="ping_tx"></image>
						<view class="ping_list_right">
							<view class="hei_26">{{item.nickname}}</view>
							<view class="qian_22 ping_dizhi">
								<!-- <image src="@/static/img/ping_dizhi.png" mode=""></image>
								福建-福州 -->
							</view>
							<view class="xing_arry">
								<image src="@/static/img/xing_on.png" mode="" v-for="img in item.pingfen"></image>
								<image src="@/static/img/xing_no.png" mode=""v-for="img in 5-item.pingfen"></image>
							</view>
							<view class="biaoqian hui_22">
								<text v-for="txt in shuzu(decodeUnicode(item.yinxiang))">{{txt}}</text>
							</view>
							<view class="ping_txt hei_26">{{item.pingjia}}</view>
							<view class="qian_26 ping_time">{{ item.addtime | timeStamp }}</view>
							<view class="dianzan"><image src="@/static/img/dianzan_icon.png" mode=""></image></view>
						</view>
					</view>
					<view class="ping_more hei_26">
						查看全部评价>
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
					<view class="dianhua lv_26" @click="tan()">
						<!-- <image src="@/static/img/dianhua_lv.png" mode=""></image> -->
					 <view class="lv_24 bottom_jiage" v-if="baojia&&baojia.jianmian">
					 	￥<text class="lv_32">{{baojia.jianmian}}</text>
					 </view>
					 <view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.jianmian ">
					 	<text class="lv_32">未报价</text>
					 </view>
						见面咨询
					</view>
					<view class="zaixian bai_26" @click="tan()">
						<!-- <image src="@/static/img/zaixian_bai.png" mode=""></image> -->
						<view class="bai_24 bottom_jiage" v-if="baojia&&baojia.chatprice">
							￥<text class="bai_32">{{baojia.chatprice}}</text>
						</view>
						<view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.chatprice ">
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
				  <text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
				  <text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
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
					<text @click="huan_leixing(0)" :class="leixing_index==0?'tan_xuan_active':''" v-if="baojia.jianmian">见面咨询</text>
					<text @click="huan_leixing(1)" :class="leixing_index==1?'tan_xuan_active':''" v-if="baojia.chatprice || baojia.zaixian3 ||baojia.zaixian30 ">在线咨询</text>
					<text @click="huan_leixing(2)" :class="leixing_index==2?'tan_xuan_active':''" v-if="baojia.dianhua || baojia.dianhua1 || baojia.dianhua3 || baojia.dianhua30 ">电话咨询</text>
					<text @click="huan_leixing(3)" :class="leixing_index==3?'tan_xuan_active':''" v-if="baojia.hetong_daixie || baojia.hetong_shenhe || baojia.hetong_wenshu ">合同事务</text>
					<text @click="huan_leixing(4)" :class="leixing_index==4?'tan_xuan_active':''" v-if="baojia.lvshi_huijian || baojia.lvshihan || baojia.anjianzhidao ">诉讼委托</text>
				</view>
				<view class="tan_jiage_title hei_28_bold">
					服务时长
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" v-if="leixing_index==0">
					<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.jianmian,'1次')" v-if="baojia.jianmian" >1次</text>
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" v-if="leixing_index==1">
					<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.chatprice,'1天')" v-if="baojia.chatprice" >1天</text>
					<text :class="shichang_index==2?'tan_xuan_active':''" @click="huan_shichang(2,baojia.zaixian3,'3天')" v-if="baojia.zaixian3" >3天</text>
					<text :class="shichang_index==3?'tan_xuan_active':''" @click="huan_shichang(3,baojia.zaixian30,'1个月')" v-if="baojia.zaixian30" >1个月</text>
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" v-if="leixing_index==2">
					<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.dianhua,'20分钟')" v-if="baojia.dianhua" >20分钟</text>
					<text :class="shichang_index==2?'tan_xuan_active':''" @click="huan_shichang(2,baojia.dianhua1,'1天')" v-if="baojia.dianhua1" >1天</text>
					<text :class="shichang_index==3?'tan_xuan_active':''" @click="huan_shichang(3,baojia.dianhua3,'3天')" v-if="baojia.dianhua3" >3天</text>
					<text :class="shichang_index==4?'tan_xuan_active':''" @click="huan_shichang(4,baojia.dianhua30,'1个月')" v-if="baojia.dianhua30" >1个月</text>
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" v-if="leixing_index==3">
					<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.hetong_daixie,'合同审核')" v-if="baojia.hetong_daixie">合同审核</text>
					<text :class="shichang_index==2?'tan_xuan_active':''" @click="huan_shichang(2,baojia.hetong_shenhe,'代写合同')" v-if="baojia.hetong_shenhe" >代写合同</text>
					<text :class="shichang_index==3?'tan_xuan_active':''" @click="huan_shichang(3,baojia.hetong_wenshu,'代写文书')" v-if="baojia.hetong_wenshu">代写文书</text>
				</view>
				<view class="tan_jiage_title_list hui_26 tan_jiage_title_list_shichang" v-if="leixing_index==4">
					<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.lvshi_huijian,'律师会见')"  v-if="baojia.lvshi_huijian" >律师会见</text>
					<text :class="shichang_index==2?'tan_xuan_active':''" @click="huan_shichang(2,baojia.lvshihan,'发律师函')"  v-if="baojia.lvshihan" >发律师函</text>
					<text :class="shichang_index==3?'tan_xuan_active':''" @click="huan_shichang(3,baojia.anjianzhidao,'案件指导')"  v-if="baojia.anjianzhidao">案件指导</text>
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
	import uCharts from '@/components/u-charts/u-charts.js';
	import unpopup from '@/components/uni-popup/uni-popup-share.vue';
	var _self;
	var canvaRing=null;
export default {
	data() {
		return {
			tabs: ['律师服务', '律师信息', '律师案例'],
			lawyerid:'',
			active: 0,
			cWidth:'',
			cHeight:'',
			pixelRatio:1,
			
			"chartData": {
			  "series": []
			},
			lvshi:'',
			zhuanchang_arry:'',
			img_url: uni.getStorageSync('img_url'),
			type_list:[],
			huifu_list:[],
			tuwen_page:0,
			tuwen_list:[],
			pingjia_list:[],
			pingjiatype:'',
			type:2,
			leixing_index:1,
			shichang_arry:['1天','3天','1个月'],
			shichang_index:-1,
			tan_jia_jianjie:'实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。',
			baojia:'',
			pay_money:0,
			shichang_txt:''
		};
	},
	created() {
		
	},
	components: {
		unpopup
	},
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
	this.huoqu_bili()
	this.huiqu_huifu_list()
	this.huoqu_tuwen()
	this.huiqu_pingjia_list()
	this.huoqu_pingjiatype()
	this.huoqu_baojia()
	// 检测是否关注
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
	},
	onShow() {
	var aaa=this.decodeUnicode('["\u670d\u52a1\u4f18\u8d28","\u5b66\u8bc6\u6e0a\u535a","\u7ecf\u9a8c\u4e30\u5bcc","\u5f85\u4eba\u8bda\u6073","\u4e50\u4e8e\u52a9\u4eba","\u56de\u590d\u5f88\u5feb","\u5f62\u8c61\u4e13\u4e1a","\u503c\u5f97\u63a8\u8350"]')

	// console.log(eval(aaa))
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		decodeUnicode(str) {
		     str = str.replace(/\\/g, "%");  
		        return unescape(str);   
			
		},
		shuzu(str){
			return eval(str)
		},
		qiehuan(index) {
			this.active = index;
		},
		getServerData(){
		
		    _self.showRing("canvasRing",this.chartData);
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
		// 饼状图
		huoqu_bili(){
			this.$http
				.post({
					url: '/mapi/lawyer/reply_tu',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						 var tu_arry=[]
						    res.data.consulttu.forEach((item,index)=>{
						        
						        tu_arry.push({name:this.type_list[item.typeid].typename,data:item.value})
								
						    })
							this.chartData.series=tu_arry
						 this.chartData.series=tu_arry
						_self = this;
						this.cWidth=uni.upx2px(750);
						this.cHeight=uni.upx2px(500);
						this.getServerData();
					}
				});	
			
		},
		// 获取回复列表
		huiqu_huifu_list(){
			this.$http
				.post({
					url: '/mapi/lawyer/consultlist',
					data: {
						lawyerid:this.lawyerid,
						page:0
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.huifu_list=res.data.consult
						
					}
				});	
		},
		// 获取图文
		huoqu_tuwen(){
			this.$http
				.post({
					url: '/mapi/lawyer/tuwenlist',
					data: {
						lawyerid:this.lawyerid,
						page:this.tuwen_page
					}
				})
				.then(res => {
					if (res.code == 0) {
						
						this.tuwen_list=res.data.tuwen
					}
				});	
		},
		// 获取评价列表
		huiqu_pingjia_list(){
			this.$http
				.post({
					url: '/mapi/lawyer/pingjia',
					data: {
						lawyerid:this.lawyerid,
						page:0
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.pingjia_list=res.data.evaluatelist
						
					}
				});	
		},
		// 获取评价type
		huoqu_pingjiatype(){
			this.$http
				.post({
					url: '/mapi/lawyer/pingjianum',
					data: {
						lawyerid:this.lawyerid,
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.pingjiatype=res.data
						
					}
				});	
		},
		showRing(canvasId,chartData){
			canvaRing=new uCharts({
				$this:_self,
				canvasId: canvasId,
				colors: ['#c23531', '#91c7ae', '#67afb8', '#d48265', '#3f5b6e', '#c4b5ff'],
				type: 'ring',
				fontSize:11,
				legend:{
					position:'bottom',
					   float:'center',
					   itemGap:10,
					   lineHeight:20,
				},
				// title: {
				// 	name: '70%',
				// 	color: '#7cb5ec',
				// 	fontSize: 25*_self.pixelRatio,
				// 	offsetY:-20*_self.pixelRatio,
				// },
				// subtitle: {
				// 	name: '收益率',
				// 	color: '#666666',
				// 	fontSize: 15*_self.pixelRatio,
				// 	offsetY:30*_self.pixelRatio,
				// },
				extra: {
					pie: {
					  offsetAngle: -45,
					  ringWidth: 40*_self.pixelRatio,
					  labelWidth:15,
					}, 
				},
				background:'#FFFFFF',
				pixelRatio:_self.pixelRatio,
				series: chartData.series,
				animation: true,
				width: _self.cWidth*_self.pixelRatio,
				height: _self.cHeight*_self.pixelRatio,
				disablePieStroke: true,
				dataLabel: true,
			 
				   
			});
		},
		touchRing(e){
			canvaRing.showToolTip(e, {
				format: function (item) {
					return item.name + ':' + item.data 
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
		// 主页提问详情
		go_tiwen_xq(id){
			uni.navigateTo({
				url:'zhuye_zixun_xq?id='+id
			})
			
		},
		tuwen_xq(lytuwenid){
			uni.navigateTo({
				url: 'tuwen_xq?lytuwenid='+lytuwenid
			});
		},
		go_dianping(){
			uni.navigateTo({
				url:'pingjia?lawyerid='+this.lawyerid
			})
		},
		quzheng(num){
			return Math.floor(num)
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
				url:'pay?lawyerid='+lawyerid+'&type='+type
			})
		},
		// 分享
		share(){
			uni.navigateTo({
				url:'sucai?state=1'
			})
		},
		// 底部弹窗
		tan() {
			this.$refs.popup.open();
		},
		huan_leixing(index){
			
			this.leixing_index=index
			this.pay_money=0
			this.shichang_index = -1
			if(index==0){
				this.tan_jia_jianjie=''
			    
			}
			if(index==1){
				this.tan_jia_jianjie='实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。'
			    
			}else if(index==2){
				this.tan_jia_jianjie='实时对话，快速沟通，高效解答，服务期内提问100%解答，规定时间内不限拨打次数。'
			    
			}else if(index==3){
				this.tan_jia_jianjie='3天内交付，7天有效期内不限修改次数。'
				
			}else if(index==4){
				this.tan_jia_jianjie='会见当事人，了解真实案例，监督侦察工作，提前保存证据，保障当事人合法权益。'
			    
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
.ls_renzheng {
	display: flex;
	height: 65rpx;
	background-color: #f5f5f5;
	border-radius: 10rpx;
	align-items: center;
	margin: 20rpx 0;
}
.ls_renzheng_item {
	width: 33.33%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.ren_shiming image {
	width: 17rpx;
	height: 17rpx;
	margin-right: 10rpx;
}
.ren_zhiye image {
	width: 18rpx;
	height: 14rpx;
	margin-right: 10rpx;
}
.ren_pingtai image {
	width: 17rpx;
	height: 14rpx;
	margin-right: 10rpx;
	vertical-align: middle;
}
.ls_tab {
	display: flex;
	height: 60rpx;
	align-items: center;
	padding: 0 80rpx;
	justify-content: space-between;
	border-bottom: 2rpx solid #f7f7f7;
}
.ls_tab_item {
}
.ls_tab_item_active {
	color: #333333;
	position: relative;
}

.ls_tab_item_active::before {
	position: absolute;
	content: '';
	display: inline-block;
	width: 71rpx;
	height: 4rpx;
	background-color: #0eb77e;
	bottom: -12rpx;
	left: 50%;
	margin-left: -35rpx;
}
.fuwu_lei_list {
	padding: 25rpx 30rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 20rpx solid #F7F7F7 ;
}
.fuwu_lei {
	width: 216rpx;
	
	box-shadow: 0rpx -3rpx 7rpx 0rpx 
			rgba(0, 0, 0, 0.07);
	border-radius: 10rpx;
	background-color: #11b790;
	box-sizing: border-box;
	padding: 20rpx 8rpx 24rpx  8rpx;
}
.fuwu_lei:nth-child(1) {
	background: url(../../static/img/ls_lei1.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_lei:nth-child(2) {
	background: url(../../static/img/ls_lei2.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_lei:nth-child(3) {
	background: url(../../static/img/ls_lei3.png) no-repeat;
	background-size: 100% 100%;
}
.fuwu_lei .lei_btn {
	font-size: 20rpx;
}
.lei_btn text {
	-webkit-transform: scale(0.8);
	display: inline-block;
	margin: 0;
	padding: 0;
	font-size: 16rpx;
}
.zaixian_btn {
	width: 165rpx;
	height: 40rpx;
	background-color: #82dbbd;
	border-radius: 15rpx;
	line-height: 40rpx;
	text-align: center;
	margin: 0 auto;
}
.dianhua_btn {
	width: 165rpx;
	height: 40rpx;
	border-radius: 15rpx;
	box-sizing: border-box;
	color: #FFFFFF;
	
	/* padding: 0 6rpx; */
	/* width: 162rpx; */
	line-height: 40rpx;
	text-align: center;
	margin: 0 auto;
}
.dianhua_btn image {
	width: 10rpx;
	height: 16rpx;
	margin-right: 4rpx;
	position: relative;
	left: 14rpx;
}
.dianhua_btn text {
	
	-webkit-transform: scale(0.8);
	-webkit-transform-origin-x: 0;
	position: relative;
	left: 18rpx;
}
.tuwen_btn {
		width: 165rpx;
		height: 40rpx;
		background-color: #fedd77;
		border-radius: 20rpx;
	line-height: 40rpx;
	text-align: center;
	margin: 0 auto;
	color: #FFFFFF;
}
.boda_btn{
	width: 165rpx;
		height: 40rpx;
		background-color: #74aaff;
		border-radius: 20rpx;
	line-height: 40rpx;
	text-align: center;
	margin: 0 auto;
	color: #FFFFFF;
}
.ls_jilu {
	padding: 0 30rpx;
	display: flex;
	justify-content: space-between;
}
.fuwu_lei_left {
	max-width: 460rpx;
}
.fuwu_lei_top{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.wenda {
	border-bottom: 2rpx solid #f7f7f7;
	padding: 18rpx 0;
}
.wenda_wen {
	display: flex;
	align-items: flex-start;
}
.wenda image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 8rpx;
	position: relative;
	top: 4rpx;
}
.wenda_da {
	display: flex;
	margin-top: 13rpx;
}
.wenda:last-child {
	border: none;
}
.wenda_list {
	padding: 0 30rpx;
	margin-top: 10rpx;
}
.wenda_body {
	max-width: 520rpx;
	margin-left: 6rpx;
	line-height: 40rpx;
	word-break: break-all;
}
.tuwen {
	border-bottom: 20rpx solid #f7f7f7;
	border-top: 20rpx solid #f7f7f7;
	margin-top: 10rpx;
}
.tuwen_title {
	padding: 0 30rpx;
	display: flex;
	line-height: 100rpx;
	align-items: center;
	justify-content: space-between;
}
.tuwen_list {
	height: 280rpx;
	white-space: nowrap;
	display: flex;
}
.tuwen_item image {
	width: 100%;
	height: 219rpx;
}
.tuwen_item {
	display: inline-block;
	width: 548rpx;
	height: 100%;
	margin-right: 30upx;
}
.tuwen_bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 6rpx;
}
.tuwen_bottom .tuwen_txt {
	display: inline-block;
	max-width: 360rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.pingjia {
	padding: 30rpx 0rpx 0rpx;
}
.pingjia_title {
	margin: 32prx 0 18rpx;
	padding: 0 30rpx;
}
.ping_tongji_left image {
	width: 28rpx;
	height: 28rpx;
	margin-right: 7rpx;
}
.ping_tongji {
	display: flex;
	justify-content: space-between;
	padding: 10rpx 30rpx 0;
}
.dianping {
	width: 130rpx;
	height: 40rpx;
	border: solid 1rpx #dcdcdc;
	line-height: 40rpx;
	text-align: center;
}
.ping_tx {
	width: 72rpx;
	height: 72rpx;
	margin-right: 10rpx;
}
.xing_arry {
	display: flex;
}
.xing_arry image {
	width: 20rpx;
	height: 20rpx;
	margin-right: 9rpx;
}
.ping_list {
	padding: 33rpx 30rpx 17rpx;
	border-bottom: 2rpx solid #f7f7f7;
	display: flex;
}
.ping_list_right {
	width: 88%;
	position: relative;
}
.ping_dizhi {
	margin: 4rpx 0 6rpx;
}
.ping_dizhi image {
	width: 16rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.dianzan image {
	position: absolute;
	top: 10rpx;
	right: 32rpx;
	width: 31rpx;
	height: 32rpx;
}
.biaoqian{
	margin: 13rpx 0 0;
}
.biaoqian text {
	display: inline-block;
	height: 40rpx;
	background-color: #ffffff;
	border: solid 1rpx #dcdcdc;
	line-height: 40rpx;
	padding: 0 18rpx;
	margin-right: 10rpx;
	margin-bottom: 10rpx;
}
.ping_time{
	margin-top: 7rpx;
	text-align: right;
}
.ping_txt{
	word-break: break-all;
}
.ping_more{
	height: 90rpx;
		background-color: #dcdcdc;
		line-height: 90rpx;
		text-align: center;
}
.bottom{
	display: flex;
	padding: 10rpx 0 0;
	height: 120rpx;
	align-items: center;
	position: fixed;
	bottom: 0 ;
	width: 100%;
	background-color: #FFFFFF;
	
}
.bottom_fenxiang,.bottom_pingjia,.bottom_guanzhu{
	text-align: center;
	width: 100rpx;
}
.bottom_fenxiang image{
	width: 38rpx;
	height: 36rpx;
}

.bottom_pingjia image{
		width: 38rpx;
		height: 38rpx;
}
.dianhua{
	width: 225rpx;
	height: 100%;
	box-sizing: border-box;
	text-align: center;
	background-color: #ceffee;
	border-radius: 10rpx 0 0 10rpx;
}
.dianhua image{
		width: 25rpx;
		height: 27rpx;
		margin-right: 16rpx;
}
.zaixian image{
		width: 26rpx;
		height: 26rpx;
		margin-right: 12rpx;
	}
	.zaixian{
	width: 225rpx;
	height: 100%;
	background-color: #0eb77e;
	text-align: center;
	border-radius: 0 10rpx 10rpx 0;
			
	}

	.qiun-charts{width:100%; height:500rpx;background-color: #FFFFFF;border-bottom: 2rpx solid #F7F7F7;}
	.charts{width: 100%; height:100%;background-color: #FFFFFF;}
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
	}
	.tan_jiage_title_leixing text{
			width: 158rpx;
			height: 57rpx;
			background-color: #ffffff;
			border-radius: 5rpx;
			border: solid 2rpx #c6c6c6;
			display: inline-block;
			line-height: 57rpx;
			text-align: center;
			margin-right: 18rpx;
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
	.fuwu_lei_title{
		margin: 14rpx 0;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		width: 100%;
	}
</style>
