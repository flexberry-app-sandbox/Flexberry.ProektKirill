import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt_kirill',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt_kirill',
          title: 'Proekt_kirill'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
