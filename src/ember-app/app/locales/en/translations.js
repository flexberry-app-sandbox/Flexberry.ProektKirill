import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProekt_kirillЛогистикаLForm from './forms/i-i-s-proekt-kirill-логистика-l';
import IISProekt_kirillПользовательLForm from './forms/i-i-s-proekt-kirill-пользователь-l';
import IISProekt_kirillПостаматLForm from './forms/i-i-s-proekt-kirill-постамат-l';
import IISProekt_kirillСлужбаДоставкиLForm from './forms/i-i-s-proekt-kirill-служба-доставки-l';
import IISProekt_kirillТранзакцияLForm from './forms/i-i-s-proekt-kirill-транзакция-l';
import IISProekt_kirillХранениеLForm from './forms/i-i-s-proekt-kirill-хранение-l';
import IISProekt_kirillЛогистикаEForm from './forms/i-i-s-proekt-kirill-логистика-e';
import IISProekt_kirillПользовательEForm from './forms/i-i-s-proekt-kirill-пользователь-e';
import IISProekt_kirillПостаматEForm from './forms/i-i-s-proekt-kirill-постамат-e';
import IISProekt_kirillСлужбаДоставкиEForm from './forms/i-i-s-proekt-kirill-служба-доставки-e';
import IISProekt_kirillТранзакцияEForm from './forms/i-i-s-proekt-kirill-транзакция-e';
import IISProekt_kirillХранениеEForm from './forms/i-i-s-proekt-kirill-хранение-e';
import IISProekt_kirillЛогистикаModel from './models/i-i-s-proekt-kirill-логистика';
import IISProekt_kirillПользовательModel from './models/i-i-s-proekt-kirill-пользователь';
import IISProekt_kirillПостаматModel from './models/i-i-s-proekt-kirill-постамат';
import IISProekt_kirillПосылкаModel from './models/i-i-s-proekt-kirill-посылка';
import IISProekt_kirillСлужбаДоставкиModel from './models/i-i-s-proekt-kirill-служба-доставки';
import IISProekt_kirillТранзакцияModel from './models/i-i-s-proekt-kirill-транзакция';
import IISProekt_kirillХранениеModel from './models/i-i-s-proekt-kirill-хранение';
import IISProekt_kirillЯчейкаModel from './models/i-i-s-proekt-kirill-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-kirill-логистика': IISProekt_kirillЛогистикаModel,
    'i-i-s-proekt-kirill-пользователь': IISProekt_kirillПользовательModel,
    'i-i-s-proekt-kirill-постамат': IISProekt_kirillПостаматModel,
    'i-i-s-proekt-kirill-посылка': IISProekt_kirillПосылкаModel,
    'i-i-s-proekt-kirill-служба-доставки': IISProekt_kirillСлужбаДоставкиModel,
    'i-i-s-proekt-kirill-транзакция': IISProekt_kirillТранзакцияModel,
    'i-i-s-proekt-kirill-хранение': IISProekt_kirillХранениеModel,
    'i-i-s-proekt-kirill-ячейка': IISProekt_kirillЯчейкаModel
  },

  'application-name': 'Proekt_kirill',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt_kirill',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_kirill',
          title: 'Proekt_kirill'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proekt-kirill': {
          caption: 'Proekt_kirill',
          title: 'Proekt_kirill',
          'i-i-s-proekt-kirill-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-proekt-kirill-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-proekt-kirill-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-proekt-kirill-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-proekt-kirill-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-proekt-kirill-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt-kirill-логистика-l': IISProekt_kirillЛогистикаLForm,
    'i-i-s-proekt-kirill-пользователь-l': IISProekt_kirillПользовательLForm,
    'i-i-s-proekt-kirill-постамат-l': IISProekt_kirillПостаматLForm,
    'i-i-s-proekt-kirill-служба-доставки-l': IISProekt_kirillСлужбаДоставкиLForm,
    'i-i-s-proekt-kirill-транзакция-l': IISProekt_kirillТранзакцияLForm,
    'i-i-s-proekt-kirill-хранение-l': IISProekt_kirillХранениеLForm,
    'i-i-s-proekt-kirill-логистика-e': IISProekt_kirillЛогистикаEForm,
    'i-i-s-proekt-kirill-пользователь-e': IISProekt_kirillПользовательEForm,
    'i-i-s-proekt-kirill-постамат-e': IISProekt_kirillПостаматEForm,
    'i-i-s-proekt-kirill-служба-доставки-e': IISProekt_kirillСлужбаДоставкиEForm,
    'i-i-s-proekt-kirill-транзакция-e': IISProekt_kirillТранзакцияEForm,
    'i-i-s-proekt-kirill-хранение-e': IISProekt_kirillХранениеEForm
  },

});

export default translations;
