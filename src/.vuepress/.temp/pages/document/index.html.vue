<template><div><p>本网站使用 VuePress 开发。VuePress 是一个以 Markdown 为中心的静态网站生成器，使用 Markdown 来书写内容 (如文档、博客等) ，得到用于展示的静态网站。</p>
<h2 id="开发准备" tabindex="-1"><a class="header-anchor" href="#开发准备" aria-hidden="true">#</a> 开发准备</h2>
<h3 id="_1-运行环境" tabindex="-1"><a class="header-anchor" href="#_1-运行环境" aria-hidden="true">#</a> 1. 运行环境</h3>
<p>运行环境指的是在本地开发所需要的软件工具，包括 Node.js、VS Code、Pnpm 等。</p>
<p>VuePress 的环境配置请参考：<a href="https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html" target="_blank" rel="noopener noreferrer">环境配置<ExternalLinkIcon/></a></p>
<h3 id="_2-克隆网站存储库到本地" tabindex="-1"><a class="header-anchor" href="#_2-克隆网站存储库到本地" aria-hidden="true">#</a> 2. 克隆网站存储库到本地</h3>
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
<h2 id="开始开发" tabindex="-1"><a class="header-anchor" href="#开始开发" aria-hidden="true">#</a> 开始开发</h2>
<h3 id="_1-启动开发服务器" tabindex="-1"><a class="header-anchor" href="#_1-启动开发服务器" aria-hidden="true">#</a> 1. 启动开发服务器</h3>
<p>在 VS Code 中打开终端（快捷键 Ctrl+`），输入</p>
<div class="language-pnpm line-numbers-mode" data-ext="pnpm"><pre v-pre class="language-pnpm"><code>pnpm docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果能看到以下输出，说明开发服务器已经启动成功：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  vite v4.4.9 dev server running at:

  ➜  Local:   http://localhost:8080/    
  ➜  Network: http://172.31.176.1:8080/ 
  ➜  Network: http://192.168.192.1:8080/
  ➜  Network: http://192.168.152.1:8080/
  ➜  Network: http://10.220.53.19:8080/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按下 Ctrl 单击 <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/<ExternalLinkIcon/></a> ，即可在浏览器中预览网站。</p>
<h3 id="_2-项目文件结构" tabindex="-1"><a class="header-anchor" href="#_2-项目文件结构" aria-hidden="true">#</a> 2. 项目文件结构</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-markdown-介绍" tabindex="-1"><a class="header-anchor" href="#_3-markdown-介绍" aria-hidden="true">#</a> 3. Markdown 介绍</h3>
<p>Markdown 是一种轻量级标记语言，用一些简单符号来轻松表达文字的格式、排版。Markdown 的基础教程请参考 <a href="https://markdown.com.cn/basic-syntax/" target="_blank" rel="noopener noreferrer">Markdown中文教程<ExternalLinkIcon/></a> 。</p>
<p>Vuepress 使用拓展的 Markdown 语法来编写网页的主要内容，每个页面都是一个 Markdown 文件。点开<code v-pre>/src/README.md</code>，你就能看到网站主页对应的 Markdown 文件了。</p>
<p>需要注意的是，文件开头用<code v-pre>---</code>包围的内容叫 Frontmatter，用于写页面的配置（主页比较特殊，只写了 Frontmatter 没有写正文内容）。下面介绍一些重要的 Frontmatter 属性：</p>
<ul>
<li>title: 页面的标题（显示在浏览器标签页上的）</li>
<li>icon: 页面的图标（显示在浏览器标签页上的）</li>
<li>footer: 底边栏内容</li>
<li>home: 是否把当前页面作为主页，默认为 false</li>
<li>comment: 是否打开评论功能</li>
</ul>
<p>更多 Frontmatter 属性请参考 <a href="https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/info.html" target="_blank" rel="noopener noreferrer">Frontmatter配置<ExternalLinkIcon/></a>。</p>
<p>Frontmatter 后就是正文部分，正文部分可以用 Markdown 语法书写。</p>
<h2 id="构建静态网站" tabindex="-1"><a class="header-anchor" href="#构建静态网站" aria-hidden="true">#</a> 构建静态网站</h2>
<p>打开终端，输入</p>
<div class="language-pnpm line-numbers-mode" data-ext="pnpm"><pre v-pre class="language-pnpm"><code>pnpm run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可构建静态网站。若看到类似于</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>success VuePress build completed in 87.15s!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的输出，说明构建成功。这一过程一般要花一两分钟。构建好的静态网站默认输出在<code v-pre>/.vuepress/dist/</code>文件夹中。</p>
<p>如果直接打开 dist 文件夹下的 index.html，网站的样式会加载不出，这是正常现象。</p>
<h2 id="把网站推送到云端" tabindex="-1"><a class="header-anchor" href="#把网站推送到云端" aria-hidden="true">#</a> 把网站推送到云端</h2>
<p>在更改完网页后，在 VS Code 中打开源代码管理面板（快捷键 Ctrl+Shift+G）然后完成以下步骤：</p>
<ol>
<li>点击“更改”一栏后的加号，暂存所有更改</li>
<li>在“消息”输入框中描述你这次修改的内容（尽量言简意赅，建议使用英语）</li>
<li>点击“提交”</li>
<li>确认无误后点击“发布 Branch”</li>
</ol>
</div></template>


