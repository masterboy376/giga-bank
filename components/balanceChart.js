import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const BalanceChart = () => {
    const data={
        labels:[
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb'
        ],
        datasets:[{
            fill: false,
            lineTension: 0.1,
            backgroundColor:'rgb(0,60,255)',
            borderColor:'rgb(0,60,255)',
            borderCapStyle:'butt',
            borderDash:[],
            borderDashOffset:0.0,
            borderJoinStyle:'miter',
            pointBorderColor:'rgb(0,60,255)',
            pointBackgroundColor:'rgb(0,60,255)',
            pointBorderWidth:1,
            pointHoverWidth:5,
            pointHoverBackgroundColor:'rgb(0,60,255)',
            pointHoverBorderColor:'rgb(0,60,255)',
            pointHoverBorderWidth:2,
            pointRadius:1,
            pointHitRadius:10,
            data:[65,59,80,81,56,72,45,67,55,42,180],
        }],
    }
    const options={
        plugins:{
            legend: {
                display:false
            }
        }
    }
  return (
    <div>
        <Line data={data} options={options} width={100} height={50}/>
    </div>
  )
}

export default BalanceChart