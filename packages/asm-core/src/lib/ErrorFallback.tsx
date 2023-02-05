import { Button } from "./Button"

interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

type ErrorFallbackProps = {
  className?: string;
  errorText?: string;
  buttonText?: string;
} & FallbackProps

export const ErrorFallback = (
  {
    className = 'asm-error-fallback',
    errorText = "Something went wrong:",
    buttonText = "Try again",
    error,
    resetErrorBoundary
  }: ErrorFallbackProps) => {
  return (
    <div role="alert" className={className}>
      <p>{errorText}</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>{buttonText}</Button>
    </div>
  )
}

export default ErrorFallback
