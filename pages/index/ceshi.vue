<template>
	<view class="audioPlay">
		<!-- <button @click="startRecord">开始录音</button> -->
		<!-- <button @tap="endRecord">停止录音</button> -->
		 <button @touchstart="startRecord" @touchend="endRecord">按住说话,松开结束</button>
		<button @tap="playVoice">播放录音</button>
		<view class="status">录音中{{intIntervalTime}}s>>></view>
	</view>
</template>
<script>
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
				isRecord:false
			}
		},
		onLoad() {
			
			let self = this;
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
</style>

