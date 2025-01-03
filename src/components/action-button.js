import React from 'react';
import Button from './button';
import Text from './text';

function ActionButton({children, ...props}) {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 20,

        elevation: 15,
      }}
      minWidth="actionButton"
      height="actionButton"
      borderRadius={10}
      bg="white"
      px={8}
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text color="textLight" fontWeight="bold" ml={8} mr={8} {...props}>
      {children}
    </Text>
  );
}

export default ActionButton;
