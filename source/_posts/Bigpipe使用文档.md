title: 贴吧Bigpipe使用文档
date: 2015-03-02 12:15:10
tags: [Bigpipe, PHP]
---

# Bigpipe使用文档

标签（空格分隔）： Bigpipe

---
 - 代码结构
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/5c33fe26479f8751b051e4f447f2872c5489c375)
src为源码目录，其他文件为编译及模块配置文件

 - src源码结构
 ![图片](http://bos.nj.bpc.baidu.com/v1/agroup/7ad5b9498fa642540632a1570fcdf94c1aca810f)

	 -  conf：模块配置文件目录，包含：
		 - __module_conf.php，目前只有两个：公共模块名及静态文件域名。**页面**全局配置（有Page的模块才需要）
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/a2e8ad1f8608884311763e7d0f9d36c189d7c066)

	 - configurator： 配置平台类，目前只在common（公共模块）里面有
	 - data：数据缓存目录，里面应该放一个空的内容（部署不会部署空目录）	
	 - page：页面模版，可以是继承的
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/7f8ae548a4cc2bd38815f9b42f74efa142e622bf)
	Page示例：
	1.顶级page
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/9e8c71006d338591f7ee1f141d8372efa23c76ca)
	2.子级page
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/ac98c3d102afda803fff8d64026462d7f69e7d93)
	3.方法说明
		 - $this->extend($name, $scope)
			 - 声明该page继承自哪个page，$name为page名称，$scope为定义的代码模块
		 - $this->block($blockName, $value, $isExtend)
			 - 定义一个名为$blockName的block，并且block的值为$value(默认为空)，$isExtend为bool值，告诉框架这个block是不是由上一级继承而来(如果不是继承，则直接输出$value, 否则将值传给上一级的同名的block)
		 - $this->startBlock($blockName, $isExtend)，$this->endBlock($blockName)
			 - 与$this->block()类似，只不过其值为start和end中间的内容
		 - $this->loadPagelet($name, $scope)
			 - 加载一个pagelet，该方法返回Pagelet的实例，可以调用其中的方法
		 - $this->loadWidget($name, $arr, $scope)
			 - 加载一个widget，该方法返回widget的实例，可以调用其中的方法。$arr为传递给Widget的数据**widget的数据只能通过调用时传递**（除了全局数据外）
		 - $this->getData($varName)
			 - 获取模版数据，Page中只能使用全局数据
	 - Pagelet：
	 Pagelet调用方式
	![图片](http://bos.nj.bpc.baidu.com/v1/agroup/b75d8550acdc626ed19cb7bb2a90b84f416c481e)
	1.与Page不同的地方在于：
		- 目录中多了ini、和class.php文件。
		- ini文件为Provider声明的文件，换行分割Provider
		- .class.php为Pagelet的数据处理文件，class命名规则：如frs/pagelet/aside/aside.class.php的命名为：Frs_Pagelet_Aside。加载Pagelet时会自动调用其init()方法（可以没有init方法）
		![图片](http://bos.nj.bpc.baidu.com/v1/agroup/1993a651173c6fb90bfd448c8ab699a2056152b6)
		- 方法说明：
		 - 含有Page的所有方法。
		 - $this->disable() 用于这种情况：根据该widget的Provider数据判断后，如果不需显示这个Pagelet，则调用该方法禁止Pagelet渲染。
		 - $this->getData($varName) 获取Pagelet的数据，包含：全局数据和Provider数据
   	 - Widget：
	1. widget的继承方式以及代码结构跟Pagelet相同，再此不在阐述，啊，对了widget不能调用Pagelet，即没有$this->loadPagelet()方法
	2. 其他方法说明：
		 - $this->getData($varName) 获取全局数据或由调用者传递的数据