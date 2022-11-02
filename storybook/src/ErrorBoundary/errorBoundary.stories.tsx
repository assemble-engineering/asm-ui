import React, { useState } from 'react';
import { ErrorBoundary, ErrorFallback, Button } from '@assemble-inc/core';

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
};

const ErrorComp = () => {
  throw new Error('This is the error text');
}

const Template = ({Fallback, onError}) =>  {
  const [error, setError] = useState(false);
  return (
    <div>
        <Button onClick={() => setError(e => !e)}>Toggle error</Button>
        <ErrorBoundary
          Fallback={Fallback}
          onReset={() => setError(false)}
          onError={onError}
          resetKeys={[error]}
        >
          {error ? <ErrorComp /> : null}
        </ErrorBoundary>
    </div>
  )
};

export const Primary = Template.bind({});
export const CustomFallback = Template.bind({});

Primary.args = {
  onError: e => console.log("error info for reporting:", e)
};

CustomFallback.args = {
  Fallback: e => <ErrorFallback errorText="My custom error text:" buttonText="My custom button text to reset" {...e} />
};
