/**** Creates error objects ****/
function Fehler(words, sh, wkz, konto, gegenkonto, bu, datum, belegfeld, buchungstext, umsatz, errorcode, meldung, ustid = "none", euland = "DE") {
  this.words = words;
  this.sh = sh;
  this.wkz = wkz;
  this.konto = konto;
  this.gegenkonto = gegenkonto;
  this.bu = bu;
  this.datum = datum;
  this.belegfeld = belegfeld;
  this.buchungstext = buchungstext;
  this.umsatz = umsatz;
  this.errorcode = errorcode;
  this.meldung = meldung;
  this.euland = euland;
  this.ustid = ustid;
  // INSERT NEW OBJECT PROPERTY HERE //
}
