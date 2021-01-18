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
						<image :src="img_url + lvshi.photourl" mode="" class="ls_tx_img"></image>
						<image src="@/static/img/ls_ren.png" mode="" class="is_ren"></image>
					</view>
					<view class="hei_28_bold">{{ lvshi.nickname }}</view>
					<view class="qian_26 ls_dizhi">
						<text>{{ lvshi.province }}-{{ lvshi.city }}</text>
						<text>专职律师</text>
					</view>
					<view class="hui_26 techang">
						<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise1].shanchangname">
							{{ zhuanchang_arry[lvshi.expertise1].shanchangname }}
						</text>
						<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise2].shanchangname">
							{{ zhuanchang_arry[lvshi.expertise2].shanchangname }}
						</text>
						<text v-if="zhuanchang_arry[lvshi.expertise1] && zhuanchang_arry[lvshi.expertise3].shanchangname">
							{{ zhuanchang_arry[lvshi.expertise3].shanchangname }}
						</text>
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
				<navigator :url="'ls_zhuye?lawyerid=' + lawyerid" class="ls_tab_item ">首页</navigator>
				<navigator :url="'ls_zhuye_index?lawyerid=' + lawyerid" class="ls_tab_item ">律师服务</navigator>
				<navigator :url="'ls_xinxi?lawyerid=' + lawyerid" class="ls_tab_item ls_tab_item_active">律师信息</navigator>
				<navigator :url="'ls_anli?lawyerid=' + lawyerid" class="ls_tab_item ">律师案例</navigator>
				<!-- <view :class="['ls_tab_item', index == active ? 'ls_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="qiehuan(index)">{{ tab }}</view> -->
			</view>

			<view class="fuwu_body" v-if="ls_xinxi != ''">
				<view class="jianjie hei_26">
					<view class="jianjie_title hei_28_bold">律师简介：</view>
					<view :class="['jianjie_body', is_shou ? '' : 'max_height']">{{ lvshi.miaoshu }}</view>
					<view class="more lv_26" @click="shou">
						{{ is_shou ? '收起全部' : '展开全部' }}
						<image src="@/static/img/jianjie_more.png" mode=""></image>
					</view>
				</view>
				<view class="jiben_xixin">
					<view class=" xixin_title hei_28_bold">基本信息</view>
					<view class="jiben_xixin_list hei_26">
						执业律所
						<view class="jiben_xixin_list_right hui_26">{{ lvshi.lvsuo }}</view>
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
					<!-- 					<view class="jiben_xixin_list hei_26">
						团队描述
						<view class="jiben_xixin_list_right hui_26">-</view>
					</view> -->
				</view>
				<view class="lianxi">
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
					<view class="ditu"><map style="width:100%;height:366rpx;" :latitude="latitude" :longitude="longitude" :scale="scale"></map></view>
				</view>
				<view class="jiaoyu" v-if="ls_xinxi.lawyerinfos[1]">
					<view class=" xixin_title hei_28_bold">教育背景</view>
					<view class="jiben_xixin_list hei_26">
						最高学历
						<view class="jiaoyu_right hui_26">{{ xueli_type[ls_xinxi.lawyerinfos[1][0].xueli] }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						毕业院校
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyerinfos[1][0].school }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						所学专业
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyerinfos[1][0].zhuanye }}</view>
					</view>
				</view>
				<view class="jiaoyu">
					<view class=" xixin_title hei_28_bold">更多资料</view>
					<view class="jiben_xixin_list hei_26">
						性别
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.sexid == 1 ? '男' : '女' }}性</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						年龄
						<view class="jiaoyu_right hui_26">{{ nianling(ls_xinxi.lawyer.birthday) }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						民族
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.mingzu }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						属相
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.shuxiang }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						星座
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.xingzuo }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						故乡
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.hometown }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						家庭
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.jiating }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						语言
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.yuyan }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						政治派别
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.mianmao }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						政治职务
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.zzzhiwu }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						交通工具
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.vehicle }}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						兴趣爱好
						<view class="jiaoyu_right hui_26">{{ ls_xinxi.lawyer.hobby }}</view>
					</view>
				</view>

				<view class="rongyu" v-if="ls_xinxi.lawyerinfos[3]">
					<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">荣誉奖励</view>
					<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[3]">
						<view class="rongyu_list_top hei_26_bold">{{ item.zhuanye }}</view>
						<view class="qian_26 rongyu_time">
							颁奖时间：
							<text class="hui_26 rongyu_r">{{ item.starttime }}</text>
						</view>
						<view class="qian_26">
							颁奖机构：
							<text class="hui_26 rongyu_r">{{ item.zhuanye }}</text>
						</view>
					</view>
				</view>
				<view class="rongyu" v-if="ls_xinxi.lawyerinfos[2]">
					<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">社会职务</view>
					<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[2]">
						<view class="rongyu_list_top hei_26_bold">{{ item.school }}</view>
						<view class="qian_26 rongyu_time">
							状态：
							<text class="hui_26 rongyu_r">{{ item.zwstate == 1 ? '曾任' : '现任' }}</text>
						</view>
						<view class="qian_26">
							职务：
							<text class="hui_26 rongyu_r">{{ item.zhuanye }}</text>
						</view>
					</view>
				</view>
				<view class="rongyu" v-if="ls_xinxi.lawyerinfos[4]">
					<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">媒体报道</view>
					<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[4]">
						<view class="rongyu_list_top hei_26_bold">{{ item.zhuanye }}</view>
						<view class="qian_26 rongyu_time">
							报道时间：
							<text class="hui_26 rongyu_r">{{ item.starttime }}</text>
						</view>
						<view class="qian_26">
							媒体名称：
							<text class="hui_26 rongyu_r">{{ item.pintai }}</text>
						</view>
					</view>
				</view>
				<view class="rongyu" v-if="ls_xinxi.lawyerinfos[5]">
					<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">学术成果</view>
					<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[5]">
						<view class="rongyu_list_top hei_26_bold">{{ item.zhuanye }}</view>
						<view class="qian_26 rongyu_time">
							成果类型：
							<text class="hui_26 rongyu_r">{{ item.leixing }}</text>
						</view>
						<view class="qian_26">
							发表时间：
							<text class="hui_26 rongyu_r">{{ item.starttime }}</text>
						</view>
						<view class="qian_26">
							文章链接：
							<text class="lv_26 rongyu_r">{{ item.lianjie }}</text>
						</view>
						<view class="qian_26">
							发表平台：
							<text class="hui_26 rongyu_r">{{ item.pintai }}</text>
						</view>
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
						<view class="bai_24 bottom_jiage" v-if="baojia&&baojia.zaixian1">
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
				<text @click="huan_leixing(1)" :class="leixing_index==1?'tan_xuan_active':''" v-if="baojia.zaixian1 || baojia.zaixian3 ||baojia.zaixian30 ">在线咨询</text>
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
				<text :class="shichang_index==1?'tan_xuan_active':''" @click="huan_shichang(1,baojia.zaixian1,'1天')" v-if="baojia.zaixian1" >1天</text>
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
import unpopup from '@/components/uni-popup/uni-popup-share.vue';
export default {
	data() {
		return {
			latitude: 30.265183729389186,
			longitude: 120.21162050135804,
			scale: 13,
			is_shou: false,
			lawyerid: '',
			lvshi: '',
			zhuanchang_arry: '',
			img_url: uni.getStorageSync('img_url'),
			ls_xinxi: '',
			xueli_type: '',
			type: 2,
			leixing_index: 1,
			shichang_arry:['1天','3天','1个月'],
			shichang_index:-1,
			tan_jia_jianjie:'实时聊天，快速沟通，高效解答，服务期内提问100%解答，可查看聊天记录。',
			baojia:'',
			pay_money:0,
			shichang_txt:''
		};
	},
	created() {},
	onLoad(option) {
		this.lawyerid = option.lawyerid;
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi();
			});

		this.huoqu_xinxi();
		this.huoqu_baojia()
		// 检测是否关注
		this.$http
			.post({
				url: '/mapi/index/findbrowse',
				data: {
					state: 2,
					lawyerid: this.lawyerid
				}
			})
			.then(res => {
				this.type = res.data.type;
			});
		// this.huiqu_xueli()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		shou() {
			this.is_shou = !this.is_shou;
		},
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
		huoqu_baojia(){
			this.$http
				.post({
					url: '/mapi/index/baojia',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					this.baojia=res.data.baojia
				});
			
			
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
						this.xueli_type = res.data.xueli;
					}
				});
		},
		huiqu_xueli() {
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/lawyerinfo'
				})
				.then(res => {
					if (res.code == 0) {
						this.xueli_type = res.data;
					}
				});
		},
		nianling(birthday) {
			// 获得今天的时间
			var date = new Date();

			//            alert(birthday);
			var startDate = new Date(birthday);
			var newDate = date.getTime() - startDate.getTime();

			var age = Math.floor(newDate / 1000 / 60 / 60 / 24 / 365);
			if (isNaN(age)) {
				age = '';
			}
			return age;
		},
		tochat(id, mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id + '&mobile=' + mobile
			});
		},
		go_chat() {
			uni.navigateTo({
				url:'chat?lawyerid='+this.lawyerid
			});
		},
		guanzhu() {
			this.$http
				.post({
					url: '/mapi/index/guanzhu',
					data: {
						lawyerid: this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.type = res.data.type;
						uni.showToast({
							title: res.message,
							duration: 2000,
							icon: 'none'
						});
					}
				});
		},
		go_dianping() {
			uni.navigateTo({
				url: 'pingjia?lawyerid=' + this.lawyerid
			});
		},
		call(mobile) {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: '' + mobile,
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
			
		
			return false
			uni.navigateTo({
				url:'pay?lawyerid='+lawyerid+'&type='+type
			})
		},
		// 分享
		share() {
			uni.navigateTo({
				url: 'sucai?state=1'
			});
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
.bottom_pingjia,
.bottom_guanzhu {
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
.jianjie {
	line-height: 40rpx;
	padding: 0 30rpx;
	border-bottom: 20rpx solid #f7f7f7;
}
.jianjie_title {
	margin: 20rpx 0;
}
.jianjie_body {
	line-height: 40rpx;
}
.more {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80rpx;
}
.more image {
	width: 10rpx;
	height: 6rpx;
	margin-left: 6rpx;
}
.xixin_title {
	margin: 20rpx 0 20rpx;
}
.jiben_xixin,
.lianxi {
	padding: 0 0rpx 0 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
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
.jiaoyu {
	padding: 0 0 0 30rpx;
	border-bottom: 2rpx solid #f7f7f7;
}
.jiaoyu_right {
	max-width: 70%;
	margin-left: 60rpx;
}
.ditu {
	padding: 0 56rpx 0 20rpx;
	margin-bottom: 40rpx;
}
.rongyu {
}
.rongyu_list {
	padding: 17rpx 30rpx 20rpx 50rpx;
	position: relative;
	border-bottom: 2rpx solid #f7f7f7;
}

.rongyu_list::before {
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 26rpx;
	background-color: #0eb77e;
	margin-right: 20rpx;
	position: absolute;
	top: 23rpx;
	left: 30rpx;
}

.rongyu_list_top {
	line-height: 40rpx;
}
.rongyu_list_top text {
	display: inline-block;
}
.rongyu_list view {
	display: flex;
	align-items: flex-start;
}
.rongyu_time {
	margin: 20rpx 0;
}
.rongyu_r {
	display: inline-block;
	max-width: 80%;
}
.max_height {
	max-height: 120rpx;
	overflow: hidden;
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
.tan_jiage {
	padding: 30rpx;
	background-color: #ffffff;
	padding-bottom: 50rpx;
}

.tan_jiage_title_leixing {
	display: flex;
}
.tan_jiage_title_leixing text {
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
.tan_jiage_title_list_shichang text {
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
.tan_jiage_btn {
	margin-top: 120rpx;
}
.tan_jiage_btn button {
	height: 88rpx;
	background-color: #0eb77e;
	border-radius: 44rpx;
	font-size: 38rpx;
	color: #ffffff;
}
.tan_xuan_active {
	border: solid 2rpx #0eb77e !important;
	color: #0eb77e;
}
</style>
