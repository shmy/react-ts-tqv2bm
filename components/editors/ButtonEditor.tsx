import React from 'react';
import {set, get} from 'lodash';

const ButtonEditor: React.FC<{
  schema: any,
  onChanged: (schema: any) => void,
}> = ({schema, onChanged}) => {
  const [label, setLabel] = React.useState('');
  const [backgroundColor, setBackgroundColor] = React.useState<string>('');
  const handleLabelChange = (e: any) => {
    setLabel(e.target.value)
  };
  const handleLabelBlur = () => {
    schema[2] = label;
    onChanged(schema)
  };
  const handleBackgroundColorChange = (e: any) => {
    console.log(e.target.value)
    setBackgroundColor(e.target.value)
  };
  const handleBackgroundColorBlur = () => {
    set(schema[1], 'style.backgroundColor', backgroundColor);
    onChanged(schema)
  };
  React.useEffect(() => {
    setLabel(schema[2]);
    setBackgroundColor(get(schema[1], 'style.backgroundColor', '#ffffff'));
  }, [schema]);
  return <div>
    <div>
      <input type="text" value={label} onChange={handleLabelChange} onBlur={handleLabelBlur}/>
      <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} onBlur={handleBackgroundColorBlur}/>
    </div>
  </div>
};
export default ButtonEditor;
