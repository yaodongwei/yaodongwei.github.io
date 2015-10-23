title: Fiddler使用介绍
date: 2012-08-05 17:36:20
tags: [工具]
---

一、Fiddler工作原理

Fiddler以代理Web服务器形式工作，可以拦截所有的Request和Response。使用代理地址：127.0.0.1，端口：8888。当Fiddler退出时会自动注销代理，以免影响其他程序。如果非正常退出，则需要重启Fiddler解决。

二、Fiddler如何捕获Firefox的会话

能支持HTTP代理的任意程序的数据包都能被Fiddler嗅探到，其运行本质是监听8888端口的http代理。Fiddler启动时默认将IE的代理设置为127.0.0.1:8888，而其他浏览器需要手工设置。所以在Firefox浏览器中手动将浏览器的代理设置成127.0.0.1：8888便可监听数据。代理如何设置，这里不再介绍。

三、捕获HTTPS会话

Fiddler默认不会捕获HTTPS会话，需要手动设置，打开Fiddler Tool→Fiddler Options→HTTPS TAB，勾选上对应的选项即可，如图：

![此处输入图片的描述][1]

四、Fiddler使用界面

Fiddler界面包括菜单栏、工具栏、会话列表、命令行工具、以及详细信息。其中详细信息包含统计Statistics、Inspectors、AutoResponder、Filters、Log、Timeline等。

 1. 统计视图Statistic陈列出所有HTTP通信，可以通过选择多个会话得出这些会话的总的统计信息，比如多个请求和传输的数据大小、时间等各种信息，可以很方便得出哪些请求比较耗时，从而对页面进行访问速度优化，如下图：
![此处输入图片的描述][2]


五、Fiddler中设置断点

Fiddler最强大的功能莫过于修改断点，设置好断点后可以修改HttpRequest的任何信息，包括Host、Cookie或者表单中的数据。设置断点的方法有两种：

1. 菜单中点击Rules→Automatic Breakpoint→Before Requests(这种方法会终止所有会话)，清除的方法是Rules→Automatic Breakpoint→Disabled；

2. 在命令行输入：bpu（设置response断点使用bpuafter） www.baidu.com（只会中断www.baidu.com），消除命令的方法是命令行输入bpu。

实例：

1. 用IE 打开百度的登录框  http://www.baidu.com；
2. 打开Fiddler,  在命令行中输入bpu https://passport.baidu.com/v2/api/?login；
3. 输入错误的用户名和密码，点击登录；
4. Fiddler 能中断这次会话，选择被中断的会话，点击Inspectors tab下的WebForms tab 修改用户名密码，然后点击Run to Completion，会发现页面登陆成功。
![此处输入图片的描述][3]


六、创建AutoResponder

创建Fiddler的AutoResponder是最常用的功能，它允许从本地返回文件，而不用将请求发送到服务器上。看个例子：

1. 打开百度首页，把百度的logo图片保存到本地，并且对图片做些修改；
2. 打开Fiddler找到logo图片的会话：http://www.baidu.com/img/baidu_sylogo1.gif，并将此回话拖动到AutoResponder Tab下；
3. 选择Enable automatic reaponses 和Unmatched requests passthrough；
4. 在下面的Rule Editor 下面选择 Find a file... 选择本地保存的图片.  最后点击Save 保存下。
5. 再用IE打开百度首页， 你会看到首页的logo用的是本地的。
    ![此处输入图片的描述][4]

七、Fiddler会话过滤

每次使用Fiddler, 打开一个网站，都能在Fiddler中看到几十个会话，看得眼花缭乱。最好的办法是过滤掉一些会话，比如过滤掉图片的会话。Fiddler中有过滤的功能， 在右边的Filters tab中，里面有很多选项， 稍微研究下，就知道怎么用。

八、会话比较功能

选中2个会话，右键然后点击Compare，就可以用WinDiff来比较两个会话的不同了（需要安装WinDiff）

九、QuickExec命令行的使用技巧

Fiddler界面左下角提供命令行工具，允许直接输入命令。

1. 可用于命令行的快捷方式有：

    ALT+Q：快速将光标移动到命令行中；
    CTRL+ALT+F：将Fiddler窗口快速置顶；
    CTRL+I：快速将最后选择的会话URL插入到命令行中；
2. 命令有以下这些（由Fiddler官网翻译而来）：
    ![此处输入图片的描述][5]
    ![此处输入图片的描述][6]
    ![此处输入图片的描述][7]
    ![此处输入图片的描述][8]


参考文档：http://kb.cnblogs.com/page/130367/#introduce 

Fiddler官方帮助文档：http://www.fiddler2.com/fiddler/help 

Word版下载：[Fiddler使用介绍.doc][9]


  [1]: http://h.hiphotos.baidu.com/space/pic/item/dcc451da81cb39dbb9a099c0d0160924aa1830c7.jpg
  [2]: http://a.hiphotos.baidu.com/space/pic/item/060828381f30e924e8b762a74c086e061d95f711.jpg
  [3]: http://c.hiphotos.baidu.com/space/pic/item/6c224f4a20a446235b9b79f49822720e0df3d7d7.jpg
  [4]: http://g.hiphotos.baidu.com/space/pic/item/ac4bd11373f082025c414da94bfbfbedaa641b50.jpg
  [5]: http://h.hiphotos.baidu.com/space/pic/item/eac4b74543a98226e071ceb18a82b9014b90ebf0.jpg
  [6]: http://c.hiphotos.baidu.com/space/pic/item/4610b912c8fcc3ce39602ca59245d688d53f2080.jpg
  [7]: http://e.hiphotos.baidu.com/space/pic/item/4e4a20a4462309f7fcdf4884720e0cf3d6cad6f0.jpg
  [8]: http://h.hiphotos.baidu.com/space/pic/item/4b90f603738da9770e8c63bdb051f8198718e381.jpg
  [9]: http://wenku.baidu.com/link?url=C1vvl3spLgk_rwajEsW5Ab4-q1UXOfdxWoqlZwHhDPr9Fijf8lOFYcTqJlFvsoSb2Q3jAIaPl9qRpBZ4_Phpbk-Scdw1493jbsAEQpcUC6m