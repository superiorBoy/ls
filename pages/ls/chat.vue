<template>
	<view class="">
		<view class="head">
			<view class="head_back" style="width: 10%;"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center " style="width: 80%;">
				<view class="hei_38_bold top_title">{{ title }}</view>
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
					<view>
						<text class="hei_24" style="margin-right: 20rpx;">在线咨询</text>
						<text class="hong_24">￥68.00/1小时</text>
					</view>
				</view>
			</view> -->

			<!-- 付款成功 -->
			<!-- <view class="send_fukuan_success">
				<view class="lv_26 send_fukuan_title">
					<image src="@/static/img/chat_duihao.png" mode=""></image>
					付款成功
				</view>
				<view class="send_pay_ls">
					<image src="@/static/img/tx.png" mode=""></image>
					<view class="send_pay_ls_riht">
						<view class="end_pay_leixing hei_26">
							电话咨询
							<view class="hong_26">
								&ensp;￥
								<text class="style_hong_16_bold">98.00</text>
								/20分钟
							</view>
						</view>
						<view class="hei_20">
							马俊哲律师
							<text class="qian_20 send_pay_ls_zhiwu">高级合伙人</text>
						</view>
					</view>
				</view>
				<view class="send_pay_bottom hei_24">
					<view>
						手机号码：13122223333
						<text class="send_pay_call bai_24">打电话给他</text>
					</view>
					<view>咨询类型：债权债务</view>
					<view class="send_pay_bottom_neirong">咨询内容：欠条多久有效，个人之间欠条多久不给钱，可以起诉?</view>
				</view>
			</view> -->

			<view class="chat_jiage_wai">
				<view class="chat_top_xinxi chat_top chat_jiage">
					<view class="chat_top_xinxi_top">
						<view class="chat_top_xinxi_top_left">
							<image :src="img_url + yh_user.photourl" mode="" class="chat_top_xinxi_tx"></image>
							<view class="chat_top_xinxi_top_left_r hui_22">
								<view class="chat_top_xinxi_dianhua">
									<image src="@/static/lsimg/chat_shouji.png" mode="" style="width: 13rpx;height: 17rpx;margin-right: 8rpx;"></image>
									{{ dianhua }}
								</view>
								<view class="chat_top_xinxi_dizhi">
									<image src="@/static/lsimg/chat_dizhi.png" style="width: 16rpx;height: 22rpx;margin-right: 8rpx;" mode=""></image>{{yh_user.provinces}}-{{yh_user.citys}}
								</view>
							</view>
						</view>
						<view class="chat_top_xinxi_top_right">
							<view class="chat_top_xinxi_r hei_26">
								<view class="chat_top_xinxi_r_num">{{ zixuncount.zaixian }}</view>
								<view class="qian_24">咨询订单</view>
							</view>
							<view class="chat_top_xinxi_r hei_26">
								<view class="chat_top_xinxi_r_num">{{ zixuncount.dianhua }}</view>
								<view class="qian_24">电话订单</view>
							</view>
						</view>
					</view>
					<view class="chat_top_xinxi_bottom hong_24">
						<view class="chat_top_xinxi_bottom_item" @click="go_shoukuan">
							<image src="../../static/lsimg/top_shoukuan.png" mode="" style="width:18rpx ;height: 21rpx;"></image>
							服务收款
						</view>
						<view class="chat_top_xinxi_bottom_item" @click="send_huanying()">
							<image src="@/static/lsimg/send_huanying.png" mode="" style="width:18rpx ;height: 21rpx;"></image>
							欢迎语
						</view>
						<view class="chat_top_xinxi_bottom_item" @click="send_zaixian()">
							<image src="@/static/lsimg/send_xiaoxi.png" mode="" style="width: 22rpx;height: 23rpx;"></image>
							咨询收费
						</view>
						<view class="chat_top_xinxi_bottom_item" @click="send_dianhua()">
							<image src="@/static/lsimg/send_dianhua.png" mode="" style="width:20rpx ;height: 20rpx;"></image>
							电话收费
						</view>
					</view>
				</view>
			</view>

			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="tan_hide">
				
				<view class="time qian_20" v-if="message != ''">{{ message[0].addtime | timeStamp }}</view>
				<view v-for="(item, index) in message">
					<view class="time qian_20" v-if="index > 1 && message[index].addtime - message[index - 1].addtime > 300">{{ message[index].addtime | timeStamp }}</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 2 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->
							<image :src="img_url + item.content" mode="widthFix" style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
							<!-- <image :src="item.content" mode="widthFix" v-if="item.to != undefined" style="max-width: 100rpx;" ></image> -->
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<view
						class="chat_list chat_right"
						v-if="item.userid_from != userid && item.msgtype == 1 && item.iswithdraw != 1"
						@longpress="changan(item.messageid, item.content)"
					>
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->

							<u-parse :content="replace_em(item.content)"></u-parse>

							<image :src="item.content" mode="widthFix" v-if="item.to != undefined" style="max-width: 100rpx;"></image>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 3 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ user.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ renzheng.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ renzheng.province }}-{{ renzheng.city }}-{{ renzheng.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ renzheng.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">电话咨询</text>
										<text class="hong_24">￥{{ user.phoneprice }}/20分钟</text>
									</view>
									<!-- <button type="button" class="bai_24">立即购买</button> -->
								</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 4 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ user.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ renzheng.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ renzheng.province }}-{{ renzheng.city }}-{{ renzheng.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ renzheng.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">在线咨询咨询</text>
										<text class="hong_24">￥{{ user.chatprice }}/天</text>
									</view>
									<!-- <button type="button" class="bai_24">立即购买</button> -->
								</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 5 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_xuanze hei_26">
								<!-- <view>描述完之后，选择一下您方便的咨询的方式：</view> -->
								<view class="">{{ tishiyu.welcomes }}</view>
								<view class="hong_26" style="margin-bottom: 10rpx;" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 6 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- 	<text class="hong_24">
										￥{{ item.consult.paymoney }}
									</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											电话咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{ item.consult.paymoney }}</text>
												/{{huoqu_name(item.consult.baojiamode)?huoqu_name(item.consult.baojiamode):item.consult.zixunshicahng+'分钟'}}
												
											</view>
										</view>
										<!-- <view class="hei_26 consult_typename">
											{{ item.consult.typename }}
													
										</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<text class="send_pay_call bai_24" @click="call2(item.consult.phone)">打电话给他</text>
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<!-- 	<view class="fufei_success_tips qian_24">
									{{item.consult.baojiamode=='zhineng_zaixian'?tips.zhinengpaytip:tips.consultpaytip}}
									
								</view> -->
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 7 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- <text class="hong_24">
										￥{{ item.consult.paymoney }}
									</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											在线咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{ item.consult.paymoney }}</text>
												/{{huoqu_name(item.consult.baojiamode)?huoqu_name(item.consult.baojiamode):item.consult.zixunshicahng+'小时'}}
											</view>
										</view>
										<!-- <view class="hei_26 consult_typename">
											{{ item.consult.typename }}
													
										</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<view class="fufei_success_tips qian_24">{{ item.consult.baojiamode == 'zhineng_zaixian' ? tips.zhinengpaytip : tips.consultpaytip }}</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 8 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_xuanze hei_26">
								<!-- 			<view class="">您的服务已到期，请重新订购服务</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view> -->
								<view class="">{{ tishiyu.overdue }}</view>
								<view class="hong_26" style="margin-bottom: 10rpx;" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<view class=" chat_chehui_tishi hei_26" v-if="item.userid_from != userid && item.iswithdraw == 1">
						<text class="chat_chehui_tishi_txt">你撤回了一条消息</text>
					</view>

					<!-- 律师发送收费 -->
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 11">
						<view class="chat_right_txt hei_30 send_shoufei_html">
							<view class="send_shoufei">
								<view class="send_shoufei_top bai_30">
									<image src="../../static/img/kefu.png" mode=""></image>
									<text>{{ item.information }}</text>
									<text class="shou_jiage">￥{{ item.money }}</text>
								</view>
								<view class="send_shoufei_bottom qian_24">律师发起了咨询服务费，请先支付</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<!-- 发送语音消息 -->
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 13 && item.iswithdraw != 1">
						<view class="chat_right_txt hei_30 chat_yuyin" @tap="playVoice(item.content, index, item.duration)" :class="yuyin_index == index ? 'bofang' : ''">
							{{ item.duration ? item.duration : '5' }}''
							<image src="../../static/lsimg/chat_yuyin_right.png" mode="" class="yuyin_icon"></image>
							<image src="../../static/img/bofang_right.gif" mode="" class="yuyin_bofang"></image>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
					<!-- 发送文件-->
					<view
						class="chat_list chat_right"
						v-if="item.userid_from != userid && item.msgtype == 14 && item.iswithdraw != 1"
						@longpress="changan(item.messageid, item.content)"
						@tap="onOpenDoc(item.content)"
					>
						<view class="chat_right_txt ">
							<view class="send_wenjian_html">
								<view class="send_wenjian_html_left">
									<view class="hei_30 send_wenjian_html_title">{{ wenjian(item.content) }}</view>
									<!-- <view class="qian_24">
									180K
								</view> -->
								</view>
								<view class="send_wenjian_html_right"><image src="../../static/img/word.png" mode=""></image></view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<!-- 其他咨询 -->
					<view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype == 7 && item.iswithdraw != 1" @longpress="changan(item.messageid)">
						<view class="chat_right_txt hei_30">
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- <text class="hong_24">
									￥{{ item.consult.paymoney }}
								</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">{{ item.consult.baojia[item.consult.baojiamode] }}</view>
										<!-- <view class="hei_26 consult_typename">
										{{ item.consult.typename }}
												
									</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<view class="fufei_success_tips qian_24">{{ item.consult.baojiamode == 'zhineng_zaixian' ? tips.zhinengpaytip : tips.consultpaytip }}</view>
							</view>
							<view class="qian_20 du_zhuangtai">{{ item.read == 1 ? '已读' : '未读' }}</view>
						</view>

						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 1 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->

							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 2 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<image :src="img_url + item.content" mode="widthFix" style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 3 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ user.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ renzheng.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ renzheng.province }}-{{ renzheng.city }}-{{ renzheng.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ renzheng.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">电话咨询</text>
										<text class="hong_24">￥{{ user.phoneprice }}/20分钟</text>
									</view>
									<button type="button" class="bai_24">立即购买</button>
								</view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 4 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{ user.nickname }}律师
											<text class="qian_20 send_jia_top_zhiwei">{{ renzheng.zhiwu }}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{ renzheng.province }}-{{ renzheng.city }}-{{ renzheng.area }}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{ renzheng.lvsuo }}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise1].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise2].shanchangname }}
									</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">
										{{ zhuanchang_arry[renzheng.expertise3].shanchangname }}
									</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">在线咨询</text>
										<text class="hong_24">￥{{ user.chatprice }}/天</text>
									</view>
									<button type="button" class="bai_24">立即购买</button>
								</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 5 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
								<!-- <view>描述完之后，选择一下您方便的咨询的方式：</view> -->
								<view class="">{{ tishiyu.welcomes }}</view>
								<view class="hong_26" style="margin-bottom: 10rpx;" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 6 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- 	<text class="hong_24">
										￥{{ item.consult.paymoney }}
									</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											电话咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{ item.consult.paymoney }}</text>
												/{{huoqu_name(item.consult.baojiamode)?huoqu_name(item.consult.baojiamode):item.consult.zixunshicahng+'分钟'}}
											</view>
										</view>
										<!-- 	<view class="hei_26 consult_typename">
											{{ item.consult.typename }}
													
										</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<text class="send_pay_call bai_24" @click="call2(item.consult.phone)">打电话给他</text>
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<!-- <view class="fufei_success_tips qian_24">
									{{item.consult.baojiamode=='zhineng_zaixian'?tips.zhinengpaytip:tips.consultpaytip}}
									
								</view> -->
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 7 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- <text class="hong_24">
										￥{{ item.consult.paymoney }}
									</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											在线咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{ item.consult.paymoney }}</text>
												/{{huoqu_name(item.consult.baojiamode)?huoqu_name(item.consult.baojiamode):item.consult.zixunshicahng+'小时'}}
											</view>
										</view>
										<!-- 	<view class="hei_26 consult_typename">
											{{ item.consult.typename }}
			
										</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<view class="fufei_success_tips qian_24">{{ item.consult.baojiamode == 'zhineng_zaixian' ? tips.zhinengpaytip : tips.consultpaytip }}</view>
							</view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 8 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
								<!-- <view class="">您的服务已到期，请重新订购服务</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view> -->
								<view class="">{{ tishiyu.overdue }}</view>
								<view class="hong_26" style="margin-bottom: 10rpx;" @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26" @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.msgtype == 9 && item.iswithdraw != 1">
						<image src="@/static/img/xitong.png" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">{{ tips.consultovertimetip }}</view>
					</view>

					<view class=" chat_chehui_tishi hei_26" v-if="item.userid_from == userid && item.iswithdraw == 1">
						<text class="chat_chehui_tishi_txt">“{{ title }}”撤回了一条消息</text>
					</view>

					<!-- 用户发送红包 -->
					<view class="chat_list chat_left" v-if="item.msgtype == 10">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30 send_hongbao_html">
							<view class="send_hongbao">
								<view class="send_hongbao_top">
									<image src="../../static/img/hongbao_icon.png" mode=""></image>
									<text>￥{{ item.money }}</text>
								</view>
								<view class="send_hongbao_bottom qian_24">{{ item.information }}</view>
							</view>
						</view>
					</view>

					<view class="lingqu hui_20" v-if="item.msgtype == 10">
						<image src="../../static/img/hongbao_icon.png" mode=""></image>
						你收到了来自{{ yh_user.nickname }}的红包
						<text class="hong_20">红包</text>
					</view>

					<!-- 用户支付成功 -->
					<view class="chat_list chat_left" v-if="item.msgtype == 12">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30 send_fufei_html">
							<view class="send_hongbao">
								<view class="send_fufei_top bai_30">
									<image src="../../static/img/kefu.png" mode=""></image>
									<text>{{ item.information }}</text>
									<text class="send_fufei_top_jia">￥{{ item.money }}</text>
								</view>
								<view class="send_hongbao_bottom qian_24">支付成功</view>
							</view>
						</view>
					</view>

					<view class="hui_20 yi_fufei" v-if="item.msgtype == 12">
						<text>用户{{ title }}已完成付款，请您及时解答</text>
					</view>

					<!-- 收到语音消息 -->
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 13 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30 chat_yuyin_left" @tap="playVoice(item.content, index, item.duration)" :class="yuyin_index == index ? 'bofang' : ''">
							<image src="../../static/lsimg/chat_yuyin_left.png" mode="" class="yuyin_icon"></image>
							<image src="../../static/img/bofang.gif" mode="" class="yuyin_bofang"></image>
							{{ item.duration ? item.duration : '5' }}''
							<!-- <text class="weiting"></text> -->
						</view>
					</view>

					<!-- 收到文件 -->
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 14 && item.iswithdraw != 1" @tap="onOpenDoc(item.content)">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30 ">
							<view class="send_wenjian_html">
								<view class="send_wenjian_html_left">
									<view class="hei_30 send_wenjian_html_title">{{ wenjian(item.content) }}</view>
									<!-- <view class="qian_24">
										180K
									</view> -->
								</view>
								<view class="send_wenjian_html_right"><image src="../../static/img/word.png" mode=""></image></view>
							</view>
						</view>
					</view>

					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype == 15 && item.iswithdraw != 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<view class="lv_24_bold send_fukuan_title_left">
										<image src="@/static/img/chat_duihao.png" mode=""></image>
										付款成功
									</view>
									<!-- <text class="hong_24">
										￥{{ item.consult.paymoney }}
									</text> -->
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										{{ item.consult.baojia[item.consult.baojiamode] }}
										<!-- 	<view class="hei_26 consult_typename">
											{{ item.consult.typename }}
								
										</view> -->
										<view class="hei_20">
											{{ user.nickname }}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{ renzheng.zhiwu }}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{ item.consult.phone }}
										<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
									</view>
									<view>咨询类型：{{ item.consult.typename }}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{ item.consult.information }}</view>
								</view>
								<!-- <view class="fufei_success_tips qian_24">
									{{item.consult.baojiamode=='zhineng_zaixian'?tips.zhinengpaytip:tips.consultpaytip}}
									
								</view> -->
							</view>
						</view>
					</view>

					<!-- 申请退款 -->
					<view class="chat_list chat_left" v-if="item.msgtype == 16 && item.refund">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt ">
							<view class="send_tuikuan">
								<view class="send_tuikuan_top" v-if="item.refund.state != 2">
									<text class="hei_26">{{ title }}申请了退款</text>
									<view class="send_tuikuan_top_right hong_26_bold"></view>
								</view>
								<view class="send_tuikuan_top" v-if="item.refund.state == 2">
									<text class="hei_26">退款成功</text>
									<view class="send_tuikuan_top_right hong_26_bold"></view>
								</view>
								<view class="send_tuikuan_bottom qian_24">
									<view class="">退款金额：￥{{ item.refund.refundmoney }}</view>
									<view class="">
										类型/时长：{{ gettype[item.refund.typeid].typename }}/{{huoqu_name(item.refund.baojiamode)?huoqu_name(item.refund.baojiamode):item.refund.zixunshicahng}}
										<text v-if="!huoqu_name(item.refund.baojiamode)">
											{{item.refund.cstate==2?'小时':'分钟'}}
										</text>	
									</view>
									<view class="">退款原因：{{ item.refund.refundreason }}</view>
									<view class="">
										退款状态：{{
											item.refund.state == 1
												? '退款中'
												: item.refund.state == 2
												? '同意退款'
												: item.refund.state == 3
												? '拒绝退款'
												: item.refund.state == 4
												? '取消退款'
												: ''
										}}
									</view>
									<view class="">操作时间：{{ item.refund.addtime | timeStamp }}</view>
								</view>
							</view>
						</view>
					</view>

					<!-- 取消退款 -->
					<view class="chat_list chat_left" v-if="item.msgtype == 17 && item.refund">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt ">
							<view class="send_tuikuan">
								<view class="send_tuikuan_top">
									<text class="hei_26">{{ title }}取消了退款</text>
									<view class="send_tuikuan_top_right hong_26_bold"></view>
								</view>
								<view class="send_tuikuan_bottom qian_24">
									<view class="">退款金额：￥{{ item.refund.refundmoney }}</view>
									<view class="">
										类型/时长：{{ gettype[item.refund.typeid].typename }}/{{huoqu_name(item.refund.baojiamode)?huoqu_name(item.refund.baojiamode):item.refund.zixunshicahng}}
										<text v-if="!huoqu_name(item.refund.baojiamode)">
											{{item.refund.cstate==2?'小时':'分钟'}}
										</text>	
									</view>
									<view class="">退款原因：{{ item.refund.refundreason }}</view>
									<view class="">
										退款状态：{{
											item.refund.state == 1
												? '退款中'
												: item.refund.state == 2
												? '同意退款'
												: item.refund.state == 3
												? '拒绝退款'
												: item.refund.state == 4
												? '取消退款'
												: ''
										}}
									</view>
									<view class="">操作时间：{{ item.refund.addtime | timeStamp }}</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class=" chat_chehui_tishi hei_26" v-if="is_zuijin_chehui">
					<text class="chat_chehui_tishi_txt">
						你撤回了一条消息
						<text class="lv_26" @click="bianji">重新编辑</text>
					</text>
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
			</view>

			<view class="zhanwei" v-if="isShowEmj"></view>
			<view class="chat_bottom">
				<view class="chat_bottom_top">
					<image src="@/static/lsimg/chat_yuyin.png" mode="" v-if="!on_yuyin" @click="show_luyin"></image>
					<image src="@/static/img/chat_jianpan.png" mode="" v-if="on_yuyin" @click="hide_luyin"></image>
					<input
						type="text"
						value=""
						placeholder="按住 说话"
						placeholder-style="color:#333"
						v-if="on_yuyin"
						@longtap="dian_luyin"
						@touchend="songkai"
						@touchmove.stop.prevent="moveStop"
						class="changan_input hei_34_bold"
						disabled="true"
					/>
					<input
						type="text"
						value=""
						v-model="chat_txt"
						confirm-type="send"
						@confirm="send"
						class="hei_26"
						@focus="huojiao"
						@click="input_click()"
						@blur="shiqu"
						v-if="!on_yuyin"
					/>

					<image src="@/static/lsimg/chat_biaoqing.png" mode="" @tap="showEmj"></image>
					<image src="@/static/lsimg/chat_jia.png" mode="" @click="jia" v-if="!chat_txt"></image>
					<text class="fasong" @click="send()" v-if="chat_txt">发送</text>
				</view>

				<view v-if="bottom_tip" class="jianpan"></view>
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="chat_bottom_bottom hui_26" v-if="bt_show">
					<view class="chat_bt_item" @click="call">
						<image src="@/static/lsimg/chat_dianhua.png" mode=""></image>
						<view>打电话给TA</view>
					</view>
					<view class="chat_bt_item" @click="up_img">
						<image src="@/static/lsimg/chat_tupian.png" mode=""></image>
						<view>发送图片</view>
					</view>
					<view class="chat_bt_item">
						<picker :range="changyong_arry" @change="changyong_change">
							<image src="@/static/lsimg/chat_changyong.png" mode=""></image>
							<view>常用语</view>
						</picker>
					</view>
					<view class="chat_bt_item" @click="go_shoukuan">
						<image src="../../static/lsimg/chat_shoukuan.png" mode=""></image>
						<view>发起收款</view>
					</view>
					<view class="chat_bt_item" @click="yuyin_chat" v-if="is_kaiqi_yuyin == 1">
						<image src="../../static/img/bottom_yuyin.png" mode=""></image>
						<view>语音聊天</view>
					</view>
					<view class="chat_bt_item" @click="shipin_chat" v-if="is_kaiqi_yuyin == 1">
						<image src="../../static/img/bottom_shipin.png" mode=""></image>
						<view>视频聊天</view>
					</view>
					<view class="chat_bt_item" @click="send_wenjian">
						<image src="../../static/img/bottom_wenjian.png" mode=""></image>
						<view>发送文件</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 语音动画 -->
		<view class="yuyin_bg" v-if="is_yuyin">
			<view class="tan_yuyin">
				<view class="tan_yuyin_top">
					<view class="tan_yuyin_on" v-if="!is_quxiao"><image src="../../static/img/yuyin.gif" mode="heightFix"></image></view>
					<view class="tan_yuyin_no" v-if="is_quxiao"><image src="../../static/img/yuyin.gif" mode=""></image></view>
				</view>
				<view class="tan_yuyin_center">
					<image src="../../static/lsimg/no_quxiao.png" mode="" class="no_quxiao" v-if="!is_quxiao"></image>
					<view class="" v-if="is_quxiao">
						<view class="songshou_txt">松开 取消</view>
						<image src="../../static/lsimg/yuyin_quxiao.png" mode="" class="yuyin_quxiao"></image>
					</view>
				</view>
				<view class="tan_yuyin_bottom">
					<view class="tan_yuyin_bottom_on" v-if="!is_quxiao">
						<!-- <view class="hei_30_bold tan_yuyin_bottom_on_txt">
							松开 发送
						</view> -->
						<!-- <image src="../../static/lsimg/yuyin_hei.png" mode=""></image> -->
					</view>
					<view class="tan_yuyin_bottom_no" v-if="is_quxiao"><image src="../../static/lsimg/yuyin_bai.png" mode=""></image></view>
				</view>
			</view>
		</view>
		<view class="bg" v-if="is_chehui">
			<view class="chehui">
				<view class="qian_28 chehui_title">是否撤销该条消息？</view>
				<view class="lv_32 chehui_queding" @click="che_queding">确定</view>
				<view class="qian_32 chehui_quxiao" @click="che_quxiao">取消</view>
			</view>
		</view>
		<l-file ref="lFile" @up-success="onSuccess"></l-file>
	</view>
</template>

<script>
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
import emotion from '@/components/bkhumor-emoji/index.vue';
import uParse from '@/components/feng-parse/parse.vue';

import permision from '@/common/permission.js';
import lfile from '@/components/l-file/l-file.vue';
export default {
	computed: {
		intIntervalTime() {
			// 用于显示整数的秒数

			console.log(Math.round(this.intervalTime));

			return Math.round(this.intervalTime);
		}
	},
	created() {
		// #ifdef H5
		window.addEventListener('resize', function() {
			if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
				window.setTimeout(function() {
					document.activeElement.scrollIntoViewIfNeeded();
				}, 0);
			}
		});
		// #endif
	},
	components: {
		emotion,
		uParse,
		lfile
	},
	onLoad(option) {
		this.userid = option.userid;
		this.huanying();
		// 查看消息保留条数
		this.$http
			.post({
				url: '/mapi/index/getmessagecount'
			})
			.then(res => {
				this.first_xiaoxi=res.data.messagecount
				this.huoqu_xiaoxi_list();
			});	
		//查看咨询报价
		      this.$http
							.post({
								url: '/mapi/index/lawyerservice'
							})
							.then(res => {
								this.zixun_baojia = res.data;
							});
		this.tishiyu_tip();
		this.huoqu_type();
		var self = this;
		recorderManager.onStop(function(res) {
			console.log('recorder stop' + JSON.stringify(res));
			self.voicePath = res.tempFilePath;
			if (self.is_quxiao) {
				console.log('已取消录音');
			} else {
				self.Audio2dataURL(res.tempFilePath);
			}
		});

		// 获取用户信息
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
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
				this.huoqu_renzheng();
			});
		// 获取是否开启语音
		this.$http
			.post({
				url: '/mapi/index/getopenchat'
			})
			.then(res => {
				this.is_kaiqi_yuyin = res.data.openchat;
			});

		// 进入这个页面的时候创建websocket连接【整个页面随时使用】
		// this.connectSocketInit();
	},
	onShow() {
		var that = this;
		setTimeout(function() {
			// #ifdef H5
			that.connectSocketInit();
			// #endif
			// #ifdef APP-PLUS

			that.app_lianjie();
			// #endif
		}, 1000);
		
	},
	onReady() {},
	onHide() {
		// #ifdef APP-PLUS
		uni.closeSocket();
		// #endif

		// 	this.$http
		// 		.post({
		// 			url: '/mlawyerapi/consult/chatdeatils',
		// 			data: {
		// 				page:0,
		// 				userid: this.userid
		// 			}
		// 		})
		// 		.then(res => {

		// 		});
	},
	onUnload(e) {
		// this.huoqu_xiaoxi_list()

		this.$http
			.post({
				url: '/mlawyerapi/consult/chatdeatils',
				data: {
					page: 0,
					userid: this.userid
				}
			})
			.then(res => {});

		innerAudioContext.stop(); //暂停这个实例
		// #ifdef APP-PLUS
		uni.closeSocket();
		// #endif

		var ls_chat_list = uni.getStorageSync('ls_chat_list'); //读取缓存
		var that = this;
		var is_cuzai = false;
		if (ls_chat_list) {
			ls_chat_list = JSON.parse(ls_chat_list);
			console.log(ls_chat_list);
			for (let i in ls_chat_list) {
				if (ls_chat_list[i].user.userid == this.userid) {
					if (that.message[that.message.length - 1].addtime != that.is_last_msguptime) {
						console.log('重新设置');
						console.log('存在', ls_chat_list[i]);

						var xinxi = {
							lawyerid: that.renzheng.userid,
							userid: that.userid,
							content: that.message[that.message.length - 1].content,
							msgtype: that.message[that.message.length - 1].msgtype,
							readnum: 0,
							lawyerreadnum: 0,
							addtime: new Date().getTime(),
							uptime: that.message[that.message.length - 1].addtime,
							user: {
								userid: that.userid,
								photourl: that.yh_user.photourl,
								nickname: that.yh_user.nickname,
								mobile: that.yh_user.mobile
							}
						};
						ls_chat_list.splice(i, 1); //存在即删除
						ls_chat_list.unshift(xinxi);
						is_cuzai = true;
						uni.setStorageSync('ls_chat_list', JSON.stringify(ls_chat_list)); //设置缓存
					} else {
						is_cuzai = true;
						ls_chat_list[i].content = this.message[this.message.length - 1].content;
						ls_chat_list[i].msgtype = this.message[this.message.length - 1].msgtype;
						ls_chat_list[i].lawyerreadnum = 0;
						uni.setStorageSync('ls_chat_list', JSON.stringify(ls_chat_list)); //设置缓存
						// uni.removeStorageSync('ls_chat_list');
					}

					// ls_chat_list[i].content=this.message[this.message.length-1].content
					// ls_chat_list[i].msgtype=this.message[this.message.length-1].msgtype
					// ls_chat_list[i].lawyerreadnum=0
				}

				//     ls_chat_list[i].readnum=0
				// ls_chat_list[i]= ls_chat_list[i].addtime,
			}
		}

		if (!is_cuzai) {
			console.log('不存在');
			uni.removeStorageSync('ls_chat_list');
		}
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
			img_url: uni.getStorageSync('img_url'),
			message: [],
			page: 0,
			is_all: false,
			userid: '',
			dianhua: '',
			is_fa: false,
			yh_user: '',
			renzheng: '',
			zhuanchang_arry: [],
			day: 0,
			hour: '00',
			minute: '00',
			seconds: '00',
			time1: '0',
			zixuncount: '',
			is_chehui: false,
			messageid: '',
			canClick: true,
			is_zuijin_chehui: false,
			zuijin_txt: '',
			bottom_tip: false,
			on_yuyin: false,
			is_yuyin: false,
			is_quxiao: false,
			clientX: '',
			clientY: '',
			recorderManager: {},
			innerAudioContext: {},
			voicePath: '',
			intervalTime: 0,
			isRecord: false,
			tishiyu: '',
			is_xiala: false,
			yuyin_index: 0,
			dakai: false,
			tips: '',
			gettype: '',
			is_last_msguptime: '',
			is_kaiqi_yuyin: 2,
			is_first: true,
			first_xiaoxi:'',
			first_height: 0,
			zixun_baojia:''
		};
	},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.is_xiala = true;

		// if (this.is_all) {
		// 	uni.showToast({
		// 		title: '没有更多内容了',
		// 		duration: 2000,
		// 		icon: 'none'
		// 	});
		// 	uni.stopPullDownRefresh();
		// } else {
		// 	this.page++;
		// 	this.huoqu_xiaoxi_list();
		// }
	},
	methods: {
		onPageScroll(res) {
		       var that=this
						if(res.scrollTop==0){
							this.is_xiala = true;
							
							if (this.is_all) {
								uni.showToast({
									title: '没有更多内容了',
									duration: 2000,
									icon: 'none'
								});
								uni.stopPullDownRefresh();
							} else {
								uni.showLoading({title: '加载中',mask:true});
								this.page++;
								this.huoqu_xiaoxi_list();
							}
						}
						// console.log(res.scrollTop)
						
						let info = uni.createSelectorQuery().select('.chat_body');
						info.boundingClientRect(function(data) {
							//data - 各种参数
							// 　　　  　console.log(data)  // 获取元素宽度
						
							that.first_height = data.height;
						}).exec();
		   },
		//上拉加载
		onReachBottom() {
			// uni.showToast({
			// 	title: '没有更多内容了',
			// 	duration: 2000,
			// 	icon: "none"
			// });
		},
		huoqu_name(baojiamode){
			
			for (var value of this.zixun_baojia){
			if(value.baojiamode==baojiamode){
				return value.name
			}
			}
			
		},
		huoqu_type() {
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					if (res.code == 0) {
						this.gettype = res.data.type;
					}
				});
		},
		show_luyin() {
			this.isShowEmj = false;
			this.bt_show = false;
			// this.is_yuyin=true
			// #ifdef H5
			uni.showToast({
				title: '请下载APP使用语音功能',
				duration: 1000,
				icon: 'none'
			});
			// #endif
			// #ifdef APP-PLUS
			if (uni.getSystemInfoSync().platform == 'ios') {
				this.judgeIosPermission('record');
			} else if (uni.getSystemInfoSync().platform === 'android') {
				this.requestAndroidPermission('android.permission.RECORD_AUDIO');
			}
			// #endif
		},
		judgeIosPermission(permisionID) {
			var result = permision.judgeIosPermission(permisionID);
			console.log(result);
			var strStatus = result ? '已' : '未';
			console.log(strStatus);
			if (strStatus == '已') {
				this.on_yuyin = true;
			} else {
				if (that.is_first) {
					recorderManager.start({
						format: 'mp3'
					});
					that.is_quxiao = true;
					setTimeout(function() {
						recorderManager.stop();
					}, 300);

					that.is_first = false;
				} else {
					uni.showModal({
						content: '需要开启麦克风权限',
						confirmText: '设置',
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppPermissionSetting();
							}
						}
					});
				}
			}
			// uni.showModal({
			// 	content: permisionID + '权限' + strStatus + "获得授权",
			// 	showCancel: false
			// });
		},
		async requestAndroidPermission(permisionID) {
			var result = await permision.requestAndroidPermission(permisionID);
			var strStatus;
			if (result == 1) {
				strStatus = '已获得授权';
				this.on_yuyin = true;
			} else if (result == 0) {
				strStatus = '未获得授权';
				uni.showToast({
					title: '麦克风权限没有开启',
					duration: 1000,
					icon: 'none'
				});
			} else {
				strStatus = '被永久拒绝权限';
				uni.showToast({
					title: '麦克风权限被禁止',
					duration: 1000,
					icon: 'none'
				});
			}
		},
		hide_luyin() {
			this.on_yuyin = false;
		},
		// 点击长按录音
		dian_luyin() {
			var that = this;
			this.is_yuyin = true;
			this.timer = setInterval(() => {
				this.intervalTime += 0.5;
				if (this.intervalTime >= 0.5 && !this.isRecord) {
					//如果用户录制的时间太短,就不会去开启录音, 因为有个bug: recorderManager.stop()在短时间内开启在关闭的话,实际上他还在不停地录音,不知道你们有没有遇到过

					console.log('开始录音');

					this.isRecord = true;

					this.intervalTime = 0;

					recorderManager.start({
						format: 'mp3'
					});
				}

				// console.log(this.intervalTime)
				if (this.intervalTime >= 60) {
					uni.showToast({
						title: '不得超过60秒',
						duration: 2000,
						icon: 'none'
					});
					that.songkai();
				}
			}, 500);
		},
		yiru() {
			this.on_yuyin = false;
		},
		moveStop(e) {
			console.log(e.touches[0].clientY);
			if (e.touches[0].clientY < 650) {
				this.is_quxiao = true;
			} else {
				this.is_quxiao = false;
			}
		},

		songkai() {
			var that = this;

			console.log('songkai', this.is_quxiao);
			if (this.is_quxiao) {
				console.log('已取消录音');
			} else {
				if (this.intervalTime <= 0.5) {
					console.log('录音太短了!!!');
				}
				clearInterval(this.timer);

				if (this.isRecord) {
					setTimeout(() => {
						recorderManager.stop();
						this.isRecord = false;
						// var data = {
						// 	content: '',
						// 	msgtype: 12,
						// 	photourl_form: that.user.photourl

						// };
						// that.message.push(data);
						// setTimeout(() => {
						// 	uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						// }, 100);

						console.log(this.isRecord);
					}, 500); //延迟小段时间停止录音, 更好的体验
				}
			}
			this.is_yuyin = false;
			this.is_quxiao = false;
		},
		playVoice(voicePath, index, duration) {
			console.log('播放录音');
			var that = this;
			this.yuyin_index = index;

			if (duration) {
				var daoji = Number(duration) * 1000;
			} else {
				var daoji = 5 * 1000;
			}
			setTimeout(function() {
				that.yuyin_index = 0;
			}, daoji);

			console.log(this.img_url + voicePath);
			innerAudioContext.src = this.img_url + voicePath;
			innerAudioContext.play();
		},
		input_click(e) {
			this.bottom_tip = true;
		},
		input_blur() {
			setTimeout(() => {
				this.bottom_tip = false;
			}, 300);
			console.log('失去焦点事件');
		},
		navigateBack() {
			uni.navigateBack();
		},
		bianji() {
			this.chat_txt = this.zuijin_txt;
		},
		changan(messageid, txt) {
			if (txt) {
				this.zuijin_txt = txt;
			} else {
				this.zuijin_txt = '';
			}
			console.log(messageid);
			this.messageid = messageid;
			this.is_chehui = true;
		},
		Audio2dataURL(path) {
			var that = this;
			plus.io.resolveLocalFileSystemURL(path, function(entry) {
				entry.file(
					function(file) {
						var reader = new plus.io.FileReader();
						reader.onloadend = function(e) {
							console.log(e.target.result);

							that.up_luyin(e.target.result);
						};
						reader.readAsDataURL(file);
					},
					function(e) {
						mui.toast('读写出现异常: ' + e.message);
					}
				);
			});
		},

		up_luyin(base64) {
			console.log('up_luyin');
			var urlrep = base64.replace('mpeg', 'mp3');
			var that = this;
			that.$http
				.post({
					url: '/lawyer/index/uploadaudiomessage',
					data: {
						audio: urlrep
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						that.send_luyin(res.data.audio);
					}
				});
		},
		send_luyin(audio) {
			var that = this;

			var duration = Math.round(this.intervalTime);

			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: audio,
						type: 13,
						duration: duration
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						var data = {
							content: audio,
							msgtype: 13,
							photourl_form: this.user.photourl,
							messageid: res.data,
							duration: duration,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
						var to = new Date(that.time1.replace(/-/g, '/'));
						var now = new Date();
						var time = to.getTime() - now.getTime();
						if (time < 0) {
							that.send_guoqi();
						}
					}
				});
		},
		huanying() {
			this.$http
				.post({
					url: '/mapi/index/getchatmessage'
				})
				.then(res => {
					if (res.code == 0) {
						this.tishiyu = res.data;
					}
				});
		},
		tishiyu_tip() {
			this.$http
				.post({
					url: '/mapi/index/tips'
				})
				.then(res => {
					if (res.code == 0) {
						this.tips = res.data;
					}
				});
		},
		che_queding() {
			console.log(this.messageid, '666');
			this.$http
				.post({
					url: '/lawyer/index/withdraw',
					data: {
						messageid: this.messageid
					}
				})
				.then(res => {
					console.log(res, '555');
					if (res.code == 0) {
						uni.showToast({
							title: '消息已撤回',
							duration: 2000
						});
						this.message.forEach((item, index, array) => {
							if (item.messageid == this.messageid) {
								this.message.splice(index, 1);
							}
						});

						this.is_chehui = false;
						if (this.zuijin_txt != '') {
							this.is_zuijin_chehui = true;
						} else {
							this.is_zuijin_chehui = false;
							this.chat_txt = '';
						}
					}
				});
		},
		che_quxiao() {
			this.is_chehui = false;
		},
		huoqu_xiaoxi_list() {
			var that = this;
			this.$http
				.post({
					url: '/mlawyerapi/consult/chatdeatils',
					data: {
						page: this.page,
						userid: this.userid
					}
				})
				.then(res => {
					this.title = res.data.user_to.mobile;
					this.dianhua = res.data.user_to.mobile;
					this.yh_user = res.data.user_to;
					this.zixuncount = res.data.zixuncount;
					for (let key in res.data.message) {
						if (res.data.message[key].msgtype == 10 || res.data.message[key].msgtype == 11 || res.data.message[key].msgtype == 12) {
							this.$http
								.post({
									url: '/mlawyerapi/consult/red_envelope',
									data: {
										redid: res.data.message[key].content,
										userid: that.userid
									}
								})
								.then(ress => {
									console.log(ress);
									res.data.message[key] = Object.assign(res.data.message[key], ress.data.red_envelope);
									this.$forceUpdate();
								});
						}
						// if (res.data.message[key].msgtype == 13) {
						// 	console.log(key)
						// 	innerAudioContext.src =that.img_url+res.data.message[key].content;
						// 	innerAudioContext.onTimeUpdate(() => {
						// 	    console.log(innerAudioContext.duration,key);
						// 		let shichang={
						// 			shitime:innerAudioContext.duration.toFixed(0)
						// 		}
						// 		res.data.message[key] = Object.assign(res.data.message[key], shichang);
						// 		this.$forceUpdate();
						// 	})

						// }
					}

					this.message = res.data.message.concat(this.message);

					if (this.page == 0) {
						if (res.data.message.length < that.first_xiaoxi) {
							this.is_all = true;
						}
						this.is_last_msguptime = this.message[this.message.length - 1].addtime;
					} else {
						if (res.data.message.length < 100) {
							this.is_all = true;
						}
					}
					// if (res.data.message.length < 100) {
					// 	this.is_all = true;
					// }
	
					if (!this.is_xiala) {
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 400);
					}else{
						setTimeout(() => {
							let info = uni.createSelectorQuery().select('.chat_body');
							info.boundingClientRect(function(data) {
								//data - 各种参数
								uni.pageScrollTo({ scrollTop: data.height - that.first_height, duration: 0 });
							}).exec();
						}, 1000);
					}

					that.time1 = res.data.shijian;
					console.log(that.time1);
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
					setTimeout(function () {uni.hideLoading();}, 1000);
				});
		},
		huoqu_renzheng() {
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data: {
						type: 2
					}
				})
				.then(res => {
					this.renzheng = res.data.lawyerauth;
				});
		},
		input_click() {
			// this.bottom_tip =true;
			this.isShowEmj = false;
			this.bt_show = false;
			setTimeout(() => {
				uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
			}, 100);
		},
		huojiao() {
			setTimeout(() => {
				uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
			}, 600);
		},
		shiqu() {
			setTimeout(() => {
				uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
			}, 200);
		},
		app_lianjie() {
			let that = this;
			var url = that.$http.WebSocket_url;
			uni.connectSocket({
				url: 'wss://' + url + ':3348',
				success: data => {
					console.log('websocket连接成功', data);
				},
				fail: err => {},
				complete: res => {}
			});

			uni.onSocketOpen(function(res) {
				console.log('WebSocket连接已打开！', res);
			});

			uni.onSocketError(function(res) {
				console.log('WebSocket连接打开失败，请检查！');
			});
			uni.onSocketMessage(function(res) {
				var data = JSON.parse(res.data);
				if (data.type == 'init') {
					console.log('init');
					console.log('client_id', data.client_id);
					uni.request({
						url: that.$http.baseUrl + '/push/gatewayworker/bind',
						method: 'POST',
						data: {
							client_id: data.client_id,
							type: 1
						},
						success: function(resp) {
							console.log(resp, 'bind');
						},
						fail: function(resp) {}
					});
				} else if (data.type == 'say') {
					console.log('say');

					if (data.state) {
						if (data.state == 10) {
							if (data.content) {
								this.$http
									.post({
										url: '/mlawyerapi/consult/red_envelope',
										data: {
											redid: data.content,
											userid: that.userid
										}
									})
									.then(ress => {
										var xiaoxi = {
											photourl_form: data.userid_from_pic,
											userid_to: data.userid_to,
											photourl_to: data.userid_to_pic,
											content: data.msg,
											msgtype: data.state,
											userid_from: data.userid_from,
											money: ress.data.red_envelope.money,
											is_pay: ress.data.red_envelope.is_pay,
											information: ress.data.red_envelope.information,
											paymode: ress.data.red_envelope.paymode,
											type: ress.data.red_envelope.type,
											addtime: new Date().getTime()
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
								userid_from: data.userid_from,
								addtime: new Date().getTime()
							};
							if (that.user.userid != data.userid_from) {
								that.message.push(xiaoxi);
							}
						}

						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 200);
						that.message.forEach((item, index, array) => {
							item.read=1
						});
						
						that.$forceUpdate();
					}
				} else {
					console.log('else');
				}
			});

			uni.onSocketClose(function(res) {
				console.log('uniapp 已关闭！');
			});
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
			this.on_yuyin = false;
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
			this.on_yuyin = false;
		},
		input_change() {
			if (this.chat_txt == '') {
				this.is_fa = false;
			} else {
				this.is_fa = true;
			}
		},
		send() {
			var that = this;
			if (this.chat_txt == '') {
				uni.showToast({
					title: '请输入内容',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (this.canClick) {
				this.canClick = false;
				this.send_txt();
				setTimeout(function() {
					that.canClick = true;
				}, 1000);
			} else {
				uni.showToast({
					title: '请稍后发送',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		send_txt() {
			var data = {
				content: '' + this.chat_txt,
				userid_from: '' + this.id
			};

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
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: this.chat_txt,
						type: 1
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						this.is_zuijin_chehui = false;
						var data = {
							content: txt,
							msgtype: 1,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
					// this.canClick=true
				});
		},
		send_huanying() {
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: '[欢迎]',
						type: 5
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						var data = {
							content: '[欢迎]',
							msgtype: 5,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		send_zaixian() {
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: '[在线咨询]',
						type: 4
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						var data = {
							content: '[在线咨询]',
							msgtype: 4,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		send_dianhua() {
			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: '[电话咨询]',
						type: 3
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.chat_txt = '';
						var data = {
							content: '[电话咨询]',
							msgtype: 3,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		call() {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: this.dianhua + '',
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
		call2(dianhua) {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: dianhua + '',
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
		wenjian(str) {
			str = str.substring(str.lastIndexOf('/') + 1);

			return str;

			// console.log(str)
		},
		yuyin_chat() {},
		shipin_chat() {},
		onOpenDoc(src) {
			let url = this.img_url + src;
			/* 下载返回临时路径（退出应用失效） */
			// #ifdef H5

			let dload = document.createElement('a');
			dload.download = ''; // 设置下载的文件名，默认是'下载'
			dload.href = url;
			document.body.appendChild(dload);
			dload.click();
			dload.remove(); // 下载之后把创建的元素删除
			uni.showToast({
				title: '正在下载',
				icon: 'success'
			});
			// #endif

			// #ifdef APP-PLUS

			// console.log(url)
			// 	this.$refs.lFile.download({url})
			// 	.then(path=>{
			// 		/* 预览 */

			// 		this.$refs.lFile.open(path);
			// 	});
			// 	socket.closeSocket();

			uni.downloadFile({
				url: url, //下载地址接口返回
				success: data => {
					if (data.statusCode === 200) {
						//文件保存到本地
						uni.saveFile({
							tempFilePath: data.tempFilePath, //临时路径
							success: function(res) {
								uni.showToast({
									icon: 'none',
									mask: true,
									title: '文件已保存：' + res.savedFilePath, //保存路径
									duration: 2000
								});

								setTimeout(() => {
									//打开文档查看
									uni.openDocument({
										filePath: res.savedFilePath,
										success: function(res) {
											// console.log('打开文档成功');
										}
									});
								}, 3000);
							}
						});
					}
				},
				fail: err => {
					console.log(err);
					uni.showToast({
						icon: 'none',
						mask: true,
						title: '失败请重新下载'
					});
				}
			});

			// #endif
		},
		send_wenjian() {
			/**
			 * currentWebview: 当前webview
			 * url：上传接口地址
			 * name：附件key,服务端根据key值获取文件流，默认file,上传文件的key
			 * header: 上传接口请求头
			 */
			var url = '/lawyer/index/uploadfile';

			// #ifdef APP-PLUS
			url = this.$http.baseUrl + '/lawyer/index/uploadfile';
			// #endif
			this.$refs.lFile.upload({
				// #ifdef APP-PLUS
				// nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
				currentWebview: this.$mp.page.$getAppWebview(),
				// #endif
				url: url, //替换为你的
				name: 'files'
			});
		},
		onSuccess(res) {
			console.log('上传成功回调', JSON.stringify(res));

			console.log(res.data.file);
			// uni.showToast({
			// 	title: JSON.stringify(res),
			// 	icon: 'none'
			// })
			this.send_wenjian_txt(res.data.file);
		},
		send_wenjian_txt(localPath) {
			var that = this;

			this.$http
				.post({
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: localPath,
						type: 14
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						var data = {
							content: localPath,
							msgtype: 14,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
						var to = new Date(that.time1.replace(/-/g, '/'));
						var now = new Date();
						var time = to.getTime() - now.getTime();
						if (time < 0) {
							that.send_guoqi();
						}
					}
				});
		},
		up_img() {
			let that = this;
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
									url: '/lawyer/index/uploadimgmessage',
									data: {
										img: base64
									}
								})
								.then(res => {
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
			console.log('getLocalFilePath', '111');
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
					url: '/push/gatewayworker/sendmessage1.html',
					data: {
						userid_to: this.userid,
						msg: img,
						type: 2
					}
				})
				.then(res => {
					if (res.code == 0) {
						var data = {
							content: img,
							msgtype: 2,
							photourl_form: this.user.photourl,
							messageid: res.data,
							addtime: new Date().getTime()
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					}
				});
		},
		changyong_change(data) {
			this.changyong = this.changyong_arry[data.detail.value];
			this.chat_txt = this.changyong_arry[data.detail.value];
			console.log(this.changyong);
		},
		tan_hide() {
			this.isShowEmj = false;
			this.bt_show = false;
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
			console.log(url);
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
					uni.request({
						url: that.$http.baseUrl + '/push/gatewayworker/bind',
						method: 'POST',
						data: {
							client_id: data.client_id,
							type: 1
						},

						success: function(resp) {
							console.log(resp, 'bind');
						},
						fail: function(resp) {}
					});
				} else if (data.type == 'say') {
					console.log('say');
					if (data.state) {
						if (data.state == 10) {
							if (data.content) {
								this.$http
									.post({
										url: '/mlawyerapi/consult/red_envelope',
										data: {
											redid: data.content,
											userid: that.userid
										}
									})
									.then(ress => {
										var xiaoxi = {
											photourl_form: data.userid_from_pic,
											userid_to: data.userid_to,
											photourl_to: data.userid_to_pic,
											content: data.msg,
											msgtype: data.state,
											userid_from: data.userid_from,
											money: ress.data.red_envelope.money,
											is_pay: ress.data.red_envelope.is_pay,
											information: ress.data.red_envelope.information,
											paymode: ress.data.red_envelope.paymode,
											type: ress.data.red_envelope.type,
											addtime: new Date().getTime()
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
								userid_from: data.userid_from,
								addtime: new Date().getTime()
							};
							that.message.push(xiaoxi);
						}
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
						that.message.forEach((item, index, array) => {
							
							item.read=1
						});
						
						that.$forceUpdate();
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
		go_shoukuan() {
			uni.navigateTo({
				url: 'shoukuan?userid=' + this.userid
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
page {
	background-color: #f7f7f7;
}
.head {
	border-bottom: 2rpx solid #d9d9d9;
	padding-top: 10rpx;
	padding-bottom: 6rpx;
}

.time {
	margin: 24rpx auto;
	text-align: center;
	width: 300rpx;
	height: 28rpx;
	background-color: #f6f6f6;
	border-radius: 14rpx;
	text-align: center;
	line-height: 28rpx;
}
.chat_lvsuo {
	transform: scale(0.9);
}

.chat_list {
	display: flex;
	align-items: flex-start;
	margin-bottom: 34rpx;
	position: relative;
}

.chat_list .tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
}

.chat_left .tx {
	margin-right: 20rpx;
}

.chat_body {
	padding: 0 30rpx 100rpx;
	overflow: auto;
}

.chat_body_jia {
	padding-bottom: 580rpx;
}

.chat_left_txt {
	max-width: 470rpx;
	border: solid 2rpx #d9d9d9;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
	background-color: #ffffff;
}

.chat_left_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	left: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/lsimg/chat_left.png) no-repeat;
	background-size: 100% 100%;
}
.chat_right_txt image,
.chat_left_txt image {
	max-width: 100%;
	max-height: 400rpx;
}
.chat_right_txt {
	max-width: 470rpx;
	background-color: #e6e6e6;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
	margin-bottom: 40rpx;
}
.chat_left {
	margin-bottom: 40rpx;
}
.chat_right_txt::before {
	content: '';
	display: inline-block;
	position: absolute;
	top: 24rpx;
	right: -10rpx;
	width: 10rpx;
	height: 16rpx;
	background: url(../../static/lsimg/chat_r_icon.png) no-repeat;
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
	/* border: solid 2rpx #d9d9d9 !important; */
	padding-left: 10rpx;
	box-sizing: border-box;
}

.chat_bottom_bottom {
	background-color: #fafafa;
	display: flex;
	/* justify-content: space-between; */
	padding: 40rpx 0;
	flex-wrap: wrap;
}

.chat_bt_item {
	text-align: center;
	width: 25%;
	margin-bottom: 50rpx;
}
.chat_bt_item:nth-child(4) {
	margin-bottom: 0;
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
.ls_name {
	position: absolute;
	top: -38rpx;
	display: inline-block;
	width: 400rpx;
	font-size: 20rpx;
	left: 0;
}
.fasong {
	background-color: #07c160;
	color: #ffffff;
	font-size: 30rpx;
	width: 98rpx;
	height: 74rpx;
	line-height: 74rpx;
	text-align: center;
	display: inline-block;
	border-radius: 10rpx;
}

.chat_jiage_wai {
	height: 200rpx;
	position: relative;
	z-index: 99;
}
.chat_top {
	background-color: #ffffff;
	padding: 0;
	display: flex;
	position: fixed;
	top: 94rpx;
	width: 100%;
	height: 190rpx;
	max-width: 750px;
}

/* 发送价格 */

.send_jia_html {
	width: 467rpx;
	display: inline-block;
	background-color: #e6e6e6;
	padding: 24rpx 0 0 30rpx;
	box-sizing: border-box;
	position: relative;
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
	border-top: 2rpx solid #ffffff;
	justify-content: space-between;
	padding-right: 10rpx;
}
.send_jia_top_r_dizhi {
	margin: 8rpx 0;
}
.send_jia_top_r_dizhi image {
	width: 22rpx;
	height: 20rpx;
	margin-right: 8rpx;
}

.send_jia_top_r p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.send_xuanze {
	background-color: #e6e6e6;
	padding: 20rpx 20rpx;
	width: 470rpx;
	box-sizing: border-box;
}
.send_xuanze view:nth-child(2) {
	margin: 12rpx 0 8rpx;
}
.send_pay_call {
	width: 146rpx;
	height: 44rpx;
	background-color: #f43a51;
	border-radius: 5rpx;
	line-height: 44rpx;
	display: inline-block;
	text-align: center;
	margin-left: 22rpx;
}
.send_jia_lvsuo image {
	width: 20rpx;
	height: 20rpx;
	margin-right: 8rpx;
}
.send_pay_ls {
	display: flex;
	/* margin-left: 25rpx; */
	align-items: center;
	/* border-top: 2rpx solid #ffffff; */
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

.send_pay_bottom {
	/* background-color: #ffffff; */
	padding: 13rpx 0rpx 13rpx 0rpx;
	border-top: 2rpx solid #d9d9d9;
}
.end_pay_leixing {
	display: flex;
	align-items: center;

	margin: 4rpx 0 8rpx;
}
.send_pay_ls_zhiwu {
	margin-top: 8rpx;
	margin-left: 14rpx;
}

.send_fukuan_title {
	display: flex;
	align-items: center;
	/* padding-left: 26rpx; */
	justify-content: space-between;
}
.send_fukuan_title image {
	margin-right: 9rpx;
	width: 16rpx;
	height: 13rpx;
}

.send_jia__bottom button {
	width: 115rpx;
	height: 40rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	line-height: 40rpx;
	margin: 0;
}
.send_jia__bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.send_fukuan_success {
	width: 472rpx;
	padding: 10rpx 0 0;
	position: relative;
	/* background-color: #ffffff; */
}

.send_pay_bottom_neirong {
	word-break: break-all;
}
.send_jia_top_zhiwei {
	margin-left: 14rpx;
}
.send_jia_bottom button {
	width: 115rpx;
	height: 40rpx;
	background-color: #0eb77e;
	border-radius: 5rpx;
	line-height: 40rpx;
	margin: 0;
	padding: 0;
}

.chat_top_xinxi_tx {
	width: 94rpx;
	height: 94rpx;
	border-radius: 100%;
	margin-right: 20rpx;
}
.chat_top_xinxi {
	display: block;
	padding: 20rpx 30rpx 0;
	border-top: 2rpx solid #d9d9d9;
	box-sizing: border-box;
	max-width: 750px;
	height: 218rpx;
}

.chat_top_xinxi_top_left,
.chat_top_xinxi_top,
.chat_top_xinxi_top_right {
	display: flex;
}
.chat_top_xinxi_r {
	width: 176rpx;
	text-align: center;
}
.chat_top_xinxi_top_right {
	border-left: 2rpx solid #f0f0f0;
}
.chat_top_xinxi_top_left_r {
	width: 210rpx;
	/* display: flex; */
	/* align-items: center; */
}
.chat_top_xinxi_bottom {
	display: flex;
	height: 100rpx;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
}
.chat_top_xinxi_bottom_item {
	padding: 0 20rpx;
	height: 56rpx;
	background-color: #feebed;
	border-radius: 3rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.chat_top_xinxi_bottom_item image {
	margin-right: 8rpx;
}
.chat_top_xinxi_dianhua {
	margin: 8rpx 0 14rpx;
}
.chat_top_xinxi_r_num {
	margin: 8rpx 0 16rpx;
	font-weight: bold;
}
.bg {
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
}
.chehui {
	background-color: #ffffff;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 370rpx;
	text-align: center;
}

.chehui_title {
	line-height: 120rpx;
}

.chehui_queding {
	line-height: 106rpx;
	border-top: 2rpx solid #e5e5e5;
	border-bottom: 20rpx solid #f7f7f7;
}
.chehui_quxiao {
	line-height: 106rpx;
}
.chat_chehui_tishi {
	text-align: center;
	margin-bottom: 30rpx;
}
.chat_chehui_tishi .chat_chehui_tishi_txt {
	background-color: #f1f1f1;
	height: 50rpx;
	line-height: 50rpx;
	display: inline-block;
	padding: 0 15rpx;
	border-radius: 6rpx;
}
.chat_chehui_tishi .chat_chehui_tishi_txt text {
	margin-left: 6rpx;
}
.jianpan {
	height: 550rpx;
	background-color: #ffffff;
}

.send_shoufei_html {
	background-color: #ffffff;
	padding: 0;
	box-sizing: border-box;
	margin-bottom: 20rpx;
	position: relative;
	width: 470rpx;
}
.send_shoufei_html::before {
	content: '';
	display: inline-block;
	width: 10rpx;
	height: 20rpx;

	background: url(../../static/lsimg/ls_send_shoufei.png) no-repeat;
	background-size: 100% 100%;
}
.send_shoufei_top {
	background-color: #f8de3f;
	height: 140rpx;
	padding-left: 30rpx;
	display: flex;
	align-items: center;
}
.send_shoufei_top image {
	width: 55rpx;
	height: 56rpx;
	margin-right: 20rpx;
}
.shou_jiage {
	margin-left: 30rpx;
}
.send_shoufei_bottom {
	margin-left: 20rpx;
	line-height: 40rpx;
}

.send_fufei_html {
	background-color: #ffffff;
	padding: 0;
	box-sizing: border-box;
	margin-bottom: 20rpx;
	position: relative;
	border: none;
}
.send_fufei_html::before {
	content: '';
	display: inline-block;
	width: 10rpx;
	height: 20rpx;
	position: absolute;
	top: 20rpx;
	right: -10rpx;
	background: url(../../static/lsimg/ls_zhifu.png) no-repeat;
	background-size: 100% 100%;
}
.send_fufei_html .send_fufei_top {
	background-color: #e1d797;
	height: 140rpx;
	display: flex;
	align-items: center;
	padding-left: 30rpx;
}
.send_fufei_top image {
	width: 54rpx;
	height: 54rpx;
	margin-right: 20rpx;
}
.send_fufei_top_jia {
	margin-left: 30rpx;
}

.yi_fufei {
	text-align: center;
	margin-bottom: 20rpx;
}
.yi_fufei text {
	background-color: #ffffff;
	padding: 6rpx 18rpx;
	border-radius: 8rpx;
}

.send_hongbao_html {
	background-color: #ffffff;
	padding: 0;
	box-sizing: border-box;
	margin-bottom: 20rpx;
	position: relative;
	border: none;
}
.send_hongbao_html::before {
	content: '';
	display: inline-block;
	width: 10rpx;
	height: 20rpx;
	position: absolute;
	top: 20rpx;
	right: -10rpx;
	background: url(../../static/lsimg/ls_hongbao.png) no-repeat;
	background-size: 100% 100%;
}
.send_hongbao {
	width: 470rpx;
	height: 180rpx;
}
.send_hongbao_top {
	background-image: linear-gradient(267deg, #ed7a25 0%, #f0a144 100%), linear-gradient(#e6e6e6, #e6e6e6);
	height: 140rpx;

	background-blend-mode: normal, normal;
	display: flex;
	align-items: center;
	padding-left: 30rpx;
	font-size: 50rpx;
	color: #ffffff;
}
.send_hongbao_top image {
	width: 56rpx;
	height: 80rpx;
	margin-right: 30rpx;
}
.send_hongbao_bottom {
	line-height: 40rpx;
	padding-left: 20rpx;
}
.lingqu {
	width: 360rpx;
	height: 44rpx;
	background-color: #ffffff;
	border-radius: 8rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20rpx;
}
.lingqu image {
	width: 14rpx;
	height: 20rpx;
	margin-right: 6rpx;
}
.changan_input {
	text-align: center;
}
.yuyin_bg {
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
	text-align: center;
}
.tan_yuyin_on {
	width: 462rpx;
	height: 160rpx;
	background-color: #95ec69;
	box-shadow: 2rpx 3rpx 4rpx 0rpx rgba(0, 0, 0, 0.22);

	border-radius: 16rpx;
	position: absolute;
	left: 50%;
	bottom: 700rpx;
	transform: translate(-50%, 0);
	display: flex;
	align-items: center;
	justify-content: center;
}
.tan_yuyin_on image {
	width: 300rpx;
	height: 300rpx;
	position: relative;
	top: -20rpx;
}
.tan_yuyin_no {
	width: 177rpx;
	height: 160rpx;
	background-color: #fa5151;
	box-shadow: 2rpx 3rpx 4rpx 0rpx rgba(0, 0, 0, 0.22);
	position: absolute;
	border-radius: 16rpx;
	left: 50%;
	bottom: 700rpx;
	transform: translate(-50%, 0);
	display: flex;
	align-items: center;
	justify-content: center;
}
.tan_yuyin_no image {
	width: 520rpx;
	height: 180rpx;
}
.tan_yuyin_no::before {
	content: '';
	display: inline-block;
	width: 26rpx;
	height: 15rpx;
	background: url(../../static/lsimg/yuyin_no_bg.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: -15rpx;
	left: 50%;
	transform: translate(-50%, 0);
}
.tan_yuyin_on::before {
	content: '';
	display: inline-block;
	width: 26rpx;
	height: 15rpx;
	background: url(../../static/lsimg/yuyin_on_bg.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: -15rpx;
	left: 50%;
	transform: translate(-50%, 0);
}
.no_quxiao {
	width: 144rpx;
	height: 144rpx;
	margin-bottom: 70rpx;
}
.yuyin_quxiao {
	width: 178rpx;
	height: 178rpx;
}
.tan_yuyin_center {
	position: absolute;
	left: 50%;
	bottom: 290rpx;
	transform: translate(-50%, 0);
}
.tan_yuyin_bottom {
}
.tan_yuyin_bottom_on {
	height: 256rpx;
	background: url(../../static/lsimg/yuyin_bottom_on2.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
.tan_yuyin_bottom_no {
	height: 224rpx;
	background: url(../../static/lsimg/yuyin_bottom_no.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
.tan_yuyin_bottom_no image {
	width: 32rpx;
	height: 48rpx;
	margin-top: 77rpx;
}
.tan_yuyin_bottom_on_txt {
	margin: 40rpx 0 30rpx;
}
.tan_yuyin_bottom_on image {
	width: 32rpx;
	height: 48rpx;
}
.songshou_txt {
	font-size: 30rpx;
	color: #aeaeae;
	margin-bottom: 20rpx;
	font-weight: bold;
}
.chat_yuyin {
	padding-left: 70rpx;
	display: flex;
	align-items: center;
}
.chat_yuyin image {
	width: 20rpx;
	height: 30rpx;
	margin-left: 20rpx;
}
.chat_yuyin_left {
	padding-right: 70rpx;
	display: flex;
	align-items: center;
	position: relative;
	top: 16rpx;
}
.weiting {
	display: inline-block;
	width: 18rpx;
	height: 18rpx;
	position: absolute;
	right: -40rpx;
	top: 24rpx;
	background-color: #fa5150;
	border-radius: 100%;
}
.chat_yuyin_left image {
	width: 20rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
.du_zhuangtai {
	position: absolute;
	right: 0rpx;
	bottom: -32rpx;
}
.send_shoufei,
.chat_right_txt {
	position: relative;
}
.yuyin_bofang {
	display: none;
}
.bofang .yuyin_bofang {
	display: inline-block;
}
.bofang .yuyin_icon {
	display: none;
}
.fufei_success_tips {
	border-top: 2rpx solid #d9d9d9;
	padding: 10rpx 0;
}

.consult_typename {
	margin-bottom: 10rpx;
}
.send_tuikuan {
	width: 476rpx;
}
.send_tuikuan_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 10rpx;
}

.send_tuikuan_bottom {
	border-top: 2rpx solid #f6f6f6;
	margin-top: 20rpx;
	padding-top: 10rpx;
}
.send_tuikuan_bottom view {
	margin-bottom: 10rpx;
}
.send_wenjian_html {
	display: flex;
	align-items: center;
	width: 470rpx;
	justify-content: space-between;
	padding: 20rpx 0;
}
.send_wenjian_html_right image {
	width: 76rpx;
	height: 91rpx;
}
.send_wenjian_html_title {
	margin-bottom: 6rpx;
}
.chat_left_txt .send_wenjian_html {
	position: relative;
}
.chat_left_txt .send_wenjian_html::before {
	position: absolute;
	content: '';
	display: inline-block;
	top: 50%;
	right: -58rpx;
	width: 26rpx;
	height: 26rpx;
	background: url(../../static/img/xiazai.png) no-repeat;
	background-size: 100% 100%;
	transform: translate(0, -50%);
}
.chat_top_xinxi_dizhi{
	max-width: 260rpx;
	
	overflow:hidden; 
	text-overflow:ellipsis; 
	white-space:nowrap; 
}
</style>
