Materialize-css 前端构建框架
===========================

Feature
--------------------

- 基于`jQuery`开发模式
- webpack构建，所有文件拍平后放入`.dist`
- `LESS`生成样式表，支持base、component、page三个层面的样式表组织
- 原生`javascript`，支持CMD和AMD写法

Note
--------------------

- webpack sass-loader 失效（调用node-sass失败，路径错误）。暂时引用编译好的materialize.css。

