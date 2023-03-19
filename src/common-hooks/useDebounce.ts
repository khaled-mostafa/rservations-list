import { useEffect, useState } from 'react'

/** This is a custom hook returns a debounced value.
 *It uses a timeout to delay the set of the debounced value.
 * The timeout can be passed in or defaults to 500 ms.
 */
const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
