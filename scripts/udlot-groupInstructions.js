function updateInstruction() {
  // console.log('updateInstruction GROUP:', group, ' CELL: ', cell);
  var head = 'card-head';
  var line1 = 'card-line1';
  var line2 = 'card-line2';
  if (group === 1) {
    switch (cell) {
      case 1:
        loadSilence('Cell 01', head, line1, line2);
        break;
      case 2:
        load5759('Cell 02: BUZZER', head, line1, line2);
        break;
      case 3:
        load5759('Cell 03: BUZZER', head, line1, line2);
        break;
      case 4:
        load5759('Cell 04: BUZZER', head, line1, line2);
        break;
      case 5:
        loadSilence('Cell 05', head, line1, line2);
        break;
      case 6:
        loadSilence('Cell 06', head, line1, line2);
        break;
      case 7:
        load2324('Cell 07: BUZZER', head, line1, line2);
        break;
      case 8:
        load2324('Cell 08: BUZZER', head, line1, line2);
        break;
      case 9:
        loadSilence('Cell 09', head, line1, line2);
        break;
      case 10:
        load57711('Cell 10: TUBE', head, line1, line2);
        break;
      case 11:
        load57711('Cell 11: TUBE', head, line1, line2);
        break;
      case 12:
        load2324('Cell 12: TUBE', head, line1, line2);
        break;
      case 13:
        load2324('Cell 13: TUBE', head, line1, line2);
        break;
      case 14:
        load2324('Cell 14: TUBE', head, line1, line2);
        break;
      case 15:
        loadSilence('Cell 15', head, line1, line2);
        break;
      case 16:
        loadSilence('Cell 16', head, line1, line2);
        break;
      case 17:
        motif('Cell 17: TUBE', head, line1, line2);
        break;
      case 18:
        motif('Cell 18: TUBE', head, line1, line2);
        break;
      case 19:
        motif('Cell 19: TUBE', head, line1, line2);
        break;
      case 20:
        motif('Cell 20: TUBE', head, line1, line2);
        break;
      case 21:
        loadSilence('Cell 21', head, line1, line2);
        break;
      case 22:
        loadSilence('Cell 22', head, line1, line2);
        break;
      case 23:
        motif('Cell 23: BUZZER', head, line1, line2);
        break;
      case 24:
        motif('Cell 24: BUZZER', head, line1, line2);
        break;
      case 25:
        motif('Cell 25: BUZZER', head, line1, line2);
        break;
      case 26:
        loadSilence('Cell 26', head, line1, line2);
        break;
      case 27:
        load5763('Cell 27: WHISTLE', head, line1, line2);
        break;
      case 28:
        load5763('Cell 28: WHISTLE', head, line1, line2);
        break;
      case 29:
        load5763('Cell 29: WHISTLE', head, line1, line2);
        break;
      case 30:
        loadSilence('Cell 30', head, line1, line2);
        break;
      case 31:
        loadSilence('Cell 31', head, line1, line2);
        break;
      case 32:
        load2335('Cell 32: WHISTLE', head, line1, line2);
        break;
      case 33:
        load2335('Cell 33: WHISTLE', head, line1, line2);
        break;
      case 34:
        load2335('Cell 34: WHISTLE', head, line1, line2);
        break;
      case 35:
        loadSilence('Cell 35', head, line1, line2);
        break;
      case 36:
        loadSilence('Cell 36', head, line1, line2);
        break;
      case 37:
        load2324('Cell 37: WHISTLE', head, line1, line2);
        break;
      case 38:
        load2324('Cell 38: WHISTLE', head, line1, line2);
        break;
      case 39:
        load2324('Cell 39: WHISTLE', head, line1, line2);
        break;
      case 40:
        loadSilence('END OF PIECE', head, line1, line2);
        break;
      default:
    }
  } else if (group === 2) {
    switch (cell) {
      case 1:
        loadSilence('Cell 01', head, line1, line2);
        break;
      case 2:
        load6869('Cell 02: BUZZER', head, line1, line2);
        break;
      case 3:
        load6869('Cell 03: BUZZER', head, line1, line2);
        break;
      case 4:
        load6869('Cell 04: BUZZER', head, line1, line2);
        break;
      case 5:
        loadSilence('Cell 05', head, line1, line2);
        break;
      case 6:
        loadSilence('Cell 06', head, line1, line2);
        break;
      case 7:
        load7558('Cell 07: BUZZER', head, line1, line2);
        break;
      case 8:
        load7558('Cell 08: BUZZER', head, line1, line2);
        break;
      case 9:
        load2324('Cell 09: BUZZER', head, line1, line2);
        break;
      case 10:
        load2324('Cell 10: BUZZER', head, line1, line2);
        break;
      case 11:
        load2324('Cell 11: BUZZER', head, line1, line2);
        break;
      case 12:
        loadSilence('Cell 12', head, line1, line2);
        break;
      case 13:
        load68611('Cell 13: TUBE', head, line1, line2);
        break;
      case 14:
        load68611('Cell 14: TUBE', head, line1, line2);
        break;
      case 15:
        load68611('Cell 15: TUBE', head, line1, line2);
        break;
      case 16:
        loadSilence('Cell 16', head, line1, line2);
        break;
      case 17:
        motif('Cell 17: TUBE', head, line1, line2);
        break;
      case 18:
        motif('Cell 18: TUBE', head, line1, line2);
        break;
      case 19:
        motif('Cell 19: TUBE', head, line1, line2);
        break;
      case 20:
        motif('Cell 20: TUBE', head, line1, line2);
        break;
      case 21:
        loadSilence('Cell 21', head, line1, line2);
        break;
      case 22:
        loadSilence('Cell 22', head, line1, line2);
        break;
      case 23:
        loadSilence('Cell 23', head, line1, line2);
        break;
      case 24:
        load5859('Cell 24: BUZZER', head, line1, line2);
        break;
      case 25:
        load5859('Cell 25: BUZZER', head, line1, line2);
        break;
      case 26:
        load2334('Cell 26: BUZZER', head, line1, line2);
        break;
      case 27:
        load2334('Cell 27: BUZZER', head, line1, line2);
        break;
      case 28:
        load2334('Cell 28: BUZZER', head, line1, line2);
        break;
      case 29:
        loadSilence('Cell 29', head, line1, line2);
        break;
      case 30:
        loadSilence('Cell 30', head, line1, line2);
        break;
      case 31:
        load5654('Cell 31: WHISTLE', head, line1, line2);
        break;
      case 32:
        load5654('Cell 32: WHISTLE', head, line1, line2);
        break;
      case 33:
        load5654('Cell 33: WHISTLE', head, line1, line2);
        break;
      case 34:
        motif('Cell 34: WHISTLE', head, line1, line2);
        break;
      case 35:
        motif('Cell 35: WHISTLE', head, line1, line2);
        break;
      case 36:
        loadSilence('Cell 36', head, line1, line2);
        break;
      case 37:
        loadSilence('Cell 37', head, line1, line2);
        break;
      case 38:
        load3242('Cell 38: WHISTLE', head, line1, line2);
        break;
      case 39:
        load3242('Cell 39: WHISTLE', head, line1, line2);
        break;
      case 40:
        loadSilence('END OF PIECE', head, line1, line2);
        break;
      default:
    }
  } else if (group === 3 || group === 4 || group === 5) {
    switch (cell) {
      case 1:
        loadSilence('Cell 01', head, line1, line2);
        break;
      case 2:
        loadSilence('Cell 02', head, line1, line2);
        break;
      case 3:
        loadVox('Cell 03', head, line1, line2);
        break;
      case 4:
        loadVox('Cell 04', head, line1, line2);
        break;
      case 5:
        loadVox('Cell 05', head, line1, line2);
        break;
      case 6:
        loadVox('Cell 06', head, line1, line2);
        break;
      case 7:
        loadSilence('Cell 07', head, line1, line2);
        break;
      case 8:
        loadSilence('Cell 08', head, line1, line2);
        break;
      case 9:
        loadSilence('Cell 09', head, line1, line2);
        break;
      case 10:
        loadVox('Cell 10', head, line1, line2);
        break;
      case 11:
        loadVox('Cell 11', head, line1, line2);
        break;
      case 12:
        loadVox('Cell 12', head, line1, line2);
        break;
      case 13:
        loadVox('Cell 13', head, line1, line2);
        break;
      case 14:
        loadSilence('Cell 14', head, line1, line2);
        break;
      case 15:
        loadSilence('Cell 15', head, line1, line2);
        break;
      case 16:
        loadSilence('Cell 16', head, line1, line2);
        break;
      case 17:
        loadVox('Cell 17', head, line1, line2);
        break;
      case 18:
        loadVox('Cell 18', head, line1, line2);
        break;
      case 19:
        loadVox('Cell 19', head, line1, line2);
        break;
      case 20:
        loadVox('Cell 20', head, line1, line2);
        break;
      case 21:
        loadSilence('Cell 21', head, line1, line2);
        break;
      case 22:
        loadSilence('Cell 22', head, line1, line2);
        break;
      case 23:
        loadSilence('Cell 23', head, line1, line2);
        break;
      case 24:
        loadVox('Cell 24', head, line1, line2);
        break;
      case 25:
        loadVox('Cell 25', head, line1, line2);
        break;
      case 26:
        loadVox('Cell 26', head, line1, line2);
        break;
      case 27:
        loadVox('Cell 27', head, line1, line2);
        break;
      case 28:
        loadSilence('Cell 28', head, line1, line2);
        break;
      case 29:
        loadSilence('Cell 29', head, line1, line2);
        break;
      case 30:
        loadSilence('Cell 30', head, line1, line2);
        break;
      case 31:
        loadVox('Cell 31', head, line1, line2);
        break;
      case 32:
        loadVox('Cell 32', head, line1, line2);
        break;
      case 33:
        loadVox('Cell 33', head, line1, line2);
        break;
      case 34:
        loadVox('Cell 34', head, line1, line2);
        break;
      case 35:
        loadSilence('Cell 35', head, line1, line2);
        break;
      case 36:
        loadSilence('Cell 36', head, line1, line2);
        break;
      case 37:
        loadVox('Cell 37', head, line1, line2);
        break;
      case 38:
        loadVox('Cell 38', head, line1, line2);
        break;
      case 39:
        loadVox('Cell 39', head, line1, line2);
        break;
      case 40:
        loadSilence('END OF PIECE', head, line1, line2);
        break;
      default:
    }
  }
}