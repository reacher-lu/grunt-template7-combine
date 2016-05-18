;define(function() {
  var tplsClub = {};
  var tpls = window.Template7;
  tplsClub.test1 = tpls.compile('Hello, my name is {{firstName}} {{lastName}}');
  tplsClub.test2 = tpls.compile('Bye , {{firstName}} {{lastName}}');
  return tplsClub;
})