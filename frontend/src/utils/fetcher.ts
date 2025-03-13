const API_URL = import.meta.env.VITE_BACKEND_URL

export const fetcher = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(`${API_URL}${endpoint}`, options)

  if (!res.ok) {
    throw new Error('Error en la petición')
  }

  return res.json()
}
