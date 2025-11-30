# Pyhton
[[toc]]

## 安装Anaconda（Linux下）
 
- 打开终端。进入下载目录，运行：
```bash
bash Anaconda3-***-Linux***.sh #文件名以实际下载为准
```
- 按照提示输入yes接受许可协议
- 安装完成之后，运行：
```bash
source ~/.bashrc #刷新环境变量
conda --version #y验证安装
```

## 常用函数
|    函数   | 解释/作用 | 
|   -----   | -----    | 
| split()   | 分隔字符串 str.split(str="", num=x) 
| append()  | 添加元素 ls.append(object)  | 
| readline()| 读取文件中的一行 |
| len()     |  返回长度 len(str)   | 
| float()   | 转换成浮点数 |
| numpy.array() | 创建数组 |
| np.argsort() | 对索引排序 |
| np.transpose() | 转置 |

### 1. split()
- > str.split(str="", num=x)
  - str 分隔符，默认为所有的空字符，包括空格、换行(\n)，制表符(\t)等
  - num 分隔次数，num=-1，即分割所有；若有指定值，则分隔num+1个子字符串
- 举例(Python 2.0+)
  ```python
  str = "Line1-abcdef InLine2-abc InLine4-abcd";
  print str.split(); #以空格为分隔符，分割所有
  print str.split(''，1)；#以空格为分隔符，分隔成两个

  #以上实例输出结果如下：
  ['Linel-abcdef','Line2-abc','Line4-abcd']
  ['Linel-abcdef','\nLine2-abc \nLine4-abcd']
  ```

### 2. append()
- > ls.append(object)
- 在列表ls最后添加一个元素object
- 举例
  ```python
  a=[1,2,3]
  a.append(5)
  #此时，运行结果为[1,2, 3, 5]
  a=[1,2,3]
  a.append([5])
  #此时，运行结果为[1,2,3, [5]]
  #结果不再为一个数组，而是list
  ```

### 3. readline()
- 用于读取文件中的一行，包含最后的换行符“n”。
- >基本语法格式为：file.readline([size])
  - 其中，file为打开的文件对象；size为可选参数，用于指定读取每一行时，一次最多读取的字符（字节）数。
  - 和read()函数一样，此函数成功读取文件数据的前提是，使用open()函数指定打开文件的模式必须为可读模式(包括r、rb、r+、rb+ 4种)。

### 4. len()
- 语法：len(str)
- 返回字符串、列表、字典、元组等长度

### 5. float()
- 将整数和字符串转换成浮点数

### 6. numpy.array
- 使用numpy.array方法将tuple和list，array，或者其他的序列模式的数据转创建为ndarray，默认创建一个新的 ndarray
    ```python
    >>> np.array([1,2,3,4])
    [1 2 3 4]

    >>> b = array( [ (1.5,2,3),
                    (4,5,6) ] )
    array([[ 1.5, 2., 3. ], [4. , 5., 6. ]])
        
    >>> c = array( [ [1,2], [3,4] ], dtype=complex)#指定数组中元素的类型

    >>> C
    array([[ 1.+0.j, 2.+0.j], [3.+0.j,4.+0.j]])
    ```
- 生成特殊数组
  - np.ones：创建一个数组,其中的元素全为1
  - np.zeros:创建元素全为0的数组,类似np.ones
  - np.empty创建一个内容随机并且依赖与内存状态的数组。
  - np.eye：创建一个对角线为1其他为0的矩阵
  - np.identity：创建一个主对角线为1其他为0的方阵

### 7. np.argsort
- >语法：np.argsort(a)
- 返回元素值从小到大排序后的索引值的数组；排的是索引，而不是数值本身
- 举例
    ```python
    In: a = np.array([3,1,2,1,3,5])
    Out: [3,1,2,1,3,5]

    In: b = np.argsort(a) #对a按升序排列
    Out:[1 3 2 0 4 5]

    In: b = np.argsort(-a) #对ɑ按降序排列
    Out: [5 0 4 2 1 3]
    ```

### 8. np.transpose
- 转置


## 画图
### 画图建议/思路
- 思路
  - 先定义整个画板，num=1是指有一个画板
  - ax是整个画板里某一幅图
  - 每一幅图可以打包成一个plot函数（即add_figure），这样可以重复引用
  - 如果有某一个图不想用统一的风格，就单独ax.plot
``` python
fig = plt.add_figure(num=l)
ax = fig.add_subplot()
ax.plot
ax.set_xlabel #设置横轴
fig.subtitle(‘***’)  #多个子图用一个title
```

### Ananconda，虚拟环境下python画图
```bash
conda create --name py27 python=2.7 #创建python2.7的虚拟环境
source activate py27
pip install numpy #加载画图需要的库
pip install 
```

### Qt platform xcb报错
- [方法参考](https://blog.csdn.net/Perfect_Accepted/article/details/80140362)

### config文件，字体的报错
- 重安装python

### colorbar的设置
- 通过linespace(min，max，间隔数)来指定colorbar的范围
``` python
plt.contourf(x1,x2,y,cmap=cm.jet,level=np.linspace(-0.12,0.30,7),extend='both')
```

### 字体：正体、斜体
- mathit：斜体
- mathrm：正体


## 语法/需要注意
### python区分大小写

### python数组下标
- 是从0开始的
- 支持负数索引，允许从列表末尾反向访问元素。例如，my_list[-2]访问倒数第二个元素

### for in 循环结构
- 语法：
```python 
for x in y:
    循环体
```
