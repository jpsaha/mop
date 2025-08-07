---
layout: post
title: Notes on IOQM
date: 2024-05-01 08:57:00-0400
description: Indian Olympiad Qualifier in Mathematics. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.
tags: IOQM MathOlympiad Notes Handouts LectureNotes
categories: IOQM
lnmo: true
jsujet: dummy
giscus_comments: true
pretty_table: true
related_posts: false
mermaid:
  enabled: true
  zoomable: true
---

{% capture content %}{% include md/mostages/stages2526.md %}{% endcapture %}
{{ content | markdownify }}

{% capture ppsrc %}{% include md/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

{% assign tsts = "ioqm" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pasty.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of {{ mycom | upcase }}
{% if mycom != 'ioqm' %}{: .block-tip }{% endif %}
{{ jlink }}

{% endfor %}

{% assign tsts = "prmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pastyd.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of Pre-RMO
{% if mycom != 'ioqm' %}{: .block-tip }{% endif %}
{{ jlink }}

{% endfor %}

<!-- 
{% capture jlink %}{% include md/past/ioqm.md %}{% endcapture %}
{{ jlink }} -->
