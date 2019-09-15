import React, { useEffect } from 'react';
// shouldComponentUpdate
/**
 * This will now cause the effect to always run again
 *  when the name changes.
 * You should always set the second argument because otherwise
 * you can run into render loops.
 * @param {name} props
 */
const MyComponent = props => {
  useEffect(() => {
    document.title = `Page of ${props.name}`;
  }, [props.name]);

  return <div>My name is {props.name} </div>;
};

export default MyComponent
