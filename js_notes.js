//javascript方法总结

1: 获取对象的键
	var obj = {id:1,name:'xxx'}; 
	var keys = Object.keys(obj);
	//keys : ['id','name']

2: 获取对象键值对的长度
	var obj = {id:1,name:'xxx'}; 
	var length = Object.keys(obj).length; // 2

3: 对象循环遍历
	var obj = {id:1,name:'xxx'};	 
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			console.log(obj[key]);
		}
	}
