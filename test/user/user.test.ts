import { describe, it, expect } from 'vitest'
import { registerUser } from '../../test/user/user.service'

type User = {
  username: string
  email: string
  password: string
}

describe('Cadastro de Usuário - Shortz-App', () => {

  describe('Cadastro válido', () => {

    it('deve cadastrar usuário válido', () => {
      const users: User[] = []

      const result = registerUser({
        username: 'julia',
        email: 'julia@email.com',
        password: '12345678'
      }, users)

      expect(result).toEqual({
        username: 'julia',
        email: 'julia@email.com',
        password: '12345678'
      })

      expect(users.length).toBe(1)
    })

  })

  describe('Validações de erro', () => {

    it('não deve permitir username duplicado', () => {
      const users = [
        {
          username: 'julia',
          email: 'julia@email.com',
          password: '12345678'
        }
      ]

      expect(() =>
        registerUser({
          username: 'julia',
          email: 'teste@email.com',
          password: '12345678'
        }, users)
      ).toThrow()
    })

    it('não deve permitir email duplicado', () => {
      const users = [
        {
          username: 'julia',
          email: 'julia@email.com',
          password: '12345678'
        }
      ]

      expect(() =>
        registerUser({
          username: 'ana',
          email: 'julia@email.com',
          password: '12345678'
        }, users)
      ).toThrow()
    })

    it('não deve permitir senha menor que 8 caracteres', () => {
      const users: User[] = []

      expect(() =>
        registerUser({
          username: 'ana',
          email: 'ana@email.com',
          password: '123'
        }, users)
      ).toThrow()
    })

    it('não deve permitir email inválido', () => {
      const users: User[] = []

      expect(() =>
        registerUser({
          username: 'julia',
          email: 'emailinvalido',
          password: '12345678'
        }, users)
      ).toThrow()
    })

    it('não deve permitir username vazio', () => {
      const users: User[] = []

      expect(() =>
        registerUser({
          username: '',
          email: 'teste@email.com',
          password: '12345678'
        }, users)
      ).toThrow()
    })

    it('não deve permitir senha vazia', () => {
      const users: User[] = []

      expect(() =>
        registerUser({
          username: 'ana',
          email: 'ana@email.com',
          password: ''
        }, users)
      ).toThrow()
    })

  })

})