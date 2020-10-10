import React from 'react';
import {set, get} from 'lodash';
import { Select, Form, Input } from 'antd/es';

const SelectEditor: React.FC<{
  schema: any,
  onChanged: (schema: any) => void,
}> = ({schema, onChanged}) => {
  const [label, setLabel] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const handleLabelChange = (e: any) => {
    setLabel(e.target.value)
  };
  const handleLabelBlur = () => {
    set(schema.props, 'placeholder', label)
    set(schema, 'children', options.map(option => {
      return {tag: 'option', props: { value: option.value }, children: option.label};
    }));
    onChanged(schema)
  };
  const handleOptionValueChanged = (e, index: number) => {
     const newOptions = [...options];
    options[index].value = e.target.value;
    setOptions(newOptions);
  };
  const handleOptionLabelChanged = (e, index: number) => {
    const newOptions = [...options];
    options[index].label = e.target.value;
    setOptions(newOptions);
  };
  const handleAddOne = () => {
    const newOptions = [...options, {label: '', value: ''}];
    setOptions(newOptions);
  };
  React.useEffect(() => {
    setLabel(get(schema.props, 'placeholder', ''));
    setOptions((schema.children || []).map(child => {
      console.log(child)
      return {label: child.children, value: child.props.value};
    }));
  }, [schema]);
  return (
    <Form>
      <Form.Item label="占位字符">
        <Input type="text" value={label} onChange={handleLabelChange} onBlur={handleLabelBlur}/>
      </Form.Item>
      <Form.Item label="选项">
        <ul>
          {options.map((option, index) => {
            return <li key={index}>
              <Input onBlur={handleLabelBlur} value={option.value} onChange={(e) => handleOptionValueChanged(e, index)}/>
              <Input onBlur={handleLabelBlur} value={option.label} onChange={(e) => handleOptionLabelChanged(e, index)}/>
            </li>;
          })}
          <li onClick={handleAddOne}>Add</li>
        </ul>
      </Form.Item>
    </Form>
  );
    
};
export default SelectEditor;
