---
layout: post
title: Past Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC
date: 2024-07-19 08:57:00-0400
description: Previous Years' Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC
pretty_table: true
tags: PastQuestionPapers PreviousYearsQuestionsPapers IOQM Pre-RMO RMO INMO EGMOTC IMOTC MathOlympiad MathematicsOlympiad
categories: IOQM Pre-RMO RMO INMO
lnmo: false
giscus_comments: true
pretty_table: true
related_posts: false
---

> ##### Links to Past Question Papers, Previous Years' Question papers and Solutions of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC

> ##### IOQM, RMO, INMO Question papers, Solutions, Answer keys
{: .block-tip }

> ##### Questions, Answers, Problems, Solutions, Discussions, Walkthroughs, Hints, IOQM, RMO, INMO

{% capture lnmo %}{% include lnmo/lnmoall.md %}{% endcapture %}
{{ lnmo | markdownify }}

{% capture ppsrc %}{% include md/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

---



<!-- Column Toggle Checkboxes -->
<div id="column-controls" style="float: right; margin-left: 1rem;">
  <label><input type="checkbox" class="toggle-col" data-col="1" checked> IOQM/Pre-RMO</label>
  <label><input type="checkbox" class="toggle-col" data-col="2" checked> RMO</label>
  <label><input type="checkbox" class="toggle-col" data-col="3" checked> INMO</label>
  <label><input type="checkbox" class="toggle-col" data-col="4" checked> IMOTC</label>
</div>

<!-- Table -->
<table
  role="table"
  data-click-to-select="true"
  data-pagination="true"
  data-search="true"
  data-search-placeholder="please write here to search"
  data-show-columns="false"
  data-show-refresh="false"
  data-id-field="id"
  class="table"
>
  <thead>
    <tr>
      <th scope="col" data-field="yr" data-halign="center" data-align="center" data-sortable="true" >Year</th>
      <th scope="col" data-field="ioqm" dta-halign="center" data-align="center" >IOQM, <br> 
      Pre-RMO</th>
      <th scope="col" data-field="rmo" data-halign="center" data-align="center" >RMO</th>
      <th scope="col" data-field="inmo" data-halign="center" data-align="center" >INMO</th>
      <th scope="col" data-field="imotc" data-halign="center" data-align="center" >IMOTC</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.past %}
      <tr>
        <td>{{ item.yr }}</td>
        <td>{% if item.ioqm.yr %}{% include contest-links.liquid contest="ioqm" %}{% else %}{% if item.prmo.yr %}{% include contest-links.liquid contest="prmo" %}{% endif %}{% endif %}</td>
        {% include contest-cell.liquid contest="rmo" %}
        {% include contest-cell.liquid contest="inmo" %}
        <td>{% if item.imotc.yr %}  {% for member in item.imotc.aops %}{% if member.qq %} {{ member.cmt }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe fa-2x"></i></a> {% endif %} {% unless forloop.last %} <br> <br>{% endunless %}{% endfor %}  {% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<!-- Script to toggle column visibility -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.toggle-col');

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        const colIndex = parseInt(this.getAttribute('data-col')) + 1; // Adjust for checkbox column
        const display = this.checked ? '' : 'none';

        document.querySelectorAll('table tr').forEach(function (row) {
          const cell = row.querySelector(`td:nth-child(${colIndex}), th:nth-child(${colIndex})`);
          if (cell) cell.style.display = display;
        });
      });
    });
  });
</script>

{% capture pp %}{% include md/past.md %}{% endcapture %}
{{ pp | markdownify }}
