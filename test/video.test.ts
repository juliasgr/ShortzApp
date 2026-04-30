import { describe, it, expect } from 'vitest'
import { uploadVideo } from '../src/services/video.service'

describe('Upload de Vídeo - Shortz-App', () => {

  it('deve aceitar vídeo válido', () => {
    const result = uploadVideo({
      duration: 30,
      title: 'Vídeo teste'
    })

    expect(result).toBe(true)
  })

  it('deve rejeitar vídeo com mais de 60 segundos', () => {
    expect(() =>
      uploadVideo({
        duration: 120,
        title: 'Erro'
      })
    ).toThrow()
  })

})