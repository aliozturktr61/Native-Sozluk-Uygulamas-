import React from 'react';
import Button from './button';
import {Search, Bookmark, RotateCcw} from './icons';
import Box from './box';
import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <Box
      pb={20}
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 20,

        elevation: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius={50}>
            <Button size={56} bg="red" borderRadius={50} onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}>
            {label === 'History' && (
              <RotateCcw color={theme.colors.textLight} />
            )}
            {label === 'Favorite' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius={50}
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
