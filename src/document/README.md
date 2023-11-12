---
title: 开发文档
icon: code
copyright: false
comment: false
card: true
footer: false 
---
本网站使用 VuePress 开发。VuePress 是一个以 Markdown 为中心的静态网站生成器，使用 Markdown 来书写内容 (如文档、博客等) ，得到用于展示的静态网站。

VuePress 官方文档：[VuePress](https://vuepress.vuejs.org/zh/)

VuePress-Theme-Hope 文档：[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/guide/)

## 开发准备
### 1. 运行环境
运行环境指的是在本地开发所需要的软件工具，包括 Node.js、VS Code、Pnpm 等。

VuePress 的环境配置请参考：[环境配置](https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html)

### 2. 克隆网站存储库到本地
GitHub 是一个以 Git 为中心的代码托管平台。本网站的代码托管在 [此处](https://github.com/Tora-chen/riyushe) 。

我们可以使用 VS Code 将代码克隆到本地（可能需要科学上网）：

1. 在 VS Code 中打开“源代码管理”面板（快捷键 Ctrl+Shift+G），点击“克隆仓库”。

![源代码管理面板](image.png =300x500)

2. 在弹出的输入框中输入代码的存储库地址 https://github.com/Tora-chen/riyushe.git ：

![输入存储库地址](image-1.png =650x150)

3. 选择一个文件夹作为存储库。

4. 克隆完成后，若弹出“是否要打开已克隆仓库?”，点击“打开”。

若成功克隆，你应该在“资源管理器”面板（快捷键 Ctrl+Shift+E）中看到类似这样的目录：

![目录](image-2.png =200x250)

### 3. 安装依赖
依赖即开发所需要的软件包。
在克隆的文件夹中打开终端，输入
```pnpm
pnpm i
```
即可安装所需依赖。

## 开始开发
### 1. 启动开发服务器
在 VS Code 中打开终端（快捷键 Ctrl+`），输入
```pnpm
pnpm docs:dev
```
如果能看到以下输出，说明开发服务器已经启动成功：
```
  vite v4.4.9 dev server running at:

  ➜  Local:   http://localhost:8080/    
  ➜  Network: http://172.31.176.1:8080/ 
  ➜  Network: http://192.168.192.1:8080/
  ➜  Network: http://192.168.152.1:8080/
  ➜  Network: http://10.220.53.19:8080/ 
```
按下 Ctrl 单击 http://localhost:8080/ ，即可在浏览器中预览网站。

### 2. 项目文件结构
以下是一些主要文件 / 文件夹的功能：

```
.
|── node_modules → 存放依赖
├── .github → 存放 GitHub 工作流，不要改动！
├── src → 网站内容的源文件夹
│    ├── .vuepress → 存放全局配置、组件、静态资源等
│    │    ├── dist → 静态网页输出位置
│    │    ├── navbar → 存放导航栏组件配置
│    │    ├── sidebar → 存放侧边栏组件配置
│    │    ├── public → 存放图片、图标等静态资源
│    │    ├── styles → 存放样式相关的文件
│    │    ├── config.ts → 配置文件
|    |    └── theme.ts → 主题配置文件
│    ├──  document → 对应网站的 “文档” 页面
│    ├──  file → 对应网站的 “资料公开” 页面
│    ├──  notice → 对应网站的 “通知” 页面
│    ├──  ja → 对应网站的日语版本，
│    │    ├── document → 对应网站 “文档” 页面的日语版本
│    │    ├── file → 对应网站 “资料公开” 页面的日语版本
│    │    ├── notice → 对应网站 “通知” 页面的日语版本
|    │    └── README.md → 网站主页的日语版本
│    └── README.md → 网站主页
├── package.json → Nodejs 配置文件
└── pnpm-lock.yaml → pnpm 配置文件
```

### 3. Markdown 介绍
Markdown 是一种轻量级标记语言，用一些简单符号来轻松表达文字的格式、排版。Markdown 的基础教程请参考 [Markdown中文教程](https://markdown.com.cn/basic-syntax/) 。

Vuepress 使用拓展的 Markdown 语法来编写网页的主要内容，每个页面都是一个 Markdown 文件。点开```/src/README.md```，你就能看到网站主页对应的 Markdown 文件了。

需要注意的是，文件开头用```---```包围的内容叫 Frontmatter，用于写页面的配置（主页比较特殊，只写了 Frontmatter 没有写正文内容）。下面介绍一些重要的 Frontmatter 属性：
- title: 页面的标题（显示在浏览器标签页上的）
- icon: 页面的图标（显示在浏览器标签页上的）
- footer: 底边栏内容
- home: 是否把当前页面作为主页，默认为 false
- comment: 是否打开评论功能

更多 Frontmatter 属性请参考 [Frontmatter配置](https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/info.html)。

Frontmatter 后就是正文部分，正文部分可以用 Markdown 语法书写。
Vuepress 中使用的拓展语法参见 [Markdown增强](https://theme-hope.vuejs.press/zh/guide/markdown/intro.html)

## 把网站推送到云端
推送需要先获取 GitHub 上本项目的推送权限，推送前请联系社长。
在更改完网页后，在 VS Code 中打开源代码管理面板（快捷键 Ctrl+Shift+G）然后完成以下步骤：
1. 点击“更改”一栏后的加号，暂存所有更改
2. 在“消息”输入框中描述你这次修改的内容（尽量言简意赅，建议使用英语）
3. 点击“提交”
4. 确认无误后点击“发布 Branch”
