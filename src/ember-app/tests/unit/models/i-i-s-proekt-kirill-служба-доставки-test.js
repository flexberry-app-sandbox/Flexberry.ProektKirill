import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-kirill-служба-доставки', 'Unit | Model | i-i-s-proekt-kirill-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt-kirill-логистика',
    'model:i-i-s-proekt-kirill-пользователь',
    'model:i-i-s-proekt-kirill-постамат',
    'model:i-i-s-proekt-kirill-посылка',
    'model:i-i-s-proekt-kirill-служба-доставки',
    'model:i-i-s-proekt-kirill-транзакция',
    'model:i-i-s-proekt-kirill-хранение',
    'model:i-i-s-proekt-kirill-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
