# 其他设置
[[TOC]]

### 1. 对xterm的设置
      - xterm -sl 20000 -fg lightgreen -bg black -cr red -fn 9*15
      ```
      -fg设置前景色
      -bg设置后景色
      -fn设置字体：可选的有9*15，10*20，12*24
      -cr设置文本光标
      -sl设置屏幕保存的行数
      ```
### 2. 查看png和pdf
      - eog  xxx.png
      - evince xxx.pdf

### 3. 查看mpi编译器 
      - module avail -load （查看编译器gcc、mpi等等）
      - module load mpixxxx（加载某个具体的编译器）
      - which mpif90（查看当前使用的mpi编译器版本）

### 4. 查看本机外网ip：curl myip.ipip.net

### 5. matlab –nodesktop
不用可视化使用matlab 直接命令行使用

### 6. gprof，gprof2dot，dot画图【待补充】

### 7. 查看可执行文件的编译器版本
      - string -a promgram_name | grep -i gcc

