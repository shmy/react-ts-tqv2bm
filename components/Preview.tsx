import React from 'react';
import AntdComponents from './AntdComponents';
import DraggableComponent from './DraggableComponent';
import {cloneDeep} from 'lodash';
const Preview: React.FC<{
  schemas: any[],
  onSelected: (indexPath: string) => void
}> = ({schemas, onSelected}) => {
   const renderDeep = (schemas: any[], indexPath: string) => {
    return schemas.map((schema, index) => {
      if (typeof schema === 'string' || React.isValidElement(schema)) {
        return schema;
      }
      const currentIndex = `${indexPath}.${index}`;
      if (schema.children && Array.isArray(schema.children)) {
        schema.children = renderDeep(schema.children, currentIndex);
      }
      schema.props = schema.props ? schema.props : {};
      schema.props.onClick = () => {
        onSelected(currentIndex.replace(/^\.?/, ''));
      };
      return React.createElement(DraggableComponent, null, React.createElement(AntdComponents[schema.tag], schema.props, schema.children));
    });
  };
  return (
    <>{renderDeep(cloneDeep(schemas), '')}</>
  );
};

export default Preview;
