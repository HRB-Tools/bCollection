function format(a, b){
  try {
    a.datum = a.datum.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}/)[0];
    a.belegfeld = a.belegfeld.replace(/Belegfeld 1: /, '');
    a.buchungstext = a.buchungstext.replace(/Buchungstext: /, '');
    a.umsatz = a.umsatz.match(/[0-9]*,[0-9]{2}/)[0];
    a.konto = a.konto.match(/[0-9]{4,5}/)[0];
    a.gegenkonto = a.gegenkonto.match(/[0-9]{4,5}/)[0];
    a.wkz = a.wkz.replace(/WKZ: /, '');
    a.sh = a.sh.replace(/Soll-\/Haben-Kennzeichen: /, '');
    a.bu = a.bu.replace(/BU-Schl.ssel: /, '');
    
  } catch (e){ 
             }
}
