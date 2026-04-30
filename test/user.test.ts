import { describe, it, expect } from 'vitest'
import { registerUser } from '../src/services/user.service.ts'

describe('Cadastro de Usuário - Shortz-App', () => {

  it('deve cadastrar usuário válido', () => {
    const users: any[] = []

    const result = registerUser({
      username: 'julia',
      email: 'julia@email.com',
      password: '12345678'
    }, users)

    expect(result.username).toBe('julia')
    expect(users.length).toBe(1)
  })

  it('não deve permitir username duplicado', () => {
    const users = [{ username: 'julia' }]

    expect(() =>
      registerUser({
        username: 'julia',
        email: 'teste@email.com',
        password: '12345678'
      }, users)
    ).toThrow()
  })

  it('deve validar senha mínima', () => {
    const users: any[] = []

    expect(() =>
      registerUser({
        username: 'ana',
        email: 'ana@email.com',
        password: '123'
      }, users)
    ).toThrow()
  })

})