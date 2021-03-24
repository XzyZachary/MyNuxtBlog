# myblog

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Nuxt + Antd + TS + Express + Mongodb  仿网上某博客网站做的Example

考虑后期迭代更换样式

文件解构跟原来的存在一定的差异 
之前              vs                nuxt
app.vue入口                         入口基本都是放在nuxt.config.js
配置route                           不需要特殊配置，会编译page文件夹生成route.js(.nuxt下面)
export default                     需要vue.extend 扩展