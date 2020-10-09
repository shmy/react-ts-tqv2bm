import React from 'react';
import ButtonEditor from './editors/ButtonEditor';

const AttrEditor: React.FC<{
  schema?: any,
  onChanged: (schema: any) => void,
}> = ({schema, onChanged}) => {
  if (!schema) {
    return null;
  }
  let content = null;
  switch (schema[0]) {
    case 'button':
      content = <ButtonEditor onChanged={onChanged} schema={schema}/>
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
