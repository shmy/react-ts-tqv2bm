import React from 'react';
import { useDrag } from 'react-dnd'

function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { type: 'test' }
  })
  return <div ref={drag}>{props.children}</div>
}
export default DraggableComponent;