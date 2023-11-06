<template><div><p>本网站使用 VuePress 开发。VuePress 是一个以 Markdown 为中心的静态网站生成器，使用 Markdown 来书写内容 (如文档、博客等) ，得到用于展示的静态网站。</p>
<h2 id="准备运行环境" tabindex="-1"><a class="header-anchor" href="#准备运行环境" aria-hidden="true">#</a> 准备运行环境</h2>
<p>运行环境指的是在本地开发所需要的软件工具，包括 Node.js、VS Code、Pnpm 等。</p>
<p>VuePress 的环境配置请参考：<a href="https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html" target="_blank" rel="noopener noreferrer">环境配置<ExternalLinkIcon/></a></p>
<h2 id="克隆网站存储库到本地" tabindex="-1"><a class="header-anchor" href="#克隆网站存储库到本地" aria-hidden="true">#</a> 克隆网站存储库到本地</h2>
<p>GitHub 是一个以 Git 为中心的代码托管平台。本网站的代码托管在 <a href="https://github.com/ncut-jaclub/club-website" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a> 。</p>
<p>我们可以使用 VS Code 将代码克隆到本地：</p>
<ol>
<li>在 VS Code 中打开“源代码管理”面板（快捷键 Ctrl+Shift+G），点击“克隆仓库”。</li>
</ol>
<figure><img src="@source/document/image.png" alt="源代码管理面板" width="300" height="500" tabindex="0" loading="lazy"><figcaption>源代码管理面板</figcaption></figure>
<ol start="2">
<li>在弹出的输入框中输入代码的存储库地址 <a href="https://github.com/ncut-jaclub/club-website.git" target="_blank" rel="noopener noreferrer">https://github.com/ncut-jaclub/club-website.git<ExternalLinkIcon/></a> ：</li>
</ol>
<figure><img src="@source/document/image-1.png" alt="输入存储库地址" width="650" height="150" tabindex="0" loading="lazy"><figcaption>输入存储库地址</figcaption></figure>
<ol start="3">
<li>
<p>选择一个文件夹作为存储库。</p>
</li>
<li>
<p>克隆完成后，若弹出“是否要打开已克隆仓库?”，点击“打开”。</p>
</li>
</ol>
<p>若成功克隆，你应该在“资源管理器”面板（快捷键 Ctrl+Shift+E）中看到类似这样的目录：</p>
<figure><img src="@source/document/image-2.png" alt="目录" width="200" height="250" tabindex="0" loading="lazy"><figcaption>目录</figcaption></figure>
<h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h2>
<p>以下是一些主要文件 / 文件夹的功能：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>.
|── node_modules → 依赖包
├── src → 网站内容的源文件夹
│    ├── .vuepress → 存放全局配置、组件、静态资源等
│    │    ├── dist → 构建好静态网页会输出到这里
│    │    ├── release → 存放网站的正式发布版本
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
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


