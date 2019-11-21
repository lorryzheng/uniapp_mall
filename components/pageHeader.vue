<style lang='scss'>
	.place_status {
		position: fixed;
		wdith: 100%;
		top: 0;
		left: 0;
		height: 0;
		/* #ifdef APP-PLUS */
		height: var(--status-bar-height);
		/* #endif */
	}
	.header {
		width: 100%;
		padding: 26upx 0;
		display: flex;
		align-items: center;
		.location {
			width: 120upx;
			display: flex;
			align-item: center;
			> i {
				font-size: 40upx;
				color: #ffc50a;
			}
			.city {
				font-size: 26upx;
				/* font-weight: bold; */
				padding-left: 4upx;
				display: flex;
				align-items: center;
				color: #010101;
			}
		}
		.search {
			flex: 1;
			height: 60upx;
			border: 1upx solid #ddd;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			> input {
				padding: 0 28upx;
				font-size: 24upx;
				height: 24upx;
			}
			> i {
				position: absolute;
				top: 8upx;
				right: 28upx;
				font-size: 36upx;
				color: #aaa;
			}
		}
			
		.msg {
			width: 40px;
			text-align: center;
			> i {
				font-size: 40upx;
			}
		}
	}
</style>
<template>
	<view>
		<view class='place_status'></view>
		<view class='header'>
			<view class='location'>
				<i class="iconfont icon-location"></i>
				<view class="city">{{city}}</view>
			</view>
			<view class="search">
				<input type="text" placeholder="请输入搜索内容..." placeholder-style="color:#c0c0c0">
				<i class='iconfont icon-search'></i>
			</view>
			<view class="msg">
				<i class='iconfont icon-mark'></i>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '北京'
			}
		}
	}
</script>


