import { describe, it, expect } from 'vitest'
import { likeVideo } from '../../test/like/like.service'

type Like = {
  userId: number
  videoId: number
}

describe('Likes', () => {

  describe('Curtidas válidas', () => {

    it('deve curtir vídeo', () => {
      const likes: Like[] = []

      likeVideo(1, 1, likes)

      expect(likes.length).toBe(1)
    })

    it('deve salvar o like corretamente', () => {
      const likes: Like[] = []

      likeVideo(1, 1, likes)

      expect(likes[0]).toEqual({
        userId: 1,
        videoId: 1
      })
    })

  })

  describe('Validações de erro', () => {

    it('não deve permitir like duplicado', () => {
      const likes: Like[] = [
        {
          userId: 1,
          videoId: 1
        }
      ]

      expect(() =>
        likeVideo(1, 1, likes)
      ).toThrow()
    })

    it('não deve permitir usuário inválido', () => {
      const likes: Like[] = []

      expect(() =>
        likeVideo(0, 1, likes)
      ).toThrow()
    })

    it('não deve permitir vídeo inválido', () => {
      const likes: Like[] = []

      expect(() =>
        likeVideo(1, 0, likes)
      ).toThrow()
    })

  })

})