//所有api的表单
let dataAll = (param) => {
//		eval("Obj.data.e_id=111"); //动态添加对象属性
//		console.log(Obj);
		var Obj = {
				url:'http://rap2api.taobao.org/app/mock/7058/index/hotlists',//请求地址
				data:{pageNum:param.pageNum,pageSize:param.pageSize},
				success:param.success
		}
		ajaxPost(Obj)

}
let banner = (data,success) => {
		var Obj = {
				url: 'http://rap2api.taobao.org/app/mock/7058/index/banner',//请求地址
				data:data,
				success:success
		}
		ajaxGet(Obj)

}