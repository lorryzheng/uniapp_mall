export default function request(url, options={}) {
	
	const baseURL = "https://uniapp-interface.herokuapp.com/"
	const newOptions = {...options}
	newOptions.header = {}
	if(newOptions && newOptions.method == 'POST') {
		newOptions.header = {"content-type":"application/x-www-form-urlencoded"}
	}
	
	return new Promise((resolve,reject) => {
		uni.showLoading({
			title: "加载中...",
			mask: true
		})
		uni.request({
			url: baseURL + url,
			method: newOptions.method || "GET",
			data: newOptions.body || {},
			header: newOptions.header,
			success: res => {
				console.log(res)
				if(res.statusCode && res.statusCode != 200){
					uni.showModal({
						content:res.data.msg
					})
				}else if(res.statusCode == 200){
					resolve(res.data)
				}
			},
			fail: (err) => {
				uni.showModal({
					content: err.msg
				})
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	}).catch((e) => {})
}