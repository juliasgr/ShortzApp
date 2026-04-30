export function likeVideo(userId: number, videoId: number, likes: any[]) {

  const exists = likes.find(
    l => l.userId === userId && l.videoId === videoId
  )

  if (exists) {
    throw new Error('Já curtiu')
  }

  likes.push({ userId, videoId })
}