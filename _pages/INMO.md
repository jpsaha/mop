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

{% assign tsts = "inmo" | split: "," %}
{% for element in tsts %}
{% assign tst = element %}
{%- capture mycom -%}{{ tst }}{%- endcapture -%}
{% capture jlink %}{% include md/pastyd.md %}{% endcapture %}

> ##### Links to Past Question Papers, Previous Years’ Question papers of {{ mycom | upcase }} (Indian National Mathematical Olympiad)

{% capture ppsrc %}{% include md/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

<!-- Column Toggle Checkboxes -->
<div id="column-controls" style="float: right; margin-left: 1rem;">
  <label><input type="checkbox" class="toggle-col" data-col="1" checked> INMO</label>
  <label><input type="checkbox" class="toggle-col" data-col="2" checked> AoPS</label>
  <label><input type="checkbox" class="toggle-col" data-col="3" checked> Discussion</label>
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
      <th scope="col" data-field="inmo" data-halign="center" data-align="center" >INMO <br> Question papers, <br> Solutions</th>
      <th scope="col" data-field="aops" data-halign="center" data-align="center" >AoPS</th>
      <th scope="col" data-field="discussion" data-halign="center" data-align="center" >Discussion</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.past %}
    {% if item.inmo.yr %}
      <tr>
        {% include contest-row.liquid contest="inmo" %}
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

{% endfor %}
