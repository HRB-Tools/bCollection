var eventHandler = {
  uSt: /Der eingegebene Umsatzsteuerschl.ssel ist mit den Zusatzfunktionen der beiden Konten nicht vertr.glich/,
  euL: /Die Eingabe des EU-Landes ist zwingend erforderlich/,
  gZu: /In den Grunddaten Rechnungswesen ist die Nutzung der Gesellschafter-Zuordnung aktiviert/,
  rel: /Der Beleg ist f.r die Kapitalkontoentwicklung\/Ergebnisverwendung relevant/,
  datZ: /Das eingegebene Datum liegt vor dem Wirtschaftsjahresbeginn/,
  UStK: /Der eingegebene Umsatzsteuerschl.ssel ist in diesem Kontext nicht erlaubt/,
  euSt: /Die Eingabe von EU-Land und Steuersatz ist zwingend erforderlich/,
  ioA: /Die Eingabe.*/,
  keqG : /Konto und Gegenkonto sind gleich./,
  mDate : /Es ist kein Datum eingegeben./,
  naN : /.* ist nicht numerisch./,
  mKo : /Es ist kein Konto eingegeben oder die eingegebene Kontonummer ist ung.ltig./,
  mGk : /Es ist kein Gegenkonto eingegeben oder die eingegebene Gegenkontonummer ist ung.ltig./,
  illFV : /Die Eingabe "".*"" im Feld "".*"" ist nicht zul.ssig./,
  invFV : /Die Eingabe "".*"" im Feld "".*"" ist ung.ltig./,
  handle: function(a) {
    if (eventHandler.euL.test(a)) {
      return "missing_eu";
    }
    if (eventHandler.uSt.test(a)) {
      return "conflict_ust_zusatz";
    }
    if (eventHandler.gZu.test(a)) {
      return "warning_gesellschafter";
    }
    if (eventHandler.rel.test(a)) {
      return "warning_relevanter_beleg";
    }
    if (eventHandler.datZ.test(a)) {
      return "error_date";
    }
    if (eventHandler.UStK.test(a)) {
      return "error_ust_kontext";
    }
    if (eventHandler.euSt.test(a)) {
      return "conflict_ust_eu";
    }  
    if ( eventHandler.keqG.test(a) ) {
    return "konto_is_gegenkonto";
    }  
    if ( eventHandler.mDate.test(a) ) {
    return "missing_date";
    } 
    if ( eventHandler.naN.test(a)) {
      return "not_a_numerical_value";
    } 
    if ( eventHandler.mKo.test(a) ) { 
    return "missing_konto";
    }  
    if ( eventHandler.mGk.test(a) ) {
    return "missing_gegenkonto";
    }  
    if ( eventHandler.illFV.test(a) ) {
    return "illegal_field_value";
    }  
    if ( eventHandler.invFV.test(a) ) {
    return "invalid_field_value";
    }  
    else if (eventHandler.ioA.test(a)) {
      return "error_invalid_input";
    } 
    else console.log("Nicht erkannt");
  }
};
