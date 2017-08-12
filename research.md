---
title: Research Activity
collection: research
---

{{ page.title }}

{% for page in site.collections.research %}
    <article>
      <h2>{{ page.title }}</h2>
      <p>{{ page.content }}</p>
    </article>
{% endfor %}
    

