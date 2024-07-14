import React, { useState } from 'react';
import { Cascader } from 'antd';
const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
const MerchandiseAddUpdate = () => {
  const [options, setOptions] = useState(optionLists);
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: '111',
          value: 'dynamic1',
        },
        {
          label: `222`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 10);
  };
  return <Cascader options={options}  />;
};
export default MerchandiseAddUpdate;