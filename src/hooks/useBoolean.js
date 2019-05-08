import { useState, useCallback } from 'react';

const useBoolean = (initialValue = false) => {
  const [ value, setValue ] = useState(initialValue);

  return {
    value,
    toggle: useCallback(() => setValue(value => !value), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  };
};

export default useBoolean;