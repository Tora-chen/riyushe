<template><div><hr>
<p><a href="./env">temp</a></p>
<h1 id="开发文档" tabindex="-1"><a class="header-anchor" href="#开发文档" aria-hidden="true">#</a> 开发文档</h1>
<hr>
<p>本网站使用 VuePress 开发。VuePress 是一个以 Markdown 为中心的静态网站生成器，使用 Markdown 来书写内容 (如文档、博客等) ，得到用于展示的静态网站。</p>
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
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<p>src 目录包含了网站的所有内容源代码，该目录下包含以下文件或文件夹：</p>
<ul>
<li>.vuepress：包含了网站的配置文件和主题文件的文件夹。</li>
<li>document：对应网站的“开发文档”页面。</li>
<li>file：对应网站的“资料公开”页面。</li>
<li>notice：对应网站的“通知”界面。</li>
<li>ja：对应网站的日语版本，同样包含有 file 和 notice 两个文件夹，对应网站日语版本的“资料公开”和“通知”界面。</li>
<li><a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a>：对应网站的“首页”页面。</li>
</ul>
</div></template>


