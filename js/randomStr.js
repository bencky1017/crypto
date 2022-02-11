/********************************************
* Title:    RandomString
* Date:     2022-2-11 15:46:54
* Version:  v1.0.1
* Author:   Bencky1017
* Describe: RandomString produce.
*
* https://github.com/bencky1017/crypto
********************************************/
function rs(length,type=undefined,showName=false){
	return RandomString(length,type,showName)
}
function RandomString(length,type=undefined,showName=false){
	if (length==undefined) {return"Error:Invalid String.";}
	//[0-9]:数字,[10-61]:字母,[62-81]:符号
	var strList=[
		'0','1','2','3','4','5','6','7','8','9',
		'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		'_','~','!','@','#','$','%','^','&','+','{','}','`','-','=','[',']',';','\'',','
	];

	//[0-9]:数字,[10-29]:符号
	var numSym=[
		'0','1','2','3','4','5','6','7','8','9',
		'_','~','!','@','#','$','%','^','&','+','{','}','`','-','=','[',']',';','\'',','
	]

	var cutIn=0;      //截取开始
	var cutOut=81;    //截取结束
	var typeName='';  //类型名称
	switch(type){

		//格式：数字
		case 1:cutIn=0;cutOut=9;typeName='数字';break;
		//格式：字母
		case 2:cutIn=10;cutOut=61;typeName='字母';break;
		//格式：数字+字母
		case 3:cutIn=0;cutOut=61;typeName='数字+字母';break;

		//格式：数字+符号
		case 4:cutIn=0;cutOut=29;typeName='数字+符号';break;//***单独***

		//格式：字母+符号
		case 5:cutIn=10;cutOut=81;typeName='字母+符号';break;
		//格式：数字+字母+符号
		case 6:cutIn=0;cutOut=81;typeName='数字+字母+符号';break;
		default:cutIn=0;cutOut=61;typeName='(默认)数字+字母';break;
	}

	var result='';
	for(var i=0;i<length;i++){
		let index=Math.round(cutIn+Math.random()*(cutOut-cutIn));
		result+=type!=4?strList[index]:numSym[index];
	}
	return showName?typeName+':'+result:result;
};
String.prototype.splits = function (unit=undefined,partList=undefined) {
	if (this=='') {return "Error:Invalid string.";}
	if (unit==undefined) {var unit='-';}

	//32位长度: 以UUID格式为例
	//序列长度: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 8-4-4-4-12(n)
	//数据内容: a_bit:32   b_part:5   c_start:8   d_via:22   e_mid:4   f_end:12
	//计算公式: a:length  _b:a/8+1   _c:(b-4)*2   d:a-b*2   _e:d/b     f:a-c-(b-2)*e

	var _this=this.replace(/\S+\:/,'');         //去除原有typeName
	var a_bit=_this.length;                     //位长
	var b_part=Math.round(a_bit/8+1);           //段落数
	var c_start=Math.round((b_part-1)*2);       //开始位数
	var d_via=a_bit-b_part*2;                   //（中间计算）
	var e_mid=Math.round(d_via/b_part);         //中段位数
	var f_end=a_bit-c_start-(b_part-2)*e_mid;   //末尾位数
	var list=[];                                //list数据
	var listTemp=[];                            //暂存list
	// console.log('位:'+a_bit+',段:'+b_part+',始'+c_start+',中'+e_mid+',末'+f_end);
	
	listTemp.push(c_start);                     //列表数据:始
	for (var i = 0; i < b_part-2; i++) {
		listTemp.push(e_mid);                   //列表数据:中
	}
	// listTem.push(f_end);                     //列表数据:末

	if (partList==undefined) {
		list=listTemp
	}else{
		if (partList.length<=b_part-1) {
			list=partList;
		}else{
			console.error('参数长度错误！使用默认数值：'+listTemp+','+f_end);
			list=listTemp;
		}
	}

	var str2list=_this.split('');//字符串转列表
	var groupLen=0;//累计分组长度
	var listgroup=list;
	for(var i=0;i<listgroup.length;i++){
		groupLen+=listgroup[i];
		str2list.splice(groupLen,0,unit);//添加分隔符
		groupLen+=1;
	}
	return str2list.join('');
};
