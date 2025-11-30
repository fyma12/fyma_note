import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  
  // 站点级选项
  base: "/fyma_note/",
  title: "fyma_",
  description: "Study and Work.",
  
  // 主题级选项
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '常用导航', link: '/nav' },
      { text: '常用操作命令', 
         items : [
          { text: 'Linux', link: '/opera_comm/Linux'},
          { text: 'Latex', link: '/opera_comm/Latex'},
          { text: 'Fortran', link: '/opera_comm/Fortran' },
          { text: 'NIMROD', link: '/opera_comm/NIMROD' },
          { text: 'Python', link: '/opera_comm/Python' },
          { text: 'print', link: '/opera_comm/print' },
          { text: 'Matlab', link: '/opera_comm/Matlab' },
          { text: 'Illustrator', link: '/opera_comm/Illustrator' },
          { text: 'else', link: '/opera_comm/else' }
                ]
      },
      { text: '学习分享', link: '/study_note/notes_sum'}
    ],

    sidebar:{
      
      //第一部分     
//      {
//       text: '常用导航', link: '/nav',
//        items: [
//          {  }
//        ]//若不增加空items，上一级标题'常用导航'不会加粗
//      },
      //第二部分，当处在该目录下会显示此侧边栏
      '/opera_comm/':[
      {
        text: '常用操作命令',
        items: [
          { text: 'Linux', link: '/opera_comm/Linux' },
          { text: 'Latex', link: '/opera_comm/Latex' },
          { text: 'Fortran', link: '/opera_comm/Fortran' },
          { text: 'NIMROD', link: '/opera_comm/NIMROD' },
          { text: 'Python', link: '/opera_comm/Python' },
          { text: 'print', link: '/opera_comm/print' },
          { text: 'Matlab', link: '/opera_comm/Matlab' },
          { text: 'Illustrator', link: '/opera_comm/Illustrator' },
          { text: 'else', link: '/opera_comm/else' }
        ]
      }
    ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
