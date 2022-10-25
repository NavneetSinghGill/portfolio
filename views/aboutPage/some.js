import ReactDOM from 'react-dom';
import React from 'react';
// const canvas = this.refs.canvas;
// const cx = canvas.getContext('2d');

const s = function() {
    let d = new Date();
    // document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
    let angle = 30;
    let cut = 0.67;
    const width = 100;
    const height = 100;
    // const slider = document.querySelector('slider');
    canvas.width = width;
    canvas.height = height;
    cx.fillStyle = 'black';
    cx.fillRect(0, 0, canvas.width, canvas.width);
    cx.strokeStyle = "white";
    cx.save();
    cx.translate(width/2,height);
    drawLine(width/4);
}

function sliderDidChange(value) {
    angle = value;
    console.log(angle);
    cx.restore();
    cx.save();
    cx.fillRect(0,0, canvas.width, canvas.height);
    cx.fillStyle = 'black';
    cx.strokeStyle = "white";
    cx.translate(width/2,height);
    drawLine(canvas.width/4);
}

function drawLine(length) {
    cx.lineWidth = length/20;
    cx.strokeRect(0, 0, 1, -length);

    cx.save();
    cx.translate(0,-length);
    cx.rotate((-angle/3)*(Math.PI/180));
    if(length >=5) {
        drawLine(length*cut);
    }
    cx.restore();

    cx.save();
    cx.translate(0,-length);
    cx.rotate((angle)*(Math.PI/180));
    if(length >=5) {
        drawLine(length*cut);
    }
    cx.restore();
}

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

module.exports.s = s;
module.exports.canvas = canvas;
module.exports.c = <CanvasComponent />;