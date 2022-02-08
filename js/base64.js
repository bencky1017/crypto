/********************************************
* Title:    Base64
* Date:     2022-2-8 22:01:30
* Version:  v1.0.0
* Author:   Bencky1017
* Describe: Base64 Encode and Decode with UTF-8 unicode
*
* https://github.com/bencky1017/crypto
********************************************/
var base64={
	utf8:function(str){
		var str = str.replace(/\r\n/g, "\n");
		var utf = '';
		for (var i = 0; i < str.length; i++) {
			var code = str.charCodeAt(i);
			if (code < 128) {
				utf += String.fromCharCode(code)
			} else if ((code > 127) && (code < 2048)) {
				utf += String.fromCharCode((code >> 6) | 192);
				utf += String.fromCharCode((code & 63) | 128)
			} else {
				utf += String.fromCharCode((code >> 12) | 224);
				utf += String.fromCharCode(((code >> 6) & 63) | 128);
				utf += String.fromCharCode((code & 63) | 128)
			}
		}
		return utf;
	},
	utf8encode:function(str){
		var str=base64.utf8(str);
		var u_b64=base64.encode(str)
		return u_b64;
	},
	encode:function(str){
		var table='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		var t_str='';//存储8位二进制
		var t_b64='';//存储编码结果
		for (var i = 0; i < str.length; i++) {//转8位二进制
			t_str+=str[i].charCodeAt().toString(2).lfill();
		}
		var leave=t_str.length%6;//分组余数计算
		if (leave!=0) {//有余数时需要末尾补0
			for (var i = 0; i < 6-leave; i++) {t_str+='0';}
		}
		for (var i = 0; i < Math.floor(t_str.length/6); i++) {//编码结果存储
			t_b64+=table[parseInt(t_str.substr(i*6,6),2)];
		}
		t_b64+=t_str.length%24/6==2?'==':t_str.length%24/6==3?'=':'';//空位补‘=’占位
		return t_b64;
	},
	decode:function(str){
		
	}
};
window.Base64=base64;
String.prototype.lfill = function(num=undefined) {
	var len=this.length;
	var res='';
	if (num==undefined) {
		if (len%8!=0) {
			for (let i = 0; i < 8-len%8; i++) {res+='0';}
			res+=this;
		}else{res=this.toString();}
	}else{
		if (num<len) {console.error('Uncaught RangeError: String.lfill() radix argument must more than String.length.');}
		else{
			for (let i = 0; i < num-len; i++) {res+='0';}
			res+=this;
		}
	}
	return res;
};
String.prototype.rfill = function(num=undefined) {
	var len=this.length;
	var res=this.toString();
	if (num==undefined) {
		if (len%8!=0) {
			for (let i = 0; i < 8-len%8; i++) {res+='0';}
		}else{res=res;}
	}else{
		if (num<len) {console.error('Uncaught RangeError: String.rfill() radix argument must more than String.length.');}
		else{
			for (let i = 0; i < num-len; i++) {res+='0';}
		}
	}
	return res;
};