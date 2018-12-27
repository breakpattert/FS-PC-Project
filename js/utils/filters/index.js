//所有api的表单
let queryParam = (name) => {
//		eval("Obj.data.e_id=111"); //动态添加对象属性
//		console.log(Obj);
		  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
　　　　        var r = window.location.search.substr(1).match(reg);
　　　　        if(r != null) return unescape(r[2]);
　　　　        return null;

}
