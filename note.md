<link rel="stylesheet" href="style.css">

# Markdown笔记美化
## Hermite二次型化为标准形
<div class="note">

<ti>Herimite二次型</ti> $A$为Herimite矩阵，Herimite二次型表示为：
$$f(x_1,x_2,\cdots,x_n)=\sum\sum a_{ij}\bar x_i x_j=x^H Ax$$

</div>

<div class="box"><ti>性质</ti><ct>

* $(A\alpha,\beta)=(\alpha,A\beta)$
* $A$ 的特征值均为实数
* $A$ 的不同特征值对应的特征向量正交

</ct></div>

<div class="box green"><ti>计算方法</ti><ct>

1. 求特征值
2. 求特征向量
3. 正交化重根对应的特征向量
4. 合并特征向量得到酉相似变换矩阵 $U$
5. 令 $x=Uy$ 代入二次型

</ct></div>
