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

> ##### Links to TSTs of {{ mycom | upcase }} (International Mathematical Olympiad Training Camp)

<!-- Column Toggle Checkboxes -->
<div id="column-controls" style="float: right; margin-left: 1rem;">
  <label><input type="checkbox" class="toggle-col" data-col="1" checked> IMOTC TST</label>
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
      <th scope="col" data-field="inmo" data-halign="center" data-align="center" >IMOTC TSTs</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.past %}
    {% if item.imotc.yr %}
      <tr>
        <td>{{ item.yr }} </td>
        <td>{% for member in item.imotc.aops %} {% if member.qq %}{{ member.src }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe fa-2x"></i></a> {% endif %} {% if member.sol %}<a href="{{ member.sol }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a>{% endif %}{% unless forloop.last %} <br>{% endunless %}{% endfor %}</td>
      </tr>
    {% endif %}
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
<!-- 
|    Year     | {{ mycom | upcase }}  TSTs    |
| :------------: | :------------ | :------------: |
{% for item in site.data.past %}{% if item.[tst].yr %}| {{ mycom | upcase }} {{ item.[tst].yr }} |  {% for member in item.[tst].aops %}{% if member.qq %} {{ member.cmt }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe fa-2x"></i></a> {% endif %} {% unless forloop.last %} <br> <br>{% endunless %}{% endfor %}  {% if item.[tst].discussion %}<a href="{{ site.url }}{{ site.baseurl }}/assets/pdf/{{ tst | upcase }}/{{ item.[tst].discussion }}.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a>{% endif %}     {% if item.[tst].rk %}{{ item.[tst].rk }}{% endif %}    |
{% endif %}{% endfor %}
{% unless forloop.last %} --- {% endunless %} -->
{% endfor %}
