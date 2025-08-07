---
layout: page
permalink: /INMO/
title: INMO
description: Indian National Mathematical Olympiad. Links to Past Question Papers of INMO, Solutions. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 5
lnmo: true
giscus_comments: true
pretty_table: true
---

{% capture ppsrc %}{% include md/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

{% assign tsts = "inmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pastyd.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of {{ mycom | upcase }}
{{ jlink }}

{% endfor %}
