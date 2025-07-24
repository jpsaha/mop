For ease of reference, here is a brief overview of participation of India in [IMO](https://www.imo-official.org/), [APMO](https://www.apmo-official.org/), [EGMO](https://www.egmo.org/) in recent times, which relies on the information available at the following webpages, which are significantly more detailed.

- [Team results at IMO](https://www.imo-official.org/country_team_r.aspx?code=IND),
- [Results for India at APMO](https://www.apmo-official.org/country_report/IND/all),
- [India at EGMO](https://www.egmo.org/countries/country35/).

<body style="height: 75%; margin: 0">
  <div id="container" style="height: 500%"></div>

  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>

  <script type="text/javascript">
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};

    var option;

    var dataMap = {};
function dataFormatter(obj) {
  // prettier-ignore
  var pList = ['IMO', 'APMO', 'EGMO'];
  var temp;
  for (var year = 2015; year <= 2024; year++) {
    var max = 0;
    var sum = 0;
    temp = obj[year];
    for (var i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i]);
      sum += temp[i];
      obj[year][i] = {
        name: pList[i],
        value: temp[i]
      };
    }
    obj[year + 'max'] = Math.floor(max / 100) * 100;
    obj[year + 'sum'] = sum;
  }
  return obj;
}
// prettier-ignore Gold
dataMap.dataGold = dataFormatter({
    //max : 60000,
    2024: [4, 1, 0],
    2023: [2, 1, 0],
    2022: [1, 1, 0],
    2021: [1, 0, 0],
    2020: [0, 1, 0],
    2019: [1, 1, 0],
    2018: [0, 0, 0],
    2017: [0, 0, 0],
    2016: [0, 0, 0],
    2015: [0, 0, 0]
});
// prettier-ignore Silver
dataMap.dataSilver = dataFormatter({
    //max : 4000,
    2024: [1, 2, 2],
    2023: [2, 2, 2],
    2022: [0, 2, 0],
    2021: [1, 0, 1],
    2020: [0, 2, 0],
    2019: [4, 2, 1],
    2018: [3, 0, 0],
    2017: [0, 3, 0],
    2016: [1, 3, 0],
    2015: [1, 1, 0]
});
// prettier-ignore Bronze
dataMap.dataBronze = dataFormatter({
    //max : 26600,
    2024: [0, 4, 2],
    2023: [2, 4, 1],
    2022: [5, 4, 4],
    2021: [3, 0, 0],
    2020: [0, 4, 1],
    2019: [0, 4, 2],
    2018: [2, 7, 2],
    2017: [3, 4, 1],
    2016: [5, 4, 1],
    2015: [2, 5, 1]
});
// prettier-ignore HM
dataMap.dataHM = dataFormatter({
    //max : 25000,
    2024: [1, 3, 0],
    2023: [0, 3, 1],
    2022: [0, 3, 0],
    2021: [1, 0, 1],
    2020: [0, 3, 1],
    2019: [1, 3, 0],
    2018: [1, 3, 0],
    2017: [3, 3, 1],
    2016: [0, 1, 0],
    2015: [3, 3, 0]
});
option = {
  baseOption: {
    timeline: {
      axisType: 'category',
      // realtime: false,
      // loop: false,
      autoPlay: true,
      // currentIndex: 2,
      playInterval: 1000,
      // controlStyle: {
      //     position: 'left'
      // },
      data: [
        {
          value: '2015',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2016',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2017',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2018',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2019',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2020',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2021',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2022',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2023',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2024',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
      ],
      label: {
        formatter: function (s) {
          return new Date(s).getFullYear();
        }
      }
    },
    title: {
      subtext: ' Participation in'
    },
    tooltip: {},
    legend: {
      left: 'right',
      data: ['Gold', 'Silver', 'Bronze', 'HM'],
      selected: {
        Gold: true
      }
    },
    calculable: true,
    grid: {
      top: 80,
      bottom: 100,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            formatter: function (params) {
              return params.value.replace('\n', '');
            }
          }
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: { interval: 0 },
        data: [
          'IMO',
          'APMO',
          'EGMO',
          ''
        ],
        splitLine: { show: false }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '     IMO, APMO, EGMO'
      }
    ],
    series: [
      { name: 'Gold', type: 'bar' },
      { name: 'Silver', type: 'bar' },
      { name: 'Bronze', type: 'bar' },
      { name: 'HM', type: 'bar' },
      {
        name: 'Medals',
        type: 'pie',
        center: ['77%', '25%'],
        radius: '28%',
        z: 100
      }
    ]
  },
  options: [
    {
      title: { text: '2015' },
      series: [
        { data: dataMap.dataGold['2015'] },
        { data: dataMap.dataSilver['2015'] },
        { data: dataMap.dataBronze['2015'] },
        { data: dataMap.dataHM['2015'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2015sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2015sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2015sum'] },
            { name: 'HM', value: dataMap.dataHM['2015sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2016' },
      series: [
        { data: dataMap.dataGold['2016'] },
        { data: dataMap.dataSilver['2016'] },
        { data: dataMap.dataBronze['2016'] },
        { data: dataMap.dataHM['2016'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2016sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2016sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2016sum'] },
            { name: 'HM', value: dataMap.dataHM['2016sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2017' },
      series: [
        { data: dataMap.dataGold['2017'] },
        { data: dataMap.dataSilver['2017'] },
        { data: dataMap.dataBronze['2017'] },
        { data: dataMap.dataHM['2017'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2017sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2017sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2017sum'] },
            { name: 'HM', value: dataMap.dataHM['2017sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2018' },
      series: [
        { data: dataMap.dataGold['2018'] },
        { data: dataMap.dataSilver['2018'] },
        { data: dataMap.dataBronze['2018'] },
        { data: dataMap.dataHM['2018'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2018sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2018sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2018sum'] },
            { name: 'HM', value: dataMap.dataHM['2018sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2019' },
      series: [
        { data: dataMap.dataGold['2019'] },
        { data: dataMap.dataSilver['2019'] },
        { data: dataMap.dataBronze['2019'] },
        { data: dataMap.dataHM['2019'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2019sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2019sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2019sum'] },
            { name: 'HM', value: dataMap.dataHM['2019sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2020' },
      series: [
        { data: dataMap.dataGold['2020'] },
        { data: dataMap.dataSilver['2020'] },
        { data: dataMap.dataBronze['2020'] },
        { data: dataMap.dataHM['2020'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2020sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2020sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2020sum'] },
            { name: 'HM', value: dataMap.dataHM['2020sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2021' },
      series: [
        { data: dataMap.dataGold['2021'] },
        { data: dataMap.dataSilver['2021'] },
        { data: dataMap.dataBronze['2021'] },
        { data: dataMap.dataHM['2021'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2021sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2021sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2021sum'] },
            { name: 'HM', value: dataMap.dataHM['2021sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2022' },
      series: [
        { data: dataMap.dataGold['2022'] },
        { data: dataMap.dataSilver['2022'] },
        { data: dataMap.dataBronze['2022'] },
        { data: dataMap.dataHM['2022'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2022sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2022sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2022sum'] },
            { name: 'HM', value: dataMap.dataHM['2022sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2023' },
      series: [
        { data: dataMap.dataGold['2023'] },
        { data: dataMap.dataSilver['2023'] },
        { data: dataMap.dataBronze['2023'] },
        { data: dataMap.dataHM['2023'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2023sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2023sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2023sum'] },
            { name: 'HM', value: dataMap.dataHM['2023sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2024' },
      series: [
        { data: dataMap.dataGold['2024'] },
        { data: dataMap.dataSilver['2024'] },
        { data: dataMap.dataBronze['2024'] },
        { data: dataMap.dataHM['2024'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2024sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2024sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2024sum'] },
            { name: 'HM', value: dataMap.dataHM['2024sum'] }
          ]
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
