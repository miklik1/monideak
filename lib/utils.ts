export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
} 