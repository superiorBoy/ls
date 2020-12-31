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
					<view class="hui_26 techang" >
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
				<navigator :url="'ls_zhuye_index?lawyerid='+lawyerid" class="ls_tab_item ">首页</navigator>
				<navigator :url="'ls_zhuye?lawyerid='+lawyerid" class="ls_tab_item ">律师服务</navigator>
                <navigator :url="'ls_xinxi?lawyerid='+lawyerid" class="ls_tab_item ls_tab_item_active">律师信息</navigator>
				<navigator :url="'ls_anli?lawyerid='+lawyerid" class="ls_tab_item ">律师案例</navigator>
				<!-- <view :class="['ls_tab_item', index == active ? 'ls_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="qiehuan(index)">{{ tab }}</view> -->
			</view>

			<view class="fuwu_body" v-if="ls_xinxi!=''">
				<view class="jianjie hei_26">
					<view class="jianjie_title hei_28_bold">律师简介：</view>
					<view  :class="['jianjie_body',is_shou?'':'max_height']">
	                        {{lvshi.miaoshu}}
					</view>
					<view class="more lv_26" @click="shou">
						{{is_shou?'收起全部':'展开全部'}}
						<image src="@/static/img/jianjie_more.png" mode=""></image>
					</view>
				</view>
				<view class="jiben_xixin" >
					<view class=" xixin_title hei_28_bold">基本信息</view>
					<view class="jiben_xixin_list hei_26">
						执业律所
						<view class="jiben_xixin_list_right hui_26">{{lvshi.lvsuo}}</view>
					</view>
					<!-- <view class="jiben_xixin_list hei_26">
						律所规模
						<view class="jiben_xixin_list_right hui_26">本地大所</view>
					</view> -->
					<view class="jiben_xixin_list hei_26" >
						职&ensp;&ensp;&ensp;&ensp;务
						<view class="jiben_xixin_list_right hui_26">{{ls_xinxi.lawyerauth.zhiwu}}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						执业证号
						<view class="jiben_xixin_list_right hui_26">{{ls_xinxi.lawyerauth.zhiye}}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						执业年份
						<view class="jiben_xixin_list_right hui_26">{{ls_xinxi.lawyerauth.zhiyenianfen}}年</view>
					</view>
<!-- 					<view class="jiben_xixin_list hei_26">
						团队描述
						<view class="jiben_xixin_list_right hui_26">-</view>
					</view> -->
				</view>
	        <view class="lianxi" >
					<view class=" xixin_title hei_28_bold">联系方式</view>
					<view class="jiben_xixin_list hei_26">
						联系电话：
						<view class="lianxi_right hui_26">{{ls_xinxi.lawyer.mobile}}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						微&ensp;&ensp;&ensp;&ensp;信：
						<view class="lianxi_right hui_26">{{ls_xinxi.lawyer.weixin}}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						邮&ensp;&ensp;&ensp;&ensp;箱：
						<view class="lianxi_right hui_26">{{ls_xinxi.lawyer.email}}</view>
					</view>
					<view class="jiben_xixin_list hei_26">
						联系地址：
						<view class="lianxi_right hui_26">{{ls_xinxi.lawyer.address}}</view>
					</view>
					<view class="ditu">
						<map style="width:100%;height:366rpx;" :latitude="latitude":longitude="longitude" :scale='scale' ></map>
					</view>
				</view>
				<view class="jiaoyu" v-if="ls_xinxi.lawyerinfos[1]">
						<view class=" xixin_title hei_28_bold">教育背景</view>
						<view class="jiben_xixin_list hei_26">
							最高学历
							<view class="jiaoyu_right hui_26">硕士</view>
						</view>
						<view class="jiben_xixin_list hei_26">
							毕业院校
							<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyerinfos[1][0].school}}</view>
						</view>
						<view class="jiben_xixin_list hei_26">
							所学专业
							<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyerinfos[1][0].zhuanye}}</view>
						</view>
					</view>
					<view class="jiaoyu">
							<view class=" xixin_title hei_28_bold">更多资料</view>
							<view class="jiben_xixin_list hei_26">
								性别
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.sexid==1?'男':'女'}}性</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								年龄
								<view class="jiaoyu_right hui_26">{{nianling(ls_xinxi.lawyer.birthday)}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								民族
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.mingzu}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								属相
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.shuxiang}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								星座
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.xingzuo}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								故乡
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.hometown}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								家庭
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.jiating}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								语言
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.yuyan}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								政治派别
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.mianmao}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								政治职务
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.zzzhiwu}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								交通工具
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.vehicle}}</view>
							</view>
							<view class="jiben_xixin_list hei_26">
								兴趣爱好
								<view class="jiaoyu_right hui_26">{{ls_xinxi.lawyer.hobby}}</view>
							</view>
						</view>
						
						
						<view class="rongyu" v-if="ls_xinxi.lawyerinfos[3]">
							<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">荣誉奖励</view>
							<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[3]">
								<view class="rongyu_list_top hei_26_bold">
									{{item.zhuanye}}
								</view>
								<view class="qian_26 rongyu_time">
									颁奖时间：<text class="hui_26 rongyu_r">{{item.starttime}}</text>
								</view>
								<view class="qian_26">
									颁奖机构：<text class="hui_26 rongyu_r">{{item.zhuanye}}</text>
								</view>
							</view>
						</view>
						<view class="rongyu" v-if="ls_xinxi.lawyerinfos[2]">
							<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">社会职务</view>
							<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[2]">
								<view class="rongyu_list_top hei_26_bold">
									{{item.school}}
								</view>
								<view class="qian_26 rongyu_time">
									状态：<text class="hui_26 rongyu_r">{{item.zwstate==1?'曾任':'现任'}}</text>
								</view>
								<view class="qian_26">
									职务：<text class="hui_26 rongyu_r">{{item.zhuanye}}</text>
								</view>
							</view>
						</view>
						<view class="rongyu" v-if="ls_xinxi.lawyerinfos[4]">
							<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">媒体报道</view>
							<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[4]">
								<view class="rongyu_list_top hei_26_bold">
									{{item.zhuanye}}
								</view>
								<view class="qian_26 rongyu_time">
									报道时间：<text class="hui_26 rongyu_r">{{item.starttime}}</text>
								</view>
								<view class="qian_26">
									媒体名称：<text class="hui_26 rongyu_r">{{item.pintai}}</text>
								</view>
							</view>
						</view>
						<view class="rongyu" v-if="ls_xinxi.lawyerinfos[5]">
							<view class=" xixin_title hei_28_bold" style="padding-left: 30rpx;">学术成果</view>
							<view class="rongyu_list" v-for="item in ls_xinxi.lawyerinfos[5]">
								<view class="rongyu_list_top hei_26_bold">
									{{item.zhuanye}}
								</view>
								<view class="qian_26 rongyu_time">
									成果类型：<text class="hui_26 rongyu_r">{{item.leixing}}</text>
								</view>
								<view class="qian_26">
									发表时间：<text class="hui_26 rongyu_r">{{item.starttime}}</text>
								</view>
								<view class="qian_26">
									文章链接：<text class="lv_26 rongyu_r">{{item.lianjie}}</text>
								</view>
								<view class="qian_26">
									发表平台：<text class="hui_26 rongyu_r">{{item.pintai}}</text>
								</view>
							</view>
						</view>
						
						
						
						
						
				<view class="zhanwei2" style="height: 120rpx;"></view>
				<view class="bottom">
					<view class="bottom_fenxiang">
						<image src="@/static/img/share.png" mode=""></image>
						<view class="hui_26">分享</view>
					</view>
					<view class="bottom_pingjia" @click="go_dianping()">
						<image src="@/static/img/go_pingjia.png" mode=""></image>
						<view class="hui_26">评价</view>
					</view>
					<view class="dianhua lv_26">
						<image src="@/static/img/dianhua_lv.png" mode=""></image>
						电话咨询
					</view>
					<view class="zaixian bai_26" @click="tochat(lvshi.userid,lvshi.mobile)">
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
			　latitude:30.265183729389186,  
			  longitude: 120.21162050135804,
			  scale:13,
			  is_shou:false,
			  lawyerid:'',
			  lvshi:'',
			  zhuanchang_arry:'',
			  img_url: uni.getStorageSync('img_url'),
			  ls_xinxi:'',
			  xueli_type:''
		};
	},
	created() {},
	onLoad(option) {
		this.lawyerid=option.lawyerid	
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huoqu_lvshi()
			});
			
		
			this.huoqu_xinxi()
			// this.huiqu_xueli()
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		shou(){
			this.is_shou=!this.is_shou
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
						console.log(res.data.lawyer)
					}
				});	
		},
		// 获取信息
		huoqu_xinxi(){
			this.$http
				.post({
					url: '/mapi/lawyer/xinxi',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.ls_xinxi=res.data
					}
				});	
		},
		huiqu_xueli(){
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/lawyerinfo'
				})
				.then(res => {
					if (res.code == 0) {
						this.xueli_type=res.data
					}
				});	
		},
		nianling(birthday){
			     // 获得今天的时间
			            var date = new Date();
			            
			//            alert(birthday);
			            var startDate = new Date(birthday);
			            var newDate = date.getTime() - startDate.getTime();
			  
			            var age = Math.floor(newDate / 1000 / 60 / 60 / 24 /365);
			            if (isNaN(age)){
			                age = "";
			            }
						return age
			            
		},
		tochat(id,mobile) {
			uni.navigateTo({
				url: 'zaixian_wen?user=' + id+'&mobile='+mobile
			});
		},
		go_dianping(){
			uni.navigateTo({
				url:'pingjia?lsid='+this.lawyerid
			})
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
	padding: 0 30rpx;
	height: 100rpx;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
.bottom_fenxiang,
.bottom_pingjia {
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
	width: 270rpx;
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
	width: 270rpx;
	height: 74rpx;
	background-color: #0eb77e;
	display: flex;
	align-items: center;
	justify-content: center;
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
.jianjie_body{
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
.jiben_xixin,.lianxi {
	padding: 0 0rpx 0 30rpx;
	border-bottom: 2rpx solid #F7F7F7;
}
.jiben_xixin_list {
	display: flex;
	padding: 0 22rpx;
	margin-bottom: 20rpx;
}
.jiben_xixin_list_right {
	margin-left:  85rpx;
}
.lianxi_right{
	max-width: 77%;
	margin-left: 25rpx;
}
.jiaoyu{
	padding: 0 0  0 30rpx;
	border-bottom: 2rpx solid #F7F7F7;
}
.jiaoyu_right{
	max-width: 70%;
	margin-left: 60rpx;
}
.ditu{
	padding:0 56rpx 0 20rpx ;
	margin-bottom: 40rpx;
}
.rongyu{
	
}
.rongyu_list{
	padding: 17rpx 30rpx 20rpx 50rpx;
	position: relative;
	border-bottom: 2rpx solid #F7F7F7;
}

.rongyu_list::before{
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

.rongyu_list_top{
	line-height: 40rpx;
}
.rongyu_list_top text{
	display: inline-block;
	
}
.rongyu_list view{
	display: flex;
	align-items: flex-start;
}
.rongyu_time{
	margin: 20rpx 0;
	}
	.rongyu_r{
		display: inline-block;
		max-width: 80%;
		}
		.max_height{
			max-height: 120rpx;
			overflow: hidden;
		}
</style>
