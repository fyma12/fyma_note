# NIMROD


### 1. ./xdraw xyeq (drawxyeq.in)：画出xy平面的平衡量信息

### 2. 画庞加莱图
- 创建poincare文件夹
- 把需要画的dump.xxxxx以及相应的nimrod.in复制到这个文件夹
- 打开nimfl.in，修改dump的名字/编号
- ./nimfl，生成nimfl.dat，nimfl.bin，还会顺便生成start_position.dat（起始点位置，也自行修改）
- 打开drawpss.in，修改成要画的nimfl.dat
- ./xdraw pss 直接画（利用的是nimfl.bin），或者下载nimfl.dat，再后续处理
 
