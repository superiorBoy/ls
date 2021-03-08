<template>
	<view class="">
		<view class="head">
			<view class="head_back" style="width: 10%;"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center " style="width: 80%;">
				<view class="hei_38_bold top_title">{{ title }}</view>
				<view class="hong_20 chat_lvsuo">剩余咨询时间:{{day}}天{{hour}}:{{minute}}:{{seconds}}</view>
			</view>
			<view class=" head_right hei_30_bold" style="width: 10%;"></view>
		</view>

		<view class="zi_body" >
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
							<image :src="img_url+yh_user.photourl" mode="" class="chat_top_xinxi_tx"></image>
							<view class="chat_top_xinxi_top_left_r hui_22">
								<view class="chat_top_xinxi_dianhua">
									<image src="@/static/lsimg/chat_shouji.png" mode="" style="width: 13rpx;height: 17rpx;margin-right: 8rpx;"></image>
									{{dianhua}}
								</view>
								<!-- <view class="chat_top_xinxi_dizhi">
									<image src="@/static/lsimg/chat_dizhi.png" style="width: 16rpx;height: 22rpx;margin-right: 8rpx;" mode=""></image>浙江-杭州
								</view> -->
							</view>
							
						</view>
						<view class="chat_top_xinxi_top_right">
							<view class="chat_top_xinxi_r hei_26">
								<view class="chat_top_xinxi_r_num">
									{{zixuncount.zaixian}}
								</view>
								<view class="qian_24">
									咨询订单 
								</view>
							</view>
							<view class="chat_top_xinxi_r hei_26">
								<view class="chat_top_xinxi_r_num">
									{{zixuncount.dianhua}}
								</view>
								<view class="qian_24">
									电话订单 
								</view>
							</view>
							
						</view>
					</view>
					<view class="chat_top_xinxi_bottom hong_24">
						<view class="chat_top_xinxi_bottom_item" @click="send_huanying()">
							<image src="@/static/lsimg/send_huanying.png" mode="" style="width:18rpx ;height: 21rpx;"></image>发送欢迎语
						</view>
						<view class="chat_top_xinxi_bottom_item" @click="send_zaixian()">
						<image src="@/static/lsimg/send_xiaoxi.png" mode="" style="width: 22rpx;height: 23rpx;"></image>发送咨询收费
						</view>
						<view class="chat_top_xinxi_bottom_item" @click="send_dianhua()">
						<image src="@/static/lsimg/send_dianhua.png" mode="" style="width:20rpx ;height: 20rpx;"></image>发送电话收费
						</view>
					</view>
				</view>
			</view>

			<view :class="['chat_body', bt_show ? 'chat_body_jia' : '']" @click="tan_hide">
				<view class="time qian_20" v-if="message != ''">{{ message[0].addtime | timeStamp }}</view>
				<view v-for="(item, index) in message">
					<view class="time qian_20" v-if="index > 1 && message[index].addtime - message[index - 1].addtime > 300">{{ message[index].addtime | timeStamp }}</view>
					<view class="chat_list chat_right" v-if="item.userid_from != userid &&item.msgtype == 2">
						<view class="chat_right_txt hei_30">
							<!-- {{item.content}} -->
							<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->
							<image :src="img_url + item.content" mode="widthFix"  style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
						
							<!-- <image :src="item.content" mode="widthFix" v-if="item.to != undefined" style="max-width: 100rpx;" ></image> -->
						</view>
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
					</view>
          <view class="chat_list chat_right" v-if="item.userid_from != userid &&item.msgtype == 1">
          	<view class="chat_right_txt hei_30">
          		<!-- {{item.content}} -->
          		<!-- <image :src="url+img"  mode="" v-if="item.msgtype==4" style="height: 40rpx;width: 40rpx;"></image> -->
          		
          		<u-parse :content="replace_em(item.content)"></u-parse>
          
          		<image :src="item.content" mode="widthFix" v-if="item.to != undefined" style="max-width: 100rpx;"></image>
          	</view>
          	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
          </view>
		  <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==3">
		  	<view class="chat_right_txt hei_30">
		  		<view class="send_jia_html">
		  			<view class="send_jia_top">
		  				<image :src="img_url+user.photourl" mode=""></image>
		  				<view class="send_jia_top_r hui_20">
		  					<view class="hui_24">
		  						{{user.nickname}}律师
		  						<text class="qian_20 send_jia_top_zhiwei">{{renzheng.zhiwu}}</text>
		  					</view>
		  					<view class="send_jia_top_r_dizhi">
		  						<image src="@/static/img/chat_dizhi.png" mode=""></image>
		  						{{renzheng.province}}-{{renzheng.city}}-{{renzheng.area}}
		  					</view>
		  					<view class="send_jia_lvsuo">
		  						<image src="@/static/img/chat_lvsuo.png" mode=""></image>
		  						{{renzheng.lvsuo}}
		  					</view>
		  				</view>
		  			</view>
		  			<view class="send_jia_shangchang hei_24">
		  				擅长:
		  				<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">{{zhuanchang_arry[renzheng.expertise1].shanchangname}}</text>
		  				<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">{{zhuanchang_arry[renzheng.expertise2].shanchangname}}</text>
		  				<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">{{zhuanchang_arry[renzheng.expertise3].shanchangname}}</text>
		  			</view>
		  			<view class="send_jia_bottom style_hei_14">
		  				<view>
		  					<text class="hei_24" style="margin-right: 20rpx;">电话咨询</text>
		  					<text class="hong_24">￥{{user.phoneprice}}/20分钟</text>
		  				</view>
		  				<button type="button" class="bai_24">立即购买</button>
		  			</view>
		  		</view>
		  		
		  	</view>
		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
		  </view>
		  
		  <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==4">
		  	<view class="chat_right_txt hei_30">
		  		<view class="send_jia_html">
		  			<view class="send_jia_top">
		  				<image :src="img_url+user.photourl" mode=""></image>
		  				<view class="send_jia_top_r hui_20">
		  					<view class="hui_24">
		  						{{user.nickname}}律师
		  						<text class="qian_20 send_jia_top_zhiwei">{{renzheng.zhiwu}}</text>
		  					</view>
		  					<view class="send_jia_top_r_dizhi">
		  						<image src="@/static/img/chat_dizhi.png" mode=""></image>
		  						{{renzheng.province}}-{{renzheng.city}}-{{renzheng.area}}
		  					</view>
		  					<view class="send_jia_lvsuo">
		  						<image src="@/static/img/chat_lvsuo.png" mode=""></image>
		  						{{renzheng.lvsuo}}
		  					</view>
		  				</view>
		  			</view>
		  			<view class="send_jia_shangchang hei_24">
		  				擅长:
		  				<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">{{zhuanchang_arry[renzheng.expertise1].shanchangname}}</text>
		  				<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">{{zhuanchang_arry[renzheng.expertise2].shanchangname}}</text>
		  				<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">{{zhuanchang_arry[renzheng.expertise3].shanchangname}}</text>
		  			</view>
		  			<view class="send_jia_bottom style_hei_14">
		  				<view>
		  					<text class="hei_24" style="margin-right: 20rpx;">在线咨询咨询</text>
		  					<text class="hong_24">￥{{user.chatprice}}/天</text>
		  				</view>
		  				<button type="button" class="bai_24">立即购买</button>
		  			</view>
		  		</view>
		  		
		  	</view>
		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
		  </view>
 <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==5">
		  	<view class="chat_right_txt hei_30">
		  		<view class="send_xuanze hei_26">
		  			<view>描述完之后，选择一下您方便的咨询的方式：</view>
		  			<view class="hong_26" style="margin-bottom: 10rpx;"  @click="send_zaixian()">【在线咨询-可看记录】</view>
		  			<view class="hong_26"  @click="send_dianhua()">【电话咨询-时时对话】</view>
		  		</view>
		  		
		  	</view>
		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
		  </view>
		  <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==6">
		  		  	<view class="chat_right_txt hei_30">
		  		  		<view class="send_fukuan_success">
		  		  			<view class="lv_26 send_fukuan_title">
		  		  				<image src="@/static/img/chat_duihao.png" mode=""></image>
		  		  				付款成功
		  		  			</view>
		  		  			<view class="send_pay_ls">
		  		  				<image :src="img_url + user.photourl" mode=""></image>
		  		  				<view class="send_pay_ls_riht">
		  		  					<view class="end_pay_leixing hei_26">
		  		  						电话咨询
		  		  						<view class="hong_26">
		  		  							&ensp;￥
		  		  							<text class="style_hong_16_bold">{{item.consult.paymoney}}</text>
		  		  							/20分钟
		  		  						</view>
		  		  					</view>
		  		  					<view class="hei_20">
		  		  						{{user.nickname}}律师
		  		  						<text class="qian_20 send_pay_ls_zhiwu">{{renzheng.zhiwu}}</text>
		  		  					</view>
		  		  				</view>
		  		  			</view>
		  		  			<view class="send_pay_bottom hei_24">
		  		  				<view>
		  		  					手机号码：{{item.consult.phone}}
		  		  					<text class="send_pay_call bai_24" @click="call2(item.consult.phone)">打电话给他</text>
		  		  				</view>
		  		  				<view>咨询类型：{{item.consult.typename}}</view>
		  		  				<view class="send_pay_bottom_neirong">咨询内容：{{item.consult.information}}</view>
		  		  			</view>
		  		  		</view>
		  		  		
		  		  	</view>
		  		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
		  		  </view>
				  <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==7">
				  		  	<view class="chat_right_txt hei_30">
				  		  		<view class="send_fukuan_success">
				  		  			<view class="lv_26 send_fukuan_title">
				  		  				<image src="@/static/img/chat_duihao.png" mode=""></image>
				  		  				付款成功
				  		  			</view>
				  		  			<view class="send_pay_ls">
				  		  				<image :src="img_url + user.photourl" mode=""></image>
				  		  				<view class="send_pay_ls_riht">
				  		  					<view class="end_pay_leixing hei_26">
				  		  						在线咨询
				  		  						<view class="hong_26">
				  		  							&ensp;￥
				  		  							<text class="style_hong_16_bold">{{item.consult.paymoney}}</text>
				  		  							/天
				  		  						</view>
				  		  					</view>
				  		  					<view class="hei_20">
				  		  						{{user.nickname}}律师
				  		  						<text class="qian_20 send_pay_ls_zhiwu">{{renzheng.zhiwu}}</text>
				  		  					</view>
				  		  				</view>
				  		  			</view>
				  		  			<view class="send_pay_bottom hei_24">
				  		  				<view>
				  		  					手机号码：{{item.consult.phone}}
				  		  					<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
				  		  				</view>
				  		  				<view>咨询类型：{{item.consult.typename}}</view>
				  		  				<view class="send_pay_bottom_neirong">咨询内容：{{item.consult.information}}</view>
				  		  			</view>
				  		  		</view>
				  		  		
				  		  	</view>
				  		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
				  		  </view>
		  <view class="chat_list chat_right" v-if="item.userid_from != userid && item.msgtype==8">
		  		  	<view class="chat_right_txt hei_30">
		  		  		<view class="send_xuanze hei_26">
		  		  			<view class="">
		  		  				您的服务已到期，请重新订购服务
		  		  			</view>
		  		  			<view>描述完之后，选择一下您方便的咨询的方式：</view>
		  		  			<view class="hong_26" style="margin-bottom: 10rpx;"  @click="send_zaixian()">【在线咨询-可看记录】</view>
		  		  			<view class="hong_26"  @click="send_dianhua()">【电话咨询-时时对话】</view>
		  		  		</view>
		  		  		
		  		  	</view>
		  		  	<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
		  		  </view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid &&item.msgtype == 1">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							
							<view v-if="item.msgtype == 1"><u-parse :content="replace_em(item.content)"></u-parse></view>
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid &&item.msgtype == 2">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<image :src="img_url + item.content" mode="widthFix"  style="max-width: 100rpx;" @click="clickImg(img_url + item.content)"></image>
							
						</view>
					</view>
					
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==3">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url+user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{user.nickname}}律师
											<text class="qian_20 send_jia_top_zhiwei">{{renzheng.zhiwu}}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{renzheng.province}}-{{renzheng.city}}-{{renzheng.area}}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{renzheng.lvsuo}}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">{{zhuanchang_arry[renzheng.expertise1].shanchangname}}</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">{{zhuanchang_arry[renzheng.expertise2].shanchangname}}</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">{{zhuanchang_arry[renzheng.expertise3].shanchangname}}</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">电话咨询</text>
										<text class="hong_24">￥{{user.phoneprice}}/20分钟</text>
									</view>
									<button type="button" class="bai_24">立即购买</button>
								</view>
							</view>
							
						</view>
					</view>
					
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==4">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_jia_html">
								<view class="send_jia_top">
									<image :src="img_url+user.photourl" mode=""></image>
									<view class="send_jia_top_r hui_20">
										<view class="hui_24">
											{{user.nickname}}律师
											<text class="qian_20 send_jia_top_zhiwei">{{renzheng.zhiwu}}</text>
										</view>
										<view class="send_jia_top_r_dizhi">
											<image src="@/static/img/chat_dizhi.png" mode=""></image>
											{{renzheng.province}}-{{renzheng.city}}-{{renzheng.area}}
										</view>
										<view class="send_jia_lvsuo">
											<image src="@/static/img/chat_lvsuo.png" mode=""></image>
											{{renzheng.lvsuo}}
										</view>
									</view>
								</view>
								<view class="send_jia_shangchang hei_24">
									擅长:
									<text v-if="zhuanchang_arry[renzheng.expertise1] && zhuanchang_arry[renzheng.expertise1].shanchangname">{{zhuanchang_arry[renzheng.expertise1].shanchangname}}</text>
									<text v-if="zhuanchang_arry[renzheng.expertise2] && zhuanchang_arry[renzheng.expertise2].shanchangname">{{zhuanchang_arry[renzheng.expertise2].shanchangname}}</text>
									<text v-if="zhuanchang_arry[renzheng.expertise3] && zhuanchang_arry[renzheng.expertise3].shanchangname">{{zhuanchang_arry[renzheng.expertise3].shanchangname}}</text>
								</view>
								<view class="send_jia_bottom style_hei_14">
									<view>
										<text class="hei_24" style="margin-right: 20rpx;">在线咨询</text>
										<text class="hong_24">￥{{user.chatprice}}/天</text>
									</view>
									<button type="button" class="bai_24">立即购买</button>
								</view>
							</view>
							
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==5">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
	
								<view>描述完之后，选择一下您方便的咨询的方式：</view>
								<view class="hong_26" style="margin-bottom: 10rpx;"  @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26"  @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
							
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==6">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											电话咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{item.consult.paymoney}}</text>
												/20分钟
											</view>
										</view>
										<view class="hei_20">
											{{user.nickname}}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{renzheng.zhiwu}}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{item.consult.phone}}
										<text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text>
									</view>
									<view>咨询类型：{{item.consult.typename}}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{item.consult.information}}</view>
								</view>
							</view>
							
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==7">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_fukuan_success">
								<view class="lv_26 send_fukuan_title">
									<image src="@/static/img/chat_duihao.png" mode=""></image>
									付款成功
								</view>
								<view class="send_pay_ls">
									<image :src="img_url + user.photourl" mode=""></image>
									<view class="send_pay_ls_riht">
										<view class="end_pay_leixing hei_26">
											在线咨询
											<view class="hong_26">
												&ensp;￥
												<text class="style_hong_16_bold">{{item.consult.paymoney}}</text>
												/天
											</view>
										</view>
										<view class="hei_20">
											{{user.nickname}}律师
											<text class="qian_20 send_pay_ls_zhiwu">{{renzheng.zhiwu}}</text>
										</view>
									</view>
								</view>
								<view class="send_pay_bottom hei_24">
									<view>
										手机号码：{{item.consult.phone}}
										<!-- <text class="send_pay_call bai_24"@click="call2(item.consult.phone)">打电话给他</text> -->
									</view>
									<view>咨询类型：{{item.consult.typename}}</view>
									<view class="send_pay_bottom_neirong">咨询内容：{{item.consult.information}}</view>
								</view>
							</view>
							
						</view>
					</view>
					<view class="chat_list chat_left" v-if="item.userid_from == userid && item.msgtype==8">
						<image :src="img_url + item.photourl_form" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							<!-- <text class="ls_name">{{ title }}</text> -->
							<view class="send_xuanze hei_26">
								<view class="">
									您的服务已到期，请重新订购服务
								</view>
								<view>描述完之后，选择一下您方便的咨询的方式：</view>
								<view class="hong_26" style="margin-bottom: 10rpx;"  @click="send_zaixian()">【在线咨询-可看记录】</view>
								<view class="hong_26"  @click="send_dianhua()">【电话咨询-时时对话】</view>
							</view>
							
						</view>
					</view>
					
					<view class="chat_list chat_left" v-if="item.msgtype==9">
						<image src="@/static/img/xitong.png" mode="" class="tx"></image>
						<view class="chat_left_txt hei_30">
							系统提示，由于您超时未服务，订单已取消
						</view>
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
				</view>
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
		this.userid = option.userid;
		this.huoqu_xiaoxi_list();
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
			this.huoqu_renzheng()
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
	onUnload() {
		console.log('onUnload');
		this.time1='0'
		// #ifdef APP-PLUS
		socket.closeSocket();
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
			img_url: uni.getStorageSync('img_url'),
			message: [],
			page: 0,
			is_all: false,
			userid: '',
			dianhua: '',
			is_fa: false,
			yh_user: '',
			renzheng:'',
			zhuanchang_arry:[],
			day:0,
			hour:'00',
			minute:'00',
			seconds:'00',
			time1:'0',
			zixuncount:''
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

		huoqu_xiaoxi_list() {
			var that=this
			this.$http
				.post({
					url: '/mlawyerapi/consult/chatdeatils',
					data: {
						page: this.page,
						userid: this.userid
					}
				})
				.then(res => {
					this.message = res.data.message;
					this.title = res.data.user_to.mobile;
					this.dianhua = res.data.user_to.mobile;
					this.yh_user = res.data.user_to;
					this.zixuncount=res.data.zixuncount
					setTimeout(() => {
						uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
					}, 200);
					that.time1 = res.data.shijian
					console.log(that.time1)
					// 倒计时
					var interval = setInterval(function () {
					    var to = new Date(that.time1.replace(/-/g, "/"));
					    var now = new Date();
					    var time = to.getTime() - now.getTime();
						
					    if(time < 0){
					        clearInterval(interval);
					    }else {
					
					        var day = parseInt(time / 1000 / 60 / 60 / 24);
					        var hour = parseInt(time / 1000 / 60 / 60 % 24);
					        var minute = parseInt(time / 1000 / 60 % 60);
					        var seconds = parseInt(time / 1000 % 60);
					        if (minute <= 9) minute = '0' + minute;
					        if (seconds <= 9) seconds = '0' + seconds;
					
					       that.day=day
						   that.hour=hour
						   that.minute=minute
						   that.seconds=seconds
								
					    }
						
					}, 1000);
				});
		},
		huoqu_renzheng(){
			
			this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data: {
						type:2
					}
				})
				.then(res => {
					this.renzheng=res.data.lawyerauth
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
			console.log(Object.assign(uni, socket));
			var url = that.$http.WebSocket_url;

			socket.connectSocket({
				url: 'wss://' + url + ':3348',
				success(data) {
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
							client_id: data.client_id,
							type:1
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
						var xiaoxi = {
							photourl_form: data.userid_from_pic,
							userid_to: data.userid_to,
							photourl_to: data.userid_to_pic,
							content: data.msg,
							msgtype: data.state,
							userid_from: data.userid_from
						};

						if (that.user.userid != data.userid_from) {
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
		input_change() {
			if (this.chat_txt == '') {
				this.is_fa = false;
			} else {
				this.is_fa = true;
			}
		},
		send() {
			console.log(this.chat_txt);

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
		},
		send_huanying(){
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
							photourl_form: this.user.photourl
						};
						this.message.push(data);
						setTimeout(() => {
							uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
						}, 100);
					
					}
				});
		},
		send_zaixian(){
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
							photourl_form: this.user.photourl
						};
						this.message.push(data);
					setTimeout(() => {
						uni.pageScrollTo({ scrollTop: 99999, duration: 0 });
					}, 100);
					}
				});
		},	
		send_dianhua(){
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
							photourl_form: this.user.photourl
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
									url: '/index/zixun/uploadimgmessage',
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
							photourl_form: this.user.photourl
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
		clickImg(img){
				uni.previewImage({
								urls: [""+img], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
								current: '', // 当前显示图片的http链接，默认是第一个
								success: function(res) {},
								fail: function(res) {},
								complete: function(res) {},
							})
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

					that.$http
						.post({
							url: '/push/gatewayworker/bind',
							data: {
								client_id: data.client_id,
								type:1
							}
						})
						.then(res => {
							console.log(res, 'bind');
						});
				} else if (data.type == 'say') {
					console.log('say');
					if (data.state) {
						var xiaoxi = {
							photourl_form: data.userid_from_pic,
							userid_to: data.userid_to,
							photourl_to: data.userid_to_pic,
							content: data.msg,
							msgtype: data.state,
							userid_from: data.userid_from
						};
						that.message.push(xiaoxi);
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
	padding-bottom: 354rpx;
}

.chat_left_txt {
	max-width: 470rpx;
	border: solid 2rpx #d9d9d9;
	position: relative;
	padding: 10rpx 20rpx;
	border-radius: 10rpx;
	top: 20rpx;
	word-break: break-all;
	background-color: #FFFFFF;
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
}
.chat_left{
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

.send_pay_bottom {
	background-color: #ffffff;
	padding: 13rpx 0rpx 13rpx 20rpx;
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
	padding-left: 26rpx;
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
	
	background-color: #ffffff;
}

.send_pay_bottom_neirong {
	word-break: break-all;
}
.send_jia_top_zhiwei{
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


.chat_top_xinxi_tx{
		width: 94rpx;
		height: 94rpx;
		border-radius: 100%;
		margin-right: 20rpx;
}
.chat_top_xinxi{
	display: block;
	padding:20rpx 30rpx 0;
	border-top: 2rpx solid #d9d9d9;
	    box-sizing: border-box;
		max-width: 750px;
			height: 218rpx;
}

.chat_top_xinxi_top_left,.chat_top_xinxi_top,.chat_top_xinxi_top_right{
	display: flex;
	}
	.chat_top_xinxi_r{
		width: 176rpx;
		text-align: center;
	}
	.chat_top_xinxi_top_right{
		border-left: 2rpx solid #f0f0f0;
	}
	.chat_top_xinxi_top_left_r{
		width: 210rpx;
		display: flex;
		    align-items: center;
	}
	.chat_top_xinxi_bottom{
		display: flex;
		height:100rpx ;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		
	}
	.chat_top_xinxi_bottom_item{
		width: 216rpx;
			height: 56rpx;
			background-color: #feebed;
			border-radius: 3rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
	}
	.chat_top_xinxi_bottom_item image{
		margin-right: 8rpx;
	}
	.chat_top_xinxi_dianhua{
		margin: 8rpx 0 14rpx;
	}
	.chat_top_xinxi_r_num{
		margin: 8rpx 0 16rpx;
		font-weight: bold;
	}
</style>
