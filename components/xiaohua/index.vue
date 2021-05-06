<template>
	<view class="body">
		<view class="index_top">
			<view class="index_top_dingwei">
				<navigator url="tiwen" style="width: 76%;">
					<view class="index_sousuo qian_24">
						<image src="../../static/img/xh_sousuo.png" mode=""></image>
						<input confirm-type="search" @confirm="confirm" type="text" v-model="sou_txt" placeholder="输入关键字..." class="hei_30" />
					</view>
				</navigator>
				<view class="dingwei hei_30">
					<image src="@/static/img/xh_dingwei.png" mode=""></image>

					<pickerAddress @change="xuandizhi">
						<view class="dingwei_txt">{{ dizhi == '' ? '全国' : dizhi }}</view>
					</pickerAddress>

					<!-- <text>{{dizhi}}</text> -->
				</view>
			</view>

			<view class="tab">
				<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" class="fenlei hei_26"></wuc-tab>
				<image src="@/static/img/xh_qita.png" mode=""></image>
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
					<swiper-item v-for="item in banner" @click="go_tiwen">
						<view class="swiper-item"><image :src="item.img"></image></view>
					</swiper-item>
				</swiper>

				<!-- <view class="dots">
					<block v-for="(item, index) in banner"><view :class="['dot', index == current ? 'active' : '']"></view></block>
				</view> -->
			</view>
		</view>
		<view class="index_zixun_num_body">
			<view class="index_zixun_num hei_26">
				<view class="index_zixun_num_left">
					<image src="../../static/img/index_renzheng.png" mode=""></image>
					平台律师均三重认证
				</view>
				<view class="index_zixun_num_right">
					<image src="../../static/img/index_zixun.png" mode=""></image>
					今日咨询
					<text class="lv_26" v-if="data">{{ jiequ(data.serve.today) }}</text>
					次
				</view>
			</view>
		</view>
		<view class="index_tab hei_24">
			<view class="index_tab_item">
				<navigator url="tiwen">
					<image src="@/static/img/xh_tab1.png" mode=""></image>
					<view>问律师</view>
				</navigator>
			</view>

			<view class="index_tab_item" @click="tiaozhuan">
				<image src="@/static/img/xh_tab2.png" mode=""></image>
				<view>找律师</view>
			</view>
			<view class="index_tab_item" @click="tiao_jingxuan">
				<image src="@/static/img/xh_tab3.png" mode=""></image>
				<view>精选问答</view>
			</view>
			<navigator url="changshi" class="index_tab_item">
				<image src="@/static/img/xh_tab4.png" mode=""></image>
				<view>法律知识</view>
			</navigator>
		</view>

		<view class="index_bankuai">
			<view class="index_bankuai_list">
				<view class="index_bankuai_item index_bankuai_item1" @click="go_ls_list">
					<view class="hei_28 index_bankuai_item_title">在线咨询</view>
					<view class="hui_26">律师1对1服务</view>
				</view>
				<navigator url="dianhua_zixun" class="index_bankuai_item index_bankuai_item2">
					<view class="hei_28 index_bankuai_item_title">电话咨询</view>
					<view class="hui_26">律师主动沟通</view>
				</navigator>
			</view>
			<view class="index_bankuai_list">
				<navigator url="weituo" class="index_bankuai_item index_bankuai_item3">
					<view class="hei_28 index_bankuai_item_title">案件委托</view>
					<view class="hui_26">打官司·约见律师</view>
				</navigator>
				<navigator url="changshi" class="index_bankuai_item index_bankuai_item3">
					<view class="hei_28 index_bankuai_item_title">法律百科</view>
					<view class="hui_26">热点知识全都有</view>
				</navigator>
			</view>
		</view>

		<view class="index_wenti">
			<navigator url="tiwen"><image src="../../static/img/xh_guanggao.png" mode=""></image></navigator>
		</view>

		<view class="index_zhineng">
			<navigator url="zhineng_pay?type=1" class="index_zhineng_item">
				<image src="../../static/img/xh_zaixian.png" mode="" class="index_zhineng_item_lei"></image>
				<view class="index_zhineng_item_right">
					<view class="index_zhineng_item_top hei_30_bold">
						在线咨询
						<image src="../../static/img/xh_hot.png" mode=""></image>
					</view>
					<view class="index_zhineng_item_bottom qian_24">专业律师·限时应答</view>
				</view>
			</navigator>
			<navigator url="zhineng_pay?type=2" class="index_zhineng_item">
				<image src="../../static/img/xh_dianhua.png" mode="" class="index_zhineng_item_lei"></image>
				<view class="index_zhineng_item_right">
					<view class="index_zhineng_item_top hei_30_bold">
						电话咨询
						<image src="../../static/img/xh_tuijian.png" mode=""></image>
					</view>
					<view class="index_zhineng_item_bottom qian_24">超值咨询·高效便捷</view>
				</view>
			</navigator>
		</view>
		<view class="index_ls_ziao_body">
			<view class="index_ls_ziao hei_28">
				<view class="index_ls_ziao_title hei_36_bold">按专长找</view>
				<view class="index_ls_ziao_list">
					<text v-for="(item, index) in zhuanchang_list" v-if="index < zhuanchang_num" @click="go_lvshi_zhuan(item.shanchangid)">{{ item.shanchangname }}</text>
					<text class="ls_shouqi lv_28" @click="index_zhankai" v-if="zhuanchang_list.length > 7">{{ ls_shouqi }}</text>
				</view>
				<view class="" v-if="getlawyerlevelscreen == 1">
					<view class="index_ls_ziao_title hei_36_bold index_ls_ziao_dengji_title">按等级找</view>
					<view class="index_ls_ziao_list index_ls_ziao_dengji">
						<text v-for="(item, index) in dengji_arry" @click="go_lvshi_dengji(index)">{{ item }}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="tuijian">
			<view class="tuijian_top"><image src="@/static/img/tuijian_title.png" mode=""></image></view>
			<view class="tuijian_list">
				<block v-for="(item, index) in loginlawyer" v-if="loginlawyer">
					<view class="tuijian_item_body">
						<view class="tuijian_item">
							<view class="tuijian_item_left" @click="go_zhuye(item.userid)">
								<image :src="url + item.photourl" mode=""></image>
								<view class="hei_22 zhiye_nianfen">执业{{ item.zhiyenianfen }}年</view>
							</view>
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
									{{ item.lvsuo }}
								</view>
								<view class="ls_dizhi qian_22">
									<image src="@/static/img/dizhi.png" mode=""></image>
									{{ item.province + '-' + item.city + '-' + item.area }}
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

						<view class="tuijian_item_bottom">
							<view class="tuijian_item_bottom_title hui_24" :class="{ zhankai_on: zhankai_arry.indexOf(index) != -1 }">
								<view class="tuijian_item_bottom_title_left">
									<text v-if="zhuanchang_arry[item.expertise1] && zhuanchang_arry[item.expertise1].shanchangname">
										{{ zhuanchang_arry[item.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[item.expertise2] && zhuanchang_arry[item.expertise2].shanchangname">
										{{ zhuanchang_arry[item.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[item.expertise3] && zhuanchang_arry[item.expertise3].shanchangname">
										{{ zhuanchang_arry[item.expertise3].shanchangname }}
									</text>
								</view>

								<view class="tuijian_item_bottom_title_right" @click="zhankai(index)">
									{{ zhankai_arry.indexOf(index) != -1 ? '收起' : '展开' }}
									<image src="../../static/img/xiangxia.png" mode=""></image>
								</view>
							</view>
							<view class="tuijian_item_bottom_list hei_20" :class="{ zhankai_on: zhankai_arry.indexOf(index) != -1 }">
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.zaixian1, '1小时', 1)">
									<view class="tuijian_item_bottom_item_top">在线咨询</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.zaixian1 }}</text>
										/小时
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.phoneprice, '20分钟', 2)">
									<view class="tuijian_item_bottom_item_top">电话咨询</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.phoneprice }}</text>
										/20分钟
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.legaladviser1, '个人法律顾问', 5)">
									<view class="tuijian_item_bottom_item_top">法律顾问</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.legaladviser1 }}</text>
										/年
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.hetong_shenhe, '合同审核', 3)">
									<view class="tuijian_item_bottom_item_top">合同审核</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.hetong_shenhe }}</text>
										/次
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.hetong_daixie, '代写合同', 3)">
									<view class="tuijian_item_bottom_item_top">代写合同</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.hetong_daixie }}</text>
										/次
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.hetong_wenshu, '代写文书', 3)">
									<view class="tuijian_item_bottom_item_top">代写文书</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.hetong_wenshu }}</text>
										/次
									</view>
								</view>
								<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid, item.lvshi_huijian, '律师会见', 4)">
									<view class="tuijian_item_bottom_item_top">律师会见</view>
									<view class="tuijian_item_bottom_item_bottom hong_20">
										￥
										<text class="">{{ item.lvshi_huijian }}</text>
										/次
									</view>
								</view>
								<!-- 	<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid,item.lvshihan,'发律师函',4)">
							<view class="tuijian_item_bottom_item_top">
								发律师函
							</view>
							<view class="tuijian_item_bottom_item_bottom hong_20">
								￥<text class="">{{item.lvshihan}}</text>/次
							</view>
						</view> -->
								<!-- 	<view class="tuijian_item_bottom_item"  @click="go_zhifu(item.userid,item.anjianzhidao,'案件指导',4)">
							<view class="tuijian_item_bottom_item_top">
								案件指导
							</view>
							<view class="tuijian_item_bottom_item_bottom hong_20">
								￥<text class="">{{item.anjianzhidao}}</text>/元
							</view>
						</view>
						<view class="tuijian_item_bottom_item" @click="go_zhifu(item.userid,item.jianmian,'1次',0)">
							<view class="tuijian_item_bottom_item_top">
								见面咨询
							</view>
							<view class="tuijian_item_bottom_item_bottom hong_20">
								￥<text class="">{{item.jianmian}}</text>/元
							</view>
						</view> -->

								<view class="tuijian_item_bottom_item" @click="go_zhuye(item.userid)">
									<view class="tuijian_item_bottom_item_top">了解更多</view>
									<view class="tuijian_item_bottom_item_bottom qian_20">前往律师主页</view>
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
		<view class="index_zixun" v-if="is_tiwen && is_tiwen.appopenconsult == 1">
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
		<button type="" class="qian_26 ls_more" @click="tiaozhuan_zixun" v-if="is_tiwen && is_tiwen.appopenconsult == 1">
			<image src="@/static/img/gengduo.png" mode=""></image>
			查看更多咨询>>
		</button>

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
					<view class="tan_bottom hui_27" v-if="!is_xiazai">
						<view class="">解决了旧版本中已知BUG</view>
						<view class="tan_txt">优化了一部分不合理的功能</view>
						<image src="@/static/img/gengxin_btn.png" mode="widthFix" @click="down" :class="['', is_update == 1 ? 'padding_top' : '']"></image>
						<view class="guanbi qian_28" v-if="is_update == 2" @click="guanbi">稍后更新</view>
					</view>
					<view class="tan_bottom hui_27 is_xia_bottom" v-if="is_xiazai">
						<view class="xiazai_tishi">
							<text>{{ xiazai_txt }}</text>
							<text>{{ baifen }}%</text>
						</view>
						<view class="tan_jindu"><text :style="{ width: baifen + '%' }"></text></view>
						<button :class="['bai_30', xiazai_state == '取消' ? 'is_xia_btn' : 'is_xia_btn_wan']" @click="quxiao">{{ xiazai_state }}</button>
					</view>
				</view>
			</view>

			<view class="tab_bg" v-if="is_xieyi">
				<view class="tan_xiyi hei_26">
					<view class="tan_xiyi_title hei_30">温馨提示</view>
					<view class="tan_xiyi_txt">欢迎您使用 “小虎律师” 软件及相关的服务</view>
					<view class="tan_xiyi_txt">“小虎律师”软件服务由台州律易网络科技有限公司 (以下简称 “ 我们” )开发并发布。我们依据法律法规收集、使用个人信息。</view>
					<view class="tan_xiyi_txt ">
						在使用“小虎律师”
						软件及相关服务前，请您务必仔细阅读并理解我们的《用户协议》及《隐私政策》。您一旦选择“同意”，即意味着您授权我们收集、保存、使用、共享、披露及保护您的信息。点击查看
						<text class="hong_26" @click="go_xieyi">《用户协议》</text>
						和
						<text class="hong_26" @click="go_yinsi">《隐私政策》</text>
						。
					</view>
					<view class="tan_xiyi_bottom">
						<button type="" class="tan_xiyi_butongyi bai_26" @click="butongyi">不同意</button>
						<button type="" class="tan_xiyi_tongyi bai_26" @click="tongyi">同意</button>
					</view>
				</view>
			</view>
		</view>

		<!-- <tabBar :currentPage="currentPage" ref="mainindex"></tabBar> -->
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import pickerAddress from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';

import tabBar from '@/components/y_tabbar/tabbar.vue';
//#ifdef H5
import $ from '@/common/jquery-3.4.1.min.js';
import { loadBMap } from '@/common/map.js';
//#endif
export default {
	data() {
		return {
			sou_txt: '',
			dizhi: '',
			topbg: '#86dbbe',
			url: uni.getStorageSync('img_url'),
			data: '',
			tabList: '',
			currentPage: 'index/index',
			TabCur: 0,
			current: 0,
			banner: [
				{
					img: '../../static/img/xh_banner1.jpg'
				}
			],
			btnnum: 1,
			fa_zhishi: '',
			is_gengxin: false,
			banben: '',
			down_url: '',
			tiao_type: 1,
			zhineng: '',
			is_yaoqing: 2,
			is_xiazai: false,
			baifen: 0,
			is_xieyi: false,
			is_login: false,
			is_update: 2,
			xiazai_state: '取消',
			filename: '',
			xiazai_txt: '正在下载中，请稍后...',
			zhankai_arry: [],
			zhuanchang_arry: [],
			is_tiwen: '',
			dengji_arry: '',
			ls_shouqi: '更多专长',
			zhuanchang_num: 7,
			loginlawyer: '',
			getlawyerlevelscreen: 2,
			getlawyerlistopen: 2,
			zhuanchang_list:[]
		};
	},
	components: {
		WucTab,
		pickerAddress,
		tabBar
	},
	onUnload() {
		// #ifdef APP-PLUS
		uni.closeSocket();
		// #endif
	},
	created() {
		var that = this;

		//#ifdef APP-PLUS
		plus.runtime.getProperty(plus.runtime.appid, wgtinfo => {
			console.log(JSON.stringify(wgtinfo));
			console.log('版本号', wgtinfo.versionCode); //应用版本号
			this.banben = wgtinfo.versionCode;
			this.huiqu_banben();
		});

		//#endif
		this.huoqu_is_tiwen();
		this.$http
			.post({
				url: '/mapi/index/getopenshenhe'
			})
			.then(res => {
				if (res.data.zhan.openshenhe == 1) {
					if (uni.getStorageSync('is_tongyi')) {
					} else {
						this.is_xieyi = true;
					}
				}
			});
		this.$http
			.post({
				url: '/mapi/index/geturl'
			})
			.then(res => {
				this.url = res.data.url;
				uni.setStorageSync('img_url', res.data.url);
			});
		// 获取知识一级
		this.$http
			.post({
				url: '/mapi/index/knowledgetype'
			})
			.then(res => {
				this.fa_zhishi = res.data.type[1];
			});

		// 获取擅长
		this.$http
			.post({
				url: '/mapi/index/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				var array = [];
				for (var key in res.data.shanchang) {
					array.push(res.data.shanchang[key]);
				}
				this.zhuanchang_list = array;
			});
		//获取等级
		this.$http
			.post({
				url: '/mapi/index/lawyerlevel'
			})
			.then(res => {
				this.dengji_arry = res.data;
			});
		//获取是否开启等级搜索
		this.$http
			.post({
				url: '/mapi/index/getlawyerlevelscreen'
			})
			.then(res => {
				this.getlawyerlevelscreen = res.data.lawyerlevelscreen;
			});
		//获取列表是否展开
		this.$http
			.post({
				url: '/mapi/index/getlawyerlistopen'
			})
			.then(res => {
				this.getlawyerlistopen = res.data.lawyerlistopen;
			});
		that.shuxin_zujian();

		this.$http
			.post({
				url: '/index/login/islogin'
			})
			.then(res => {
				if (res.data.user != '') {
					this.$http
						.post({
							url: '/mapi/user/useraddress'
						})
						.then(res => {
							if (res.data.provinces) {
								this.dizhi = res.data.citys;
								uni.setStorageSync('citys', res.data.citys);

								// that.shouye_lvshi();
							} else {
								// this.dingwei();
							}
						});
				} else {
					that.shouye_lvshi();
				}
			});
	},
	onLoad() {
		// if (this._isMobile()) {
		//      alert("手机端");
		//    } else {
		//      alert("pc端");
		//    }
	},
	onShow() {},
	methods: {
		huoqu_is_tiwen() {
			this.$http
				.post({
					url: '/mapi/index/getopenconsult'
				})
				.then(res => {
					this.is_tiwen = res.data;
				});
		},
		shouye_lvshi() {
			this.$http
				.post({
					url: '/mapi/index/lawyerlist',
					data: {
						city: this.dizhi
					}
				})
				.then(res => {
					this.loginlawyer = res.data.loginlawyer;
					this.zhankai_arry = [];
					if (this.getlawyerlistopen == 1) {
						for (var i = 0; i < res.data.loginlawyer.length; i++) {
							this.zhankai_arry.push(i);
						}
					}
				});
		},
		jianhcha_dingwei() {
			var that = this;
			this.$http
				.post({
					url: '/mapi/user/useraddress'
				})
				.then(res => {
					if (res.data.provinces) {
						this.dizhi = res.data.citys;
						uni.setStorageSync('citys', res.data.citys);

						that.shouye_lvshi();
					} else {
						this.dingwei();
					}
				});
		},
		go_tiwen() {
			uni.navigateTo({
				url: '../../pages/index/tiwen'
			});
		},
		zhankai(index) {
			if (this.zhankai_arry.indexOf(index) == -1) {
				this.zhankai_arry.push(index); //选中添加到数组里
			} else {
				this.zhankai_arry.splice(this.zhankai_arry.indexOf(index), 1); //取消
			}
		},
		dingwei() {
			// #ifdef APP-PLUS
			var that = this;
			plus.geolocation.getCurrentPosition(
				function(p) {
					that.dizhi = p.address.city;

					// uni.setStorage({
					// 	key: 'dizhi',
					// 	data: {
					// 		sheng: p.address.province,
					// 		shi: p.address.city,
					// 		qu: p.address.district
					// 	}
					// });
that.shouye_lvshi();
					that.$http
						.post({
							url: '/mapi/user/upadress',
							data: {
								province: p.address.province,
								city: p.address.city,
								area: p.address.district
							}
						})
						.then(res => {});
				},
				function(e) {}
			);
			// #endif
			// #ifdef H5
			var that = this;

			window.initBaiduMapScript = () => {
				this.getlocation();
			};
			loadBMap('initBaiduMapScript');
			// #endif
		},
		huoqu_index() {
			// 获取首页信息
			this.$http
				.post({
					url: '/mapi/index/index',
					data: {
						city: this.dizhi
					}
				})
				.then(res => {
					this.data = res.data;
				});
		},
		shuxin_zujian() {
			this.huo_qu_is_yaoqing();
			// this.huiqu_login();

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
					url: '/mapi/index/index',
					data: {
						city: this.dizhi
					}
				})
				.then(res => {
					this.data = res.data;
				});

			// 获取跳转链接
			// this.$http
			// 	.post({
			// 		url: '/mapi/index/getzixunjump'
			// 	})
			// 	.then(res => {
			// 		this.tiao_type = res.data.zhan.zixunjump;
			// 	});
			// 查看只能服务报价
			// this.$http
			// 	.post({
			// 		url: '/mapi/index/getzixun'
			// 	})
			// 	.then(res => {
			// 		this.zhineng = res.data.zhan;
			// 	});
		},

		down() {
			//#ifdef APP-PLUS
			var urlStr = encodeURI(this.down_url); //把字符串作为url进行编码

			if (uni.getSystemInfoSync().platform == 'ios') {
				plus.runtime.openURL(urlStr);
			} else if (uni.getSystemInfoSync().platform === 'android') {
				var that = this;
				var dtask = plus.downloader.createDownload(urlStr, {}, function(d, status) {
					uni.showToast({
						title: '下载完成',
						mask: false,
						duration: 1000
					});
					// 下载完成
					if (status == 200) {
						that.filename = d.filename;

						plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, e => e, function(error) {
							uni.showToast({
								title: '安装失败-01',
								mask: false,
								duration: 1500
							});
						});
					} else {
						uni.showToast({
							title: '更新失败-02',
							mask: false,
							duration: 1500
						});
					}
				});
				try {
					dtask.start(); // 开启下载的任务
					that.is_xiazai = true;
					var prg = 0;
					// var showLoading = plus.nativeUI.showWaiting("正在下载");  //创建一个showWaiting对象
					dtask.addEventListener('statechanged', function(task, status) {
						// 给下载任务设置一个监听 并根据状态  做操作
						switch (task.state) {
							case 1:
								// showLoading.setTitle("正在下载");

								break;
							case 2:
								// showLoading.setTitle("已连接到服务器");
								break;
							case 3:
								prg = parseInt((parseFloat(task.downloadedSize) / parseFloat(task.totalSize)) * 100);
								// showLoading.setTitle("  正在下载" + prg + "%  ");
								that.baifen = prg;
								break;
							case 4:
								that.xiazai_state = '安装';
								that.xiazai_txt = '下载已完成';
								plus.nativeUI.closeWaiting();
								//下载完成
								break;
						}
					});
				} catch (err) {
					plus.nativeUI.closeWaiting();
					uni.showToast({
						title: '更新失败-03',
						mask: false,
						duration: 1500
					});
				}
			}

			//#endif
		},
		guanbi() {
			this.is_gengxin = false;
		},
		quxiao() {
			if (this.xiazai_state == '安装') {
				plus.runtime.install(plus.io.convertLocalFileSystemURL(this.filename), {}, e => e, function(error) {
					uni.showToast({
						title: '安装失败-01',
						mask: false,
						duration: 1500
					});
				});
			} else {
				plus.downloader.clear();
				this.is_xiazai = false;
				this.baifen = 0;
				uni.showToast({
					title: '下载已取消',
					duration: 2000,
					icon: 'none'
				});
			}
		},

		huiqu_login() {
			this.$http
				.post({
					url: '/index/login/islogin'
				})
				.then(res => {
					if (res.data.user != '') {
						this.is_login = true;
						this.jianhcha_dingwei();
					} else {
						this.is_login = false;
					}
				});
		},

		huo_qu_is_yaoqing() {
			this.$http
				.post({
					url: '/mapi/index/openinvite'
				})
				.then(res => {
					this.is_yaoqing = res.data.openinvite;
				});
		},
		huiqu_banben() {
			this.$http
				.post({
					url: '/mapi/index/banben'
				})
				.then(res => {
					this.is_update = res.data.banben.is_update;
					console.log(res.data.banben, '版本');
					if (res.data.banben.is_update == 3) {
					} else {
						if (uni.getSystemInfoSync().platform == 'ios') {
							console.log('ios', this.banben);
							if (this.banben < res.data.banben.ios) {
								this.is_gengxin = true;
								this.down_url = res.data.banben.iosurl;
								uni.hideTabBar();
							}
						} else if (uni.getSystemInfoSync().platform === 'android') {
							console.log('android', this.banben);
							if (this.banben < res.data.banben.android) {
								this.is_gengxin = true;
								this.down_url = res.data.banben.androidurl;
								uni.hideTabBar();
							}
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

		tabChange(index) {
			this.TabCur = index;
			uni.switchTab({
				url: '../../pages/index/lvshi'
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
			// this.current = e.detail.current;
			// if (e.target.current == 0) {
			// 	this.topbg = '#86dbbe';
			// } else if (e.target.current == 1) {
			// 	this.topbg = '#4075fc';
			// } else if (e.target.current == 2) {
			// 	this.topbg = '#d6992a';
			// } else if (e.target.current == 3) {
			// 	this.topbg = '#45adc3';
			// } else if (e.target.current == 4) {
			// 	this.topbg = '#b83947';
			// }
		},

		change(e) {
			this.huoqu_index();
			this.btnnum = e;
		},
		xuandizhi(data) {
			this.dizhi = data.data[1];
			uni.setStorageSync('xuanze', '1');
			this.shouye_lvshi();
			//                this.txt = data.data.join('')
			//                console.log(data.data.join(''))
		},
		tiaozhuan() {
			uni.switchTab({
				url: 'lvshi'
			});
		},
		tiao_jingxuan() {
			uni.reLaunch({
				url: '../../pages/index/zixun'
			});
		},
		tiaozhuan_zixun() {
			uni.reLaunch({
				url: '../../pages/index/zixun'
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
		go_zhifu(lawyerid, money, time, type) {
			uni.navigateTo({
				url: 'pay?lawyerid=' + lawyerid + '&type=' + type + '&time=' + time + '&pay_money=' + money
			});
		},
		go_xieyi() {
			uni.navigateTo({
				url: 'xieyi'
			});
		},
		go_yinsi() {
			uni.navigateTo({
				url: 'yinsi'
			});
		},
		butongyi() {
			// #ifdef APP-PLUS
			if (plus.os.name.toLowerCase() === 'android') {
				plus.runtime.quit();
			} else {
				const threadClass = plus.ios.importClass('NSThread');
				const mainThread = plus.ios.invoke(threadClass, 'mainThread');
				plus.ios.invoke(mainThread, 'exit');
				// ios11
				plus.ios
					.import('UIApplication')
					.sharedApplication()
					.performSelector('exit');
			}
			// #endif
		},
		tongyi() {
			this.is_xieyi = false;
			uni.setStorageSync('is_tongyi', true);
		},
		jiequ(item) {
			item = parseInt(Number(item.join('')));
			return item;
		},
		// 获取经纬度
		getlocation() {
			const that = this;
			// var wei_url=''

			// if (process.env.NODE_ENV == 'development') {
			//     wei_url='/dpc'
			// 	// #ifndef H5
			// 	wei_url='https://api.map.baidu.com'
			// 	// #endif
			// } else {
			//     wei_url = 'https://api.map.baidu.com' // 生产环境
			// }

			this.$nextTick(function() {
				try {
					const geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition(function(r) {
						$.ajax({
							url: 'https://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude,
							type: 'GET',
							async: false, //设置同步。ajax默认异步
							dataType: 'jsonp',
							jsonp: 'callback', //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
							jsonpCallback: 'callback', //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
							timeout: 5000,
							contentType: 'application/json; charset=utf-8',
							success: function(res) {
								that.dizhi = res.result.addressComponent.city;
								that.shouye_lvshi();
								that.$http
									.post({
										url: '/mapi/user/upadress',
										data: {
											province: res.result.addressComponent.province,
											city: res.result.addressComponent.city,
											area: res.result.addressComponent.district
										}
									})
									.then(res => {});

								// uni.setStorage({
								// 	key: 'dizhi',
								// 	data: {
								// 		sheng: res.result.addressComponent.province,
								// 		shi: res.result.addressComponent.city,
								// 		qu: res.result.addressComponent.district
								// 	}
								// });
							},
							error: function(err) {}
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
		},
		index_zhankai() {
			if (this.ls_shouqi == '更多专长') {
				this.zhuanchang_num = this.zhuanchang_list.length;
				this.ls_shouqi = '收起专长';
			} else {
				this.zhuanchang_num = 7;
				this.ls_shouqi = '更多专长';
			}
		},
		go_lvshi_zhuan(shanchangid) {
			uni.setStorageSync('shanchangid', shanchangid);
			uni.switchTab({
				url: '../../pages/index/lvshi'
			});
		},
		go_lvshi_dengji(index) {
			uni.setStorageSync('level', index);
			uni.switchTab({
				url: '../../pages/index/lvshi'
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
	margin-top: 72rpx;
	padding: 0 30rpx;
}
.wuc-tab {
	color: #333333 !important;
}
.tab image {
	width: 23rpx;
	height: 21rpx;
}

.index_top {
	height: 200rpx;
	/* background-color: #86dbbe; */
	/* border-radius: 0 0rpx 200rpx 200rpx; */
	padding: 38rpx 0rpx 0;
	position: relative;
	background-color: #ffffff;
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
	justify-content: space-between;
	position: fixed;
	z-index: 99;
	padding: 30rpx 30rpx;
	width: 100%;
	box-sizing: border-box;
	top: 0;
	max-width: 750px;
	background-color: #ffffff;
}

.fenlei {
	width: 670rpx;
}

.dingwei {
	margin-left: 14rpx;
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
	width: 100%;
	height: 80rpx;
	background-color: #f5f5f5;
	border-radius: 20rpx;
	line-height: 80rpx;

	display: flex;
	align-items: center;
}

.index_sousuo input {
	width: 85%;
	height: 55rpx;
}

.index_sousuo image {
	width: 32rpx;
	height: 30rpx;
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
	display: flex;
	flex-wrap: wrap;
}

.index_tab_item {
	text-align: center;
	width: 25%;
	margin-bottom: 40rpx;
}

.index_tab_item image {
	width: 84rpx;
	height: 84rpx;
	border-radius: 100%;
	margin-bottom: 10rpx;
}

.index_wenti {
	padding: 0 20rpx;
}

.index_wenti image {
	height: 118rpx;
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
	/* padding: 0 20rpx; */
}

.tuijian_item {
	display: flex;
	padding: 32rpx 0;
	/* border-bottom: 1px solid #d9d9d9; */
}

.tuijian_item:last-child {
	border: none;
}

.tuijian_item_left {
	width: 130rpx;
	margin-right: 20rpx;
	text-align: center;
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

.dots .active {
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
	height: 680rpx;
	background: url(../../static/img/gengxin_bg.png) no-repeat;
	background-size: 100% 100%;
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
	margin-top: 380rpx;
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
.xiazai_tishi {
	display: flex;
	justify-content: space-between;
}
.is_xia_bottom {
	padding: 48rpx 60rpx 0;
}
.tan_jindu {
	height: 11rpx;
	background-color: #f4f4f4;
	border-radius: 6rpx;
	margin: 20rpx 0 85rpx;
	position: relative;
}
.tan_jindu text {
	position: absolute;
	left: 0;

	height: 11rpx;
	background-color: #0eb77e;
	border-radius: 6rpx;
	display: inline-block;
}
.is_xia_bottom button {
	width: 300rpx;
	height: 60rpx;
	border-radius: 30rpx;
	line-height: 60rpx;
}
.is_xia_btn {
	background-color: #c6c6c6;
}
.is_xia_btn_wan {
	background-color: #0eb77e;
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
.body {
	padding-bottom: 150rpx;
}
.tan_xiyi {
	background-color: #ffffff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 600rpx;
	border-radius: 20rpx;
	padding: 0rpx 30rpx 10rpx;
	box-sizing: border-box;
}
.tan_xiyi_bottom {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30rpx 0 20rpx;
}
.tan_xiyi_bottom button {
	width: 200rpx;
	height: 60rpx;
	line-height: 60rpx;
}
.tan_xiyi_butongyi {
	background-color: #999999;
	box-shadow: 0 16rpx 16rpx #b7b2b7;
	border-radius: 30rpx;
}
.tan_xiyi_tongyi {
	background-color: #fd386c;
	border-radius: 30rpx;
	margin-left: 30rpx;
	box-shadow: 0 16rpx 16rpx #ff8e99;
}
.tan_xiyi_title {
	text-align: center;
	line-height: 100rpx;
}
.tan_xiyi_txt {
	line-height: 40rpx;
}
.tan_xiyi_txt_flex {
	display: flex;
}
.guanbi {
	letter-spacing: 4rpx;
}
.padding_top {
	padding-top: 30rpx;
}
.index_zixun_num_body {
	padding: 0 30rpx;
	margin-bottom: 36rpx;
}
.index_zixun_num {
	margin-top: 290rpx;
	display: flex;
	align-items: center;
	height: 100rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 9rpx 0rpx rgba(0, 30, 20, 0.13);
	border-radius: 10rpx;
	padding: 0 24rpx 0 32rpx;
	justify-content: space-between;
}
.index_zixun_num_left {
	display: flex;
	align-items: flex-end;
}
.index_zixun_num_left image {
	width: 24rpx;
	height: 28rpx;
	margin-right: 10rpx;
}
.index_zixun_num_right {
	display: flex;
	align-items: flex-end;
}
.index_zixun_num_right image {
	width: 27rpx;
	height: 28rpx;
	margin-right: 10rpx;
	vertical-align: middle;
}
.index_bankuai_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	margin-bottom: 20rpx;
}
.index_bankuai_item {
	width: 335rpx;
	height: 135rpx;
	padding: 25rpx;
	box-sizing: border-box;
}
.index_bankuai_item_title {
	margin: 0rpx 0 10rpx;
}
.index_bankuai_item1 {
	background: url(../../static/img/bankuan1.png) no-repeat;
	background-size: 100% 100%;
}
.index_bankuai_item2 {
	background: url(../../static/img/bankuan2.png) no-repeat;
	background-size: 100% 100%;
}
.index_bankuai_item3 {
	background: url(../../static/img/bankuan3.png) no-repeat;
	background-size: 100% 100%;
	margin-bottom: 10rpx;
}
.index_bankuai_item4 {
	background: url(../../static/img/bankuan4.png) no-repeat;
	background-size: 100% 100%;
	margin-bottom: 10rpx;
}
.index_zhineng {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50rpx 0 30rpx;
	margin-bottom: 30rpx;
}
.index_zhineng_item_lei {
	width: 64rpx;
	height: 64rpx;
	margin-right: 18rpx;
}
.index_zhineng_item_top {
	margin-bottom: 10rpx;
}
.index_zhineng_item_top image {
	width: 61rpx;
	height: 26rpx;
	margin-left: 4rpx;
}
.index_zhineng_item {
	display: flex;
	align-items: center;
	position: relative;
}
.index_zhineng_item:first-child::before {
	content: '';
	display: inline-block;
	width: 2rpx;
	height: 57rpx;
	background-color: #cdcdcd;
	position: absolute;
	right: -60rpx;
	top: 10rpx;
}
.body {
	padding-bottom: 140rpx;
}
.tuijian_item_bottom_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rpx;
}
.tuijian_item_bottom_title_left text {
	height: 43rpx;
	background-color: #f5f5f5;
	border-radius: 3rpx;
	display: inline-block;
	padding: 0 20rpx;
	margin-right: 20rpx;
	line-height: 43rpx;
}
.tuijian_item_bottom_item {
	width: 165rpx;
	height: 91rpx;
	background: url(../../static/img/jia_beijing1.png) no-repeat;
	box-shadow: 0rpx 0rpx 7rpx 0rpx rgba(0, 0, 0, 0.07);
	border-radius: 5rpx;
	margin: 0 10rpx 10rpx 0;
	text-align: center;
	box-sizing: border-box;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(2) {
	background: url(../../static/img/jia_beijing2.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(3) {
	background: url(../../static/img/jia_beijing3.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(4) {
	background: url(../../static/img/jia_beijing4.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(5) {
	background: url(../../static/img/jia_beijing5.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(6) {
	background: url(../../static/img/jia_beijing6.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(7) {
	background: url(../../static/img/jia_beijing7.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(8) {
	background: url(../../static/img/jia_beijing8.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(9) {
	background: url(../../static/img/jia_beijing9.png) no-repeat;
	background-size: 100% 100%;
}
.tuijian_item_bottom_item:nth-child(4n) {
	margin-right: 0;
}
.tuijian_item_bottom_list {
	display: flex;
	display: none;
	flex-wrap: wrap;
	padding: 25rpx 0 20rpx;
	justify-content: space-between;
	border-top: 2rpx dashed #dcdcdc;
}
.tuijian_item_body {
	padding: 0 20rpx;
	border-top: 2rpx solid #d9d9d9;
}
.tuijian_item_body:first-child {
	border: none;
}
.tuijian_item_bottom_item_top {
	margin: 10rpx 0 6rpx;
}
.suoxiao {
}
.tuijian_item_bottom_item image {
	width: 100%;
	height: 100%;
}
.tuijian_item_bottom_title_right image {
	width: 18rpx;
	height: 10rpx;
	margin-left: 6rpx;
	vertical-align: middle;
}

.zhankai_on {
	display: flex;
}
.zhankai_on .tuijian_item_bottom_title_right image {
	transform: rotate(180deg);
	-ms-transform: rotate(180deg); /* IE 9 */
	-moz-transform: rotate(180deg); /* Firefox */
	-webkit-transform: rotate(180deg); /* Safari 和 Chrome */
	-o-transform: rotate(180deg); /* Opera */
}
.tuijian_item_bottom_item_bottom {
	/* color: #12ab83; */
	/* display: inline-block; */
	/* transform: scale(0.83,0.83) ; */
}
.dingwei_txt {
	display: inline-block;
	max-width: 140rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.index_ls_ziao {
}
.index_ls_ziao_body {
	background-color: #f7f7f7;
	padding: 1rpx 30rpx 30rpx;
}
.index_ls_ziao_title {
	/* margin-bottom: 30rpx; */
	margin: 30rpx 0 30rpx;
}
.index_ls_ziao_dengji_title {
	margin-top: 20rpx;
}
.index_ls_ziao_list text {
	display: inline-block;
	line-height: 64rpx;
	height: 64rpx;
	background-color: #ffffff;
	border-radius: 10px;
	margin-right: 4%;
	margin-bottom: 18rpx;
	width: 22%;
	text-align: center;
}
.index_ls_ziao_list text:nth-child(4n) {
	margin-right: 0;
}
.index_ls_ziao_dengji {
	/* margin-bottom: 30rpx; */
}
.ls_shouqi {
	background-color: #effffa !important;
}
</style>
