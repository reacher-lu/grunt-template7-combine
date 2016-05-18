;define(function() {
  tplsClub.testing = tpls.compile('Hello, my name is {{firstName}} {{lastName}}');
  tplsClub.123 = tpls.compile('Bye , {{firstName}} {{lastName}}');
  return tplsClub;
})