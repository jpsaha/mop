---
layout: page
permalink: /RMO/
title: RMO
description: Regional Mathematical Olympiad. Links to Past Question Papers of RMO, Solutions. Hints, Walkthroughs, Discussions.
nav: true
nav_order: 4
lnmo: true
giscus_comments: true
pretty_table: true
---

{% assign tsts = "rmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pasty.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of {{ mycom | upcase }}
{{ jlink }}

{% endfor %}
