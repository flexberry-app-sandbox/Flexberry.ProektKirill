import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  логистика: DS.belongsTo('i-i-s-proekt-kirill-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-proekt-kirill-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-proekt-kirill-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-proekt-kirill-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-proekt-kirill-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-proekt-kirill-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-proekt-kirill-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-proekt-kirill-посылка', {
    номер: attr('Номер', { index: 0 }),
    транзакция: belongsTo('i-i-s-proekt-kirill-транзакция', 'Транзакция', {
      время: attr('Время', { index: 2, hidden: true }),
      номер: attr('Номер', { index: 5 }),
      дата: attr('Дата', { index: 6 }),
      пользователь: belongsTo('i-i-s-proekt-kirill-пользователь', '', {
        фИО: attr('ФИО', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'время' }),
    логистика: belongsTo('i-i-s-proekt-kirill-логистика', 'Логистика', {
      информация: attr('Информация', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'информация' })
  });
};
