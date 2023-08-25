import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios'

const GalaxyChart = () => {
    const [planetMap, setPlanetMap] = useState({
        x: [],
        y: [],
        z: [],
        mode: 'markers+text',
        marker: {
            size: 10,
            color: 'rgb(254, 95, 0)',
            opacity: 1,
            line: {
                color: 'black',
                width: 1
            },
        },
        type: 'scatter3d',
        text: [],
        hoverinfo: [],
        isFinished: false
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/planets")
            .then(res => {
                const planetDataPoints = res.data
                const xArr = []
                const yArr = []
                const zArr = []
                const planetNames = []
                const planetTemps = []
                const colors = []
                planetDataPoints.map((planet) => {
                    const xVal = planet.radius * Math.cos(planet.angleA) * Math.sin(planet.angleB);
                    const yVal = planet.radius * Math.sin(planet.angleA) * Math.sin(planet.angleB);
                    const zVal = planet.radius * Math.cos(planet.angleA);
                    const name = planet.name;
                    const temps = planet.temperature;
                    const color = planet.distance;
                    xArr.push(xVal)
                    yArr.push(yVal)
                    zArr.push(zVal)
                    planetNames.push(name)
                    planetTemps.push(temps+"°F")
                    colors.push(color)
                })
                setPlanetMap({
                    ...planetMap,
                    x: xArr,
                    y: yArr,
                    z: zArr,
                    text: planetNames,
                    hoverinfo: planetTemps,
                    color: colors,
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
        },
        paper_bgcolor: 'transparent',
        font: {
            color: 'white'
        }

    }
    const config = {
        displayModeBar: false
    }


    return (
        <div className='text-center'>
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
