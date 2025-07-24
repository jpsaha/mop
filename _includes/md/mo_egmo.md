For ease of reference, one may have a brief overview of participation of India in EGMO in recent times below, which relies on the information available at [this webpage](https://www.egmo.org/countries/country35/), which is significantly more detailed.

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
    "text": "Participation of India in EGMO in the recent years"
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
      data: ['2015', '\n2016', '2017', '\n2018', '2019', '\n2020', '2021', '\n2022', '2023', '\n 2024', '2025']
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Silver',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 1, 0, 1, 0, 2, 2, 2]
    },
    {
      name: 'Bronze',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 1, 1, 2, 2, 1, 0, 4, 1, 2, 2]
    },
    {
      name: 'HM',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
