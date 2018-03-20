/**** Complementary to process.js - creates 'opcodes' ****/
function readInput(a) {
  var hold1 = rawtext[a];
  if ((hold1.lastIndexOf(".") == (hold1.length) - 1) && (hold1.length > 0)) { //Punkt vor Leerzeichen -> Satzende (Fehlerbeschreibung)
    return 0;
  }
  if (hold1.indexOf(';;"') === 0) {
    return 1;
  }
  
  if (hold1.indexOf('!') >= 0) { //Testen ob ein Satz ein Ausrufezeichen enthält (Fehleranweisung)
    return 2;
  }
   else return "-";
}
