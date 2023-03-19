import { renderHook, act } from '@testing-library/react-hooks'
import useDebounce from './useDebounce'

describe('useDebounce', () => {
  it('should debounce a value', () => {
    jest.useFakeTimers()

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'hello', delay: 1000 },
      }
    )

    expect(result.current).toBe('hello')

    // Update the value and rerender the hook
    rerender({ value: 'world', delay: 1000 })
    expect(result.current).toBe('hello')

    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500)
    expect(result.current).toBe('hello')
  })

  it('should debounce a value with default delay', () => {
    jest.useFakeTimers()

    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'hello' },
    })

    expect(result.current).toBe('hello')

    // Update the value and rerender the hook
    rerender({ value: 'world' })
    expect(result.current).toBe('hello')

    // Fast-forward time by 500ms
    act(() => {
      jest.advanceTimersByTime(500)
      expect(result.current).toBe('world')
    })
  })
})
