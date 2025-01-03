import * as React from 'react'
import {Platform, StatusBar, Text, View} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS ==='android' && StatusBar.setBackgroundColor('#ecf0f1')
  
    }, [])
  )
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Arama Geçmişi</Text>
      </View>
    );
  }

  export default HistoryView