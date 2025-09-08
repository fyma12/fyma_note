# Fortran

1. 编译多个fortran的.f*文件
    - 有两个Fortran程序fun.f90和main.f90，其中main.f90是主程序，fun.f90是在主程序中调用的子程序。现在需要同时编译这两个文件。
    - 方法一：将这两个文件放到一个目录下，使用fortran编译命令，如Intel的ifort
      ```
      ifort -o exe_name fun.f90 main.f90
      或者ifort -o exe_name main.f90 fun.f90
      ```
    - 方法二：在主程序main.f90中加入include'fun.f90'语句，然后在Linux下用fortran命令编译
      ```
      ifort -o exe_name main.f90
      ```
    - 方法三：分步骤编译
      ```
      ifort -c main.f90 (执行该命令后，会在目录下产生一个main.o的文件)
      ifort -c fun.f90 (执行该命令后，会在目录下产生一个fun.o的文件)
      ifort -o exe_name fun.o main.o 或者ifort -o exe_name main.o fun.o
      ```

2. 派生类型x%fs
    - a的组件rho和sigma可以通过a%rho和a%sigma访问
    - 这些组件可以在表达式中使用(例如a%rho*g)，也可以是赋值的左侧(a%rho=1.)

3. 数组下标
    - 默认情况下，数组是从下标1开始索引的
    - 但是可以在声明时改变开始索引的数字
      - 如intger :: a(-3:3) 该数组大小为7，索引从-3到3

4. PAUSE产生的警告
    - PAUSE的作用：在Fortran中，PAUSE语句用于暂停程序的执行，以便用户可以查看输出结果或等待程序的其他操作。
    - 问题显示：warning：Deleted feature: PAUSE statement at (1)
    - 原因：fortran2018开始，去掉了pause语句，新版本编译器可能会看到这个warning
    - 解决方法：
      - 不管这个警告，因为经过实际的验证，发现虽然会有警告，但是pause语句的正常使用并不受影响，输入go就会继续执行
      - 使用其他方法来实现暂停程序的执行。例如，使用READ语句从标准输入读取一个临时变量，以等待用户输入。
      ```
      character(len=1) temp
      write(*,*) 'Program paused. Press any key to continue...'
      read(*,*) temp
      这将在屏幕上显示一条消息，提示用户按任意键继续程序的执行。
      ```