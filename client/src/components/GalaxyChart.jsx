import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios'

const GalaxyChart = () => {
    //this should get some fake data but it doesn't
    //needs to be re-written as axios call to our db to get xyz data points
    //start of our axios call
    const [dataPoints, setDataPoints] = useState([]);
    axios.get("http://localhost:8000/api/planets")
        .then(res => {
            const planetDataPoints = res.data
            setDataPoints(planetDataPoints)
        })
        .catch(err => console.log(err))
    //do a map call through the array where arr[0] is x:, arr[1] is y:, arr[2] is z:
    // go down and set data ={dataPoints}
    const convertPolarToCart = (radius, angleA, angleB) => {
        const xVal = radius * Math.cos(angleA) * Math.sin(angleB);
        const yVal = radius * Math.sin(angleA) * Math.sin(angleB);
        const zVal = radius * Math.cos(angleA);
        return {xVal, yVal, zVal};
    }

    const planetMap = {
        
    }
        //vvvvv delete vvvv
    //     const trace1 = {
    //         x: 10,
    //         y: 2,
    //         z: 18,
    //         mode: 'markers',
    //         marker: {
    //             size: 12,
    //             line: {
    //                 color: 'rgba(217, 217, 217, 0.14)',
    //                 width: 0.5
    //             },
    //             opacity: 0.8
    //         },
    //         type: 'scatter3d'
    //     };

    //     const trace2 = {
    //         x: unpack(rows, 'x2'),
    //         y: unpack(rows, 'y2'),
    //         z: unpack(rows, 'z2'),
    //         mode: 'markers',
    //         marker: {
    //             color: 'rgb(127, 127, 127)',
    //             size: 12,
    //             symbol: 'circle',
    //             line: {
    //                 color: 'rgb(204, 204, 204)',
    //                 width: 1
    //             },
    //             opacity: 0.8
    //         },
    //         type: 'scatter3d'
    //     };

    //     const plotData = [trace1, trace2];

    //     const layout = {
    //         margin: {
    //             l: 0,
    //             r: 0,
    //             b: 0,
    //             t: 0
    //         }
    //     };

    //     return { data: plotData, layout };
    // };

    return (
        <div>
            {/* <Plot
                data={fetchData().data}
                layout={fetchData().layout}
            /> */}
            <Plot data={[{
                x:[1,2,3,4,5,6,7,8],
                y:[3,1,4,12,15,9,6,2],
                z:[1,3,5,3,7,12,6,9],
                type:'scatter3d',

            }]}/>
        </div>
    );
};

export default GalaxyChart;
