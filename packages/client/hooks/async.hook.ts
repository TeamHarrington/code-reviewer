import { useState, useEffect, DependencyList } from 'react'

/**
 * Hook for getting the result of a promise.
 * @param promise
 * @param deps param that will be forwarded to useEffect.
 * @param defaultValue default value of the promise value (before it resolves)
 * @returns [result, loading] [the result of the promise when it resolves, true iff promise is not resolved]
 */
export const useAsync: <T>(
  promise: Promise<T>,
  dep?: DependencyList,
  defaultValue?: T | null
) => [T | null, boolean] = <T>(
  promise: Promise<T>,
  deps?: DependencyList,
  defaultValue?: T | null
) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [result, setResult] = useState<T | null>(defaultValue ?? null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const res = await promise
      if (mounted) {
        setResult(res)
      }
      setLoading(false)
    })()
    return () => {
      mounted = false
    }
  }, deps)
  return [result, loading]
}
