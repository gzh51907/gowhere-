去哪儿

---

- 官网：https://touch.dujia.qunar.com/
- 上线网址：http://121.40.124.130:12315
- git 仓库地址：https://github.com/gzh51907/gowhere- 

团队协作分工

---

- 组长：郑文 组员：季子锐 汪卫国 刘海华
- 模块负责说明：
  - 郑文:首页，后台管理系统
  - 汪卫国：登录，注册，短信验证接口
  - 季子锐：好货页，特卖页
  - 刘海华：数据爬虫，接口

部分项目截图

- 首页
  
  
  
- 好货页
  
  
- 特卖页
  
- 登录注册页
  
  
  

技术栈

前端

- React
- webpack
- ReactRouter
- Redux
- React-Redux

后端

- Nodejs
- Express
- MongoDB
- Ant-Design
- siwper

文件夹 PATH 列表

│  .babelrc

│  .gitignore

│  package-lock.json

│  package.json

│  README.md

│  tree.txt

│  webpack.config.js

│  

├─mongodb

│  │  package-lock.json

│  │  package.json

│  │  

│  └─src

│      │  config.json

│      │  server.js

│      │  

│      ├─db

│      │      index.js

│      │      mongo.js

│      │      

│      ├─routers

│      │      content.js

│      │      home.js

│      │      index.js

│      │      list.js

│      │      notecode.js

│      │      page.js

│      │      reg.js

│      │      

│      └─utils

│              index.js

│              token.js

│              

└─src

    │  App.js

    │  favicon.ico

    │  main.js

    │  template.html

    │  

    ├─Api

    │      index.js

    │      

    ├─components

    │  └─captcha

    │          config.js

    │          index.js

    │          

    ├─images

    │      64a35f4ab3ab1fad57731edb3d.png_92.png

    │      6c7152c2a8b35a9c49bb26ea25.png_92.png

    │      8f6e29b7b6ce0a807742c2587a.png_92.png

    │      b7f09964d1e7a6280cca361c46.png_92.png

    │      e24bca3f1ef6ae6ebdee15e4ca.png_92.png

    │      p0.png

    │      tag-bg.png

    │      tag.png

    │      

    ├─pages

    │  │  Goods.js

    │  │  Mine.js

    │  │  Quit.js

    │  │  Reg.js

    │  │  Special.js

    │  │  SpecialList.js

    │  │  

    │  ├─css

    │  │      Mine.css

    │  │      Mine.min.css

    │  │      Mine.scss

    │  │      Quit.scss

    │  │      

    │  ├─mine

    │  │      Accountlogin.js

    │  │      Minereg.js

    │  │      Notelogin.js

    │  │      

    │  └─Vacation

    │          Vacation.css

    │          Vacation.js

    │          Vacation.min.css

    │          Vacation.scss

    │          

    └─store

        │  index.js

        │  

        ├─action

        │      user.js

        │      

        └─reducer

                index.js

                user.js

                
