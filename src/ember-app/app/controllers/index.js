import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt-kirill.caption'),
          title: i18n.t('forms.application.sitemap.proekt-kirill.title'),
          children: [{
            link: 'i-i-s-proekt-kirill-хранение-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-хранение-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proekt-kirill-транзакция-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-транзакция-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proekt-kirill-логистика-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-логистика-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proekt-kirill-постамат-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-постамат-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proekt-kirill-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-служба-доставки-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proekt-kirill-пользователь-l',
            caption: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt-kirill.i-i-s-proekt-kirill-пользователь-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})