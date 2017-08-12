---
title: Research Activity

---
{% for page in site.research %}
    <article>
      <h2>{{ page.title }}</h2>
      <p>{{ page.content }}</p>
    </article>
{% endfor %}
    

