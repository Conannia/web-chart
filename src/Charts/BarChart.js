import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {

    const [chart, setChart] = useState([])

    var baseUrl = "http://localhost:2000/budgets"

    useEffect(() => {
        const fetchBudgets = async () => {
            await fetch(`${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
    //                 'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response) => {
                response.json().then((json)=> {
                    console.log(json)
                    setChart(json)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchBudgets()
    }, [baseUrl])

    console.log("chart", chart)

    var data = {
        // labels: chart?.budgets?.map(x => x.monthly),
        labels: chart?.map(x => x.monthly),
        datasets: [{
            label: `${chart?.length} budgets`,
            data: chart?.map(x => x.actual),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            // Rotations: chart?.map(x => x.monthly),
        }]


    }

    console.log("data", data.labels)
    
    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }
    


    return(
        <div>
        <Bar
            data={data}
            height={400}
            options={options}
        />
        </div >
    )
}

export default BarChart;