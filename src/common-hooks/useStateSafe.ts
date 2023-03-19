import { useCallback, useEffect, useRef, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type useStateSafeParams<T> = T | (() => T)
type dispatch<T> = Dispatch<SetStateAction<T>>
/**
 * Wrapper around react's `useState` hook.
 * This hook is to prevent memory leak as this wont call set state on unmounted component.
 *
 * @param initialValue initial state value
 */
export const useStateSafe = <T>(
  initialValue?: useStateSafeParams<T>
): [T, dispatch<T>] => {
  const [val, setVal] = useState<T>(initialValue as T | (() => T))
  const mountedRef = useRef<boolean>()
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])
  const setValue: dispatch<T> = useCallback(
    (s: SetStateAction<T>) => {
      if (mountedRef.current) {
        setVal(s)
      }
    },
    [setVal]
  )
  return [val, setValue]
}
