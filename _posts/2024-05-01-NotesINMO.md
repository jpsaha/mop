---
layout: post
title: Notes on INMO
date: 2024-05-01 08:57:00-0400
description: Indian National Mathematical Olympiad. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.
tags: INMO MathOlympiad Notes Handouts LectureNotes
categories: INMO
lnmo: true
giscus_comments: true
pretty_table: true
related_posts: false
---

{% assign tsts = "inmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pastyd.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of {{ mycom | upcase }}
{{ jlink }}

{% endfor %}
