<template>
	<view class="">
		<view class="head">
			<view class="head_back" style="width: 10%;"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center " style="width: 80%;">
				<view class="hei_38_bold top_title" @click="go_zhuye()">{{ title }}</view>
				<view class="hong_20 chat_lvsuo">剩余咨询时间:{{ day }}天{{ hour }}:{{ minute }}:{{ seconds }}</view>
			</view>
			<view class=" head_right hei_30_bold" style="width: 10%;"></view>
		</view>

		<view class="zi_body">
			<!-- <view class="send_xuanze hei_26">
				<view>描述完之后，选择一下您方便的咨询的方式：</view>
				<view class="hong_26">【在线咨询-可看记录】</view>
				<view class="hong_26">【电话咨询-时时对话】</view>
			</view> -->

			<!-- 价格 -->
			<!-- <view class="send_jia_html">
				<view class="send_jia_top">
					<image src="../../static/lsimg/tx.png" mode=""></image>
					<view class="send_jia_top_r hui_20">
						<view class="hui_24">
							马俊哲律师
							<text class="qian_20 send_jia_top_zhiwei">高级合伙人</text>
						</view>
						<view class="send_jia_top_r_dizhi">
							<image src="@/static/img/chat_dizhi.png" mode=""></image>
							浙江-杭州-江干区
						</view>
						<view class="send_jia_lvsuo">
							<image src="@/static/img/chat_lvsuo.png" mode=""></image>
							北京京师(杭州)律师事务所
						</view>
					</view>
				</view>
				<view class="send_jia_shangchang hei_24">
					擅长:
					<text>劳动工伤</text>
					<text>刑事辩护</text>
					<text>婚姻家庭</text>
				</view>
				<view class="send_jia_bottom style_hei_14">
					<view class="hong_24">
						￥
						<text class="hong_24">68.00</text>
						/1小时
					</view>
					<button type="button" class="bai_24">立即购买</button>
				</view>
			</view> -->

			<!-- 付款成功 -->
			<!-- <view class="send_fukuan_success">
				<view class="lv_24_bold send_fukuan_title">
					<image src="@/static/img/chat_duihao.png" mode=""></image>
					付款成功
				</view>
				<view class="end_pay_leixing hei_24">
					电话咨询
					<view class="hong_24">&ensp;￥98.00/20分钟</view>
				</view>
				<view class="send_pay_ls">
					<image src="@/static/lsimg/tx.png" mode=""></image>
					<view class="send_pay_ls_riht">
						<view class="hui_24">马俊哲律师</view>
						<view class="qian_20 send_pay_ls_zhiwu">高级合伙人</view>
					</view>
				</view>
			</view> -->

			<view class="chat_jiage_wai">
				<!-- <view class="chat_jiage">
					<view class="chat_jiage_item chat_jiage_item1">
						<view class="bai_28">在线图文咨询</view>
						<view class="bai_20 chat_jiage_num">
							<text class="bai_30">{{ chat_xinxi.chatprice == 0 ? '未报价' : chat_xinxi.chatprice }}</text>
							<text v-if="chat_xinxi.chatprice != 0">元/小时</text>
						</view>
						<button type="" v-if="chat_xinxi.chatprice != 0" @click="fufei(1)">立即咨询</button>
						<button type="" v-if="chat_xinxi.chatprice == 0">未开启</button>
					</view>
					<view class="chat_jiage_item chat_jiage_item2">
						<view class="bai_28">付费电话咨询</view>
						<view class="bai_20 chat_jiage_num">
							<text class="bai_30">{{ chat_xinxi.phoneprice == 0 ? '未报价' : chat_xinxi.phoneprice }}</text>

							<text v-if="chat_xinxi.phoneprice != 0">元/20分钟</text>
						</view>
						<button type="" @click="go_zixun(2)" v-if="chat_xinxi.phoneprice != 0">付费咨询</button>
						<button type="" v-if="chat_xinxi.phoneprice == 0">未开启</button>
					</view>
					<view class="chat_jiage_item chat_jiage_item3">
						<view class="bai_28">免费拨打电话</view>
						<view class="bai_20 xianshi_dianhua">{{ dian_num }}</view>
						<button type="" @click="xianshi()">点击查看</button>
					</view>
				</view> -->

				<view class="chat_top chat_jiage">
					<view class="chat_top_top">
						<view class="chat_top_left">
							<view class="chat_top_left_tx" @click="go_zhuye()">
								<image :src="img_url + ls_xinxi.photourl" mode="" class="chat_top_left_tx_img"></image>
								<image src="@/static/img/renzheng2.png" mode="" class="chat_top_left_tx_ren"></image>
							</view>
						</view>
						<view class="chat_top_right">
							<view class="chat_top_right_top">
								<view class="chat_top_xinxi_item">
									<view class="hei_22 chat_top_xinxi_item_num">{{ xinxi.zhiyenianfen }}</view>
									<view class="qian_22">执业年限</view>
								</view>
								<view class="chat_top_xinxi_item">
									<view class="hei_22 chat_top_xinxi_item_num">{{ ls_xinxi.replynum }}</view>
									<view class="qian_22">咨询人数</view>
								</view>
								<view class="chat_top_xinxi_item">
									<view class="hei_22 chat_top_xinxi_item_num">{{ ls_xinxi.pingfen }}</view>
									<view class="qian_22">综合评分</view>
								</view>
							</view>
						</view>
					</view>

					<view class="chat_top_bottom lv_24">
						<view class="chat_top_jia" @click="go_zhuye()">在线咨询{{ ls_xinxi.chatprice }}元/天</view>
						<view class="chat_top_jia" @click="go_zhuye()">电话咨询{{ ls_xinxi.phoneprice }}元/20分钟</view>
					</view>
				</view>
			</view>
			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="tan_hide()">
				<view class="time qian_20" v-if="message != ''">{{ message[0].addtime | timeStamp }}</view>
				<view v-for="(item, index) in message">
					<view class="time qian_20" v-if="index > 1 && message[index].addtime - message[index - 1].addtime > 300">{{ message[index].addtime | timeStamp }}</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->

							<u-parse :content="replace_em(item.content)"></u-parse>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 2">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<image :src="img_url + item.content" mode="widthFix" style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 3">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ ls_xinxi.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ xinxi.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ ls_xinxi.province }}-{{ ls_xinxi.city }}-{{ ls_xinxi.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ ls_xinxi.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[ls_xinxi.expertise1] && zhuanchang_arry[ls_xinxi.expertise1].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise2] && zhuanchang_arry[ls_xinxi.expertise2].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise3] && zhuanchang_arry[ls_xinxi.expertise3].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view class="hei_24">
										<text>电话咨询</text>
										<text class="hong_24">￥{{ ls_xinxi.phoneprice }}/20分钟</text>
									</view>
									<button type="button" class="bai_24" @click="dh_pay(ls_xinxi.phoneprice, '20分钟')">立即购买</button>
								</view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 4">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ ls_xinxi.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ xinxi.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ ls_xinxi.province }}-{{ ls_xinxi.city }}-{{ ls_xinxi.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ ls_xinxi.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[ls_xinxi.expertise1] && zhuanchang_arry[ls_xinxi.expertise1].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise2] && zhuanchang_arry[ls_xinxi.expertise2].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise3] && zhuanchang_arry[ls_xinxi.expertise3].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view class="hei_24">
										<text>在线咨询</text>
										<text class="hong_24">￥{{ ls_xinxi.chatprice }}/天</text>
									</view>
									<button type="button" class="bai_24" @click="zaixian_pay(ls_xinxi.chatprice, '1天')">立即购买</button>
								</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 5">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
								<view class="">您好：遇到什么问题了，请先详细描述一下事情经过，我好根据您的情况解答！</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view>
								<view class="hong_26" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 6">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_24_bold send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="end_pay_leixing hei_24">
									电话咨询
									<view class="hong_24">&ensp;￥{{ ls_xinxi.phoneprice }}/20分钟</view>
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="hui_24">{{ ls_xinxi.nickname }}律师</view>
										<view class="qian_20 send_pay_ls_zhiwu">{{ xinxi.zhiwu }}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 7">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_24_bold send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="end_pay_leixing hei_24">
									在线咨询
									<view class="hong_24">&ensp;￥{{ ls_xinxi.chatprice }}/天</view>
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="hui_24">{{ ls_xinxi.nickname }}律师</view>
										<view class="qian_20 send_pay_ls_zhiwu">{{ xinxi.zhiwu }}</view>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == ls_id && item.msgtype == 8">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
								<view>您的服务已到期，请重新订购服务</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view>
								<view class="hong_26" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.msgtype == 9">
						<image src="@/static/img/xitong.png" mode="" class="tx"></image>
						<view class="" style="display: none;">{{ item }}</view>

						<view class="chat_left_txt hei_30">
							<view class="hei_24 huan_ls_tishi">系统提示：由于律师超时未接单，已安排新的律师给您服务。</view>
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + item.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ item.nickname }}律师
											<!-- <text class="qian_20 send_jia_top_zhiwei">{{xinxi.zhiwu}}</text> -->
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ item.province }}-{{ item.city }}-{{ item.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ item.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
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
								<view class="huan_ls style_hei_14"><button type="" class="bai_24" @click="go_chat(item.userid)">点击进入</button></view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 1">
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<u-parse :content="replace_em(item.content)"></u-parse>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 2">
						<view class="chat_right_txt hei_30">
							<image :src="img_url + item.content" mode="widthFix" style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 3">
						<view class="chat_right_txt hei_30">
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ ls_xinxi.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ xinxi.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ ls_xinxi.province }}-{{ ls_xinxi.city }}-{{ ls_xinxi.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ ls_xinxi.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[ls_xinxi.expertise1] && zhuanchang_arry[ls_xinxi.expertise1].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise2] && zhuanchang_arry[ls_xinxi.expertise2].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise3] && zhuanchang_arry[ls_xinxi.expertise3].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view class="hei_24">
										<text>电话咨询</text>
										<text class="hong_24">￥{{ ls_xinxi.phoneprice }}/20分钟</text>
									</view>
									<button type="button" class="bai_24" @click="dh_pay(ls_xinxi.phoneprice, '20分钟')">立即购买</button>
								</view>
							</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 4">
						<view class="chat_right_txt hei_30">
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ ls_xinxi.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ xinxi.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ ls_xinxi.province }}-{{ ls_xinxi.city }}-{{ ls_xinxi.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ ls_xinxi.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[ls_xinxi.expertise1] && zhuanchang_arry[ls_xinxi.expertise1].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise2] && zhuanchang_arry[ls_xinxi.expertise2].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[ls_xinxi.expertise3] && zhuanchang_arry[ls_xinxi.expertise3].shanchangname">
										{{ zhuanchang_arry[ls_xinxi.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view class="hei_24">
										<text>在线咨询</text>
										<text class="hong_24">￥{{ ls_xinxi.chatprice }}/天</text>
									</view>
									<button type="button" class="bai_24" @click="zaixian_pay(ls_xinxi.chatprice, '1天')">立即购买</button>
								</view>
							</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 5">
						<view class="chat_right_txt hei_30">
							<view class="send_xuanze hei_26">
								<view class="">您好：遇到什么问题了，请先详细描述一下事情经过，我好根据您的情况解答！</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view>
								<view class="hong_26" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<!-- <view class="chat_list chat_right" v-if="item.userid_from != ls_id&&item.msgtype == 5">
					<view class="chat_right_txt hei_30">
						<view class="send_xuanze hei_26">
							<view>描述完之后，选择一下您方便的咨询的方式：</view>
							<view class="hong_26" @click="send_zaixian()">【在线咨询-可看记录】</view>
							<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
						</view>
						
					</view>
					<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
				</view> -->
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 6">
						<view class="chat_right_txt hei_30">
							<view class="send_fukuan_success">
								<view class="lv_24_bold send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="end_pay_leixing hei_24">
									电话咨询
									<view class="hong_24">&ensp;￥{{ ls_xinxi.phoneprice }}/20分钟</view>
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="hui_24">{{ ls_xinxi.nickname }}律师</view>
										<view class="qian_20 send_pay_ls_zhiwu">{{ xinxi.zhiwu }}</view>
									</view>
								</view>
							</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != ls_id && item.msgtype == 7">
						<view class="chat_right_txt hei_30">
							<view class="send_fukuan_success">
								<view class="lv_24_bold send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="end_pay_leixing hei_24">
									在线咨询
									<view class="hong_24">&ensp;￥{{ ls_xinxi.chatprice }}/天</view>
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + ls_xinxi.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="hui_24">{{ ls_xinxi.nickname }}律师</view>
										<view class="qian_20 send_pay_ls_zhiwu">{{ xinxi.zhiwu }}</view>
									</view>
								</view>
							</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
				</view>

				<!-- 	<view class="chat_list chat_left">
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
					<view class="chat_left_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
				</view>
				<view class="chat_list chat_right">
					<view class="chat_right_txt hei_30">
						就是读书期间，在外面打架被判刑了可以保出来的?
					</view>
					<image src="@/static/lsimg/yh_tx.png" mode="" class="tx"></image>
				</view> -->
				<view class="aaaaaa"></view>
			</view>

			<view class="zhanwei" v-if="isShowEmj"></view>
			<view class="chat_bottom">
				<view class="chat_bottom_top">
					<!-- <image src="@/static/lsimg/chat_yuyin.png" mode=""></image> -->
					<image src="@/static/lsimg/chat_biaoqing.png" mode="" @tap="showEmj"></image>
					<input type="text" value="" v-model="chat_txt" confirm-type="send" @confirm="send" class="hei_26" @focus="huojiao" />
					<image src="@/static/lsimg/chat_jia.png" mode="" @click="jia"></image>
					<text class="fasong" @click="send()">发送</text>
				</view>
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="chat_bottom_bottom hui_26" v-if="bt_show">
					<view class="chat_bt_item" @click="up_img">
						<image src="@/static/lsimg/chat_tupian.png" mode=""></image>
						<view>发送图片</view>
					</view>
					<view class="chat_bt_item" @click="call">
						<image src="@/static/lsimg/chat_dianhua.png" mode=""></image>
						<view>电话咨询</view>
					</view>
					<view class="chat_bt_item" @click="dianzan">
						<image src="@/static/img/chat_zan.png" mode=""></image>
						<view>点赞回复</view>
					</view>
					<view class="chat_bt_item" @click="pingjia">
						<image src="@/static/img/chat_pingjia.png" mode=""></image>
						<view>评价律师</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bg" v-if="is_new">
			<view class="tan_chaoshi">
				<view class="tan_chaoshi_tishi">
					<view class="">由于律师超时未接单</view>
					<view class="">已安排新的律师给您服务</view>
					<button type="" class="bai_30" @click="go_chat(chaoshi_item[0].userid)">点击进入</button>
				</view>
				<image src="@/static/img/guanbi.png" mode="" class="guanbi" style="width: 50rpx;height: 50rpx;" @click="guanbi"></image>
			</view>
		</view>
	</view>
</template>

<script>
import emotion from '@/components/bkhumor-emoji/index.vue';
import uParse from '@/components/feng-parse/parse.vue';
import socket from 'plus-websocket';
export default {
	created() {},
	components: {
		emotion,
		uParse
	},
	onLoad(option) {
		this.ls_id = option.lawyerid;
		this.huoqu_xiaoxi_list();
		this.huqu_zhiwu();
		// 获取用户信息
		this.$http
			.post({
				url: '/mapi/user/user'
			})
			.then(res => {
				this.user = res.data.user;
			});
		this.$http
			.post({
				url: '/mapi/lawyer/getshanchang'
			})
			.then(res => {
				this.zhuanchang_arry = res.data.shanchang;
				this.huqu_ls_xinxi();
			});

		// #ifdef H5
		this.connectSocketInit();
		// #endif
		// 进入这个页面的时候创建websocket连接【整个页面随时使用】
		// this.connectSocketInit();
		// #ifdef APP-PLUS

		this.app_lianjie();
		// #endif
	},
	onShow() {},
	onHide() {},
	onUnload() {
		console.log('onUnload');
		this.time1 = '0';
		// #ifdef APP-PLUS
		// socket.closeSocket();
		// #endif
	},
	data() {
		return {
			title: '',
			user: '',
			bt_show: false,
			url: '../../static/bkhumor-emoji/',
			img: '11.gif',
			chat_txt: '',
			changyong: '',
			changyong_arry: ['你好,有什么可以帮助到您？', '客服的上班时间是早晨八点到晚上八点', '好的，有什么事情可以找客服帮您疑难解答'],
			isShowEmj: false,
			id: '100004',
			img_url: uni.getStorageSync('img_url'),
			message: [],
			page: 0,
			is_all: false,
			ls_id: '',
			dianhua: '',
			chat_xinxi: '',
			dian_num: '点击显示号码',
			ls_xinxi: '',
			is_fa: false,
			socketTask: null,
			// 确保websocket是打开状态
			is_open_socket: false,
			zhuanchang_arry: '',
			xinxi: '',
			day: 0,
			hour: '00',
			minute: '00',
			seconds: '00',
			time1: '0',
			chaoshi_item: '',
			new_ls: '',
			is_new: false
		};
	},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();

		setTimeout(function() {
			uni.showToast({
				title: '没有更多内容了',
				duration: 2000,
				icon: 'none'
			});
			uni.stopPullDownRefresh();
		}, 1000);
	},
	// stopPullDownRefresh:function(){
	// },
	methods: {
		//上拉加载
		onReachBottom() {
			// uni.showToast({
			// 	title: '没有更多内容了',
			// 	duration: 2000,
			// 	icon: "none"
			// });
		},
		navigateBack() {
			uni.navigateBack();
		},
		send_zaixian() {
			var that = this;
			this.$http
				.post({
					url: '/push/gatewayworker/sendzixun.html',
					data: {
						userid_to: this.ls_id,
						msg: '[在线咨询]',
						type: 4
					}
				})
				.then(res => {
					if (res.code == 0) {
						var data = {
							content: '4',
							msgtype: 4,
							userid_from: that.ls_id,
							photourl_form: this.chat_xinxi.photourl
						};
						that.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},

		send_dianhua() {
			var that = this;
			this.$http
				.post({
					url: '/push/gatewayworker/sendzixun.html',
					data: {
						userid_to: this.ls_id,
						msg: '[电话咨询]',
						type: 3
					}
				})
				.then(res => {
					if (res.code == 0) {
						var data = {
							content: '3',
							msgtype: 3,
							photourl_form: this.chat_xinxi.photourl,
							userid_from: that.ls_id
						};
						that.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		go_zhuye() {
			uni.navigateTo({
				url: 'ls_zhuye?lawyerid=' + this.ls_id
			});
		},
		zaixian_pay(price, time) {
			uni.navigateTo({
				url: 'pay?type=1&lawyerid=' + this.ls_id + '&time=' + time + '&pay_money=' + price
			});
		},
		dh_pay(price, time) {
			url: 'pay?type=2&lawyerid=' + this.ls_id + '&time=' + time + '&pay_money=' + price;
		},
		huoqu_xiaoxi_list() {
			var that = this;
			this.$http
				.post({
					url: '/mapi/consult/chatdeatils',
					data: {
						page: this.page,
						userid: this.ls_id
					}
				})
				.then(res => {
					this.title = res.data.user_to.nickname;
					this.dianhua = res.data.user_to.mobile;
					this.chat_xinxi = res.data.user_to;
					if (res.data.overtime.length > 0) {
						this.chaoshi_item = res.data.overtime;
						this.is_new = true;
					}

					for (let key in res.data.message) {
						if (res.data.message[key].msgtype == 9) {
							console.log(key);
							this.$http
								.post({
									url: '/mapi/lawyer/lawyer',
									data: {
										lawyerid: res.data.message[key].userid
									}
								})
								.then(ress => {
									// console.log(ress.data.lawyer, res.data.message[key]);
									// res.data.message[key-1].city = ress.data.lawyer.city;
									// res.data.message[key-1].province = ress.data.lawyer.province;
									// res.data.message[key-1].area = ress.data.lawyer.area;
									// res.data.message[key-1].photourl = ress.data.lawyer.photourl;
									// res.data.message[key-1].lvsuo = ress.data.lawyer.lvsuo;
									// res.data.message[key-1].nickname = ress.data.lawyer.nickname;
									// res.data.message[key-1].expertise1 = ress.data.lawyer.expertise1;
									// res.data.message[key-1].expertise2 = ress.data.lawyer.expertise2;
									// res.data.message[key-1].expertise3 = ress.data.lawyer.expertise3;
									res.data.message[key] = Object.assign(res.data.message[key], ress.data.lawyer);
								});
						}
					}

					// console.log(res.data.message);
					this.message = res.data.message;

					setTimeout(() => {
						uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
					}, 200);

					that.time1 = res.data.shijian;

					// 倒计时
					var interval = setInterval(function() {
						var to = new Date(that.time1.replace(/-/g, '/'));
						var now = new Date();
						var time = to.getTime() - now.getTime();

						if (time < 0) {
							clearInterval(interval);
						} else {
							var day = parseInt(time / 1000 / 60 / 60 / 24);
							var hour = parseInt((time / 1000 / 60 / 60) % 24);
							var minute = parseInt((time / 1000 / 60) % 60);
							var seconds = parseInt((time / 1000) % 60);
							if (minute <= 9) minute = '0' + minute;
							if (seconds <= 9) seconds = '0' + seconds;

							that.day = day;
							that.hour = hour;
							that.minute = minute;
							that.seconds = seconds;
						}
					}, 1000);
				});
		},
		huojiao() {
			setTimeout(() => {
				uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
			}, 100);
		},
		app_lianjie() {
			let that = this;
			Object.assign(uni, socket);
			// console.log(Object.assign(uni, socket));
			var url = that.$http.WebSocket_url;

			socket.connectSocket({
				url: 'wss://' + url + ':3348',
				success(data) {
					console.log(url);
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

					// that.$http
					// 	.post({
					// 		url: '/push/gatewayworker/bind',
					// 		data: {
					// 			client_id: data.client_id
					// 		}
					// 	})
					// 	.then(res => {
					// 		console.log(res, 'bind');
					// 	});
				} else if (data.type == 'say') {
					console.log('say');
					if (data.state) {
						if (data.state == 9) {
							if (data.userid) {
								this.$http
									.post({
										url: '/mapi/lawyer/lawyer',
										data: {
											lawyerid: data.userid
										}
									})
									.then(ress => {
										var xiaoxi = {
											photourl_form: data.userid_from_pic,
											userid_to: data.userid_to,
											photourl_to: data.userid_to_pic,
											content: data.msg,
											msgtype: data.state,
											userid_from: that.ls_id,
											city: ress.data.lawyer.city,
											province: ress.data.lawyer.province,
											area: ress.data.lawyer.area,
											photourl: ress.data.lawyer.photourl,
											lvsuo: ress.data.lawyer.lvsuo,
											nickname: ress.data.lawyer.nickname,
											expertise1: ress.data.lawyer.expertise1,
											expertise2: ress.data.lawyer.expertise2,
											expertise3: ress.data.lawyer.expertise3
										};
										that.message.push(xiaoxi);
									});
							}
						} else {
							var xiaoxi = {
								photourl_form: data.userid_from_pic,
								userid_to: data.userid_to,
								photourl_to: data.userid_to_pic,
								content: data.msg,
								msgtype: data.state,
								userid_from: that.ls_id
							};
							that.message.push(xiaoxi);
						}

						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
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

		dianzan() {
			uni.showToast({
				title: '点赞成功',
				duration: 2000
			});
		},
		go_chat(lawyerid) {
			uni.redirectTo({
				url: 'chat?lawyerid=' + lawyerid
			});
		},
		huaqu_new_ls(lawyerid) {
			// alert('777')
			// this.$http
			// 		.post({
			// 			url: '/mapi/lawyer/lawyer',
			// 			data: {
			// 				lawyerid: lawyerid
			// 			}
			// 		})
			// 		.then(res => {
			// 			this.new_ls=res.data.lawyer
			// 		});
		},
		huqu_ls_xinxi() {
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid: this.ls_id
					}
				})
				.then(res => {
					this.ls_xinxi = res.data.lawyer;
				});
		},
		huqu_zhiwu() {
			this.$http
				.post({
					url: '/mapi/lawyer/xinxi',
					data: {
						lawyerid: this.ls_id
					}
				})
				.then(res => {
					this.xinxi = res.data.lawyer;
				});
		},
		replace_em(str) {
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			return str;
		},
		handleEmj(i) {
			console.log(i);
			if (i == '[em_98]') {
				//匹配最后一个表情符号并删除。
				this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');
			} else {
				this.chat_txt += i;
			}
		},
		showEmj() {
			let bool = !this.isShowEmj;
			if (bool) {
				this.emojiIcon = 'cuIcon-keyboard';
				this.bt_show = false;
			} else {
				this.emojiIcon = 'cuIcon-emoji';
			}

			this.isShowEmj = bool;
			this.$emit('show');
		},

		jia() {
			this.bt_show = !this.bt_show;
			this.isShowEmj = false;
		},
		// input_change(){
		// 	if(this.chat_txt==''){
		// 		this.is_fa=false
		// 	}else{
		// 		this.is_fa=true
		// 	}

		// },
		up_img() {
			var that = this;
			uni.chooseImage({
				success(res) {
					console.log(res);
					// that.zhiye_zhao = res.tempFilePaths[0];
					// that.urlTobase64(res.tempFilePaths[0])
					//#ifdef H5
					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示的哦
							console.log(base64);

							that.$http
								.post({
									url: '/index/zixun/uploadimgmessage',
									data: {
										img: base64
									}
								})
								.then(res => {
									console.log(res, '888');
									if (res.code == 0) {
										that.send_img(res.data.img);
									}
								});
						}
					});

					//#endif

					//#ifdef APP-PLUS
					let path = that.getLocalFilePath(res.tempFilePaths[0]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										that.$http
											.post({
												url: '/index/zixun/uploadimgmessage',
												data: {
													img: data.target.result
												}
											})
											.then(res => {
												if (res.code == 0) {
													that.send_img(res.data.img);
												}
											});
									};
									fileReader.onerror = function(error) {
										console.log(error);
									};
									fileReader.readAsDataURL(file);
								},
								function(error) {
									console.log(error);
								}
							);
						},
						function(error) {
							console.log(error);
						}
					);

					//#endif
				}
			});
		},
		getLocalFilePath(path) {
			if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
				return path;
			}
			if (path.indexOf('file://') === 0) {
				return path;
			}
			if (path.indexOf('/storage/emulated/0/') === 0) {
				return path;
			}
			if (path.indexOf('/') === 0) {
				var localFilePath = plus.io.convertAbsoluteFileSystem(path);
				if (localFilePath !== path) {
					return localFilePath;
				} else {
					path = path.substr(1);
				}
			}
			return '_www/' + path;
		},
		send_img(img) {
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage.html',
					data: {
						userid_to: this.ls_id,
						msg: img,
						type: 2
					}
				})
				.then(res => {
					if (res.code == 0) {
						var data = {
							content: img,
							msgtype: 2,
							photourl_form: this.user.photourl
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		send() {
			console.log(this.chat_txt);
			var txt = this.replace_em(this.chat_txt);
			if (txt == '') {
				uni.showToast({
					title: '请输入内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage.html',
					data: {
						userid_to: this.ls_id,
						msg: this.chat_txt,
						type: 1
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						var data = {
							content: txt,
							msgtype: 1,
							photourl_form: this.user.photourl
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});

			// this.chat_txt=''
		},
		call() {
			uni.makePhoneCall({
				phoneNumber: this.dianhua + '',
				success: res => {
					console.log('调用成功!');
				},
				fail: res => {
					console.log(res);
					console.log('调用失败!');
				}
			});
		},

		changyong_change(data) {
			this.changyong = this.changyong_arry[data.detail.value];
			console.log(this.changyong);
		},
		pingjia() {
			uni.navigateTo({
				url: 'pingjia?lawyerid=' + this.chat_xinxi.userid
			});
		},
		tan_hide() {
			this.isShowEmj = false;
			this.bt_show = false;
		},
		// 显示电话号码
		xianshi() {
			this.dian_num = this.dianhua;
		},
		// 去付费
		fufei(type) {
			uni.navigateTo({
				url: 'pay?lawyerid=' + this.ls_id + '&type=' + type
			});
		},
		go_zixun(type) {
			uni.navigateTo({
				url: 'pay?lawyerid=' + this.ls_id + '&type=' + type
			});
		},
		clickImg(img) {
			uni.previewImage({
				urls: ['' + img], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
				current: '', // 当前显示图片的http链接，默认是第一个
				success: function(res) {},
				fail: function(res) {},
				complete: function(res) {}
			});
		},
		connectSocketInit() {
			let that = this;
			var url = window.location.host;
			var ws = new WebSocket('wss://' + url + ':3348');
			ws.onopen = function(evt) {
				console.log('Connection open ...');
				// ws.send("你好");
			};
			ws.onmessage = function(evt) {
				console.log('Received Message: ' + evt.data);
				// json数据转换成js对象
				var data = JSON.parse(evt.data);

				if (data.type == 'init') {
					console.log('init');
					console.log('client_id', data.client_id);

					that.$http
						.post({
							url: '/push/gatewayworker/bind',
							data: {
								client_id: data.client_id
							}
						})
						.then(res => {
							console.log(res, 'bind');
						});
				} else if (data.type == 'say') {
					console.log('say');
					if (data.state) {
						if (data.state == 9) {
							this.$http
								.post({
									url: '/mapi/lawyer/lawyer',
									data: {
										lawyerid: data.userid
									}
								})
								.then(ress => {
									var xiaoxi = {
										photourl_form: data.userid_from_pic,
										userid_to: data.userid_to,
										photourl_to: data.userid_to_pic,
										content: data.msg,
										msgtype: data.state,
										userid_from: that.ls_id,
										city: ress.data.lawyer.city,
										province: ress.data.lawyer.province,
										area: ress.data.lawyer.area,
										photourl: ress.data.lawyer.photourl,
										lvsuo: ress.data.lawyer.lvsuo,
										nickname: ress.data.lawyer.nickname,
										expertise1: ress.data.lawyer.expertise1,
										expertise2: ress.data.lawyer.expertise2,
										expertise3: ress.data.lawyer.expertise3
									};
									that.message.push(xiaoxi);
								});
						} else {
							var xiaoxi = {
								photourl_form: data.userid_from_pic,
								userid_to: data.userid_to,
								photourl_to: data.userid_to_pic,
								content: data.msg,
								msgtype: data.state,
								userid_from: that.ls_id
							};
							that.message.push(xiaoxi);
						}

						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				} else {
					console.log('else');
				}
			};
			ws.onclose = function(evt) {
				console.log('Connection closed.');
			};
			ws.onerror = function(evt) {
				console.log('WebSocketError!', evt);
			};
		},
		guanbi() {
			this.is_new = false;
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
.head {
	padding-top: 10rpx;
	padding-bottom: 6rpx;
}
page {
	background-color: #f7f7f7;
	text-size-adjust: none;
}
.time {
	margin: 24rpx auto 40rpx;
	text-align: center;
	width: 300rpx;
	height: 28rpx;
	background-color: #f6f6f6;
	border-radius: 14rpx;
	text-align: center;
	line-height: 28rpx;
}

.chat_list {
	display: flex;
	align-items: flex-start;
	margin-bottom: 30rpx;
}

.chat_list .tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
}

.chat_left .tx {
	margin-right: 20rpx;
}
.chat_left {
	margin-bottom: 50rpx;
}
.chat_body {
	padding: 0 30rpx 116rpx;
	overflow: auto;
}

.chat_body_jia {
	padding-bottom: 354rpx;
}

.chat_left_txt {
	max-width: 470rpx;
	word-break: break-all;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	background-color: #ffffff;
	position: relative;
	/* top: 20rpx; */
}
.ls_name {
	position: absolute;
	top: -38rpx;
	display: inline-block;
	width: 400rpx;
	font-size: 20rpx;
	left: 0;
}
.chat_right_txt {
	max-width: 470rpx;
	/* border: solid 2rpx #d9d9d9; */
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
	background-color: #e6e6e6;
}

.chat_left_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	left: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/img/index_chat_l.png) no-repeat;
	background-size: 100% 100%;
}
.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}

.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	right: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/img/index_chat_r_new.png) no-repeat;
	background-size: 100% 100%;
}

.chat_right {
	justify-content: flex-end;
	display: flex;
}

.chat_right .tx {
	margin-left: 20rpx;
}

.chat_bottom_top image {
	width: 56rpx;
	height: 56rpx;
}

.chat_bottom_top {
	display: flex;
	align-items: center;
	height: 101rpx;
	background-color: #f7f7f7;
	border: solid 1rpx #d9d9d9;
	padding: 0 30rpx;
	justify-content: space-between;
}

.chat_bottom_top input {
	width: 438rpx;
	height: 76rpx;
	background-color: #ffffff;
	border-radius: 8rpx;
	border: solid 2rpx #d9d9d9 !important;
	padding-left: 10rpx;
	box-sizing: border-box;
}

.chat_bottom_bottom {
	background-color: #fafafa;
	display: flex;
	justify-content: space-between;
	padding: 40rpx 0;
}

.chat_bt_item {
	text-align: center;
	width: 33.33%;
}

.chat_bt_item image {
	width: 126rpx;
	height: 126rpx;
	background-color: #ffffff;
	border-radius: 30rpx;
}

.chat_bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.slider {
	width: 375;
	height: 128;
}
.slider-emoji {
	width: 375;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}
.slider-emoji-icon {
	width: 53%;
	text-align: center;
	padding: 10.5 0;
}
/* <!-- 设置最后一列左靠齐 --> */
.lastbox {
	justify-content: flex-start;
}
.zhanwei {
	height: 360rpx;
}
.chat_jiage_item {
	width: 217rpx;
	height: 210rpx;
	border-radius: 10rpx;
	text-align: center;
	padding: 24rpx 0;
	box-sizing: border-box;
}
.chat_jiage_item button {
	width: 157rpx;
	height: 50rpx;
	background-color: #ffffff;
	border-radius: 5rpx;
	font-size: 28rpx;
	line-height: 50rpx;
}
.chat_jiage_item1 {
	background: url(../../static/img/jia1.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item2 {
	background: url(../../static/img/jia2.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item3 {
	background: url(../../static/img/jia3.png) no-repeat;
	background-size: 100% 100%;
}
.chat_jiage_item1 button {
	color: #0eb77e;
}
.chat_jiage_item2 button {
	color: #bcb198;
}
.chat_jiage_item3 button {
	color: #ef995f;
}
button {
	padding: 0;
}
.chat_jiage {
	padding: 30rpx 30rpx;
	display: flex;
	align-content: center;
	justify-content: space-between;
	position: fixed;
	top: 92rpx;
	width: 100%;
	background-color: #ffffff;
	box-sizing: border-box;
	max-width: 750px;
}
.chat_jiage_num {
	margin: 18rpx 0 15rpx;
}
.xianshi_dianhua {
	margin: 20rpx 0 20rpx;
}
.chat_jiage_wai {
	height: 200rpx;
	position: relative;
	z-index: 99;
}

.top_title {
	margin-top: 0rpx;
}
.fasong {
	background-color: #07c160;
	color: #ffffff;
	border-radius: 10rpx;
	font-size: 30rpx;
	width: 98rpx;
	height: 74rpx;
	line-height: 74rpx;
	text-align: center;
	display: inline-block;
}

.chat_top_left_tx {
	width: 90rpx;
	height: 90rpx;
	position: relative;
	margin: 0 auto 8rpx;
}
.chat_top_left_zhiwu {
	/* margin-top: 4rpx; */
}
.chat_top_left_tx_img {
	border-radius: 100%;
	width: 100%;
	height: 100%;
}
.chat_top_left_tx_ren {
	width: 16rpx;
	height: 16rpx;
	background-color: #ffffff;
	position: absolute;
	bottom: 6rpx;
	right: 8rpx;
	border-radius: 100%;
	border: 2rpx solid #ffffff;
}
.chat_top_right_top_l {
	display: flex;
	padding-top: 13rpx;
	width: 280rpx;
	justify-content: space-between;
	padding: 13rpx 2rpx 0;
}
.chat_top_xinxi_item {
	width: 33.33%;
	text-align: center;
}
.chat_top_xinxi_item_num {
	margin-bottom: 12rpx;
	margin-top: 16rpx;
}
.chat_jia_pay {
	display: inline-block;
	background-color: #ffffff;
	border-radius: 6rpx;
	border: solid 1rpx #0eb77e;
	line-height: 26rpx;
	padding: 6rpx 10rpx;
}
.chat_top {
	background-color: #ffffff;
	padding: 0;
	display: block;
	border-top: 2rpx solid #d1d1d1;
}
.chat_top_top {
	display: flex;
	width: 100%;
}
.chat_top_left {
	width: 30%;
	text-align: center;
	padding: 13rpx 0 8rpx;
}
.chat_top_right {
	width: 70%;
}
.chat_top_right_top {
	display: flex;
	height: 110rpx;
}
.chat_top_bottom {
	display: flex;
	border-top: 2rpx solid #e6e6e6;
	height: 92rpx;
	align-items: center;
	padding: 0 30rpx;
	justify-content: space-between;
}
.chat_top_jia {
	width: 335rpx;
	height: 56rpx;
	background-color: #e6f8f2;
	border-radius: 3rpx;
	line-height: 56rpx;
	text-align: center;
}
.chat_top_jia_num {
	margin: 4rpx 0 14rpx;
}
.chat_top_jia_num text {
	margin-left: 4rpx;
}
.suoxiao {
	transform: scale(0.9);
	display: inline-block;
}
.suoxiao2 {
	transform: scale(0.8);
	display: inline-block;
}
.chat_lvsuo {
	transform: scale(0.9);
	position: relative;
	top: -4rpx;
}
.chat_top_right_bottom {
	border-top: 2rpx solid #e6e6e6;
	line-height: 70rpx;
	padding-left: 45rpx;
}
.chat_top_right_bottom text {
	margin-right: 20rpx;
}
.chat_yao {
	height: 94rpx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	padding-left: 30rpx;
}
.chat_yao text {
	height: 54rpx;
	background-color: #ffffff;
	border-radius: 27rpx;
	border: solid 2rpx #d2d2d2;
	line-height: 54rpx;
	padding: 0 35rpx;
	margin-left: 20rpx;
}

/* 发送价格 */

.send_jia_html {
	width: 467rpx;
	display: inline-block;
	background-color: #ffffff;
	padding: 24rpx 0 0 30rpx;
	box-sizing: border-box;
}
.send_jia_top {
	display: flex;
	align-items: flex-start;
}
.send_jia_top image {
	width: 80rpx;
	height: 80rpx;
	border-radius: 100%;
}
.send_jia_top_r {
	margin-left: 10rpx;
}
.send_jia_shangchang {
	margin: 20rpx 0 20rpx;
}
.send_jia_shangchang text:first-child {
	margin-left: 5rpx;
}
.send_jia_shangchang text {
	display: inline-block;
	height: 40rpx;
	background-color: #ececec;
	line-height: 40rpx;
	padding: 0 8rpx;
	margin-right: 10rpx;
}

.send_jia_bottom {
	line-height: 60px;
	display: flex;
	align-items: center;
	border-top: 2rpx solid #e5e5e5;
	justify-content: space-between;
	padding: 0 24rpx 0 0rpx;
}
.send_jia_top_r_dizhi {
	margin: 8rpx 0;
}
.send_jia_top_r_dizhi image {
	width: 22rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.send_jia_top_zhiwei {
	margin-left: 14rpx;
}
.send_jia_top_r p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.send_xuanze {
	background-color: #ffffff;
	padding: 20rpx 20rpx;
	width: 470rpx;
	box-sizing: border-box;
}
.send_xuanze view:nth-child(2) {
	margin: 12rpx 0 8rpx;
}

.send_jia_lvsuo image {
	width: 21rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.send_pay_ls {
	display: flex;
	margin-left: 25rpx;
	align-items: center;
	border-top: 2rpx solid #ffffff;
	height: 118rpx;
}
.send_pay_ls image {
	width: 80rpx;
	height: 80rpx;
	background-color: #ffffff;
	border-radius: 100%;
}
.send_pay_ls_riht {
	margin-left: 16rpx;
}
.send_fukuan_success {
	width: 476rpx;
	padding: 10rpx 0 0;
	height: 218rpx;
	background-color: #e6e6e6;
}
.send_pay_bottom {
	padding: 9px 0;
}
.end_pay_leixing {
	display: flex;
	align-items: center;
	padding-left: 26rpx;
	margin: 8rpx 0 12rpx;
}
.send_pay_ls_zhiwu {
	margin-top: 8rpx;
}

.send_pay_bottom_neirong {
	word-break: break-all;
}
.send_fukuan_title {
	display: flex;
	align-items: center;
	padding-left: 26rpx;
}
.send_fukuan_title image {
	margin-right: 9rpx;
	width: 16rpx;
	height: 13rpx;
}

.send_jia_bottom button {
	width: 115rpx;
	height: 40rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	line-height: 40rpx;
	margin: 0;
}
.huan_ls {
	border-top: 2rpx solid #e5e5e5;
	padding-top: 18rpx;
}
.huan_ls button {
	width: 150rpx;
	height: 40rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	line-height: 40rpx;
	text-align: center;
}
.huan_ls_tishi {
	border-bottom: 2rpx solid #e5e5e5;
	padding-bottom: 18rpx;
}
.bg {
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
}
.tan_chaoshi {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 628rpx;
	height: 510rpx;
	background: url(../../static/img/chaoshi_bg.png) no-repeat;
	background-size: 100% 100%;
	transform: translate(-50%, -50%);
}
.tan_chaoshi button {
	width: 350rpx;
	height: 60rpx;
	background-image: linear-gradient(90deg, #11ba81 0%, #62f4bb 100%);
	border-radius: 10rpx;
	margin: 40rpx auto 0;
	line-height: 60rpx;
}
.tan_chaoshi_tishi {
	font-size: 32rpx;
	color: #666666;
	text-align: center;
	margin-top: 230rpx;
}
.tan_chaoshi_tishi view {
	margin-bottom: 10rpx;
}
.guanbi {
	position: absolute;
	bottom: -104rpx;
	left: 50%;
	transform: translate(-50%, 0);
}
</style>
