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
    // const convertPolarToCart = (radius, angleA, angleB) => {
    //     const xVal = radius * Math.cos(angleA) * Math.sin(angleB);
    //     const yVal = radius * Math.sin(angleA) * Math.sin(angleB);
    //     const zVal = radius * Math.cos(angleA);
    //     return { xVal, yVal, zVal };
    // }

    const planetMap = {
        x: dataPoints.radius * Math.cos(dataPoints.angleA) * Math.sin(dataPoints.angleB),
        y: dataPoints.radius * Math.sin(dataPoints.angleA) * Math.sin(dataPoints.angleB),
        z: dataPoints.radius * Math.cos(dataPoints.angleA),
        mode: 'markers',
        marker: {
            size: 10,
            color: 'rgba(217, 217, 217, 0.14)',
            opacity: 1
        },
        type: 'scatter3d'
    };
    const layout = {
        showlegend: false,
        scene:{
            xaxis: {
                visible: false,
                showgrid:false,
                showline:false,
                showspikes: false,
            },
            yaxis: {
                showgrid: false,
                zeroline: false,
                showline:false,
                showspikes: false,
            },
            zaxis: {
                showgrid: false,
                visible: false,
                showline:false,
                showspikes: false,
            },
            title: {
                visible:false
            },
        },
        width: 1200,
        height: 1200,

    }
    const config = {
        displayModeBar: false
    }
    //vvvvv delete vvvv
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
                x: [1, 2, 3, 4, 5, 6, 7, 8],
                y: [3, 1, 4, 12, 15, 9, 6, 2],
                z: [1, 3, 5, 3, 7, 12, 6, 9],
                mode: 'markers',
                marker: {
                    size: 10,
                    color: 'green',
                    opacity: 1
                },
                type: 'scatter3d',

            }]}
                layout={layout}
                config={config}

            />
        </div>
    );
};

export default GalaxyChart;
