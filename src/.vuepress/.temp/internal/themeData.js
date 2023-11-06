export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$qrh7rgG1UwxsqUN1FBYZ0O0Hsck6ExGAFKgpJhFx8IdWIjEFdoEHu\"],\"/ja/demo/encrypt.html\":[\"$2a$10$HtIzpNpljPHAjQXBvr.7iOgXva77VCF9W5quxlsA3NAeJ4C8hFOoi\"]}},\"logo\":\"/torii.png\",\"docsDir\":\"src\",\"locales\":{\"/ja/\":{\"lang\":\"ja-JP\",\"navbarLocales\":{\"langName\":\"日本語\",\"selectLangAriaLabel\":\"言語の選択\"},\"metaLocales\":{\"author\":\"著者\",\"date\":\"執筆日\",\"origin\":\"オリジナル\",\"views\":\"来場者数\",\"category\":\"カテゴリ\",\"tag\":\"タグ\",\"readingTime\":\"読書時間\",\"words\":\"単語数\",\"toc\":\"このページの内容\",\"prev\":\"前のページへ\",\"next\":\"次のページ\",\"lastUpdated\":\"最終更新日\",\"contributors\":\"投稿者\",\"editLink\":\"このページを編集\",\"print\":\"印刷\"},\"outlookLocales\":{\"themeColor\":\"テーマの色\",\"darkmode\":\"テーマモード\",\"fullscreen\":\"全画面\"},\"encryptLocales\":{\"iconLabel\":\"記事は暗号化されています\",\"placeholder\":\"パスワードの入力\",\"remember\":\"パスワードを記憶する\",\"errorHint\":\"正しいパスワードを入力してください!\"},\"routeLocales\":{\"skipToContent\":\"メインコンテンツへスキップ\",\"notFoundTitle\":\"ページが見つかりません\",\"notFoundMsg\":[\"ここには何もありません。\",\"どうやってここにたどり着いたのか?\",\"それは404です\",\"私たちはいくつかの壊れたリンクを持っているように見えます。\"],\"back\":\"前のページへ戻る\",\"home\":\"メインページに戻る\",\"openInNewWindow\":\"新しいウィンドウで開く\"},\"navbar\":[\"/ja/\",\"/ja/notice\",\"/ja/file/\"],\"footer\":\"默认页脚\",\"displayFooter\":true},\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/notice/\",\"/journal/\",\"/file/\",\"/document/\"],\"sidebar\":{\"/document/\":[{\"text\":\"\",\"icon\":\"\",\"prefix\":\"\",\"children\":\"structure\"}],\"/journal/\":[{\"text\":\"\",\"icon\":\"\",\"prefix\":\"\",\"children\":\"structure\"}]},\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}