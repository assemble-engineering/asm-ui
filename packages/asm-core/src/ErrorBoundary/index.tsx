import { ComponentType } from "react"
import { ErrorBoundary, FallbackProps } from "./ErrorBoundary"
import ErrorFallback from "./ErrorFallback"

type ErrorBoundaryWithFallbackProps = {
  Fallback?: ComponentType<FallbackProps>;
  onError?: (error: Error, info: any) => void;
  onReset?: () => void;
  children: React.ReactNode | React.ReactChildren;
}

export const ErrorBoundaryWithFallback = ({children, Fallback, onError, onReset}: ErrorBoundaryWithFallbackProps) => (
  <ErrorBoundary
    FallbackComponent={Fallback || ErrorFallback}
    onError={onError}
    onReset={onReset}
  >
    {children}
  </ErrorBoundary>
)
