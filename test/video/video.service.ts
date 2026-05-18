type Video = {
  duration: number
  title: string
}

export function uploadVideo(video: Video) {

  if (!video.title.trim()) {
    throw new Error('Título obrigatório')
  }

  if (video.title.length > 100) {
    throw new Error('Título muito grande')
  }

  if (video.duration <= 0) {
    throw new Error('Duração inválida')
  }

  if (video.duration > 60) {
    throw new Error('Vídeo excede 60 segundos')
  }

  return true
}