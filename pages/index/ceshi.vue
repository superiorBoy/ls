<template>
<view class="content d-flex-center flex-direction-column vh-100" id="_poster">
	
	<view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view><view class="">
		1111111
	</view>
		<image :src="test" mode="aspectFit" class="test"></image>		
	</view>

	
</template>

<script>

	export default {
	onShow() {
		
	},

	data() {
		return {
			test: ''
		};
	},
	created() {},
	onReady() {
			const that = this;
	        //防止切图成白屏
			setTimeout(function() {
				that.toImage();
			}, 1000);
		},
    onLoad(option) {
    	
    },
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	/* 截图 */
			toImage() {
				const that = this;
				/* 获取屏幕信息 */
				let ws = this.$mp.page.$getAppWebview();
				let bitmap = new plus.nativeObj.Bitmap('test');
				// 将webview内容绘制到Bitmap对象中
				ws.draw(
					bitmap,
					function(e) {
						/* 获取base64 */
						that.test= bitmap.toBase64Data();
						/* 加载base64编码 */
						bitmap.loadBase64Data(
							bitmap.toBase64Data(),
							function() {
								console.log('加载Base64图片数据成功');
								/* 保存图片 */
								bitmap.save(
									'_doc/share.jpg',
									{},
									async (i)=>{
										console.log('保存图片成功：' + JSON.stringify(i));
										uni.saveImageToPhotosAlbum({
											filePath: i.target,
											success: function() {
												/* 清除 */
												bitmap.clear();
												that.tools.toast('保存成功,请到相册中查看')
											},
											fail(e) {
												that.tools.toast('保存失败')
											}
										});
									},
									function(e) {
										console.log('保存图片失败：' + JSON.stringify(e));
									}
								);
							},
							function() {
								console.log('加载Base64图片数据失败：' + JSON.stringify(e));
							}
						);
					},
					function(e) {
						console.log('截屏绘制图片失败：' + JSON.stringify(e));
					},
					{
						check: true, // 设置为检测白屏
						clip: { top: '100px', left: '0px', height: '100%', width: '100%' } // 设置截屏区域
					}
				);
			},
	

		
		
	}
	}
</script>

<style>
	

</style>
