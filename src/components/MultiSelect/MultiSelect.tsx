import React from 'react';
import ReactMultiSelect from 'react-multi-select-component';

type Props = React.ComponentProps<typeof ReactMultiSelect>;

const MultiSelect = (props) => {
  return <ReactMultiSelect {...props} />;
};

export default MultiSelect;
