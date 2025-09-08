# 追赶法求解三对角矩阵



## 理论推导
### ① 用$a_{ij}$表示
从如下的<font color="Blue">三对角矩阵</font>出发

$$
\left[\begin{array}{ccccc}
a_{12} & a_{13} & 0 & \cdots & 0 \\
a_{21} & a_{22} & a_{23} & \cdots & 0 \\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & \cdots & a_{N-1,1} & a_{N-1,2} & a_{N-1,3} \\
0 & \cdots & 0 & a_{N, 1} & a_{N, 2}
\end{array}\right]
\left[\begin{array}{c}
u_1^{k+1} \\
u_2^{k+1} \\
\cdots \\
u_{N-1}^{k+1} \\
u_N^{k+1}
\end{array}\right]
=\left[\begin{array}{c}
R_1 \\
R_2 \\
\cdots \\
R_{N-1} \\
R_N
\end{array}\right]
$$

可以进一步整理成
$$
\begin{aligned}
& {\left[\begin{array}{ccccc}
a_{12} & a_{13} & 0 & \cdots & 0 \\
0 & a_{22}^{\prime} & a_{23} & \cdots & 0 \\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & a_{N-1,2}^{\prime} & a_{N-1,3}\\
0 & \cdots & 0 & 0 & a_{N, 2}^{\prime}
\end{array}\right]\left[\begin{array}{c}
u_1^{k+1} \\
u_2^{k+1} \\
\cdots \\
u_{N-1}^{k+1} \\
u_N^{k+1}
\end{array}\right]=\left[\begin{array}{c}
R_1^{\prime} \\
R_2^{\prime} \\
\cdots \\
R_{N-1}^{\prime} \\
R_N^{\prime}
\end{array}\right]
} 
\end{aligned}
$$
其中$R_{1}^{\prime}=R_{1}$
$$
\left\{
\begin{array}{l}
a_{i 2}^{\prime}=a_{i 2}-\frac{a_{i 1} a_{i-1,3}}{a_{i-1,2}^{\prime}} \\
R_i^{\prime}=R_i-\frac{a_{i 1} R_{i-1}^{\prime}}{a_{i-1,2}^{\prime}}
\end{array}
\right.
\quad (2 \leq i \leq N, a_{1 2}^{\prime}=a_{1 2}, a_{1 3}^{\prime}=a_{13})
$$
基于整理后的矩阵，可以得到
$$
\Rightarrow 
\left\{
\begin{array}{l}
u_N^{k+1}=\frac{R_N^{\prime}}{a_{N, 2}^{\prime}}\\
 u_i^{k+1}=\frac{R_i^{\prime}-a_{i 3} u_{i+1}^{k+1}}{a_{i 2}^{\prime}} \quad( 1 \leq i \leq N-1 )
\end{array}
\right.
$$
也就是说，先通过最后一行计算得到$u_N^{k+1}$，然后再从最后一行往上计算。


### ② 用$a_{i}, b_{i}, c_{i}$表示

从如下的三对角矩阵出发，$AU=R$

$$
\left[\begin{array}{ccccc}
\color{red}{b_{1}} & \color{green}{c_{1}} & 0 & \cdots & 0 \\
\color{blue}{a_{2}} & \color{red}{b_{2}}& \color{green}{c_{2}} & \cdots & 0 \\
\cdots & \color{blue}{\cdots} & \color{red}{\cdots} & \color{green}{\cdots} & \cdots \\
0 & \cdots & \color{blue}{a_{N-1}} & \color{red}{b_{N-1}} & \color{green}{c_{N-1}} \\
0 & \cdots & 0 & \color{blue}{a_{N}} & \color{red}{b_{N}}
\end{array}\right]
\left[\begin{array}{c}
u_1^{k+1} \\
u_2^{k+1} \\
\cdots \\
u_{N-1}^{k+1} \\
u_N^{k+1}
\end{array}\right]
=\left[\begin{array}{c}
R_1 \\
R_2 \\
\cdots \\
R_{N-1} \\
R_N
\end{array}\right]
$$
其中$\color{red}{b_i}$对角元，$\color{blue}{a_i}$左旁元，$\color{green}{c_i}$右旁元. 可以进一步整理成
$$
\begin{aligned}
& {\left[\begin{array}{ccccc}
b_{1} & c_{1} & 0 & \cdots & 0 \\
0 & b_{2}^{\prime} & c_{2} & \cdots & 0 \\
\cdots & \cdots & \cdots & \cdots & \cdots \\
0 & \cdots & 0 & b_{N-1}^{\prime} & c_{N-1} \\
0 & \cdots & 0 & 0 & b_{N}^{\prime}
\end{array}\right]\left[\begin{array}{c}
u_1^{k+1} \\
u_2^{k+1} \\
\cdots \\
u_{N-1}^{k+1} \\
u_N^{k+1}
\end{array}\right]=\left[\begin{array}{c}
R_1^{\prime} \\
R_2^{\prime} \\
\cdots \\
R_{N-1}^{\prime} \\
R_N^{\prime}
\end{array}\right]
} 
\end{aligned}
$$
其中$R_{1}^{\prime}=R_{1}$，且有
$$
\left\{
\begin{array}{l}
\color{magenta}
b_{i}^{\prime}=b_{i}-\frac{a_{i} c_{i-1}}{b_{i-1}^{\prime}} \\
\color{rgb(255,69,0)}R_i^{\prime}=R_i-\frac{a_{i} R_{i-1}^{\prime}}{b_{i-1}^{\prime}}
\end{array}
\right.
\quad  (2 \leq i \leq N, b_{1}^{\prime}=b_{1}, c_{1}^{\prime}=c_{1})
$$
基于整理后的矩阵，可以得到
$$
\Rightarrow 
\left\{
\begin{array}{l}
\color{rgb(139,0,0)}u_N^{k+1}=\frac{R_N^{\prime}}{b_{N}^{\prime}}\\
\color{rgb(139,0,0)} u_i^{k+1}=\frac{R_i^{\prime}-c_{i} u_{i+1}^{k+1}}{b_{i}^{\prime}} \quad( 1 \leq i \leq N-1 )
\end{array}
\right.
$$
也就是说，先通过最后一行计算得到$u_N^{k+1}$，然后再从最后一行往上计算.





## 伪程序/流程


求解$AU=R$

$\color{blue}{a}$左旁元 → a(ny)

$\color{red}{b}$对角元 → b(ny)

$\color{green}{c}$右旁元 → c(ny)

$R$ → f(ny)

$u_{i}^{k+1}$ → u(i,n+1)，维度是u(ny,nt)

ny：实空间网格数， nt：时间空间网格数

- 计算$\color{magenta}{ b_{i}^{\prime}=b_{i}-\frac{a_{i} c_{i-1}}{b_{i-1}^{\prime}} }$
```
        M(1)=b(1)
        do i=2,ny-1
          L(i)=a(i)/M(i-1)
        M(i)=b(i)-L(i)*c(i-1)
        end do
```
其中M(i)即为$b_{i}^{\prime}$

- 计算$R$
```
        do i = 1,ny
         f(i)=R(i)
        end do
```
一般来说，R(i)与矩阵元素$a,b,c$以及$u$均有关系，这里为了方便理解，以伪代码的形式展示，故写成以上形式，具体实践见[CN差分格式求解偏微分方程](/study_note/CN_PDE)

- 计算$\color{rgb(255,69,0)}R_i^{\prime}=R_i-\frac{a_{i} R_{i-1}^{\prime}}{b_{i-1}^{\prime}}$
```
        y(1)=f(1)
        do i=2,ny
         y(i)=f(i)-L(i)*y(i-1)
        end do
```
注意， L(i)=a(i)/M(i-1)

- 计算$\color{rgb(139,0,0)}u_N^{k+1}=\frac{R_N^{\prime}}{b_{N}^{\prime}},
 u_i^{k+1}=\frac{R_i^{\prime}-c_{i} u_{i+1}^{k+1}}{b_{i}^{\prime}} \quad( 1 \leq i \leq N-1 )$
```
        u(ny,n+1)=y(ny)/M(ny)
        do i=ny-1,1,-1
          u(i,n+1)=(y(i)-c(i)*u(i+1,n+1))/M(i)
        end do
```
至此可以计算出n+1时刻的整个空间网格上的$u$，在时间循环里不断调用，就可以计算出整个时间网格上的$u$

