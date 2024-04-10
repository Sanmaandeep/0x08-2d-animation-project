
const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
  
  };

  let score = 0;
  let lifelines = 3;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  function run() {
    drawBall();
    drawPaddle();

  }

  let paddle = {
    x: (canvas.width - 100) / 2,
    y: canvas.height - 20,
    width: 100,
    height: 10,
    color: '#0095DD'
  };

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = paddle.color;
    ctx.fill();
    ctx.closePath();
  }

  
  
  run();
 
  document.getElementById('downloadOverlay').addEventListener('click', function() {
    const downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = 'bouncing_ball_game.png';
    downloadLink.click();
  });
  
  document.getElementById('textBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fff';
    ctx.fillText(text, canvas.width - 150, 30);
  });