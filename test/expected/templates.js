;define(["tpls"],function(tpls) {
  var tplsClub = {};
  tplsClub.test1 = tpls.compile('Hello, my name is {{firstName}} {{lastName}}');
  tplsClub.test2 = tpls.compile('Bye , {{firstName}} {{lastName}}');
  return tplsClub;
})