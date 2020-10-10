import React from 'react';
import Preview from './components/Preview';
import AttrEditor from './components/AttrEditor';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {set, get, uniqueId} from 'lodash';
const App: React.FC = () => {
  const [schemas, setSchemas] = React.useState<any[]>([]);
  const [selectedSchema, setSelectedSchema] = React.useState<any>(null);
  const [selectedIndexPath, setSelectedIndexPath] = React.useState<string>('');
  const handleAddComponent = (schema: any) => {
    setSchemas([...schemas, schema]);
  };
  const handleSelected = (indexPath: string) => {
    setSelectedSchema(get(schemas, indexPath));
    setSelectedIndexPath(indexPath);
  };
  const handleChanged = (schema: any) => {
    const newSchema = [...schemas];
    setSchemas(set(newSchema, selectedIndexPath, schema));
  };
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="preview-container">
      <div className="preview-toolbar">
     
       <div>
          <h3>容器组件</h3>
         <button onClick={() => handleAddComponent({tag: 'button', props: {key: uniqueId()}, children: '按钮'})}>按钮</button>
          <button onClick={() => handleAddComponent({tag: 'select', props: {key: uniqueId()}})}>选择框</button>
          <button onClick={() => handleAddComponent({tag: 'span', props: {key: uniqueId()}, children: '文本'})}>文本</button>
       </div>
       <div>
          <h3>表单组件</h3>
         <button onClick={() => handleAddComponent({tag: 'button', props: {key: uniqueId()}, children: '按钮'})}>按钮</button>
          <button onClick={() => handleAddComponent({tag: 'select', props: {key: uniqueId()}})}>选择框</button>
          <button onClick={() => handleAddComponent({tag: 'span', props: {key: uniqueId()}, children: '文本'})}>文本</button>
       </div>
      </div>
      <div className="preview-area">
        <Preview onSelected={handleSelected} schemas={schemas}/>
      </div>
      <div className="preview-attr">
        <AttrEditor schema={selectedSchema} onChanged={handleChanged}/>
      </div>
    </div>
    </DndProvider>
  );
}

export default App;
