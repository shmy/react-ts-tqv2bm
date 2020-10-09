import React from 'react';
import Preview from './components/Preview';
import AttrEditor from './components/AttrEditor';
import {set} from 'lodash';

const App: React.FC = () => {
  const [schemas, setSchemas] = React.useState<any[]>([]);
  const [selectedSchema, setSelectedSchema] = React.useState<any>(null);
  const [selectedIndexPath, setSelectedIndexPath] = React.useState<string>('');
  const handleAddComponent = (schema: any) => {
    setSchemas([...schemas, schema]);
  };
  const handleSelected = (schema: any, indexPath: string) => {
    setSelectedSchema(schema);
    setSelectedIndexPath(indexPath);
  };
  const handleChanged = (schema: any) => {
    const newSchema = [...schemas];
    setSchemas(set(newSchema, selectedIndexPath, schema));
  };
  return (
    <div className="preview-container">
      <div className="preview-toolbar">
        {JSON.stringify(schemas)}
        <button onClick={() => handleAddComponent(['button', {}, '按钮'])}>按钮</button>
        <button onClick={() => handleAddComponent(['select', null])}>选择框</button>
        <button onClick={() => handleAddComponent(['span', null, '文本'])}>文本</button>
        <button onClick={() => handleAddComponent(['div'])}>容器</button>
      </div>
      <div className="preview-area">
        <Preview onSelected={handleSelected} schemas={schemas}/>
      </div>
      <div className="preview-attr">
        <AttrEditor schema={selectedSchema} onChanged={handleChanged}/>
      </div>
    </div>
  );
}

export default App;
