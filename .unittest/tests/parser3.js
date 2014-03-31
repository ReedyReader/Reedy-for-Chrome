

exports = (function() {
	
	function test(raw, expected) {
		var tokens = window.fastReader.parse3(raw),
			res = [], i;
		
		for (i = 0; i < tokens.length; i++) {
			res.push(tokens[i].toString())
		}
		
		assert.equalArray(res, expected);
	}
	
	
	var assert = require('../assert.js');
	
	require('../../js/content/Parser.js');
	
	
	assert.profile('parser3');
	
	test('снег, у входа – елка.',                           ['снег',',','у','входа','–','елка','.']);
	test('Глава 1 Глава 1.1 Команда А',                     ['Глава 1','Глава 1.1','Команда А']);
	
	test('перевод A. Préchac’а). Сочетание',                ['перевод','A. Préchac’а',')','.','Сочетание']);
	test('ну У. Б. Йитс понятно теперь',                    ['ну','У. Б. Йитс','понятно','теперь']);
	test('ну У. Б. Йитс У. понятно теперь',                 ['ну','У. Б. Йитс','У','.','понятно','теперь']);
	test('ну Й.К.Л. Прильвиц... понятно',                   ['ну','Й.К.Л. Прильвиц','...','понятно']);
	
	test('перевод Préchac’а A.). Сочетание',                ['перевод','Préchac’а A.',')','.','Сочетание']);
	test('ну Йитс У. Б. понятно теперь',                    ['ну','Йитс У. Б.','понятно','теперь']);
	test('ну Прильвиц Й.К.Л... понятно',                    ['ну','Прильвиц Й.К.Л','...','понятно']);
	test('кричал:\n- Она',                                  ['кричал',':','-','Она']);
	
	return assert.profileEnd();
	
})();
