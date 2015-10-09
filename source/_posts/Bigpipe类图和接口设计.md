title: Bigpipe类图和接口设计
date: 2015-01-30 17:36:20
tags: [Bigpipe, PHP]
---

# Bigpipe类图和接口设计

标签（空格分隔）： Bigpipe

---

###PHP类图
![新窗口查看](http://bos.nj.bpc.baidu.com/v1/agroup/34261b9c8c89c48941ff03c414d6b91807b74481)
###类功能介绍：
 - Tieba_Bigpipe: Bigpipe核心类，用于组织管理Pagelet的数据及渲染
 - Tieba_View_Tool: 工具类，主要包含变量XSS转义、系统配置等
 - Tieba_View_TplLoader: 模块加载基类，组织模块，负责数据展示
 - Tieba_View_Pagelet: 组成Bigpipe系统的核心，数据处理、并行渲染等
 - Tieba_View_Widget: Widget基类
 - Tieba_View_PageUnit: 配置平台数据处理，Bigpipe中支持Pagelet使用
 - Tieba_View_ModuleResource: 模块静态资源管理器，如分析静态资源依赖信息
 - Tieba_View_ResourceMap: 所有模块静态资源resourceMap信息管理
 - Tieba_View_ScriptPool: JS初始化代码池，普通模式下使用
 - Tieba_View_Log: 用于打印模版日志调试信息
 - HTML: 保留给模版的工具方法
###JS库类
![新窗口查看](http://bos.nj.bpc.baidu.com/v1/agroup/479bf76d1d1bf63b6fd6b4a8825ce0a445898d2d)

###页面请求执行流程
![请求流程图](http://bos.nj.bpc.baidu.com/v1/agroup/6f2ccdba769d5d70899c898bd870e6a3998a7c99)

---

##模版使用接口设计
###代码组织结构
|目录结构|结构说明|
|--|--|
|![模块目录组织形式](http://bos.nj.bpc.baidu.com/v1/agroup/80e7b1f957a3b31f746536ec9f0575787e67929c)|![模块说明](http://bos.nj.bpc.baidu.com/v1/agroup/6b8b624eab8cbf23308ea546a0cfd27f8ff1081f)|

###模块详细结构介绍
|模块类别|文件结构|结构说明|
|--|--|--|
|Page|![Page目录结构](http://bos.nj.bpc.baidu.com/v1/agroup/06503232515101f5d97170530dd74c16d34bd459)|![模块说明](http://bos.nj.bpc.baidu.com/v1/agroup/91a3ce48d062a2a7eabef3c1ca28224a5f75589e)|
|Pagelet|![模块目录组织形式](http://bos.nj.bpc.baidu.com/v1/agroup/8b06f146b30421ddcbdf0d6fd3f3c4bd47007d9f)|![模块说明](http://bos.nj.bpc.baidu.com/v1/agroup/efabbf5f48339c09a6362c65c7ab5bbd6ced5c12)|
|Widget|![模块目录组织形式](http://bos.nj.bpc.baidu.com/v1/agroup/d8ea8b5514be54ec9183be0339466f5fc515172a)|![模块说明](http://bos.nj.bpc.baidu.com/v1/agroup/1d325020d448531b7fef814aedefd872b024e41f)|

###代码示例
|文件类别|文件结构|
|--|--|
|Page|rootPage:![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/06a0a74b57982ce80a9dbc5dc03b944deb22f031)<br>frsPage:![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/8866a1f3e13689b031d8185a7d4cbb22ef62a2d9)|
|Pagelet|![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/689f534ad4763271c417bd91e3d7080ba84d2a04) <br/>继承的Pagelet：![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/4ce489b392da88d14bdef293ac4916143db617ea)|
|Widget|![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/c5773f22706edf1a48d03e2b9ad91075f1d6a6e9) <br/>继承之后的：![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/59bb8d5e228f1014ae040bc80d173b051465e732)|