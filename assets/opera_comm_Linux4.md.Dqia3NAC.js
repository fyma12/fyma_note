import{_ as e,c as r,ae as o,o as t}from"./chunks/framework.Dhtcm-Bs.js";const f=JSON.parse('{"title":"其他设置","description":"","frontmatter":{},"headers":[],"relativePath":"opera_comm/Linux4.md","filePath":"opera_comm/Linux4.md"}'),i={name:"opera_comm/Linux4.md"};function p(n,a,l,d,m,c){return t(),r("div",null,a[0]||(a[0]=[o(`<h1 id="其他设置" tabindex="-1">其他设置 <a class="header-anchor" href="#其他设置" aria-label="Permalink to &quot;其他设置&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#_1-对xterm的设置">1. 对xterm的设置</a></li><li><a href="#_2-查看png和pdf">2. 查看png和pdf</a></li><li><a href="#_3-查看mpi编译器">3. 查看mpi编译器</a></li><li><a href="#_4-查看本机外网ip-curl-myip-ipip-net">4. 查看本机外网ip：curl myip.ipip.net</a></li><li><a href="#_5-matlab-–nodesktop">5. matlab –nodesktop</a></li><li><a href="#_6-gprof-gprof2dot-dot画图【待补充】">6. gprof，gprof2dot，dot画图【待补充】</a></li><li><a href="#_7-查看可执行文件的编译器版本">7. 查看可执行文件的编译器版本</a></li></ul></nav><h3 id="_1-对xterm的设置" tabindex="-1">1. 对xterm的设置 <a class="header-anchor" href="#_1-对xterm的设置" aria-label="Permalink to &quot;1. 对xterm的设置&quot;">​</a></h3><pre><code>  - xterm -sl 20000 -fg lightgreen -bg black -cr red -fn 9*15
  \`\`\`
  -fg设置前景色
  -bg设置后景色
  -fn设置字体：可选的有9*15，10*20，12*24
  -cr设置文本光标
  -sl设置屏幕保存的行数
  \`\`\`
</code></pre><h3 id="_2-查看png和pdf" tabindex="-1">2. 查看png和pdf <a class="header-anchor" href="#_2-查看png和pdf" aria-label="Permalink to &quot;2. 查看png和pdf&quot;">​</a></h3><pre><code>  - eog  xxx.png
  - evince xxx.pdf
</code></pre><h3 id="_3-查看mpi编译器" tabindex="-1">3. 查看mpi编译器 <a class="header-anchor" href="#_3-查看mpi编译器" aria-label="Permalink to &quot;3. 查看mpi编译器&quot;">​</a></h3><pre><code>  - module avail -load （查看编译器gcc、mpi等等）
  - module load mpixxxx（加载某个具体的编译器）
  - which mpif90（查看当前使用的mpi编译器版本）
</code></pre><h3 id="_4-查看本机外网ip-curl-myip-ipip-net" tabindex="-1">4. 查看本机外网ip：curl myip.ipip.net <a class="header-anchor" href="#_4-查看本机外网ip-curl-myip-ipip-net" aria-label="Permalink to &quot;4. 查看本机外网ip：curl myip.ipip.net&quot;">​</a></h3><h3 id="_5-matlab-–nodesktop" tabindex="-1">5. matlab –nodesktop <a class="header-anchor" href="#_5-matlab-–nodesktop" aria-label="Permalink to &quot;5. matlab –nodesktop&quot;">​</a></h3><p>不用可视化使用matlab 直接命令行使用</p><h3 id="_6-gprof-gprof2dot-dot画图【待补充】" tabindex="-1">6. gprof，gprof2dot，dot画图【待补充】 <a class="header-anchor" href="#_6-gprof-gprof2dot-dot画图【待补充】" aria-label="Permalink to &quot;6. gprof，gprof2dot，dot画图【待补充】&quot;">​</a></h3><h3 id="_7-查看可执行文件的编译器版本" tabindex="-1">7. 查看可执行文件的编译器版本 <a class="header-anchor" href="#_7-查看可执行文件的编译器版本" aria-label="Permalink to &quot;7. 查看可执行文件的编译器版本&quot;">​</a></h3><pre><code>  - string -a promgram_name | grep -i gcc
</code></pre>`,14)]))}const _=e(i,[["render",p]]);export{f as __pageData,_ as default};
