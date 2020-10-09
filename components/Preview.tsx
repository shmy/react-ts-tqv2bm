import React from 'react';
import AntdComponents from './AntdComponents';

const Preview: React.FC<{
  schemas: any[],
  onSelected: (schema: any, indexPath: string) => void
}> = ({schemas, onSelected}) => {
  const renderDeep = (schemas: any[], indexPath: string) => {
    return schemas.map((schema, index) => {
      if (typeof schema === 'string' || React.isValidElement(schema)) {
        return schema;
      }
      const currentIndex = `${indexPath}.${index}`;
      if (schema[2] && Array.isArray(schema[2])) {
        schema[2] = renderDeep(schema[2], currentIndex);
      }
      schema[1] = schema[1] ? schema[1] : {};
      schema[1].key = index;
      schema[1].onClick = () => {
        onSelected(schema, currentIndex.replace(/^\.?/, ''));
      };
      // @ts-ignore
      return React.createElement(AntdComponents[schema[0]], schema[1], schema[2]);
    });
  };
  return (
    <>{renderDeep(schemas, '')}</>
  );
};

export default Preview;
