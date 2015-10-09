title: 为什么要做Bigpipe
date: 2014-12-20 17:36:20
tags: [Bigpipe, PHP]
---


##为什么要做Bigpipe
###背景

 1. 性能
 2. 体验
 3. 业务拆分
 4. 资源管理

###技术选型
**几种方案：**
 1. 精简页面功能
 2. 滚动加载（Ajax方式）
 3. 延迟渲染（BigRender）
 4. 页面内容管道输出（Bigpipe）
 
**Bigpipe优势：**
 1. 无需精简页面功能、不会增加动态内容请求。
 2. 管道输出，使服务器和客户端处理并行，减少用户等待时间，加快页面内容展示
 3. 很好的支持页面内容局部刷新，且无需复杂操作即可做到任何局部数据内容更新
 4. 带来更好的资源管理方式

##Bigpipe目标

 1.	性能提升：页面内容可见时间提升70%，核心区域内容（如贴子列表区）展现时间提升30%。
 2.	局部刷新：支持页面局部区域（Pagelet）刷新，改善交互体验
 3.	模块清晰划分：业务代码相互独立，模块权限收敛，支持未来业务拆分
 4.	静态资源按需加载及本地存储。节省页面CDN带宽30%

##Bigpipe模块划分

![此处输入图片的描述][1]
Bigpipe与现有系统模块划分对比

##Bigpipe系统执行流程
![此处输入图片的描述][2]

##View层开发
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
|Pagelet|![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/689f534ad4763271c417bd91e3d7080ba84d2a04) <br/>继承的Pagelet：<br/>![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/4ce489b392da88d14bdef293ac4916143db617ea)|
|Widget|![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/c5773f22706edf1a48d03e2b9ad91075f1d6a6e9) <br/>继承之后的：![enter image description here](http://bos.nj.bpc.baidu.com/v1/agroup/59bb8d5e228f1014ae040bc80d173b051465e732)|
 
 


  [1]: http://imgsrc.baidu.com/forum/pic/item/71b0f703738da97796e5aa7ab451f8198718e3bd.jpg
  [2]: http://bos.nj.bpc.baidu.com/v1/agroup/6f2ccdba769d5d70899c898bd870e6a3998a7c99