function load2324(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '2&3 &nbsp;&nbsp;&nbsp;&nbsp; 2&4';
  document.getElementById(line2).innerHTML = '2&5 &nbsp;&nbsp;&nbsp;&nbsp; 3&4 &nbsp;&nbsp;&nbsp;&nbsp; 3&5';
}

function load2334(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '2&3 &nbsp;&nbsp;&nbsp;&nbsp; 2&4';
  document.getElementById(line2).innerHTML = '3&4 &nbsp;&nbsp;&nbsp;&nbsp; 3&5 &nbsp;&nbsp;&nbsp;&nbsp; 2&5';
}

function load2335(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '2&3 &nbsp;&nbsp;&nbsp;&nbsp; 3&5';
  document.getElementById(line2).innerHTML = '2&4 &nbsp;&nbsp;&nbsp;&nbsp; 3&4 &nbsp;&nbsp;&nbsp;&nbsp; 3&6';
}

function load3242(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '3&2 &nbsp;&nbsp;&nbsp;&nbsp; 4&2';
  document.getElementById(line2).innerHTML = '4&3 &nbsp;&nbsp;&nbsp;&nbsp; 4&5 &nbsp;&nbsp;&nbsp;&nbsp; 3&6';
}

function load5654(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '5&6 &nbsp;&nbsp;&nbsp;&nbsp; 5&4';
  document.getElementById(line2).innerHTML = '6&4 &nbsp;&nbsp;&nbsp;&nbsp; 6&3 &nbsp;&nbsp;&nbsp;&nbsp; 7&4';
}

function load5759(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '5&7 &nbsp;&nbsp;&nbsp;&nbsp; 5&9';
  document.getElementById(line2).innerHTML = '7&9 &nbsp;&nbsp;&nbsp;&nbsp; 5&11 &nbsp;&nbsp;&nbsp;&nbsp; 7&11';
}

function load57711(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '5&7 &nbsp;&nbsp;&nbsp;&nbsp; 5&9';
  document.getElementById(line2).innerHTML = '7&9 &nbsp;&nbsp;&nbsp;&nbsp; 7&11 &nbsp;&nbsp;&nbsp;&nbsp; 5&11';
}

function load5763(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '5&7 &nbsp;&nbsp;&nbsp;&nbsp; 6&3';
  document.getElementById(line2).innerHTML = '6&5 &nbsp;&nbsp;&nbsp;&nbsp; 7&3 &nbsp;&nbsp;&nbsp;&nbsp; 5&4';
}

function load5859(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '5&8 &nbsp;&nbsp;&nbsp;&nbsp; 5&9';
  document.getElementById(line2).innerHTML = '6&10 &nbsp;&nbsp;&nbsp;&nbsp; 7&10 &nbsp;&nbsp;&nbsp;&nbsp; 7&12';
}

function load6869(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '6&8 &nbsp;&nbsp;&nbsp;&nbsp; 6&9';
  document.getElementById(line2).innerHTML = '6&10 &nbsp;&nbsp;&nbsp;&nbsp; 5&8 &nbsp;&nbsp;&nbsp;&nbsp; 6&11';
}

function load68611(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '6&8 &nbsp;&nbsp;&nbsp;&nbsp; 6&9';
  document.getElementById(line2).innerHTML = '6&11 &nbsp;&nbsp;&nbsp;&nbsp; 6&10 &nbsp;&nbsp;&nbsp;&nbsp; 6&12';
}

function load7558(instrument, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).innerHTML = '7&5 &nbsp;&nbsp;&nbsp;&nbsp; 5&8';
  document.getElementById(line2).innerHTML = '7&9 &nbsp;&nbsp;&nbsp;&nbsp; 7&11 &nbsp;&nbsp;&nbsp;&nbsp; 5&11';
}

function motif(instrument, head, line1, line2) {
  document.getElementById(head).innerHTML = instrument;
  document.getElementById(line1).style.fontFamily = 'MusiSync';
  document.getElementById(line1).style.fontSize = '70px';
  document.getElementById(line1).innerHTML = '{ q q Q q Q }';
  document.getElementById(line2).innerHTML = '';
}

function loadSilence(nextCell, head, line1, line2) {
  regularFont(line1);
  document.getElementById(head).innerHTML = nextCell;
  document.getElementById(line1).innerHTML = 'SILENCE';
  document.getElementById(line2).innerHTML = '';
}

function loadVox(nextCell, head, line1, line2) {
    regularFont(line1);
    document.getElementById(head).innerHTML = nextCell;
    document.getElementById(line1).innerHTML = '';
    document.getElementById(line2).innerHTML = '<img src=\"image\/vox.png\" width=\"480px\">';
  }