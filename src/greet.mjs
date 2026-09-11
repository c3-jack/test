export function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return 'Hello, there!';
  }
  return `Hello, ${name}!`;
}
