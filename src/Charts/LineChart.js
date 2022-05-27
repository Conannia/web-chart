import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     LineElement,
//     PointElement
// )

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    const [month, setMonth] = useState("");
    const [budget, setBudget] = useState(0);

    const chart = () => {
        let dataBudget = [];
        let month = [];
        axios.get("http://localhost:2000/budgets")
            .then(res => {
                console.log(res.data);
                for(const dataObj of res.data) {
                    dataBudget.push(dataObj.monthly_budget);
                    month.push(dataObj.month);
                    
                }
                setChartData({
                    labels: month,
                    datasets: [
                        {
                            label: "Period July 2020 - December 2020",
                            data: dataBudget,
                            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                            borderColor: ["rgba(75, 192, 192, 1)"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
            console.log(month, dataBudget);
    };

    useEffect(() => {
        chart();
    }, []);


    return (
        <div>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    title: { text: "THICCNESS SCALE", display: true },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default LineChart;