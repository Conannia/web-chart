import React, { useEffect, useState } from "react";
import { PolarAngleAxis, RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const RadialBudget = () => {

    const [radial, setRadial] = useState([])

    var radialUrl = "http://localhost:2000/portofolios"

    useEffect(() => {
        const fetchPortofolios = async () => {
            await fetch(`${radialUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setRadial(json)
                })
            }).catch(error => {
                console.log(error);
            })
        }
        fetchPortofolios()
    }, [radialUrl])

    console.log("radial", radial)

    // const data = radial

    return (
        <ResponsiveContainer width='100%' aspect={2}>
            <RadialBarChart width={1000} height={500} data={radial}
                cx={720 / 2}
                cy={600 / 2}
                innerRadius={100}
                outerRadius={235}
                barSize={25}
                startAngle={275}
                endAngle={-45}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 10]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar background
                    dataKey="value"
                    cornerRadius={36}
                    fill="#0BEFF2" />
                <text
                    x={720 / 2}
                    y={600 / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                    textWidth={500}
                    textSize={136}
                >
                    Total Portofolio $938
                </text>

            </RadialBarChart>
        </ResponsiveContainer>

    )

}

export default RadialBudget