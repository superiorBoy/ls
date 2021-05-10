<template>
	<view class="body">
		<view class=" ">
			<view class="ls_top_bg">
				<view class="ls_top_bg_wai">
					<view class="head2">
						<view class="head_back"><image src="@/static/img/bai_back.png" mode="" @click="navigateBack()"></image></view>
						<view class="head_center bai_38_bold">律师主页</view>
						<view class=" head_right hei_30_bold">
							<image :src="type==1 ? '../../static/img/guanzhu_on_icon.png' : '../../static/img/guan_no.png'"    mode="" style="width: 41rpx;height: 38rpx;margin-right: 30rpx;"  @click="guanzhu"></image>
							<!-- <image src="@/static/img/guan_no.png" mode=""style="width: 40rpx;height: 38rpx;margin-right: 30rpx;"></image> -->
							<image src="@/static/img/fenxiang.png" mode=""style="width: 38rpx;height: 36rpx;"  @click="share"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="ls_padd">
				<view class="ls_top">
					<view class="ls_tx">
						<image :src="img_url + lvshi.photourl" mode="" class="ls_tx_img"></image>
						<image src="@/static/img/ls_ren.png" mode="" class="is_ren"></image>
					</view>
					<view class="hei_28_bold">{{ lvshi.nickname }}</view>
					<view class="qian_26 ls_dizhi">
						<text>{{ lvshi.province }}-{{ lvshi.city }}</text>
						<text>专职律师</text>
					</view>
					<view class="hui_26 techang" v-if="lvshi != ''">
					<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">{{zhuanchang_arry[lvshi.expertise1].shanchangname}}</text>
					<text v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
					<text v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
					</view>
					<view class="ls_gaikuo">
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{ lvshi.replynum }}</view>
							<view class="qian_26">解答咨询</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{ lvshi.likenum }}</view>
							<view class="qian_26">获得点赞</view>
						</view>
						<view class="ls_gaikuo_item">
							<view class="lv_30 ls_gaikuo_num">{{ lvshi.pingfen }}</view>
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
				<navigator :url="'ls_zhuye?lawyerid=' + lawyerid" class="ls_tab_item ls_tab_item_active">首页</navigator>
				<navigator :url="'ls_zhuye_index?lawyerid=' + lawyerid" class="ls_tab_item ">律师服务</navigator>
				<navigator :url="'ls_xinxi?lawyerid=' + lawyerid" class="ls_tab_item ">律师信息</navigator>
				<navigator :url="'ls_anli?lawyerid=' + lawyerid" class="ls_tab_item ">律师案例</navigator>

				<!-- <view :class="['ls_tab_item', index == active ? 'ls_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="qiehuan(index)">{{ tab }}</view> -->
			</view>
			
			<view class="fuwu_body">
				<!-- <view class="fuwu_lei_list">
					<view class="fuwu_lei"  @click="tan(1,baojia.chatprice)" >
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
							<text class="hei_22_bold" style="color: #12ab83;">在线咨询</text>	 

							</view>
							<text class="hui_20 fuwu_lei_title">简易需求,在线解答</text>
						</view>
					
						<view class="zaixian_btn hong_24" v-if="baojia&&baojia.chatprice ">￥<text class="hong34_bold">{{baojia.chatprice}}</text>/天</view>
						
					</view>
				
					<view class="fuwu_lei" @click="tan(2,baojia.phoneprice)">
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
								<text class="hei_22_bold" style="color: #bf9a13;">电话咨询</text>
								
								<text v-if="!baojia || !baojia.phoneprice ">未报价</text>
							</view>
							<text class="hui_20 fuwu_lei_title">沟通方便，效率高</text>
						</view>

						<view class=" tuwen_btn hong_24" v-if="baojia&&baojia.phoneprice " >￥<text class="hong34_bold" >{{baojia.phoneprice}}</text>/20分钟 </view>
						
					</view>
					<view class="fuwu_lei">
						<view class="fuwu_lei_left">
							<view class="bai_26 fuwu_lei_top" >
								<text class="hei_22_bold" style="color: #245cb2;">见面咨询</text>

							</view>
							<text class="hui_20 fuwu_lei_title">实时聊天,快速沟通</text>
						</view>
						<view class="lei_btn boda_btn hong_28" @click="tan(0,baojia.jianmian)" v-if="baojia.jianmian"><text class="hong34_bold"> {{baojia.jianmian}}</text>/次</view>
						<view class="lei_btn boda_btn hong_28" v-if="!baojia.jianmian" >未报价 </view>
					</view>
				</view>
				<view class="ls_jianjie hei_24">
					<view class="ls_jianjie_title hei_28_bold">个人资料</view>
					{{ lvshi.miaoshu }}
				</view> -->
				
				
				<view class="ls_fei_body">
					<view class="ls_fei_title_list" v-for="(item0, index0) in all_dalei">
						<view class="ls_fei_title hei_28_bold">{{ item0.name }}</view>
				
						<view class="ls_feiyong">
							<view
								class="ls_feiyong_list"
								@click="go_zhifu(lawyerid, baojia[item.baojiamode], item.name, item0.serviceid)"
								v-if="item.upserviceid == item0.serviceid"
								v-for="(item, index) in baojia_list"
							>
								<view class="hei_26" v-if="item0.name == '在线咨询' || item0.name == '电话咨询'">{{ item0.name }}</view>
								<view class="hei_26" v-if="item0.name != '在线咨询' && item0.name != '电话咨询'">{{ item.name }}</view>
								<view class="qian_20 ls_feiyong_list_title">{{ item.desc }}</view>
								<view class="hong_24">￥{{ baojia[item.baojiamode] }}/{{ item.unit }}</view>
							</view>
						</view>
					</view>
				</view>
				
				
			<!-- 	<view class="lianxi" v-if="ls_xinxi!=''">
					<view class=" xixin_title hei_28_bold">联系方式</view>
					<view class="jiben_xixin_list hei_26">
						联系电话：
						<view class="lianxi_right hui_26">{{ ls_xinxi.lawyer.mobile }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						微&ensp;&ensp;&ensp;&ensp;信：
						<view class="lianxi_right hui_26">{{ ls_xinxi.lawyer.weixin }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						邮&ensp;&ensp;&ensp;&ensp;箱：
						<view class="lianxi_right hui_26">{{ ls_xinxi.lawyer.email }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						联系地址：
						<view class="lianxi_right hui_26">{{ ls_xinxi.lawyer.address }}</view>
					</view>
				</view> -->
				<view class="jiben_xixin" v-if="ls_xinxi!=''">
					<view class=" xixin_title hei_28_bold">基本信息</view>
					<view class="jiben_xixin_list hei_26">
						执业律所
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.lvsuo }}</view>
					</view>
					<!-- <view class="jiben_xixin_list hei_26">
						律所规模
						<view class="jiben_xixin_list_right hui_26">本地大所</view>
					</view> -->
					<view class="jiben_xixin_list hei_26">
						职&ensp;&ensp;&ensp;&ensp;务
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.zhiwu }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						执业证号
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.zhiye }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						执业年份
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.zhiyenianfen }}年</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						联系电话
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.mobile }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						联系地址
						<view class="jiben_xixin_list_right hui_26">{{ ls_xinxi.lawyer.address }}</view>
					</view>
					<!-- 					<view class="jiben_xixin_list hei_26">
						团队描述
						<view class="jiben_xixin_list_right hui_26">-</view>
					</view> -->
				</view>
				
				<view class="jiben_xixin" v-if="ls_xinxi!=''" style="padding-bottom: 20rpx;">
					<view class=" xixin_title hei_28_bold">服务时间</view>
					<view class="jiben_xixin_list hei_26" style="padding-left: 0;">
						{{jiedan_time.workstate==1?'全天24小时':jiedan_time.workstate==2?'白天（9:00-23:00）':jiedan_time.workstate==3?'晚上（23:00-9:00）':jiedan_time.workstarttime+'-'+jiedan_time.workendtime}}
					</view>
				</view>
				<view class=" ls_jilu">
					<text class="hei_28_bold">律师服务记录</text>
					<navigator :url="'./ls_zhuye_huifu?lawyerid=' + lvshi.userid" class="qian_28">更多>></navigator>
				</view>
				<!-- 图 -->

				<view class="qiun-charts" v-if="huifu_list.length!=0"><canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas></view>

				<view class="wenda_list">
					<view class="wenda" v-for="item in huifu_list" @click="go_tiwen_xq(item.consultid)">
						<view class="wenda_wen hei_24">
							<image src="@/static/img/wenda_wen.png" mode=""></image>
							用户提问：
							<view class="wenda_body">{{ item.information }}</view>
						</view>
						<view class="wenda_da qian_24">
							<image src="@/static/img/wenda_da.png" mode=""></image>
							我的回复：
							<view class="wenda_body">{{ item.crinformation }}</view>
						</view>
					</view>
				</view>

				<!-- <view class="tuwen">
					<view class="tuwen_title">
						<text class="hei_28_bold">图文解答</text>
						<navigator :url="'ls_zhuye_tuwen?lawyerid=' + lvshi.userid" class="qian_28">更多>></navigator>
					</view>
					<scroll-view scroll-x="true" class="tuwen_list">
						<view class="tuwen_item" v-for="item in tuwen_list" @click="tuwen_xq(item.lytuwenid)">
							<image :src="img_url + item.pic" mode=""></image>
							<view class="tuwen_bottom">
								<text class="hei_26 tuwen_txt">{{ item.title }}</text>
								<text class="qian_26">{{ item.readnum }}次浏览</text>
							</view>
						</view>
					</scroll-view>
				</view> -->

				<view class="pingjia">
					<view class="pingjia_title qian_26">
						<text class="hei_28_bold">服务点评</text>
						(共{{ pingjiatype.num }}条评价)
					</view>
					<view class="ping_tongji">
						<view class="ping_tongji_left" v-if="lvshi != ''">
							<text style="font-size: 40rpx;font-weight: bold;margin-right: 16rpx;">{{ lvshi.pingfen }}</text>
							<image src="@/static/img/xing_on.png" mode="" v-for="img2 in quzheng(lvshi.pingfen)"></image>
							<image src="@/static/img/xing_no.png" mode="" v-for="img2 in 5 - quzheng(lvshi.pingfen)"></image>
						</view>
						<view class="dianping qian_26" @click="go_dianping()">我要点评</view>
					</view>

					<view class="ping_list" v-for="item in pingjia_list">
						<image src="@/static/lsimg/yh_tx.png" mode="" class="ping_tx"></image>
						<view class="ping_list_right">
							<view class="hei_26">{{ item.nickname }}</view>
							<view class="qian_22 ping_dizhi">
								<!-- <image src="@/static/img/ping_dizhi.png" mode=""></image>
								福建-福州 -->
							</view>
							<view class="xing_arry">
								<image src="@/static/img/xing_on.png" mode="" v-for="img in item.pingfen"></image>
								<image src="@/static/img/xing_no.png" mode="" v-for="img in 5 - item.pingfen"></image>
							</view>
							<view class="biaoqian hui_22">
								<text v-for="txt in shuzu(decodeUnicode(item.yinxiang))">{{ txt }}</text>
							</view>
							<view class="ping_txt hei_26">{{ item.pingjia }}</view>
							<view class="qian_26 ping_time">{{ item.addtime | timeStamp }}</view>
							<view class="dianzan"><image src="@/static/img/dianzan_icon.png" mode=""></image></view>
						</view>
					</view>
					<view class="ping_more hei_26">查看全部评价></view>
				</view>
				<view class="zhanwei2" style="height: 120rpx;"></view>
				<view class="bottom">
					<!-- <view class="bottom_fenxiang" @click="share">
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
					</view> -->
					<view class="liao lv_30" @click="go_chat()">
						<image src="@/static/img/lawyer_chat.png" mode=""></image>
					<view class="">
						聊一聊
					</view>	
					</view>
					<view class="dianhua lv_30" >
						<!-- <image src="@/static/img/dianhua_lv.png" mode=""></image> -->
					 <view class="lv_24 bottom_jiage" v-if="baojia&&baojia.jianmian" @click="tan(5,baojia.jianmian)">
					 	￥<text class="lv_32">{{baojia.jianmian}}</text>
					 </view>
					 <view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.jianmian ">
					 	<text class="lv_32">未报价</text>
					 </view>
						见面咨询
					</view>
					<view class="zaixian bai_30" >
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
import uCharts from '@/components/u-charts/u-charts.js';
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
var _self;
var canvaRing = null;
export default {
	data() {
		return {
			tabs: ['律师服务', '律师信息', '律师案例'],
			lawyerid: '',
			active: 0,
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,

			chartData: {
				series: []
			},
			lvshi: '',
			zhuanchang_arry: '',
			img_url: uni.getStorageSync('img_url'),
			type_list: [],
			huifu_list: [],
			tuwen_page: 0,
			tuwen_list: [],
			pingjia_list: [],
			pingjiatype: '',
			ls_xinxi: '',
			type:2,
			leixing_index:1,
			shichang_arry:['1天','3天','1个月'],
			shichang_index:0,
			tan_jia_jianjie:'实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。',
			baojia:'',
            pay_money:0,
			shichang_txt:'',
			jiedan_time:'',
			baojia_list:[],
			all_dalei:[],
			jiage_arry:[],
			erjijia_list:[],
			
			
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
				this.huoqu_lvshi();
			});
  
		this.lawyerid = option.lawyerid;
		this.huoqu_bili();
		this.huiqu_huifu_list();
		this.huoqu_tuwen();
		this.huiqu_pingjia_list();
		this.huoqu_pingjiatype();
		this.huoqu_xinxi();
		
		this.huoqu_baojia()
		this.huoqu_baojia_list()
		this.huoqu_jiadan_shijian()
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
	onShow() {
		var aaa = this.decodeUnicode(
			'["\u670d\u52a1\u4f18\u8d28","\u5b66\u8bc6\u6e0a\u535a","\u7ecf\u9a8c\u4e30\u5bcc","\u5f85\u4eba\u8bda\u6073","\u4e50\u4e8e\u52a9\u4eba","\u56de\u590d\u5f88\u5feb","\u5f62\u8c61\u4e13\u4e1a","\u503c\u5f97\u63a8\u8350"]'
		);
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		decodeUnicode(str) {
			str = str.replace(/\\/g, '%');
			return unescape(str);
		},
		go_zhifu(lawyerid,money,time,type){
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid+'&type='+type+'&time='+time+'&pay_money='+money
			})
		},
		huoqu_jiadan_shijian(){
			this.$http
				.post({
					url: '/mapi/lawyer/getworktime',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					this.jiedan_time=res.data
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
		compare(property) {
		  return function (a, b) {
		    var value1 = a[property];
		    var value2 = b[property];
		    return value1 - value2;
		  }
		},
		// 获取信息
		huoqu_xinxi() {
			this.$http
				.post({
					url: '/mapi/lawyer/xinxi',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.ls_xinxi = res.data;
					}
				});
		},
		shuzu(str) {
			return eval(str);
		},
		qiehuan(index) {
			this.active = index;
		},
		getServerData() {
			
			_self.showRing('canvasRing', this.chartData);
		},
		// 律师信息
		huoqu_lvshi() {
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.lvshi = res.data.lawyer;
						
					}
				});
		},
		
		// 分享
		share(){
			uni.navigateTo({
				url:'sucai?state=1'
			})
		},
		// 饼状图
		huoqu_bili() {
			this.$http
				.post({
					url: '/mapi/lawyer/reply_tu',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						var tu_arry = [];
						res.data.consulttu.forEach((item, index) => {
							tu_arry.push({ name: this.type_list[item.typeid].typename, data: item.value });
						});

						this.chartData.series = tu_arry;
						this.chartData.series = tu_arry;
						_self = this;
						this.cWidth = uni.upx2px(750);
						this.cHeight = uni.upx2px(500);
						this.getServerData();
					}
				});
		},
		// 获取回复列表
		huiqu_huifu_list() {
			this.$http
				.post({
					url: '/mapi/lawyer/consultlist',
					data: {
						lawyerid: this.lawyerid,
						page: 0
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.huifu_list = res.data.consult;
					}
				});
		},
		// 获取图文
		huoqu_tuwen() {
			this.$http
				.post({
					url: '/mapi/lawyer/tuwenlist',
					data: {
						lawyerid: this.lawyerid,
						page: this.tuwen_page
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.tuwen_list = res.data.tuwen;
					}
				});
		},
		// 获取评价列表
		huiqu_pingjia_list() {
			this.$http
				.post({
					url: '/mapi/lawyer/pingjia',
					data: {
						lawyerid: this.lawyerid,
						page: 0
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.pingjia_list = res.data.evaluatelist;
						
					}
				});
		},
		// 获取评价type
		huoqu_pingjiatype() {
			this.$http
				.post({
					url: '/mapi/lawyer/pingjianum',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.pingjiatype = res.data;
					}
				});
		},
		showRing(canvasId, chartData) {
			canvaRing = new uCharts({
				$this: _self,
				canvasId: canvasId,
				colors: ['#c23531', '#91c7ae', '#67afb8', '#d48265', '#3f5b6e', '#c4b5ff'],
				type: 'ring',
				fontSize: 11,
				legend: {
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
						offsetAngle: 200,
						ringWidth: 40 * _self.pixelRatio,
						labelWidth: 15
					}
				},
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				series: chartData.series,
				animation: true,
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				disablePieStroke: true,
				dataLabel: true
			});
		},
		touchRing(e) {
			canvaRing.showToolTip(e, {
				format: function(item) {
					return item.name + ':' + item.data;
				}
			});
		},
		tochat(id, mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id + '&mobile=' + mobile
			});
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
		go_chat(){
		
			uni.navigateTo({
				url:'chat?lawyerid='+this.lawyerid
			})
		},

		// 主页提问详情
		go_tiwen_xq(id) {
			uni.navigateTo({
				url: 'zhuye_zixun_xq?id=' + id
			});
		},
		tuwen_xq(lytuwenid) {
			uni.navigateTo({
				url: 'tuwen_xq?lytuwenid='+lytuwenid
			});
		},
		go_dianping() {
			uni.navigateTo({
				url: 'pingjia?lawyerid=' + this.lawyerid
			});
		},
		quzheng(num) {
			return Math.floor(num);
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
			console.log(   this.leixing_index,this.shichang_txt)
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
				this.shichang_txt='见面咨询'
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
					
					this.$forceUpdate();
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
		huan_shichang(index,money,text,item){
			console.log(money)
			this.shichang_index=index
			this.pay_money=money
            this.shichang_txt=text
		},

		
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
	width: 220rpx;
	/* height: 180rpx; */
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
	
}
.lei_btn text {
	
	
	margin: 0;
	padding: 0;
	font-size: 16rpx;
}
.zaixian_btn {

	
}
.dianhua_btn {
	
	
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
		display: flex;
		align-items: center;
	
}
.boda_btn{
display: flex;
		align-items: center;
	
	
}
.ls_jilu {
	padding: 20rpx 30rpx;
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
.biaoqian {
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
.ping_time {
	margin-top: 7rpx;
	text-align: right;
}
.ping_txt{
	word-break: break-all;
}
.ping_more {
	height: 90rpx;
	background-color: #dcdcdc;
	line-height: 90rpx;
	text-align: center;
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
	width: 33.33%;
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
	width: 33.33%;
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
.fuwu_lei_title{
	margin: 14rpx 0;
	display: inline-block;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	width: 100%;
}
.hong34_bold{
	font-size: 34rpx !important;
	font-weight: bold;
}
.liao{
	text-align: center;
	width: 33%;
	background-color: #96ffe3;
	height: 100%;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.liao image{
width: 45rpx;
	height: 42rpx;	
}
.ls_feiyong{
	padding: 0 30rpx 0rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}

	.ls_feiyong_list{
		width: 216rpx;
			height: 120rpx;
			background-color: #f4fffe;
			box-shadow: 0rpx 0rpx 7rpx 0rpx 
				rgba(0, 0, 0, 0.07);
			border-radius: 5rpx;
			background: url(../../static/img/jia_beijing1.png) no-repeat;
			margin:0 0rpx 20rpx 0;
			text-align: center;
			box-sizing: border-box;
			background-size: 100% 100%;
			padding-top:14rpx;
	}
.ls_feiyong_list:nth-child(2n){
	background: url(../../static/img/jia_beijing2.png) no-repeat;
	background-size: 100% 100%;

}
.ls_feiyong_list:nth-child(3n){
	background: url(../../static/img/jia_beijing3.png) no-repeat;
	background-size: 100% 100%;

}
.ls_feiyong_list:nth-child(4n){
	background: url(../../static/img/jia_beijing4.png) no-repeat;
	background-size: 100% 100%;

}
.ls_feiyong_list:nth-child(5n){
	background: url(../../static/img/jia_beijing5.png) no-repeat;
	background-size: 100% 100%;

}
.ls_feiyong_list:nth-child(6n){
	background: url(../../static/img/jia_beijing6.png) no-repeat;
	background-size: 100% 100%;

}
.ls_feiyong_list:nth-child(7n){
	background: url(../../static/img/jia_beijing7.png) no-repeat;
background-size: 100% 100%;
}
.ls_feiyong_list:nth-child(8n){
	background: url(../../static/img/jia_beijing8.png) no-repeat;
background-size: 100% 100%;
}
.ls_feiyong_list:nth-child(9n){
	background: url(../../static/img/jia_beijing9.png) no-repeat;
background-size: 100% 100%;
}
.ls_feiyong_list_title{
	/* margin: 4rpx 0 0; */
	font-size: 24rpx;
	transform: scale(0.85 )
}
.danwei{
	width: auto;
display: inline-block;
margin: 0 !important;
border: none !important;
padding: 0  !important;
}
	.ls_fei_title{
		margin-bottom: 30rpx;
		margin-top: 10rpx;
		padding-left: 29rpx;
	}
	.ls_fei_body{
		padding: 30rpx 0 10rpx;
		border-bottom: 20rpx solid #f3f3f3;
	}
</style>
