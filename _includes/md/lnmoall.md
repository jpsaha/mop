>
> #### **Lecture notes for Math Olympiad ([IOQM]({{ site.url }}{{ site.baseurl }}/IOQM/), [RMO]({{ site.url }}{{ site.baseurl }}/RMO/), [INMO]({{ site.url }}{{ site.baseurl }}/INMO/))**
>
> **Click on the <span style="color: #e04de7ff"><i class="fa-solid fa-file-pdf fa-2x"></i></span> icons below to download.**
>
> |    Topics     |    Links            |
> | :------------: | :------------: |
{% for item in site.data.lnmoall %}{% if item.link != page.jsujet %}> |    [{{ item.topic }}]({{ site.url }}{{ site.baseurl }}/{{ item.link }}/)    |   [<i class="fa-solid fa-file-pdf fa-2x"></i> <i class="fa-solid fa-download fa-2x"></i>]({{ site.url }}{{ site.baseurl }}/{{ item.link }}/)    |
{% else %}{% endif %}{% endfor %}{: .block-tip }