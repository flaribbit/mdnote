<!-- 公式渲染 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters:[
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
        ]
    });
    var el=document.querySelectorAll(".remark-title");
    for(var i=0;i<el.length;i++){
      el[i].nextElementSibling.prepend(el[i]);
    }
});
</script>
<!-- 定义样式 -->
<style>
.box-title{
  color: white;
  position: absolute;
  left: 1.2em;
  top: -1em;
  background-color: #2196f3;
  padding: 0.4em 0.8em;
  font-family: Times New Roman, 宋体;
  font-weight: bold;
}
.box-content{
  color: black;
  background-color: #e3f2fd;
  border-width: 1.5px;
  border-style: solid;
  border-color: #2196f3;
  border-radius: 8px;
  padding: 1.5em 1.5em 0 1.5em;
  font-family: Times New Roman, 楷体;
}
.box-content>p{
  margin: 0 0 0.5em 0;
  text-indent: 0;
  font-family: Times New Roman, 楷体;
}
.box{
  position: relative;
  margin: 2em 0;
}
.box.orange>.box-title{
  background-color: #ff9800;
}
.box.orange>.box-content{
  background-color: #fff3e0;
  border-color: #ff9800;
}
.box.green>.box-title{
  background-color: #4caf50;
}
.box.green>.box-content{
  background-color: #e8f5e9;
  border-color: #4caf50;
}
.box.purple>.box-title{
  background-color: #9c27b0;
}
.box.purple>.box-content{
  background-color: #f3e5f5;
  border-color: #9c27b0;
}
h1{
  text-align: center;
}
/* 段落缩进 */
p{
  text-indent: 2em;
}
/* 定义文档字体 */
*{
  font-family: Times New Roman, 宋体;
}
/* 定义文档字号 */
p,div{
  font-size: 12pt;
}
.remark-title{
  color: #2196f3;
  display: inline;
  margin: 0 0.5em 0.5em 0;
  font-family: 黑体;
}
.remark{
  display: inline;
  margin: 0 0 0.5em 0;
  font-family: Times New Roman, 楷体;
}
.remark>p{
  text-indent: 0;
  margin: 0 0 0.5em 0;
  font-family: Times New Roman, 楷体;
}
</style>

<!-- 正文从这里开始 -->
# mdnote

一段文字

<div class="remark">
<div class="remark-title">小标题</div>

一段文字

</div>

<div class="box orange">
<div class="box-title">橙色标题</div>
<div class="box-content">

文本

</div></div>

<div class="box green">
<div class="box-title">绿色标题</div>
<div class="box-content">

文本

</div></div>

<div class="box">
<div class="box-title">蓝色标题</div>
<div class="box-content">

文本

</div></div>

<div class="box purple">
<div class="box-title">紫色标题</div>
<div class="box-content">

文本

</div></div>
