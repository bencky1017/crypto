crypto加密算法库
==
这个库中包含了base64,MD5,CRC32等加密算法，部分支持Unicode编码，具体可查阅README文档了解调用方法。

*（注：算法内容为个人学习编写，写法可读性高，非官方标准写法。）*

**应用**：可直接应用于网页中

---

**目录**

[crypto加密算法库](#crypto加密算法库)

[RandomString随机数](#randomstring随机数)

[Base64加密解密](#base64加密解密)

[MD5摘要算法](#md5摘要算法)

[CRC32校验算法](#crc32校验算法)

---

## RandomString随机数

引用链接：

> [https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/randomStr.js](https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/randomStr.js)

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/randomStr.js"></script>
```

### 函数

生成随机数（长度,?类型,?显示名称）[^符号解释]

```javascript
RandomString(length,?type,?showName)
```

**简化函数**

```js
rs(length,?type,?showName)
```

#### 参数说明

```txt
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
	若填写的参数‘>1’，则按照‘1’处理
```

#### 代码示例

> \> RandomString(8,3)
>
> "zBR6wbw3"

> \> RandomString(8,3,true)
>
> "数字+字母:tGate3DQ"

### 方法

分隔字符串（?分隔符,?段落列表）

```javascript
splits(?unit,?partList)
```

#### 参数说明

```txt
unit:分隔符
	自定义字符，默认为‘-’
partList:段落列表，数组
	每段的字符串数，每段之间按照分隔符分开
	如32位字符串，按照UUID的格式，为：[8,4,4,4]，最后一位‘12’省略
```

`partList`参数可以为空，内置的默认算法如下：（详见[JS文件](https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/randomStr.js)）

| 变量    | 名称         | 公式                           | 数值 |
| :------ | :----------- | :----------------------------- | :--- |
| a_bit   | 位长         | this.length                    | 32   |
| b_part  | 段落数       | Math.round(a_bit/8+1)          | 5    |
| c_start | 开始位数     | Math.round((b_part-1)*2)       | 8    |
| d_via   | （中间计算） | a_bit-b_part*2                 | 22   |
| e_mid   | 中段位数     | Math.round(d_via/b_part)       | 4    |
| f_end   | 末尾位数     | a_bit-c_start-(b_part-2)*e_mid | 12   |

#### 代码示例

> \> RandomString(32,3).splits('-')
>
> "YmVuY2t5-MTAx-Ny9j-cnlw-dG8vcmFuZG9t"

> \> RandomString(16,3).splits()
>
> "cmFu-ZG9-tU3RyaW5n"

此方法会将`RandomString()`所显示的`类型名称(type)`移除，如下：

```txt
随机字符串：“数字+字母:tGate3DQ”
经过splits()：“tG-ate3DQ”
```

---

## Base64加密解密

引用链接：

> [https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/base64.js](https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/base64.js)

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/base64.js"></script>
```

### 函数

Base64编码（字符串）

```js
base64.encode(str)
```

Base64解码（字符串）

```js
base64.decode(str)
```

UTF-8的Base64编码（字符串）【支持中文编解码】

```js
base64.utf8encode(str)
```

UTF-8的Base64解码（字符串）【支持中文编解码】

```js
base64.utf8decode(str)
```

**简化函数**

```js
be===base64.encode;
bd===base64.decode;
beu===base64.uft8encode;
bdu===base64.utf8decode;
```

#### 参数说明

```txt
str:字符串
```

#### 代码示例

##### 无中文字符

> \> base64.encode('base64')
>
> "YmFzZTY0"

> \> base64.decode('YmFzZTY0')
>
> "base64"

##### 有中文字符

> \> base64.utf8encode('base64编码')
>
> "YmFzZTY057yW56CB"

> \> base64.utf8decode('YmFzZTY057yW56CB')
>
> "base64编码"

### 方法

字符串左填充（?长度）

```js
lfill(?num)
```

字符串右填充（?长度）

```js
rfill(?num)
```

此方法可以对字符串进行`0填充`，使字符串总长度为8的倍数

#### 参数说明

```js
num:字符串长度，默认为8
```

#### 代码示例

> \> 'abc123'.lfill(10)
>
> "0000abc123"

> \> 'abc123'.rfill()
>
> "abc12300"


---

## MD5摘要算法

引用链接：

> [https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/md5.js](https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/md5.js)

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/md5.js"></script>
```



---

## CRC32校验算法

引用链接：

> [https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/CRC32.js](https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/CRC32.js)

HTML引用：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/bencky1017/crypto/js/CRC32.js"></script>
```



[^符号解释]: "?"表示可以省略的参数