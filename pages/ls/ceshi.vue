<template>

	<view class="body">
	
	<l-painter :board="base"/>
	</view>



</template>

<script>
	import lPainter from '@/uni_modules/lime-painter/components/lime-painter/'
	export default {
		    components: {lPainter},

 onReady: function (e) {
        

     
    },
		data() {
			return {
				  base: {
				                width: '686rpx',
				                height: '130rpx',
				                views: [
				                    {
				                        type: 'view',
				                        css: {
				                            left: '0rpx',
				                            top: '0rpx',
				                            background: '#07c160',
				                            width: '120rpx',
				                            height: '120rpx'
				                        }
				                    },
				                    {
				                        type: 'view',
				                        css: {
				                            left: '180rpx',
				                            top: '18rpx',
				                            background: '#1989fa',
				                            width: '80rpx',
				                            height: '80rpx',
				                            transform: 'transform: rotate(50deg)'
				                        }
				                    }
				                ]
				            }
			}
		},
		created() {

		},
		onLoad(option) {
          
          	
		   

		},
		methods: {
	
		// 根据百分百计算px  主要用于结算页面高度
			getPersentageH(p){
				p = p /100
				let h = uni.getSystemInfoSync().screenHeight
				return parseInt(h * p)
			},
			// 画布方法
			draw(){
				/* 创建canvas实例 */
				let ctx = uni.createCanvasContext('myCanvas');
				/* 绘制背景图 */ 
				 // this.path 根据项目中使用到的图片进行赋值
				ctx.drawImage(this.path,0,0,this.canvasW,this.canvasH);
				/* 设置字体颜色 */
				ctx.setFillStyle('#F76260')
				/* 设置字体大小 和字体family */
				ctx.font=`${uni.upx2px(30)}px Arial`;
				/* 设置字体对齐方式 */
				ctx.setTextAlign('center')
				/* 设置文字内容以及 canvas的位置 */
				ctx.fillText('十五个字十五个字十五个字十五个', this.canvasW/2, this.getPersentageH(61))
				/* 设置头像背景色，用于确定位置 */
				ctx.setFillStyle('#FBBD08')
				/* 在画圆截取图片之前保存当前canvas的所有内容 */
				ctx.save()
				/* 画笔开始 */
				ctx.beginPath()
				/* 画圆方法 坐标，坐标，半径，起始位置，结束位置（画圆固定 2 * Math.PI） */
				ctx.arc(uni.upx2px(377), this.getPersentageH(54), uni.upx2px(61), 0, 2 * Math.PI)
				/* canvas 截取API */
				ctx.clip()
				/* canvas 连接起始位置API */
				ctx.fill()
				/* 插入图片（头像） */
				ctx.drawImage(this.path1, uni.upx2px(315), this.getPersentageH(50.3),uni.upx2px(122),uni.upx2px(122))
				/* 截取图片后只能在截取部分现在，这一步是恢复画布 */
				ctx.restore()
				/* 放置最下方二维码 */
				ctx.drawImage(this.path, uni.upx2px(274), this.getPersentageH(67),uni.upx2px(204),uni.upx2px(204));
				/* 执行canvas的开始画画方法 */
				ctx.draw()
			},
			
			save_temp(){
				uni.canvasToTempFilePath({
					canvasId: 'myCanvas',
					success: res => {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							complete: msg => console.log(msg)
						})
					},
					fail: err => console.log(err)
				})
			}


		}
	}
</script>

<style>
	
</style>
