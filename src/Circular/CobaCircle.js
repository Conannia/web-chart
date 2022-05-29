import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CobaCircle = (props) => {
    const { score } = props;

    // function for calculating the color
    const calcColor = (percent, start, end) => {
        let aa = percent / 100,
        bb = (end - start) * aa,
        cc = bb + start;

        return "hsl(" + cc + ", 100%, 50%)";
    }
    return (
        <CircularProgressbar
            value={score}
            // text={`${value} %`}
            circleRatio={0.8} /* Make the circle only 0.7 of the full diameter */
            styles={{
                trail: {
                    strokeLinecap: 'butt',
                    transform: "rotate(-126deg)",
                    transformOrigin: 'center center',
                },
                path: {
                    strokeLinecap: 'butt',
                    transform: "rotate(-126deg)",
                    transformOrigin: 'center center',
                    // stroke: calcColor(value, 0, 125),
                },
                text: {
                    fill: "#ddd",
                },
            }}
            strokeWidth={10}
        />
    )
}

export default CobaCircle; 