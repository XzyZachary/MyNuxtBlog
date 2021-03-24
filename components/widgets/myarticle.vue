<template>
    <a-row type="flex" justify="space-between">
      <a-col :span="8">
          <article>
              <div class="post-wrapper row">
                        <div class="featured-content row">
                            <a class="lazyLoad" href="single?id=111" style="padding: 0px;">
                                <img src="https://cdn1.zzzmh.cn/blog/image/posts/small/111.jpg" style="display: block;" lazy-src="https://cdn1.zzzmh.cn/blog/image/posts/small/111.jpg" lazy-status="2" alt="" class="img-responsive"></a>
                        </div>
                        <div class="post-excerpt row">
                            <h5 class="post-meta">
                                <a href="javascript:;" class="date">2021-01-25</a>
                            </h5>
                            <h3 class="post-title">
                                <a href="single?id=111">Linux Ubuntu 20.04 LTS 更新到最新长期支持内核 v5.10.9</a>
                            </h3>
                            <p>Linux Ubuntu 20.04 LTS 更新到最新长期支持内核 并删除未使用内核节省硬盘空间</p>
                        </div>
                    </div>
              </div>
          </article>
      </a-col>
      <a-col :span="8">
        <div class="post-wrapper row">
                        <div class="featured-content row">
                            <a class="lazyLoad" href="single?id=109" style="padding: 0px;">
                                <img src="https://cdn1.zzzmh.cn/blog/image/posts/small/109.jpg" style="display: block;" lazy-src="https://cdn1.zzzmh.cn/blog/image/posts/small/109.jpg" lazy-status="2" alt="" class="img-responsive"></a>
                        </div>
                        <div class="post-excerpt row">
                            <h5 class="post-meta">
                                <a href="javascript:;" class="date">2021-01-11</a>
                            </h5>
                            <h3 class="post-title">
                                <a href="single?id=109">Linux Ubuntu 20.04 LTS 解决无法输入中文 输入法问题</a>
                            </h3>
                            <p>卸载 fcitx sogou 输入法 切换到 ibus-rime 解决各种问题</p>
                        </div>
                    </div>
      </a-col>
      <a-col :span="8">
        <div class="post-wrapper row">
                        <div class="featured-content row">
                            <a class="lazyLoad" href="single?id=110" style="padding: 0px;">
                                <img src="https://cdn1.zzzmh.cn/blog/image/posts/small/110.jpg" style="display: block;" lazy-src="https://cdn1.zzzmh.cn/blog/image/posts/small/110.jpg" lazy-status="2" alt="" class="img-responsive"></a>
                        </div>
                        <div class="post-excerpt row">
                            <h5 class="post-meta">
                                <a href="javascript:;" class="date">2021-01-25</a>
                            </h5>
                            <h3 class="post-title">
                                <a href="single?id=110">Linux Ubuntu 20.04 LTS Docker 安装 微信 QQ</a>
                            </h3>
                            <p>Linux Ubuntu 20.04 LTS 使用 Docker 方式 安装 微信 QQ</p>
                        </div>
                    </div>
      </a-col>
    </a-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.post-excerpt{
    background: #fafafa;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 5%);
    transition: all .3s linear 0s;
}
.post-meta {
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    color: #b2b2b2;
    font-family: "lucida grande","lucida sans unicode",lucida,helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    letter-spacing: .75px;
   
}
.post-meta  a{
        color:grey;
}
.post-masonry .post-title {
    font-size: 23px;
}
.post-title a {
    font-weight: 600;
    line-height: 1.25;
    font-family: "lucida grande","lucida sans unicode",lucida,helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    color: #333;
}
</style>
