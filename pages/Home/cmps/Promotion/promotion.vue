<style lang='scss'>
	.promotion {
		width: 100%;
		margin: 20px 0;
		.text {
			width: 100%;
			height: 60upx;
			font-size: 34upx;
			font-weight: 600;
			margin: 10upx;
		}

		.list {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.column {
				width: 43%;
				padding: 15upx 3%;
				background-color: #ebf9f9;
				border-radius: 10upx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.top {
					width: 100%;
					height: 40upx;
					display: flex;
					align-items: center;
					margin-bottom: 5upx;

					.title {
						font-size: 30upx;
					}
				}

				.left {
					width: 50%;
					height: 18.86vw;
					display: flex;
					flex-wrap: wrap;
					align-content: space-between;

					.ad {
						margin-top: 5upx;
						width: 100%;
						font-size: 22upx;
						color: #acb0b0;
					}

					.into {
						width: 100%;
						font-size: 24upx;
						color: #aaa;
						margin-bottom: 5upx;
					}
				}

				.right {
					width: 18.86vw;
					height: 18.86vw;

					image {
						width: 18.86vw;
						height: 18.86vw;
					}
				}
			}
		}
	}
</style>

<template>
	<view class="promotion" v-if="promotion.length > 0">
		<view class="text">优惠活动</view>
		<view class="list">
			<view @tap="handlePromotion(item)" class="column" v-for="(item,index) in promotion" :key="index">
				<view class="top">
					<view class="title">{{item.title}}</view>
				</view>
				<view class="left">
					<view class="ad">{{item.ad}}</view>
					<view class="into">点击进入</view>
				</view>
				<view class="right">
					<image :src="item.img"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			promotion: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>
