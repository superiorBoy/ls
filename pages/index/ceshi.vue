<template>
	<view class="audioPlay">
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.ACCESS_FINE_LOCATION')">位置权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.ACCESS_COARSE_LOCATION')">模糊位置权限(蓝牙\ble依赖)</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.CAMERA')">摄像头权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')">外部存储(含相册)读取权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')">外部存储(含相册)写入权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.RECORD_AUDIO')">麦克风权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_CONTACTS')">通讯录读取权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.WRITE_CONTACTS')">通讯录写入权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_CALENDAR')">日历读取权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.WRITE_CALENDAR')">日历写入权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_SMS')">短信读取权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.SEND_SMS')">短信发送权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.RECEIVE_SMS')">接收新短信权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_PHONE_STATE')">获取手机识别码等信息的权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.CALL_PHONE')">拨打电话权限</button>
	<button :disabled="isIos" @click="requestAndroidPermission('android.permission.READ_CALL_LOG')">获取通话记录权限</button>
		<button @click="startRecord">开始录音</button>
		<button @click="endRecord">停止录音</button>
		 <!-- <button @touchstart="startRecord" @touchend="endRecord">按住说话,松开结束</button> -->
		<button @tap="playVoice">播放录音</button>
		<view class="status">录音中{{intIntervalTime}}s>>></view>
	</view>
</template>
<script>
	
	import permision from "@/common/permission.js"
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		data() {
			return {
				recorderManager: {},
				innerAudioContext: {},
				voicePath: '',
				intervalTime: 0,
				isRecord:false,
				isIos: false,
				items: ['iOS', 'Android'],
				current: 0
			}
		},
		onLoad() {
			
			let self = this;
			recorderManager.onStart(function (res) {
				
				console.log(JSON.stringify(res),'onStart')
			
			});
			recorderManager.onError(function (res) {
				
				console.log(JSON.stringify(res),'onError')
			
			});
			recorderManager.onStop(function (res) {
				
				console.log('recorder stop' + JSON.stringify(res));
				self.voicePath = res.tempFilePath;
			});
		    },
			 computed: {
			    intIntervalTime() {
			      // 用于显示整数的秒数
			
			      console.log(Math.round(this.intervalTime));
			
			      return Math.round(this.intervalTime);
			    }
			  },
		    methods: {
				onClickItem(index) {
					if (this.current !== index) {
						this.current = index;
					}
				},
				judgeIosPermission: function(permisionID) {
					var result = permision.judgeIosPermission(permisionID)
					console.log(result);
					var strStatus = (result) ? "已" : "未"
					uni.showModal({
						content: permisionID + '权限' + strStatus + "获得授权",
						showCancel: false
					});
				},
				async requestAndroidPermission(permisionID) {
					var result = await permision.requestAndroidPermission(permisionID)
					var strStatus
					if (result == 1) {
						strStatus = "已获得授权"
					} else if (result == 0) {
						strStatus = "未获得授权"
					} else {
						strStatus = "被永久拒绝权限"
					}
					uni.showModal({
						content: permisionID + strStatus,
						showCancel: false
					});
				},
				gotoAppPermissionSetting: function() {
					permision.gotoAppPermissionSetting()
				},
				checkSystemLocationStatus: function() {
					// var result = permision.checkSystemEnableLocation()
					// console.log(result);
					uni.showModal({
						content: '本机的位置服务开启状态：' + permision.checkSystemEnableLocation(),
						showCancel: false
					});
				},
				gotoAndroidPermissionSetting: function() {
					var main = plus.android.runtimeMainActivity(); //获取activity  
					var Intent = plus.android.importClass('android.content.Intent');
					var Settings = plus.android.importClass('android.provider.Settings');
					var intent = new Intent(Settings.ACTION_WIRELESS_SETTINGS); //可设置http://ask.dcloud.net.cn/question/14732这里所有Action字段
					main.startActivity(intent);
				},
		        startRecord() {
		           this.timer = setInterval(() => {
		                  this.intervalTime += 0.5;
		                  if (this.intervalTime >= 0.5 && !this.isRecord) {
		                    //如果用户录制的时间太短,就不会去开启录音, 因为有个bug: recorderManager.stop()在短时间内开启在关闭的话,实际上他还在不停地录音,不知道你们有没有遇到过
		          
		                    console.log("开始录音");
		          
		                    this.isRecord = true;
		          
		                    this.intervalTime = 0;
		          
		                    recorderManager.start({
		                      format: "mp3"
		                    });
		                  }
		                }, 500);
		        },
		        endRecord() {
		            if (this.intervalTime <= 0.5) {
		                   console.log("录音太短了!!!");
		                 }
		           
		                 clearInterval(this.timer);
		           
		                 if (this.isRecord) {
		                   setTimeout(() => {
		                     recorderManager.stop();
		           
		                     this.isRecord = false;
		           
		                     console.log(this.isRecord);
		                   }, 500); //延迟小段时间停止录音, 更好的体验
		                 }
		        },
		        playVoice() {
		            console.log('播放录音');
		            if (this.voicePath) {
		                innerAudioContext.src = this.voicePath;
		                innerAudioContext.play();
		            }
		        }
		    }
	}
</script>


<style>
.audioPlay{
	margin-top: 500rpx;
}
*{
	user-select: none !important;
}
</style>

