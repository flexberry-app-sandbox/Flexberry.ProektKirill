import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string'),
  посылка: DS.hasMany('i-i-s-proekt-kirill-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-proekt-kirill-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-proekt-kirill-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-kirill-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-proekt-kirill-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-proekt-kirill-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-proekt-kirill-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    посылка: hasMany('i-i-s-proekt-kirill-посылка', 'Посылка', {
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
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-proekt-kirill-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 })
  });
};
