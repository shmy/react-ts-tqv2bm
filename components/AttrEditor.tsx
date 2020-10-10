import React from 'react';
import ButtonEditor from './editors/ButtonEditor';
import SelectEditor from './editors/SelectEditor';

const AttrEditor: React.FC<{
  schema?: any,
  onChanged: (schema: any) => void,
}> = ({schema, onChanged}) => {
  if (!schema) {
    return null;
  }
  let content = null;
  switch (schema.tag) {
    case 'button':
      content = <ButtonEditor onChanged={onChanged} schema={schema}/>
    break;
    case 'select':
      content = <SelectEditor onChanged={onChanged} schema={schema}/>
    break;
    default:
    break;
  }
  return (
    <div style={{height: '100%', width: '100%'}}>
      {content}
    </div>
  );
};

export default AttrEditor;
