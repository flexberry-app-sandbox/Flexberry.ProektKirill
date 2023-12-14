import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  службаДоставки: DS.belongsTo('i-i-s-proekt-kirill-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-proekt-kirill-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-proekt-kirill-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-kirill-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-proekt-kirill-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-proekt-kirill-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-proekt-kirill-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    службаДоставки: belongsTo('i-i-s-proekt-kirill-служба-доставки', 'Служба доставки', {
      наименвоание: attr('Наименвоание', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименвоание' }),
    ячейка: hasMany('i-i-s-proekt-kirill-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      хранение: belongsTo('i-i-s-proekt-kirill-хранение', 'Хранение', {
        продления: attr('Продления', { index: 2, hidden: true }),
        датаНачала: attr('Дата начала', { index: 3 }),
        датаЗавершения: attr('Дата завершения', { index: 4 })
      }, { index: 1, displayMemberPath: 'продления' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-proekt-kirill-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    службаДоставки: belongsTo('i-i-s-proekt-kirill-служба-доставки', 'Наименвоание', {
      наименвоание: attr('Наименвоание', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
