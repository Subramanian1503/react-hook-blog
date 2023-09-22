import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value: value,
    onChange: onChange,
  };
}
