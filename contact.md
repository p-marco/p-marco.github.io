---
title: Contact
permalink: "contact/"
layout: default
template: item
share: true
---

<style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>

<ul class="grid-item">
  	{% for item in site.data.social %}
  		<li><a class="btn btn--block btn-primary--outline" href="{{ item.link }}" class="btn btn--block btn-primary--outline t-heading "><i class="fa {{ item.icon }}"> </i>
      		{{ item.name }}
    		</a>
    	</li>
  	{% endfor %}
</ul>

<div id="map"></div>
<script>
  function initMap() {
    var uluru = {lat: 49.5899205, lng: 17.2493817};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1pkpG80Qba0SxGlsnRdcBlICncnAf2DLdgXc46YjHENNkYg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Caricamento in corso...</iframe>