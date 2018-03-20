/**** Old ****/
function input(a) {
  entries = a;
  var le = [];
  for (var i = 0; i <= entries.length; i++) {
    if (entries[i] === '"S"' || entries[i] === '"H"') {
      le[j] = i;
      j++;
    }
  }
  var m1 = entries[le[0]-1].split(" ");
  bu[0][0] = m1[m1.length-1];
  m1.splice(-1, 1);
  var m2 = m1.join();
  m1 = m2.replace(",", " ");
  m2 = a[145];
  entries[le[0]-1] = m1;
  a[145]=m2;
  var vb = entries.slice(30,le[0]);
  j = 0;
  return vb;
}
/**********/

/**** New ****/
function input(a) {
  entries = a;
  var le = [];
  for (var i = 0; i <= entries.length; i++) {
    if (entries[i] === '"S"' || entries[i] === '"H"') {
      le[j] = i;
      j++;
    }
  }
  var m1 = entries[le[0]-1].split(" ");
  bu[0][0] = m1[m1.length-1];
  m1.splice(-1, 1);
  var m2 = m1.join();
  m1 = m2.replace(",", " ");
  m2 = a[145];
  entries[le[0]-1] = m1;
  a[145]=m2;
  var vb = entries.slice(30,le[0]);
  j = 0;
  return vb;
}
