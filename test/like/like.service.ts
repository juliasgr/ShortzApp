type Like = {
  userId: number
  videoId: number
}

export function likeVideo(
  userId: number,
  videoId: number,
  likes: Like[]
) {

  if (userId <= 0) {
    throw new Error('Usuário inválido')
  }

  if (videoId <= 0) {
    throw new Error('Vídeo inválido')
  }

  const alreadyLiked = likes.find(
    like =>
      like.userId === userId &&
      like.videoId === videoId
  )

  if (alreadyLiked) {
    throw new Error('Vídeo já curtido')
  }

  likes.push({
    userId,
    videoId
  })
}