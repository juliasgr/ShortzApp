type User = {
  username: string
  email: string
  password: string
}

export function registerUser(user: User, users: User[]) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!user.username.trim()) {
    throw new Error('Username obrigatório')
  }

  if (!emailRegex.test(user.email)) {
    throw new Error('Email inválido')
  }

  if (user.password.length < 8) {
    throw new Error('Senha deve ter no mínimo 8 caracteres')
  }

  const usernameExists = users.find(
    u => u.username === user.username
  )

  if (usernameExists) {
    throw new Error('Username já existe')
  }

  const emailExists = users.find(
    u => u.email === user.email
  )

  if (emailExists) {
    throw new Error('Email já existe')
  }

  users.push(user)

  return user
}