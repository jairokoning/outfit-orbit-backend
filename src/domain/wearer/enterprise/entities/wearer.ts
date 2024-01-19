import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export type WearerProps = {
  name: string
  email: string
  password: string
}

export class Wearer extends Entity<WearerProps> {
  static create(props: WearerProps, id?: UniqueEntityID) {
    const wearer = new Wearer(props, id)
    return wearer
  }
}
