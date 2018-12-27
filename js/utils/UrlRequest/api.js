let ajaxGet = (Obj) => {
//		eval("Obj.data.e_id=111"); //动态添加对象属性
//		console.log(Obj);
		$.ajax({ 
			url: Obj.url,
			dataType: "json",
			async: true, //true:异步,false:同步
			data: Obj.data, 
			type: "GET",
			timeout:10*1000,  //请求时间 
			beforeSend: function() {
				//请求前的处理 
			}, 
			complete: function() { 
				//请求完成的处理 
			},
			success: Obj.success, //请求成功
			error: function() {
				console.log("Error");
			}
		});

	}
 let ajaxPost = (Obj) => {
//		eval("Obj.data.e_id=111"); //动态添加对象属性
//		console.log(Obj);
		$.ajax({ 
			url: Obj.url,
			dataType: "json",
			async: true, //true:异步,false:同步
			data: Obj.data, 
			type: "POST",
			timeout:10*1000,  //请求时间 
			beforeSend: function() {
				//请求前的处理 
			}, 
			complete: function() { 
				//请求完成的处理 
			},
			success: Obj.success, //请求成功
			error: function() {
				console.log("Error");
			}
		});

	}



