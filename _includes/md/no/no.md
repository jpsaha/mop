
> ##### Practice problems, Problem Set, {{ page.title }}, Questions, Answers, Problems, Solutions, Discussions, Walkthroughs, Hints, IOQM, RMO, INMO, Study material, Resources, Olympiad {{ page.title }} Notes, Olympiad Algebra Problems

> ##### **Lecture notes on {{ page.title }} (for Math Olympiad --- IOQM, RMO, INMO) in pdf**
{: .block-tip }

> **Click on the <span style="color: #42b983"><i class="fa-solid fa-file-pdf fa-2x"></i></span> icons below to download.**

{: .block-danger }

|   {{ page.title }} Topics     |    Links            |
| :------------: | :------------: |
{% for item in site.data.no %}{% if item.subj != page.title %}{% else %}|    [{{ item.topic }}]({{ site.url }}{{ site.baseurl }}/blog/{{ item.blog }}/)    |     [<i class="fa-solid fa-file-pdf fa-2x"></i>]({{ site.url }}{{ site.baseurl }}/assets/pdf/{{ page.jsujet }}/{{ item.pdf }}.pdf) |
{% endif %}{% endfor %}
