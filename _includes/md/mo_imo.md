For ease of reference, one may have a brief overview of participation of India in IMO in recent times below, which relies on the information available at [this webpage](https://www.imo-official.org/country_team_r.aspx?code=IND), which is significantly more detailed.

<body style="height: 100%; margin: 0">
  <div id="container" style="height: 900%"></div>

  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>

  <script type="text/javascript">
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};

    var option;

    const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 10,
  rich: {
    name: {}
  }
};
option = {
  title: {
    "text": "Participation of India in IMO in the recent years"
  },
  responsive: true,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: "30px",
    data: ['Gold', 'Silver', 'Bronze', 'HM'],
    bottom: "120px"
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: false, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: true },
      data: ['2012', '\n2013', '2014', '\n2015', '2016', '\n2017', '2018', '\n2019', '2021', '\n 2022', '2023', '\n 2024', '2025']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Gold',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4, 3]
    },
    {
      name: 'Silver',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [3, 2, 1, 1, 1, 0, 3, 4, 1, 0, 2, 1, 2]
    },
    {
      name: 'Bronze',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 3, 3, 2, 5, 3, 2, 0, 3, 5, 2, 0, 1]
    },
    {
      name: 'HM',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 0, 2, 3, 0, 3, 1, 1, 1, 0, 0, 1, 0]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
