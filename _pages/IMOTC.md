---
layout: page
permalink: /IMOTC/
title: IMOTC
description: IMOTC 2025, held at the Chennai Mathematical Institute. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 7
jpdf: IMOTC25Alg
jpdfsauf: IMOTC25Alg
jsujet: IMOTC
lnmo: true
tabs: true
giscus_comments: true
pretty_table: true
---

## [IMOTC 2025](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/) at [CMI](https://www.cmi.ac.in/), May 8 -- June 1, 2025

> ### Link to some of the problem sets, etc.
>
> |      Topic          |          Notes      |
> | :------------: | :------------: |
> | Algebra and Number Theory | <a href="{{ '.pdf' | prepend: page.jpdf | prepend: '/' | prepend: page.jsujet | prepend: 'assets/pdf/' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a> |
>

<iframe src="{{ site.baseurl }}/assets/pdf/IMOTC/IMOTC25Alg.pdf" width="100%" height="700" frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>


{% assign tsts = "imotc" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}

> ##### Links to TSTs of {{ mycom | upcase }}

|    Year     | {{ mycom | upcase }}  Questions      |
| :------------: | :------------ | :------------: |
{% for item in site.data.past %}{% if item.[tst].yr %}| {{ mycom | upcase }} {{ item.[tst].yr }} |  {% for member in item.[tst].aops %}{% if member.qq %} {{ member.cmt }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe fa-2x"></i></a> {% endif %} {% unless forloop.last %} <br> <br>{% endunless %}{% endfor %}  {% if item.[tst].discussion %}<a href="{{ site.url }}{{ site.baseurl }}/assets/pdf/{{ tst | upcase }}/{{ item.[tst].discussion }}.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a>{% endif %}     {% if item.[tst].rk %}{{ item.[tst].rk }}{% endif %}    |
{% endif %}{% endfor %}
{% unless forloop.last %} --- {% endunless %}
{% endfor %}
