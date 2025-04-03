---
layout: home
title: 首页
hero_image: /assets/images/hero.jpg
---

<section class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('{{ page.hero_image }}')">
  <div class="hero-content">
    <h1>捕捉瞬间，定格永恒</h1>
    <p>用镜头讲述故事，用光影描绘世界</p>
    <a href="/gallery/" class="btn">浏览作品</a>
  </div>
</section>

<section class="featured-gallery">
  <h2>精选作品</h2>
  {% include gallery-preview.html %}
</section>
