crypto加密算法库
==

这个库中包含了base64,MD5,CRC32等加密算法，部分支持Unicode编码，具体可查阅README文档了解调用方法。

*（注：算法内容为个人学习编写，写法可读性高，非官方标准写法。）*

**应用**：可直接应用于网页中

---

**目录**

[crypto加密算法库](#crypto加密算法库) 

[RandomString随机数](##RandomString随机数) 

[MD5摘要算法](#MD5摘要算法)

[Base64加密解密](#Base64加密解密)

[CRC32校验算法](#CRC32校验算法)

---

## RandomString随机数

引用链接：

> https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/randomStr.js

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/randomStr.js"></script>
```

### 函数

生成随机数（长度,?类型,?显示名称）[^符号解释]

```javascript
RandomString(length,?type,?showName)
```

#### 参数说明

```js
length:长度
type:类型，参数为：[1-6]
	1：数字
	2：字母
	3：数字+字母
	4：数字+符号
	5：字母+符号
	6：数字+字母+符号(_~!@#$%^&+{}`-=[];,)
默认类型为：数字+字母
showName:显示名称，参数为：[true|false|1|0]
```

#### 代码示例

> \> RandomString(8,3)
> "zBR6wbw3"
>
> \> RandomString(8,3,true)
> "数字+字母:tGate3DQ"

### 方法

分隔字符串（?分隔符,?段落列表）

```javascript
SplitString(?unit,?partList)
```

#### 方法参数

```js
unit:分隔符
partList:段落列表

```

内置默认算法（详见[JS文件](https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/randomStr.js)）




---

## MD5摘要算法

引用链接：

> https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/md5.js

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/md5.js"></script>
```



---

## Base64加密解密

引用链接：

> https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/base64.js

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/base64.js"></script>
```



---

## CRC32校验算法

引用链接：

> https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/CRC32.js

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto@1.0.0/js/CRC32.js"></script>
```



[^符号解释]: "?"表示可以省略的参数
