<script>
import { Chart } from 'highcharts-vue'

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          width: 500
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
          // tickInterval: 10
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          },
          labels: {
            // y轴会是 1% 2%……
            // formatter: function () {
            //   return this.value + ' %'
            // }
            // gridLineWidth: 2 // y轴的宽度
          }
        },
        legend: {
          showCheckbox: true,
          align: 'left',
          backgroundColor: 'red',
          itemStyle: {
            color: '#fff'
          },
          itemCheckboxStyle: {
            width: '40px',
            height: '40px'
          },
          padding: 0
        },
        // yAxis: [
        //   {
        //     //--- Primary yAxis
        //     title: {
        //       text: 'Temperature'
        //     }
        //   },
        //   {
        //     //--- Secondary yAxis
        //     title: {
        //       text: 'Rainfall'
        //     },
        //     opposite: true
        //   }
        // ],
        // series: [
        //   {
        //     yAxis: 0,
        //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        //   },
        //   {
        //     yAxis: 1,
        //     data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        //   }
        // ]
        series: [
          {
            name: 'Jane',
            data: [1, 0, 4]
          },
          {
            name: 'John',
            data: [5, 7, 3]
          }
        ]
      }
    }
  },
  components: { highcharts: Chart }
}
</script>

<template>
  <main id="main">
    <highcharts :options="chartOptions" />
  </main>
</template>
<style>
.highcharts-point {
  width: 20px;
  height: 20px;
}
</style>
