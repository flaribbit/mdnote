<link rel="stylesheet" href="style.css">
<script src="index.js" defer></script>

# Markdown笔记美化
## Hermite二次型化为标准形
<div class="note">

<ti>Herimite二次型</ti> $A$为Herimite矩阵，Herimite二次型表示为：
$$f(x_1,x_2,\cdots,x_n)=\sum\sum a_{ij}\bar x_i x_j=x^H Ax$$

</div>

::: tip 性质

* $(A\alpha,\beta)=(\alpha,A\beta)$
* $A$ 的特征值均为实数
* $A$ 的不同特征值对应的特征向量正交

:::

::: method 计算方法

1. 求特征值
2. 求特征向量
3. 正交化重根对应的特征向量
4. 合并特征向量得到酉相似变换矩阵 $U$
5. 令 $x=Uy$ 代入二次型

:::

设$A\in C^{n\times n}$，求证：对任意一种矩阵范数，恒有 $\rho(A)\leq \left\|A\right\|$

<div class="strip">

**证明** 当 $A=0$ 时，显然成立。当 $A\neq 0$ 时，对任意小的 $\epsilon>0$，记 $B=\frac{A}{\left\|A\right\|+\epsilon}$，则 $\left\|B\right\|<1$，故 $B^k\rightarrow 0$，由极限定理知 $\rho(B)<1$，又因为 $\rho(B)=\frac{\rho(A)}{\left\|A\right\|+\epsilon}$，所以 $\rho(A)<\left\|A\right\|+\epsilon$，所以 $\rho(A)\leq \left\|A\right\|$。

</div>

<div class="cbox"><ti>计算方法</ti><ct>

1. 求特征值
2. 求特征向量
3. 正交化重根对应的特征向量
4. 合并特征向量得到酉相似变换矩阵 $U$
5. 令 $x=Uy$ 代入二次型

</ct></div>

<style>
.katex{
    /* font-size: 1em; */
}
.strip{
    border-style: none none none solid;
    background-color: #f3e5f5;
    border-color: #9c27b0;
    border-width: 4px;
    padding: 0 0 0 1em;
}

.cbox {
    position: relative;
    padding: 1em 0;
}

.cbox ti {
    color: white;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    padding: 0.4em 0.8em;
    background-color: #2196f3;
}

.cbox ct {
    display: block;
    padding: 1.5em 1.5em 0 1.5em;
    background-color: #e3f2fd;
    border-width: 1.5px;
    border-style: solid none;
    border-color: #2196f3;
}
</style>
