import React from "react";

const useToggle = (initialValue = true) => {
  const [value, setValue] = React.useState(initialValue);
  return [value, () => setValue(x => !x)];
};

export default useToggle;
