
<style lang='scss'>
	.category-list {
		width: 100%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	
		.category {
			width: 25%;
			margin-top: 50upx;
			display: flex;
			flex-wrap: wrap;
	
			.img {
				width: 100%;
				display: flex;
				justify-content: center;
	
				image {
					width: 11vw;
					height: 11vw;
				}
			}
	
			.text {
				margin-top: 16upx;
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 24upx;
				color: #3c3c3c;
			}
		}
	}
</style>
<template>
	<view class="category-list">
		<view @tap="handleCategory(item)" class="category" v-for="(item,index) in categoryList" :key="index">
			<view class="img">
				<image :src="item.img"></image>
			</view>
			<view class="text">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				dafault() {
					return []
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>
