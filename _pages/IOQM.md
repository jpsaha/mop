---
layout: page
permalink: /IOQM/
title: IOQM
description: Indian Olympiad Qualifier in Mathematics. Links to Past Question Papers of IOQM, Answer keys. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 3
lnmo: true
giscus_comments: true
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
---

> ##### Links to Past Question Papers, Previous Years' Question papers and Solutions of IOQM

{% capture ppsrc %}{% include md/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

> ##### IOQM, Question papers, Solutions, Answer keys, Questions, Answers, Problems, Solutions, Discussions, Walkthroughs, Hints
>
{: .block-tip }

{% capture jlink %}{% include md/past/ioqm.md %}{% endcapture %}

{{ jlink }}

{% assign tsts = "prmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pastyd.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of Pre-RMO
{% if mycom != 'ioqm' %}{: .block-tip }{% endif %}
{{ jlink }}

{% endfor %}

{% capture content %}{% include md/mostages/stages2526.md %}{% endcapture %}
{{ content | markdownify }}

### IOQM (Indian Olympiad Qualifier in Mathematics)

{% capture content %}{% include md/mostages/ioqm2526.md %}{% endcapture %}
{{ content | markdownify }}
