


项目开发流程：  
技术栈 -> 基础配置/环境搭建 -> 开发:首页/用户页/详情页/购票页; -> 总结优化 -> 测试 -> 构建打包 -> 发布上线[Heroku云端构建]  

1.技术栈：React、React-router-dom、Redux、creat-react-app、ESLint、Sass、Canvas、webpack、Fetch(async/await);  

2.基础配置：  
reat-react-app构建项目 -> 配置ESLint -> 配置EditorConfig -> 配置Sass -> normalize.css的使用；  



3.开发：  
(1).前后端分离模式 -> 同时进行开发[前端mock数据] -> 项目联调；  
(2).划分开发页面/组件化开发：页面组件/视图组件、公共组件、页面中的小组件;//直接体现在了“项目目录”，而且也是读其他人代码的思路，便于梳理代码逻辑;  
(3).项目开发中的详细技术点：  
[1].是否使用“组件库”：项目没有直接引入大型组件库，轮播图直接找到组件，图标使用阿里图标库；  
[2].关于数据：数据mock;获取数据：fetch();//React对其做了兼容[可大胆使用]，项目中async/await + fetch();  
[3].组件：星星组件，进度条组件的思路基本相同；组件之间传值：留好接口，提升灵活性 -> 适用范围才会更加广泛；  
(4).购票页面：  
[1].canvas绘制座位组件：初始化渲染[本地json文件] -> 点击事件处理 -> 逻辑成功 -> 重新绘制canvas，否则没效果;//后端约定的字段很重要，前端可以方便处理；  
[2].选座成功后的数据是影响下面的展示x排x座组件的，因此需进行组件传值 -> React原生能力来解决，后续使用了Redux进行状态/数据流管理：npm install redux react-redux --save;//一个状态/state一个reducers，actions中存放状态操作行为;   
[3].关于canvas的失真问题：window.devicePixelRatio = 设备像素/css像素;canvas若是10px*10px,iphone上会成为4倍其会被拉伸，所以会失真 -> 解决方案：绘制图片的大小，画布大小都乘以window.devicePixelRatio;而且canvas性能还OK,图表，动画类库中经常使用，记得处理像素；//查看像素比官网：https://material.io/；  

this.ctx.drawImage();//其有很多参数组合方式；this.ctx.drawImage(this.selectImage, offsetLeft, offsetTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);  


4.总结优化：功能、性能、扩展性、维护性  
-webkit-overflow-scrolling: touch;//ios设备滚动的更加圆滑/回弹效果  
::-webkit-scrollbar{display:none};//滚动条消失  



5.测试：  
(1).测试工程师：产品流程上的测试;//功能测试，内部封测；我们自测：代码层面逻辑OK即可；  
(2).测试类型：TDD/BDD;//TDD测试驱动开发：先写测试用例 -> 写代码 ->若通过所有的测试用例，则项目完成，若没通过，修改代码；//测试用例与真实的用户需求并不是100%的匹配；BDD:行为/场景驱动开发；  
(3).测试框架：Jest/Mocha;  
(4).类浏览器环境：phantom/puppeteer;//自动化测试;  
(5).断言库：chai;  
书写测试用例：项目采取Jest框架[Facebook]，React脚手架上也有相关的测试test文件；由于前端项目迭代需求较多，我们可以采取给基础公共组件写测试用例，例如star星星组件；我们使用snapshots，npm install react-test-renderer --save-dev;   
测试写法：  
(1).__tests__文件夹中写.js文件；   
(2).直接写xx.test.js;//必须以.test.js为后缀名； -> npm run test; npm test --covrage;//测试“测试用例覆盖率”  
参考网址：  
https://jestjs.io/docs/en/getting-started；  
github上的creat-react-app源码；  


6.构建打包：npm run build;  


7.发布上线：  
(1).本地安装服务器：npm install serve -g;//执行serve即可启动本地服务；  
(2).发布于在线平台云端构建；  
(3).直接部署到服务器上；  



项目预览网址：https://immense-basin-67906.herokuapp.com/  


推荐项目[star]：  
1.简书笔记codeing、LevelOne阶段demo汇总[ES3/5/6/DOM/BOM/JQuery/网络/H5/CSS3/模块化(CommonJS/AMD/CMD/ES6Mod)/构建工具(Webpack/Gulp)/你不知道的JS(原理篇/函数式编程篇/数学计算篇)/Git/GitHub]  
URL:https://github.com/PaulMing/LevelOnecodeing  
2.LevelTwo阶段demo汇总[微信小程序/设计原则|模式/Vue/React/NodeJS(Express/Koa)/数据库(Mysql/MongoDB/Redis)/前端安全/性能优化/数据结构与算法]  
URL:https://github.com/PaulMing/LevelTwocodeing











