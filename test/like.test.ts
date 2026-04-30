import { describe, it, expect } from 'vitest'
import { likeVideo } from '../src/services/like.service'

describe('Likes - Shortz-App', () => {

  it('deve curtir vídeo', () => {
    const likes: any[] = []

    likeVideo(1, 1, likes)

    expect(likes.length).toBe(1)
  })

  it('não deve permitir like duplicado', () => {
    const likes = [{ userId: 1, videoId: 1 }]

    expect(() => likeVideo(1, 1, likes)).toThrow()
  })

})