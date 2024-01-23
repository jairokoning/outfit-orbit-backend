import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export type WearerProps = {
  name: string
  email: string
  password: string
}

export class Wearer extends Entity<WearerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  static create(props: WearerProps, id?: UniqueEntityID) {
    const wearer = new Wearer(props, id)
    console.log(wearer)
    return wearer
  }
}
