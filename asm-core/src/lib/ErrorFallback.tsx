"use client";

import classNames from "classnames";
import { Button } from "./Button"

interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

export type ErrorFallbackProps = {
  className?: string;
  appendClassName?: string;
  errorText?: string;
  buttonText?: string;
} & FallbackProps

export const ErrorFallback = (
  {
    className = 'asm-error-fallback',
    appendClassName,
    errorText = "Something went wrong:",
    buttonText = "Try again",
    error,
    resetErrorBoundary
  }: ErrorFallbackProps) => {
  return (
    <div role="alert" className={classNames(className, appendClassName)}>
      <p>{errorText}</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>{buttonText}</Button>
    </div>
  )
}

export default ErrorFallback
