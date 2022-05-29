import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, PolarAreaController, ArcElement, ScatterController, Filler } from "chart.js";
import { Line, PolarArea } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,



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
            backgroundColor: 'rgba(55, 226, 213, 0.3)',
            borderColor: 'rgba(55, 226, 213, 0.4)',
            borderWidth: 2,
            fill: true,
            pointBackgroundColor: 'white',
            // PointBorderColor: 'white',
            pointBorderWidth: 10,
            pointColor: 'white',


        },
        {

            label: `${chart?.length} actual`,
            data: chart?.map(x => x.actual),

            backgroundColor: 'rgb(180, 225, 151, 1.2)',
            borderColor: 'rgb(180, 225, 151, 0.6)',
            borderWidth: 2,
            fill: true,
            pointBackgroundColor: 'white',
            // pointFillColor: 'white',
            pointBorderWidth: 10,
            



        },]


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
            }
        },

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