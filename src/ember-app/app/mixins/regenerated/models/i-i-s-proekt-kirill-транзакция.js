import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  пользователь: DS.belongsTo('i-i-s-proekt-kirill-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-proekt-kirill-транзакция.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-proekt-kirill-транзакция.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-kirill-транзакция.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-proekt-kirill-транзакция.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-proekt-kirill-транзакция.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранзакцияE', 'i-i-s-proekt-kirill-транзакция', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    пользователь: belongsTo('i-i-s-proekt-kirill-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ТранзакцияL', 'i-i-s-proekt-kirill-транзакция', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    пользователь: belongsTo('i-i-s-proekt-kirill-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
