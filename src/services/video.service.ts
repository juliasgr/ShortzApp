export function uploadVideo(video: any) {

  // RN-004: duração máxima
  if (video.duration > 60) {
    throw new Error('Vídeo muito longo')
  }

  // RN-004: título obrigatório
  if (!video.title || video.title.length > 100) {
    throw new Error('Título inválido')
  }

  return true
}