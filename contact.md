---
title: Contact
permalink: "contact/"
template: default
layout: item
share: true
---

<ul class="grid-item">
  	{% for item in site.data.social %}
  		<li><a class="btn btn--block btn-primary--outline" href="{{ item.link }}" class="btn btn--block btn-primary--outline t-heading "><i class="fa {{ item.icon }}"> </i>
      		{{ item.name }}
    		</a>
    	</li>
  	{% endfor %}
</ul>
 s

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1pkpG80Qba0SxGlsnRdcBlICncnAf2DLdgXc46YjHENNkYg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Caricamento in corso...</iframe>