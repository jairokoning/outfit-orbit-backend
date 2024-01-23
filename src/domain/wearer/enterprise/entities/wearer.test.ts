import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Wearer } from './wearer'

test('should create new wearer', async () => {
  const input = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '123456',
  }
  const wearer = Wearer.create(input)
  expect(wearer.id).toBeDefined()
  expect(wearer.name).toBe(input.name)
  expect(wearer.email).toBe(input.email)
})
