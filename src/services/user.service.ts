export function registerUser(user: any, users: any[]) {

  // RN-001: username único
  if (users.find(u => u.username === user.username)) {
    throw new Error('Username já existe')
  }

  // RN-001: email válido
  if (!user.email.includes('@')) {
    throw new Error('Email inválido')
  }

  // RN-001: senha mínima
  if (user.password.length < 8) {
    throw new Error('Senha inválida')
  }

  users.push(user)
  return user
}