<style lang="scss">
	.banner {
		width: 100%;
		height: 0;
		padding-bottom: 49.12%;
		position: relative;
		&_box {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: hidden;
			border-radius: 20upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			swiper {
				width: 100%;
				height: 100%;
				swiper-item {
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
			
			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;
			
				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;
			
					&.on {
						width: (100%/3);
					}
				}
		}
	}
	}
</style>
<template>
	<view class='banner'>
		<view class="banner_box">
			<swiper circular='true' :autoplay="true" @change="bannerChange">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image :src="item.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				<view :class="{'on':currentIndex >= index}" class="dots" v-for="(swiper,index) in bannerList" :key="index"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			bannerChange(e) {
				this.currentIndex = e.detail.current
			}
		},
	}
</script>
