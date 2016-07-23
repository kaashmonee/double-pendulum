
function setUp() {
	var canvas=document.getElementById("layer1");
    var context=canvas.getContext("2d");
	var lowCanvas=document.getElementById("layer2");
	var lowContext=lowCanvas.getContext("2d");
	canvas.width=600;
	canvas.height=600;
	lowCanvas.width=600;
	lowCanvas.height=600;
	var m1=window.mass1;
	var m2=window.mass2;
	var radius1=m1/10;
	var radius2=m2/10;
	var g=9.8;
	var time =0.1;
	var l1=100;
	var l2=100;
	var Theta1=window.t1;
	var Theta2=window.t2;
	var d2Theta1=0;
	var d2Theta2=0;
	var dTheta1=0;
	var dTheta2=0;
	var mu =1+(m1/m2);
	var line1={x0: 0, y0: 0, x:0, y:0};
	var line2={x0: 0, y0: 0, x:0, y:0};
start();
function start()
{
	alert("It is working");
    var variable=0;
    var id = setInterval(animate,10);
    function animate() {
			context.clearRect(0,0,context.canvas.width, context.canvas.height);
			d2Theta1 = (g*(Math.sin(Theta2)*Math.cos(Theta1-Theta2)-mu*Math.sin(Theta1))-(l2*dTheta2*dTheta2+l1*dTheta1*dTheta1*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l1*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
			d2Theta2 = (mu*g*(Math.sin(Theta1)*Math.cos(Theta1-Theta2)-Math.sin(Theta2))+(mu*l1*dTheta1*dTheta1+l2*dTheta2*dTheta2*Math.cos(Theta1-Theta2))*Math.sin(Theta1-Theta2))/(l2*(mu-Math.cos(Theta1-Theta2)*Math.cos(Theta1-Theta2)));
			dTheta1 += d2Theta1*time;
			dTheta2 += d2Theta2*time;
			Theta1 += dTheta1*time;
			Theta2 += dTheta2*time;
			line1={x0: 300, y0: 150, x: line1.x0+(l1*Math.sin(Theta1)), y: line1.y0+(l1*Math.cos(Theta1))};
			line2={x0: line1.x, y0: line1.y, x: line1.x+l2*Math.sin(Theta2), y: line1.y+l2*Math.cos(Theta2)};
			drawLine(context,line1.x0, line1.y0, line1.x, line1.y);
			drawLine(context,line2.x0, line2.y0, line2.x, line2.y);
			context.fillStyle="green";
			drawCircle(context,line1.x, line1.y, radius1);
			context.fillStyle="red";
			drawCircle(context, line2.x, line2.y,radius2);
	}
	
	var id2 = setInterval(drawPaths,10);
	function drawPaths() {
		lowContext.lineWidth=5;
		lowContext.strokeStyle="green";
		drawLine(lowContext, line1.x, line1.y, line1.x+1, line1.y+1);
		lowContext.strokeStyle="red";
		drawLine(lowContext, line2.x, line2.y, line2.x+1, line2.y+1);
	}
	
	}

	function drawLine(ctx, startx, starty, endx, endy) {
		ctx.beginPath();
		ctx.moveTo(startx,starty);
		ctx.lineTo(endx, endy);
		ctx.stroke();
		ctx.closePath();
	}

	function drawCircle(ctx, centerx, centery, radius) {
		ctx.beginPath();
		ctx.arc(centerx, centery, radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	window.addEventListener("load",setUp);
}
