import React from 'react';
import ReviewsProvider from './ReviewsProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ReviewsBar = (props) => {
  const { score } = props;

  // function for calculating the color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    // return an CSS hsl color string
    return 'hsl(' + c + ', 80%, 50%)';
  };

  return (
    <div>
      <CircularProgressbar
        value={80}
        text={
          `${80} %`
        }
        circleRatio={0.8} /* Make the circle only 0.7 of the full diameter */
        styles={{
          trail: {
            strokeLinecap: 'butt',
            transform: 'rotate(-275deg)',
            transformOrigin: 'center center',
          },
          path: {
            strokeLinecap: 'butt',
            transform: 'rotate(-275deg)',
            transformOrigin: 'center center',
            stroke: calcColor(80, 0, 125),
          },
          text: {
            fill: '#ddd',
          },
        }}
        strokeWidth={10}
      />
    </div>
    



    // <ReviewsProvider valueStart={0} valueEnd={80}>
    //   {(value) => (
    //     <CircularProgressbar
    //       value={value}
    //       text={`${value} %`}
    //       circleRatio={0.8} /* Make the circle only 0.7 of the full diameter */
    //       styles={{
    //         trail: {
    //           strokeLinecap: 'butt',
    //           transform: 'rotate(-275deg)',
    //           transformOrigin: 'center center',
    //         },
    //         path: {
    //           strokeLinecap: 'butt',
    //           transform: 'rotate(-275deg)',
    //           transformOrigin: 'center center',
    //           stroke: calcColor(value, 0, 125),
    //         },
    //         text: {
    //           fill: '#ddd',
    //         },
    //       }}
    //       strokeWidth={10}
    //     />
    //   )}
    // </ReviewsProvider>

  );
};

export default ReviewsBar;