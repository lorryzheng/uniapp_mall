<template>
	<view>
	    <view class="cart-tips">温馨提示：商品免费，每件商品收取一定的平台服务费</view>
	    <view class='cart-edit'>
	        <view class='cart-num'>共{{totalNum}}件产品</view>
	        <rich-text class='cart-edit-btn' @click='cartEdit' nodes='{{editStatus==0?"管理":"完成"}}'></rich-text>
	    </view>
	    <!-- <view class='empty-tips' wx:if='{{cartList.length == 0}}'>暂无商品</view> -->
	    <view class='cart-list-box' v-for='(item,index) in cartList' :key='index'>
	        <view class='cart-shop'>
	            <check-box class='shop-select' checked='{{items.selected}}' @click='shopClick'></check-box>
	            <view class='shop-name'>{{items.store_name}}</view>
	        </view>
	        <view class='cart-item' v-for='(item,index) in skuList' :key='index'>
	            <movable-area class='cart-item-movable'>
	                <movable-view class='cart-item-movable-view' damping="100" out-of-bounds="false" direction="horizontal" x="{{x[index]}}" animation="false" bindtouchend="handleTouchend" bindchange="handleMovableChange" bindtouchstart="handleTouchestart" data-index='{{index}}'>
	                    <view class="cart-main-box">
	                        <check-box checked='{{item.selected}}' @click='goodsClick'></check-box>
	                        <view class='goods-img-box' @click="goGoodsDetail">
	                            <image src='{{item.img}}'></image>
	                        </view>
	                        <view class='goods-info-box' @click="goGoodsDetail">
	                            <view class='goods-name'>{{item.goods_name}}</view>
	                            <view class='goods-format'>
	                                <text wx:if='{{item.color}}'>{{item.color}}，</text>
	                                <text wx:if='{{item.lining}}'>{{item.lining}}，</text>
	                                <text wx:if='{{item.size}}'>{{item.size}}，</text>
	                                <text>{{item.num}}件</text>
	                            </view>
	                            <!-- <image class='goods-label' src='https://mozi.bailingyoupin.com/static/images/wx_sm/home/tags_icon.png' mode='widthFix' wx:if='{{item.type == 2}}'></image> -->
	                            <view class='goods-other-info'>
	                                <view class='goods-price'>店主价：￥{{item.self_price}}</view>1
	                                <view class="goods-num-input">
	                                    <view class="minus" @click='goodsNumMinus'></view>
	                                    <input class='num-input' disabled type="number" value='{{item.num}}' />
	                                    <view class="add" @click='goodsNumAdd'></view>
	                                </view>
	                            </view>
	                        </view>
	                    </view>
	                    <view class="cart-delete" catchtap="deleteThis" data-id='{{item.cart_id}}'>移除</view>
	                </movable-view>
	            </movable-area>
	        </view>
	    </view>
	
	    <view class='balance-box'>
	        <check-box class='all-select' checked='{{allSelect}}' bind:click='allClick'></check-box>
	        <view class='all-select-name'>全选</view>
	        <view class='balance-info'>
	            <view class='all-price'>实付款:
	                <text>￥{{actualPrice}}</text>
	            </view>
	        </view>
	        <view class='banlance-btn' wx:if='{{editStatus == 0}}' @click='goOrderConfirm'>结算</view>
	        <view class='delete-btn' wx:else @click='goDelete'>移除</view>
	    </view>
	</view>
</template>

<script>
</script>

<style>
	@import './cart.scss';
</style>
