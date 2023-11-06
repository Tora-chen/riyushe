import { sidebar } from "vuepress-theme-hope";

export const zhDocSidebar = sidebar({
  "/": [
    "",
    {
      text: "开发文档",
      icon: "code",
      prefix: "document/",
      children: "structure",
    },
  ],
});
