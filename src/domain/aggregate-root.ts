import { Identifier } from '@/domain/identifier'
import { Entity } from '@/domain/entity'

export abstract class AggregateRoot<ID extends Identifier> extends Entity<ID> {
  protected constructor(id: ID) {
    super(id)
  }
}
