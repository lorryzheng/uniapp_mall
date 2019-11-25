<template>
<view>
    <swiper class='img-swiper-box' indicator-dots="true" autoplay="true" interval="5000" duration="500" indicator-active-color="#fff" circular="true">
        <swiper-item class="img-swiper-item" v-for='(item,index) in swiperImg' :key='index'>
            <image class="slide-image" :src="item.link" mode="aspectFill" />
        </swiper-item>
    </swiper>

    <view class="information-list">
        <view class='empty-tips' v-if='informationList.length == 0'>暂无数据</view>
        <view class="information-item" v-for='(item,index) in informationList' :key='index'>
            <view class="information-info">
                <view class="information-name">{{item.title}}</view>
                <view class="information-type">#{{item.information_class}}</view>
                <view class="information-date">{{item.add_time}}</view>
            </view>
            <image class="information-img" :src="item.img" mode="aspectFill"></image>
        </view>
    </view>
</view>
</template>

<script>
</script>

<style>
	.img-swiper-box {
	    width: 100%;
	    height: 380rpx;
	}
	
	.img-swiper-box image {
	    display: block;
	    width: 710rpx;
	    height: 380rpx;
	    margin: 0 auto;
	    border-radius: 10rpx;
	}
	
	.information-list {
	    margin-top: 66rpx;
	    padding: 0 20rpx;
	}
	
	.information-item {
	    display: flex;
	    align-items: center;
	    margin-bottom: 46rpx;
	}
	
	.information-info {
	    position: relative;
	    flex: 1;
	    min-width: 1rpx;
	    height: 166rpx;
	}
	
	.information-name {
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    overflow: hidden;
	    -webkit-line-clamp: 2;
	    font-weight: bold;
	    font-size: 30rpx;
	    color: #131313;
	}
	
	.information-type {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    font-size: 20rpx;
	    color: #a0a0a0;
	}
	
	.information-date {
	    position: absolute;
	    bottom: 0;
	    right: 0;
	    font-size: 20rpx;
	    color: #a0a0a0;
	}
	
	.information-img {
	    width: 220rpx;
	    height: 166rpx;
	    border-radius: 10rpx;
	    margin-left: 20rpx;
	}
	
	.empty-tips {
	    padding: 100rpx 0;
	    text-align: center;
	    font-size: 30rpx;
	    color: #666;
	}
</style>
