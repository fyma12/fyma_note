import {DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
    '/opera_comm/':[
    //第一部分     
      {
        text: '常用导航', link: '/nav',
        items: [
          {  }
        ]//若不增加空items，上一级标题'常用导航'不会加粗
      },

      //第二部分
      {
        text: '常用操作命令',
        items: [
          { text: 'Linux', link: '/opera_comm/Linux' },
          { text: 'Latex', link: '/opera_comm/Latex' }
        ]
      }
    ]
}