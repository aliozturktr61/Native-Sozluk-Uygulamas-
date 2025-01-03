import * as React from 'react'
import {Text, View} from 'react-native';
import { StatusBar,Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function FavoriteView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS ==='android' && StatusBar.setBackgroundColor('#ecf0f1')
  
    }, [])
  )
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Favoriler</Text>
      </View>
    );
  }

  export default FavoriteView