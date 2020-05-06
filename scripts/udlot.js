window.onload = function () {
  const click = document.getElementById('click');
  const tong = document.getElementById('tong');
  const chime = document.getElementById('chime');
  const cueAh1 = document.getElementById('cueAh1');
  const cueAh2 = document.getElementById('cueAh2');
  const cueAh3 = document.getElementById('cueAh3');

  var group;
  var cell;
};

function regularFont(line1) {
  document.getElementById(line1).style.fontFamily = 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif';
  document.getElementById(line1).style.fontSize = '24px';
}

function updateCellNumber() {
  cell++;
  var cellNumber = ('0' + cell).slice(-2);
  if (cell <= 40) {
    document.getElementById('cellnumber').innerHTML = cell === 40 ? '--' : cellNumber;
    document.getElementById('counter').innerHTML = 15;
    if (cell === 37) {
      document.getElementById('cellnumber').style.color = '#ff9900';
    }
    if (cell === 38) {
      document.getElementById('cellnumber').style.color = '#ff6600';
    }
    if (cell === 39) {
      document.getElementById('cellnumber').style.color = 'red';
    }
    if (cell === 40) {
      document.getElementById('next').style.display = 'none';
      cueAh1.pause();
      cueAh1.currentTime = 0;
      cueAh2.pause();
      cueAh2.currentTime = 0;
      cueAh3.pause();
      cueAh3.currentTime = 0;
    } else {
      runCounter(1);
    }
  }
}

function restart() {
  window.location.reload();
}

function resetDroneColor() {
  document.getElementById('d3').style.color = '#bfc9cf';
  document.getElementById('d4').style.color = '#bfc9cf';
  document.getElementById('d5').style.color = '#bfc9cf';
  document.getElementById('d6').style.color = '#bfc9cf';
  if (cell < 40) {
    runDrone();
  } else if (cell === 40) {
    document.getElementById('drone-line').style.fontFamily = 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif';
    document.getElementById('drone-line').style.fontSize = '24px';
    document.getElementById('drone-line').style.color = 'black';
    document.getElementById('d1').innerHTML = 'END OF PIECE';
    document.getElementById('d2').innerHTML = '';
    document.getElementById('d3').innerHTML = '';
    document.getElementById('d4').innerHTML = '';
    document.getElementById('d5').innerHTML = '';
    document.getElementById('d6').innerHTML = '';
    document.getElementById('d7').innerHTML = '';
  }
}

function loopVox(count) {
  console.log('loopVox count:', count);

  if (count === 1) {
    if (group === 3) {
      cueAh1.play();
    } else if (group === 4) {
      cueAh2.play();
    } else if (group === 5) {
      cueAh3.play();
    }
  } else {
    if (group === 3 && (cell === 7 || cell === 14 || cell === 21 || cell === 28 || cell === 35)) {
      cueAh1.pause();
      cueAh1.currentTime = 0;
    } else if (group === 4 && (cell === 7 || cell === 14 || cell === 21 || cell === 28 || cell === 35)) {
      cueAh2.pause();
      cueAh2.currentTime = 0;
    } else if (group === 5 && (cell === 7 || cell === 14 || cell === 21 || cell === 28 || cell === 35)) {
      cueAh3.pause();
      cueAh3.currentTime = 0;
    }
  } 
}

function runCounter(started) {
  document.getElementById('countbox').style.display = 'block';
  document.getElementById('instruction').style.display = 'block';

  if (group !== 0 ) {
    document.getElementById('next').style.display = 'block';
  }

  loadNext();
  if (started) {
    var c = 1;
  } else {
    c = 2;
  }

  var interval = setInterval(function () {
    if (c === 15) {
      clearInterval(interval);
      if (group !== 0) {
        tong.play();
      }
      updateCellNumber();
      updateInstruction();
      loopVox(c);
    } else {
      if (group === 3 || group === 4 || group === 5) {
        if ((cell >= 3 && cell <= 6) || (cell >= 10 && cell <= 13) 
        || (cell >= 17 && cell <= 20) || (cell >= 24 && cell <= 27)
        || (cell >= 31 && cell <= 34) || (cell >= 37 && cell <= 39)) {
          loopVox(c);
        }
      }
      
      document.getElementById('counter').innerHTML = c++;
      if (group !== 0) {
        click.play();
      }
    }
  }, 1000); // 1 beat per second
}

function runDrone() {
  document.getElementById('instruction').style.display = 'block';
  document.getElementById('card-line1').style.display = 'none';
  document.getElementById('card-line2').style.display = 'none';
  document.getElementById('card-head').innerHTML = 'DRONE';
  document.getElementById('drone-line').style.fontFamily = 'MusiSync';
  document.getElementById('drone-line').style.fontSize = '100px';
  document.getElementById('drone-line').style.color = '#bfc9cf';
  document.getElementById('d2').style.color = 'black';
  document.getElementById('d1').innerHTML = '{ ';
  document.getElementById('d2').innerHTML = 'q ';
  document.getElementById('d3').innerHTML = 'q ';
  document.getElementById('d4').innerHTML = 'Q ';
  document.getElementById('d5').innerHTML = 'q ';
  document.getElementById('d6').innerHTML = 'Q ';
  document.getElementById('d7').innerHTML = ' }';
  click.play();

  var d = 3;

  var droneInterval = setInterval(function () {
    if (d === 7) {
      clearInterval(droneInterval);
      resetDroneColor();
    } else {
      document.getElementById('d' + d).style.color = 'black';
      if (d <= 6) {
        d++;
      }
      if (d !== 5 && d !== 7) {
        click.play();
      }
    }
  }, 600);
}

function goCountdown() {
  chime.play();
  var number = 5
  var interval = setInterval(function () {
    if (number === 0) {
      clearInterval(interval);
      document.getElementById('countdown').style.display = 'none';
      click.play();
      if (group === 0) {
        document.getElementById('counterdiv').style.display = 'none';
        runDrone();
      }
      runCounter(0);
    } else {
      document.getElementById('countdownnumber').innerHTML = number--;
      click.play();
    }
  }, 1000); // 1 beat per second
}

function startPerformance() {
  var playButton = document.getElementById('btnPlay').innerHTML;

  if (playButton === 'START PERFORMANCE') {
    document.getElementById('btnPlay').innerHTML = 'RESTART';
  } else {
    restart();
  }
  
  switch (group) {
    case 0:
      document.getElementById('btn-drone').disabled = true;
      break;
    case 1:
      document.getElementById('btn1').disabled = true;
      break;
    case 2:
      document.getElementById('btn2').disabled = true;
      break;
    case 3:
      document.getElementById('btnVox1').disabled = true;
      break;
    case 4:
      document.getElementById('btnVox2').disabled = true;
      break;
    case 5:
      document.getElementById('btnVox3').disabled = true;
      break;
    default:
  }

  var c = 1;
  var bar = 0;
  cell = 0; // should start at 0
  var interval = setInterval(function () {
    document.getElementById('progressbar').style.width = bar + '%';
    c++;
    bar += 2;
    if (c >= 52) {
      clearInterval(interval);
      goCountdown();
    };
  }, 10);
}

function setCountdown(grp) {
  group = grp;
  document.getElementById('btnPlay').disabled = false;
  document.getElementById('countdown').style.display = 'block';
  document.getElementById('performance').style.display = 'block';
  document.getElementById('countbox').style.display = 'none';
  document.getElementById('celldiv').style.display = 'none';
  document.getElementById('instruction').style.display = 'none';
  document.getElementById('next').style.display = 'none';
  document.getElementById('drone').style.display = 'none';
  document.getElementById('perf-notes').style.display = 'none';
  document.getElementById('drone-line').style.display = 'none';
  document.getElementById('btn-drone').disabled = true;
  document.getElementById('btn1').disabled = true;
  document.getElementById('btn2').disabled = true;
  document.getElementById('btnVox1').disabled = true;
  document.getElementById('btnVox2').disabled = true;
  document.getElementById('btnVox3').disabled = true;

  switch (grp) {
    case 0:
      document.getElementById('btn-drone').disabled = false;
      document.getElementById('drone-line').style.display = 'block';
      document.getElementById('celldiv').style.display = 'block';
      break;
    case 1:
      document.getElementById('btn1').disabled = false;
      break;
    case 2:
      document.getElementById('btn2').disabled = false;
      break;
    case 3:
      document.getElementById('btnVox1').disabled = false;
      break;
    case 4:
      document.getElementById('btnVox2').disabled = false;
      break;
    case 5:
      document.getElementById('btnVox3').disabled = false;
      break;
    default:
  }
}

