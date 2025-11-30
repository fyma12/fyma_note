# 文件传输
[[TOC]]
### 1. scp（涉及两个机器）
- 本机文件 → 传给远程服务器
  - >scp /本机文件path/filename username@servername:/目标path（在本机输入）
  - 例如：scp file.txt username@servername:/home/username
  - 把本机输入命令时的路径下的file.txt，上传到服务器上的/home/username目录中（会提醒输入登陆服务器的密码）
- 远程服务器的文件 → 下载到本机
  - >scp username@servername:/path/filename /本机local_dir/path/（在本机输入）
  - 例如：username@servername:/home/username/file.txt .
  - 把服务器上的/home/username/file.txt文件下载到输入命令时的路径下
- 上传文件夹到服务器，或者从服务器下载文件夹，只需要在scp后加-r
  - > scp -r folder username@servername:/目标path
  - > scp -r username@servername:/path/folder /本机local_dir/path/
     
### 2. rsync（涉及两个机器）
- 在当前A服务器下载B服务器的文件/文件夹
  - rsync -auvz username@servername:/path /当前A服务器/path
- 在当前A服务器，将A上的文件传到B服务器
  - rsync -auvz /当前A服务器/path username@servername:/path
- rsync选项解释
  - -a：归档模式，总是递归拷贝，且保留符号链接、权限、属主、属组时间戳
  - -u：update 模式，只有当源文件比目标文件新，或者目标文件不存在时，才会进行传输
  - -v：详细模式输出
  - -z：压缩传输

### 3. 隧道/跳板/通道传输（涉及三个机器） 
- >语法：ssh -f -L 1233:A目标地址:22 user@B隧道地址 sleep 10; rsync -e 'ssh -p 1233' user@127.0.0.1:/Apath/ /Cpath
- 解释：在C上输入该命令，将A上Apath的文件，通过B隧道/跳板下载到C的Cpath下
- 需要满足C可以访问A和B；会要求输入A、B的密码
- 若将user@127.0.0.1:/Apath/ /Cpath互换位置，则意味着将Cpath文件传到Apath下，这是rsync基本的用法
- 注意，在哪里输入命令就不需要写哪里的地址

### 4. 并行传输
- >语法：find . \( -type f -o -type l \) -print0 | xargs -0 -n 1 -P 10 -I {} rsync -auvzPR {} muio01:/home/username/filename
- 解释：把当前目录下的所有普通文件和符号链接（包含子目录中的文件），以并行的方式同步到远程服务器 muio01 的 /home/username/filename 目录下
- 第一部分文件查找：find . \( -type f -o -type l \) -print0
  - .：代表从当前目录开始进行搜索
  - \( -type f -o -type l \)：这里的 f 表示普通文件，l 表示符号链接，此选项的作用是查找普通文件和符号链接
  - -print0：把找到的文件和符号链接以 NUL（\0）作为分隔符输出，这样能有效避免文件名包含特殊字符（像空格、换行符等）所引发的问题
- 第二部分并行处理文件：xargs -0 -n 1 -P 10 -I {}
  - -0：它会将 NUL（\0）作为输入分隔符，与 find 命令的 -print0 选项相对应。
  - -n 1：每次仅处理一个参数，也就是说，每次只对一个文件执行操作
  - -P 10：开启并行处理模式，最多可以同时运行 10 个进程
  - -I {}：将 {} 设定为替换字符串，在后续的命令里，{} 会被实际的文件名替换掉
- 第三部分文件同步：rsync -auvzPR {} muio01:/home/username/filename
  - 源文件：{} 会被替换成 find 命令所找到的文件路径，这些文件是相对于当前目录的。
  - 目标地址：muio01:/home/username/filename
      ```bash
      Host muio01
        HostName 12.12.12.199
        User username
        Port 22
        ControlMaster auto
        ControlPath /tmp/%r@%h:%p
        ControlPersist yes
      ```
- 举例：在大集群输入 find . \( -type f -o -type l \) -print0 | xargs -0 -n 1 -P 10 -I {} rsync -auvzPR {} fyma@12.12.12.199:/home/fyma/filename