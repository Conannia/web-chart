import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
)

const LineBudget = () => {

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
                response.json().then((json) => {
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
        labels: chart?.map(x => x.monthly),
        datasets: [{
            label: `${chart?.length} budgets`,
            data: chart?.map(x => x.budget),
            backgroundColor: 'rgba(225, 99, 132, 0.2)',
            borderColor: 'rgba(225, 99, 132, 1)',
            borderWidth: 3,
            fill: true,
            fillColor: 'rgba(225, 66, 132, 0.2)',
            // tension: 0.4,
            // segment: {
            //     backgroundColor: 'green',
            //     borderColor: 'yellow',
            // },
            // fillColor: 'rgba(255, 99, 132, 0.2)',
            // fill: {
            //     target: 'origin',
            //     above: 'rgb(255, 0, 0)',   // Area will be red above the origin
            //     below: 'rgb(0, 0, 255)',    // And blue below the origin
            // },
            // disabeled: false,
        },
        {

            label: `${chart?.length} actual`,
            data: chart?.map(x => x.actual),
            backgroundColor: 'blue',
            borderColor: 'green',
            borderWidth: 3,
            fill: true,
            fillColor: 'green',
            


        }]


    }
    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26,
                fill: true,
                fontColor: 'green'
            }
        }
    }



    return (
        <div>
            <Line
                data={data}
                height={400}
                options={options}
            />
        </div >
    )
}

export default LineBudget;