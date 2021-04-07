<template>
	<view class="body">
		<view class=" " >
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
					<text v-if="zhuanchang_arry[lvshi.expertise2] && zhuanchang_arry[lvshi.expertise2].shanchangname">{{zhuanchang_arry[lvshi.expertise2].shanchangname}}</text>
					<text v-if="zhuanchang_arry[lvshi.expertise3] && zhuanchang_arry[lvshi.expertise3].shanchangname">{{zhuanchang_arry[lvshi.expertise3].shanchangname}}</text>
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
				<navigator :url="'ls_zhuye_index?lawyerid='+lawyerid" class="ls_tab_item ">律师服务</navigator>
				<navigator :url="'ls_xinxi?lawyerid='+lawyerid" class="ls_tab_item ">律师信息</navigator>
				<navigator :url="'ls_anli?lawyerid='+lawyerid" class="ls_tab_item ls_tab_item_active">律师案例</navigator>
				<!-- <view :class="['ls_tab_item', index == active ? 'ls_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="qiehuan(index)">{{ tab }}</view> -->
			</view>

			<view class="fuwu_body">
				<view class="anli_top">
					<!-- <text class="hei_28_bold">{{is_shaixuan?'共{{num}}件案例':'律师案件'}}</text> -->
					<text class="hei_28_bold" v-if="!is_shaixuan">律师案件</text>
					<text class="hei_28_bold" v-if="is_shaixuan">共{{anli_num.num}}件案例</text>
					<view class="qian_28 an_shaixuan" @click="shaixuan">
						<image src="@/static/img/ls_shaixuan.png" mode="" class="shaixuan_img"v-if="!is_shaixuan"></image>
						<image src="@/static/img/shouqi.png" mode="" class="shouqi_img" v-if="is_shaixuan"></image>
						{{is_shaixuan?'收起':'筛选'}}
					</view>
				</view>
				<view class="shai" v-if="is_shaixuan">
					<view class="shai_list hei_26">
						案件类型：
						<view class="shai_list_right">
							<text class="leixing" v-for="(item,key,index) in anli_num.typeids" @click="lei_xuan(item.name)">
								{{fenlei[key].typename}}(<text class="hong_26">{{item}}</text>)
							</text>
						</view>
					</view>
					<view class="shai_list hei_26">
						办案法院：
						<view class="shai_list_right">
							<view class="lvsuo" v-for="(item,key,index) in anli_num.fayuans" @click="lei_xuan(item.name)">
								{{key}}(
								<text class="hong_26">{{item}}</text>
								)
							</view>
							
							</view>
						</view>
					</view>
				</view>
				<view class="anli-body">
					<view class="anli_list" v-for="item in anjian_list" @click="go_xq(item.lyanliid)">
						<view class="anli_list_top hei_26">{{item.title}}</view>
						<text class="hui_26 laiyuan">{{item.daili}}</text>
					</view>
				</view>

				<view class="more_anli hei_26" v-if="!is_all" @click="all">查看全部案例></view>
				<view class="fenye hei_26" v-if="is_all">
					<view class="shangyiye"@click="pre_ye()"> <image src="@/static/img/shangye.png" mode="" style="width: 14rpx;height: 14rpx;"></image> 上一页 </view>
					<view class="yeshu qian_26">
						<text class="lv_26">1</text>
						/{{yeshu}}
					</view>
					<view class="xiayiye" @click="nextye()">下一页<image src="@/static/img/xiaye.png" mode=""  style="width: 14rpx;height: 14rpx;"></image></view>
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
					 <view class="lv_24 bottom_jiage" v-if="baojia&&baojia.jianmian" @click="tan(0,baojia.jianmian)">
					 	￥<text class="lv_32">{{baojia.jianmian}}</text>
					 </view>
					 <view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.jianmian ">
					 	<text class="lv_32">未报价</text>
					 </view>
						见面咨询
					</view>
					<view class="zaixian bai_26" >
						<!-- <image src="@/static/img/zaixian_bai.png" mode=""></image> -->
						<view class="bai_24 bottom_jiage" v-if="baojia&&baojia.chatprice"@click="tan(1,baojia.chatprice)">
							￥<text class="bai_32">{{baojia.chatprice}}</text>
						</view>
						<view class="bai_24 bottom_jiage" v-if="!baojia || !baojia.chatprice " >
							<text class="bai_32">未报价</text>
						</view>
						在线咨询
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
						<text @click="huan_leixing(1)" :class="leixing_index==1?'tan_xuan_active':''" v-if="baojia.chatprice || baojia.zaixian3 ||baojia.zaixian30 ">在线咨询</text>
						<text @click="huan_leixing(2)" :class="leixing_index==2?'tan_xuan_active':''" v-if="baojia.dianhua || baojia.dianhua1 || baojia.dianhua3 || baojia.dianhua30 ">电话咨询</text>
						<text @click="huan_leixing(3)" :class="leixing_index==3?'tan_xuan_active':''" v-if="baojia.hetong_daixie || baojia.hetong_shenhe || baojia.hetong_wenshu ">合同文书</text>
						<text @click="huan_leixing(4)" :class="leixing_index==4?'tan_xuan_active':''" v-if="baojia.lvshi_huijian || baojia.lvshihan || baojia.anjianzhidao ">诉讼委托</text>
						<text @click="huan_leixing(0)" :class="leixing_index==0?'tan_xuan_active':''" v-if="baojia.jianmian">见面咨询</text>
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
						<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.phoneprice,'20分钟')" v-if="baojia.phoneprice" >20分钟</text>
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
	import unpopup from '@/components/uni-popup/uni-popup-share.vue';
export default {
	data() {
		return {
			is_all:false,
			is_shaixuan:false,
			leixing:[
				{name:'劳动工伤',num:'2'},
				{name:'合同文书',num:'6'},
				{name:'债权债务',num:'5'},
				{name:'房产纠纷',num:'2'},
				{name:'公司经营',num:'1'},
				{name:'刑事辩护',num:'2'}
				],
				lvsuo:[
					{name:'杭州市萧山区人民法院',num:'2'},
					{name:'杭州市江干区人民法院',num:'6'},
					{name:'杭州市滨江区人民法院',num:'5'},
					{name:'杭州市萧山区人民法院',num:'2'},
					{name:'浙江省杭州市中级人民法院',num:'1'},
					{name:'进贤县人民法院',num:'2'},
					{name:'桐庐县人民法院',num:'2'},
					{name:'义乌市人民法院',num:'2'}
					],
			lawyerid:'',
			lvshi:'',
			zhuanchang_arry:[],
			img_url: uni.getStorageSync('img_url'),
			anli_num:'',
			fenlei:[],
			anjian_list:[],
			page:0,
			yeshu:0,
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
	components: {
		unpopup
	},
	created() {},
	onLoad(option) {
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi()
			});
			
		this.$http
			.post({
				url: '/mapi/index/gettype'
			})
			.then(res => {
				this.fenlei = res.data.type;
			});	
		this.lawyerid=option.lawyerid
		this.huoqu_anli_num()
		this.huoqu_anjian_list()
		this.huiqu_num()
		this.huoqu_baojia()
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
		all(){
			this.is_all=true
		},
		shaixuan(){
			this.is_shaixuan=!this.is_shaixuan
		},
		lei_xuan(e){
			console.log(e)
		},
		lvsuo_xuan(e){
			console.log(e)
		},
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
		// 获取数量和标签
		huoqu_anli_num(){
			this.$http
				.post({
					url: '/mapi/lawyer/anlinum',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.anli_num=res.data
						
					}
				});	
		},
		// 获取图文总数
		huiqu_num(){
			this.$http
				.post({
					url: '/mapi/lawyer/anlilistcount',
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
		huoqu_anjian_list(){
			this.$http
				.post({
					url: '/mapi/lawyer/anlilist',
					data: {
						lawyerid:this.lawyerid,
						page:this.page
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.anjian_list=this.anjian_list.concat(res.data.anli);
						if(res.data.anli.length<10){
							this.is_all=true
						}
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
		go_dianping(){
			uni.navigateTo({
				url:'pingjia?lawyerid='+this.lawyerid
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
				this.huoqu_anjian_list()
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
				this.huoqu_anjian_list()
			}
		
		},
		// 分享
		share(){
			uni.navigateTo({
				url:'sucai?state=1'
			})
		},
		// 底部弹窗
		tan(type,money) {
			if(!this.baojia){
				return false
			}
			this.$refs.popup.open();
			this.pay_money=money
			this.shichang_index=1
			this.leixing_index=type
			if(type==1){
				this.shichang_txt='1天'
			}else if(type==2){
				this.shichang_txt='20分钟'
			}else{
				this.shichang_txt='1次'
			}
			
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
		go_xq(lyanliid){
			uni.navigateTo({
				url:'anjian_xq?lyanliid='+lyanliid
			})
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
.bottom_pingjia
,.bottom_guanzhu{
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
.an_shaixuan .shaixuan_img {
	width: 30rpx;
	height: 28rpx;
	margin-right: 6rpx;
}
.shouqi_img{
	width: 21rpx;
		height: 13rpx;
		margin-right: 6rpx;
}
.anli_top {
	display: flex;
	justify-content: space-between;
	height: 100rpx;
	align-items: center;
	padding: 0 30rpx;
}
.anli_list {
	border-bottom: 2rpx solid #f7f7f7;
	padding: 20rpx 30rpx 30rpx;
}
.laiyuan {
	display: inline-block;
	height: 42rpx;
	background-color: #f5f5f5;
	line-height: 42rpx;
	padding: 0 18rpx;
	margin-top: 13rpx;
}
.more_anli {
	height: 89rpx;
	background-color: #fcfcfc;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 50rpx;
}
.fenye {
	display: flex;
	justify-content: space-between;
	padding: 0 30rpx;
	height: 89rpx;
	background-color: #fcfcfc;
	align-items: center;
	margin-bottom: 50rpx;
}
.shangyiye,.xiayiye {
	display: flex;
	align-items: center;
}

.yeshu {
	height: 41rpx;
	border-radius: 20rpx;
	border: solid 1rpx #dcdcdc;
	line-height: 40rpx;
	padding: 0 40rpx;
}
.shai_list {
	display: flex;
	padding: 0 0 0 30rpx;
}
.shai_list_right {
	max-width: 81%;
}
.shai {
	border-bottom: 2rpx solid #f7f7f7;
}
.leixing {
	display: inline-block;
	height: 44rpx;
	background-color: #f5f5f5;
	border-radius: 4rpx;
	line-height: 44rpx;
	padding: 0 16rpx;
	margin: 0 20rpx 20rpx 0;
}
.lvsuo {
	margin-bottom: 20rpx;
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
</style>
