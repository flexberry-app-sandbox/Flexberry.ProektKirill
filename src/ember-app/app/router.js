import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-kirill-логистика-l');
  this.route('i-i-s-proekt-kirill-логистика-e',
  { path: 'i-i-s-proekt-kirill-логистика-e/:id' });
  this.route('i-i-s-proekt-kirill-логистика-e.new',
  { path: 'i-i-s-proekt-kirill-логистика-e/new' });
  this.route('i-i-s-proekt-kirill-пользователь-l');
  this.route('i-i-s-proekt-kirill-пользователь-e',
  { path: 'i-i-s-proekt-kirill-пользователь-e/:id' });
  this.route('i-i-s-proekt-kirill-пользователь-e.new',
  { path: 'i-i-s-proekt-kirill-пользователь-e/new' });
  this.route('i-i-s-proekt-kirill-постамат-l');
  this.route('i-i-s-proekt-kirill-постамат-e',
  { path: 'i-i-s-proekt-kirill-постамат-e/:id' });
  this.route('i-i-s-proekt-kirill-постамат-e.new',
  { path: 'i-i-s-proekt-kirill-постамат-e/new' });
  this.route('i-i-s-proekt-kirill-служба-доставки-l');
  this.route('i-i-s-proekt-kirill-служба-доставки-e',
  { path: 'i-i-s-proekt-kirill-служба-доставки-e/:id' });
  this.route('i-i-s-proekt-kirill-служба-доставки-e.new',
  { path: 'i-i-s-proekt-kirill-служба-доставки-e/new' });
  this.route('i-i-s-proekt-kirill-транзакция-l');
  this.route('i-i-s-proekt-kirill-транзакция-e',
  { path: 'i-i-s-proekt-kirill-транзакция-e/:id' });
  this.route('i-i-s-proekt-kirill-транзакция-e.new',
  { path: 'i-i-s-proekt-kirill-транзакция-e/new' });
  this.route('i-i-s-proekt-kirill-хранение-l');
  this.route('i-i-s-proekt-kirill-хранение-e',
  { path: 'i-i-s-proekt-kirill-хранение-e/:id' });
  this.route('i-i-s-proekt-kirill-хранение-e.new',
  { path: 'i-i-s-proekt-kirill-хранение-e/new' });
});

export default Router;
