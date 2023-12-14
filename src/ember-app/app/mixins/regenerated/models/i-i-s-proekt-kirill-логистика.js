import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  информация: DS.attr('string'),
  номер: DS.attr('number'),
  службаДоставки: DS.belongsTo('i-i-s-proekt-kirill-служба-доставки', { inverse: null, async: false })
});

export let ValidationRules = {
  информация: {
    descriptionKey: 'models.i-i-s-proekt-kirill-логистика.validations.информация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-kirill-логистика.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-proekt-kirill-логистика.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛогистикаE', 'i-i-s-proekt-kirill-логистика', {
    номер: attr('Номер', { index: 0 }),
    информация: attr('Информация', { index: 1 }),
    службаДоставки: belongsTo('i-i-s-proekt-kirill-служба-доставки', 'Служба доставки', {
      наименвоание: attr('Наименвоание', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименвоание' })
  });

  modelClass.defineProjection('ЛогистикаL', 'i-i-s-proekt-kirill-логистика', {
    номер: attr('Номер', { index: 0 }),
    информация: attr('Информация', { index: 1 }),
    службаДоставки: belongsTo('i-i-s-proekt-kirill-служба-доставки', 'Наименвоание', {
      наименвоание: attr('Наименвоание', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
