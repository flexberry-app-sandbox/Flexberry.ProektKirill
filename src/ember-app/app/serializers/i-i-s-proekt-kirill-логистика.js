import { Serializer as ЛогистикаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-kirill-логистика';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЛогистикаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
