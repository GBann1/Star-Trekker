import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as d3 from 'd3';
const GalaxyChart = () => {
    const [dataPoints, setDataPoints] = useState([]);
    const navigate = useNavigate();
    axios.get('http://localhost:8000/planets')
        .then(res => {
            data = res.data
            setDataPoints(data)
        })
        .catch(err=>{
            console.log(err)
            navigate('/404')
        })
    var origin = [480, 300], j = 10, scale = 20, scatter = [], yLine = [], xGrid = [], beta = 0, alpha = 0, key = function (d) { return d.id; }, startAngle = Math.PI / 4;
    var svg = d3.select('svg').call(d3.drag().on('drag', dragged).on('start', dragStart).on('end', dragEnd)).append('g');
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var mx, my, mouseX, mouseY;
    var grid3d = d3._3d()
            .shape('GRID', 20)
            .origin(origin)
            .rotateY(startAngle)
            .rotateX(-startAngle)
            .scale(scale);

    var point3d = d3._3d()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; })
        .z(function (d) { return d.z; })
        .origin(origin)
        .rotateY(startAngle)
        .rotateX(-startAngle)
        .scale(scale);
        var yScale3d = d3._3d()
        .shape('LINE_STRIP')
        .origin(origin)
        .rotateY(startAngle)
        .rotateX(-startAngle)
        .scale(scale);

    return (
        <div>
            <svg width="960" height="500"></svg>
            
            <button>update</button>
            
        </div>
    )
}

export default GalaxyChart
