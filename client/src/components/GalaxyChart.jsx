import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios'

const GalaxyChart = () => {
    const [dataPoints, setDataPoints] = useState([]);
    const [planetMap, setPlanetMap] = useState({
        x: [],
        y: [],
        z: [],
        mode: 'markers',
        marker: {
            size: 10,
            color: 'purple',
            opacity: 1
        },
        type: 'scatter3d',
        isFinished: false
    });
    useEffect(() => {
        axios.get("http://localhost:8000/api/planets")
            .then(res => {
                const planetDataPoints = res.data
                const xArr = []
                const yArr = []
                const zArr = []
                planetDataPoints.map((planet) => {
                    console.log(planet)
                    const xVal = planet.radius * Math.cos(planet.angleA) * Math.sin(planet.angleB);
                    const yVal = planet.radius * Math.sin(planet.angleA) * Math.sin(planet.angleB);
                    const zVal = planet.radius * Math.cos(planet.angleA);
                    xArr.push(xVal)
                    yArr.push(yVal)
                    zArr.push(zVal)
                })
                setPlanetMap({
                    ...planetMap,
                    x: xArr,
                    y: yArr,
                    z: zArr,
                    isFinished: true
                })
            })
            .catch(err => console.log(err))
    }, [])


    const layout = {
        showlegend: false,
        scene: {
            xaxis: {
                // visible: false,
                // showgrid: false,
                // showline: false,
                // showspikes: false,
            },
            yaxis: {
                // showgrid: false,
                // zeroline: false,
                // showline: false,
                // showspikes: false,
            },
            zaxis: {
                // showgrid: false,
                // visible: false,
                // showline: false,
                // showspikes: false,
            },
            title: {
                visible: false
            },
        },
        width: 800,
        height: 800,
        margin: {
            l: 0,
            r: 0,
            t: 0,
            b: 0
        }

    }
    const config = {
        displayModeBar: false
    }


    return (
        <div className='text-center'>

            {/* <Plot data={[{
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

            /> */}
            {
                planetMap.isFinished &&
                <>
                    <Plot data={[planetMap]}
                        layout={layout}
                        config={config}
                    />
                </>
            }
        </div>
    );
};

export default GalaxyChart;
