import request from '@/utils/request.js'

export async function getHomeData() {
	return request("api/profiles/mall_list")
}
export async function getCategory(params) {
	return request("api/profiles/category", {
		method: 'POST',
		body: {
			...params
		}
	})
}
export async function getGoodsList(params) {
	return request("api/profiles/goodslist", {
		method: 'POST',
		body: {
			...params
		}
	})
}
export async function getGoodsDetail(params) {
	return request("api/profiles/goods", {
		method: 'POST',
		body: {
			...params
		}
	})
}