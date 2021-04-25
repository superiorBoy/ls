<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold" ></view>
		</view>

		<view class="zi_body shiming_body">
			<view class="xinxi">
				
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">头像</view>
				<view class="shiming_list_right"  @click="up_zheng">
					<image :src="touxiang" mode="" class="touxiang"></image>
					<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
				</view>	
			</view>
			<view class="shiming_list hei_28" @click="go_xiugai(1)">
				<view class="shiming_list_left">昵称</view>
				<view class="shiming_list_right">
				<input type="text" value="" placeholder="" class="hei_26" v-model="name" disabled="true" />
			     <image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>	
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">手机号码</view>
				<input type="text" value="" placeholder="" class="hei_26" v-model="shouji" disabled="true" />
			</view>
			<view class="shiming_list hei_28" @click="go_xiugai(2)">
				<view class="shiming_list_left">Q Q</view>
				<view class="shiming_list_right">
				<input type="text" value="" placeholder="请输入qq" class="hei_26" v-model="qq"  disabled="true"/>
					<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
					</view>
			</view>

			<view class="shiming_list hei_28" @click="go_xiugai(3)">
				<view class="shiming_list_left">微信</view>
				<view class="shiming_list_right">
				<input type="text" value="" placeholder="请输入微信" class="hei_26" v-model="weixin" disabled="true"/>
			<image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
<!-- 			<pickerAddress @change="change" class="aaaaaa">
			<view class="shiming_list hei_28" >
				<view class="shiming_list_left">地址</view>
				<view class="shiming_list_right":class="dizhi?'hei_28':'qian_28'" >
						{{ dizhi?dizhi:'请选择省-市-区' }}
			    <image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
			</pickerAddress> -->
			<view class="shiming_list hei_28" @click="go_xiugai(4)">
				<view class="shiming_list_left">电子邮箱</view>
				<view class="shiming_list_right">
				<input type="text" value="" placeholder="请输入电子邮箱" class="hei_26" v-model="youxiang" disabled="true"/>
			   <image src="../../static/lsimg/go_r.png" mode="" class="go_r"></image>
			</view>
			</view>
					</view>
			<view class=" hei_28 tuichu_btn" @click="tuichu()">
				退出当前账号
				
			</view>
<!-- 			<view class="youshi">
				<view class="youshi_top hei_28">个人优势</view>
				<view class="youshi_bottom hei_24">
					<text v-for="(item, index) in youshi_arry" @click="xuan(item)" :class="{ xuan_txt: arry.includes(item) }">{{ item }}</text>
				</view>
				<view class="add ">
					<input type="text" value="" class="hei_24" v-model="txt" placeholder="不得超过8个字" maxlength="8" />
					<text class="tianjia" @click="tianjia_go">
						<image src="@/static/lsimg/add_jia.png" mode=""></image>
						添加
					</text>
				</view>
			</view> -->

			<!-- <view class="baocun_btn"><button type="" class="bai_30 baocun_b" @click="save">保存</button></view> -->
		</view>
	</view>
</template>

<script>
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';
export default {
	components: {
		pickerAddress
	},
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			name: '',
			shouji: '',
			qq: '',
			weixin: '',
			youxiang: '',
			txt: '',
			arry: [],
			youshi_arry: [
				'有团队',
				'办过大案',
				'会外语',
				'高学历',
				'主任律师',
				'公检法经历',
				'医院工作经历',
				'大型企业服务经验',
				'有顾问单位经验',
				'丰富的专业经验',
				'专利代理经历'
			],
			touxiang:'',
			dizhi:''
		};
	},
	created() {},
	onLoad(option) {
		
		
	},
	onShow() {
		
		// 获取用户信息
				this.$http
					.post({
						url: '/mlawyerapi/user/getlawyer'
					})
					.then(res => {
						this.touxiang=this.img_url+res.data.user.photourl
						this.name=res.data.user.nickname
					    this.shouji=res.data.user.mobile
						this.qq=res.data.user.qq
						this.weixin=res.data.user.weixin
						this.youxiang=res.data.user.email
						this.data=res.data.user
					});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		change(data) {
			console.log(data);
			this.dizhi = data.data.join('-');
		},
		tuichu() {
			// 退出
			this.$http
				.post({
					url: '/lawyer/login/logout'
				})
				.then(res => {
					console.log(res.code)
					if (res.code == 100000) {
						uni.removeStorageSync('ls_chat_list');
						uni.reLaunch({
							url: 'my'
						});
					}
				});
		},
		up_zheng() {
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
							// console.log(base64)
							
							that.$http
								.post({
									url: '/mlawyerapi/lawyer/upnickname',
									data: {
										nickname:that.data.nickname,
										img:base64
									}
								})
								.then(res => {
									console.log(res.code);
									if (res.code == 0) {
										uni.showToast({
											title: '修改成功',
											duration: 2000,
											icon: 'none'
										});
										that.touxiang = base64;
									}
								});
							
							
							
							// that.touxiang = base64;
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
										// that.touxiang = data.target.result;	
										
										that.$http
											.post({
												url: '/mlawyerapi/lawyer/upnickname',
												data: {
													nickname:that.data.nickname,
													img:data.target.result
												}
											})
											.then(res => {
												console.log(res.code);
												if (res.code == 0) {
													uni.showToast({
														title: '修改成功',
														duration: 2000,
														icon: 'none'
													});
													that.touxiang = data.target.result;	
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
		tianjia_go() {
			console.log(this.txt);
			this.youshi_arry.push(this.txt);
			this.txt = '';
		},
		save() {
			console.log(this.arry);
			
			
            this.$http
				.post({
					url: '/mlawyerapi/user/uplawyer',
					data:{
						email:this.youxiang,
						qq:this.qq,
						weixin:this.weixin
					}
				})
				.then(res => {
					console.log(res.code)
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000,
							icon: "none"
						});
						
					}
				});
				
				
			console.log(this.name, this.shouji, this.qq, this.weixin, this.youxiang);
		},
		xuan(i) {
			let that = this;
			if (that.arry.includes(i)) {
				//includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
				//filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
				that.arry = that.arry.filter(function(ele) {
					return ele != i;
				});
				//this.arr=this.arr.filter((ele)=>ele!=i);
				//filter()为假时删除
			} else {
				if (that.arry.length < 3) {
					that.arry.push(i);
				} else {
					uni.showToast({
						title: '最多选择3项',
						duration: 2000,
						icon: 'none'
					});
				}
			}
		},
		go_xiugai(state){
			uni.navigateTo({
				url:'geren_xinxi_xiugai?state='+state
			})
		}
	}
};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
page{
	background-color:#f9f9f9 ;
}
.xinxi{
padding: 0 30rpx;
background-color: #ffffff;
}
.shiming_list {
	height: 130rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e8e8e8;

	position: relative;
	
}

.youshi {
	padding-left: 30rpx;
	padding-right: 30rpx;
}

.youshi_top {
	line-height: 100rpx;
}

.shiming_list input {
	width: 500rpx;
	text-align: right;
}

.shiming_list_left {
	width: 170rpx;
}

.zhuanchang_xuan {
	/* width: 500rpx; */
	padding-right: 30rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
}

.zhuanchang_xuan image {
	width: 13rpx;
	height: 23rpx;
	position: absolute;
	right: 30rpx;
}

.baocun_btn {
	padding: 0 30rpx;
	margin-top: 90rpx;
}

.baocun_b {
	height: 88rpx;
	background-color: #f43a51;
	border-radius: 44rpx;
	line-height: 88rpx;
}

.hui {
	background-color: #999999;
	color: #ffffff;
	border-radius: 44px;
}

.tx {
	width: 80rpx;
	height: 80rpx;
	border-radius: 100%;
	border: 2rpx solid #eeeeee;
}

.tx_up {
	height: 80rpx;
	width: 100rpx;
	color: #777777;
	line-height: 80rpx;
}

.genghuan {
	width: 14rpx;
	height: 24rpx;
	margin-left: 12rpx;
}

.shiming_list_right {
	display: flex;
	align-items: center;
}
.youshi_bottom {
	display: flex;
	flex-wrap: wrap;
}
.youshi_bottom text {
	margin-right: 6rpx;
	margin-bottom: 15rpx;
	display: inline-block;
	height: 36rpx;
	line-height: 36rpx;
	border: 2rpx solid #e8e8e8;
	padding: 0 8rpx;
}
.add {
	display: flex;
	align-items: center;
}
.add input {
	border: 2rpx solid #e8e8e8 !important;
	margin-right: 10rpx;
	height: 42rpx !important;
	box-sizing: border-box;
	padding-left: 10rpx;
}
.tianjia {
	display: inline-block;
	height: 40rpx;
	width: 100rpx;
	font-size: 26rpx;
	text-align: center;
	border: 2rpx solid #e8e8e8;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 !important;
}
.tianjia image {
	width: 15rpx;
	height: 15rpx;
	vertical-align: middle;
	margin-right: 4rpx;
}
.xuan_txt {
	background-color: #f43a51;
	color: #ffffff;
}
.touxiang{
		width: 80rpx;
		height: 80rpx;
		border-radius: 100% 100%;
}
.go_r{
	width: 14rpx;
		height: 24rpx;
		margin-left: 12rpx;
}
.tuichu_btn{
	height: 130rpx;
	background-color: #FFFFFF;
	margin-top: 20rpx;
	line-height: 130rpx;
	padding-left: 30rpx;
}
</style>
