import useBoolean from './useBoolean';

const useToggle = (initialValue) => {
  const { value, toggle } = useBoolean(initialValue);

  return {
    value,
    toggle,
  };
};

export default useToggle;