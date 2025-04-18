export const deepMerge = <T extends Record<string, any>>(target: T, source: Partial<T>): T => {
  const result = { ...target }
  
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && key in target) {
      result[key] = deepMerge(target[key], source[key] as Partial<T[typeof key]>)
    } else {
      result[key] = source[key] as T[typeof key]
    }
  }
  
  return result
} 