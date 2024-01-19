import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Wearer } from './wearer'

test('should create new wearer', async () => {
  const input = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '123456',
  }
  const id = new UniqueEntityID()
  const wearer = Wearer.create(input, id)
  expect(wearer).toEqual({ ...input, id })
})
