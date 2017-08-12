---
title: Research Activity
collection: research
---

# Res

{% for page in site.research %}
    <article>
      <h2>{{ page.title }}</h2>
      <p>{{ page.content }}</p>
    </article>
{% endfor %}
    

