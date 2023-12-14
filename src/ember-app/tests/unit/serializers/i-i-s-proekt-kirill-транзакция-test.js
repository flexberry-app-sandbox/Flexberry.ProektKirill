import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-kirill-транзакция', 'Unit | Serializer | i-i-s-proekt-kirill-транзакция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-kirill-транзакция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
