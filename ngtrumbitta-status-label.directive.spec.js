describe('Directive: ngtrumbitta.directives.statuslabel', function() {
  'use strict';
  var $compile,
      $rootScope;

  beforeEach(module('ngtrumbitta.directives.statuslabel'));
  beforeEach(module('app.test.templates'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('replaces the element with the appropriate content', function() {

    var mockStatusCollection = { true: { text: 'my text', cssClasses: 'my three classes', iconClasses: 'my icon classes' }, false: { text: 'my other text', cssClasses: 'my other three classes', iconClasses: 'my other icon classes' } };
    $rootScope.statusCollection = mockStatusCollection;

    var directiveHtmlStatusTrue = [
      '<ngtrumbitta-status-label',
      ' status-collection="statusCollection"',
      ' status="true">',
      '</ngtrumbitta-status-label>'].join('');

    var directiveHtmlStatusFalse = [
      '<ngtrumbitta-status-label',
      ' status-collection="statusCollection"',
      ' status="false">',
      '</ngtrumbitta-status-label>'].join('');

    var elementTrue = $compile(directiveHtmlStatusTrue)($rootScope);
    $rootScope.$digest();
    var mockStatusTrue = mockStatusCollection[true];
    expect(elementTrue.html()).toContain(mockStatusTrue.text);
    expect(elementTrue.html()).toContain(mockStatusTrue.cssClasses);
    expect(elementTrue.html()).toContain(mockStatusTrue.iconClasses);

    var elementFalse = $compile(directiveHtmlStatusFalse)($rootScope);
    $rootScope.$digest();
    var mockStatusFalse = mockStatusCollection[false];
    expect(elementFalse.html()).toContain(mockStatusFalse.text);
    expect(elementFalse.html()).toContain(mockStatusFalse.cssClasses);
    expect(elementFalse.html()).toContain(mockStatusFalse.iconClasses);
  });
});
