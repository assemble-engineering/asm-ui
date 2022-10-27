export const toCamelCase = (str: string = ''): string => {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/[^A-Za-z0-9]+/g, '$')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => `${a}$${b}`)
    .toLowerCase()
    .replace(/(\$)(\w)/g, (_m, _a, b) => b.toUpperCase());
}

export const toKebabCase = (str: string = ''): string => {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => `${a}_${b.toLowerCase()}`)
    .replace(/[^A-Za-z0-9]+|_+/g, '-')
    .toLowerCase();
}

export const toPascalCase = (str: string = ''): string => {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
    .replace(/[^A-Za-z0-9]+/g, '$')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => `${a}$${b}`)
    .toLowerCase()
    .replace(/(\$)(\w?)/g, (_m, _a, b) => b.toUpperCase());
}

export const toPathCase = (str: string = ''): string => {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => `${a}_${b.toLowerCase()}`)
    .replace(/[^A-Za-z0-9]+|_+/g, '/')
    .toLowerCase();
}

export const toSentenceCase = (str: string = ''): string => {
  if (!str) return '';

  const textcase = String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => `${a}_${b.toLowerCase()}`)
    .replace(/[^A-Za-z0-9]+|_+/g, ' ')
    .toLowerCase();

  return textcase.charAt(0).toUpperCase() + textcase.slice(1);
}

export const toSnakeCase = (str: string = ''): string => {
  if (!str) return '';

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
    .replace(/([a-z])([A-Z])/g, (_m, a, b) => a + '_' + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, '_')
    .toLowerCase();
}
