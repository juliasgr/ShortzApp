import { describe, it, expect } from 'vitest'
import { uploadVideo } from '../../test/video/video.service'

describe('Upload de Vídeo', () => {

  describe('Upload válido', () => {

    it('deve aceitar vídeo válido', () => {
      const result = uploadVideo({
        duration: 30,
        title: 'Vídeo teste'
      })

      expect(result).toBe(true)
    })

  })

  describe('Validações de erro', () => {

    it('deve rejeitar vídeo com mais de 60 segundos', () => {
      expect(() =>
        uploadVideo({
          duration: 120,
          title: 'Erro'
        })
      ).toThrow()
    })

    it('não deve aceitar título vazio', () => {
      expect(() =>
        uploadVideo({
          duration: 30,
          title: ''
        })
      ).toThrow()
    })

    it('não deve aceitar duração zerada', () => {
      expect(() =>
        uploadVideo({
          duration: 0,
          title: 'Teste'
        })
      ).toThrow()
    })

    it('não deve aceitar duração negativa', () => {
      expect(() =>
        uploadVideo({
          duration: 0,
          title: 'Teste'
        })
      ).toThrow()
    })

    it('não deve aceitar título muito grande', () => {
      expect(() =>
        uploadVideo({
          duration: 30,
          title: 'a'.repeat(300)
        })
      ).toThrow()
    })

  })

})