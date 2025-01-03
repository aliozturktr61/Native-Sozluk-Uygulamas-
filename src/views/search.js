import * as React from 'react';
import {StatusBar,Platform} from 'react-native';

import Box from '../components/box';
import SuggestionCard from '../components/suggestion-card';
import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';
import SearchHistoryList from '../components/search-history-list';
import HomeSearch from '../components/home-search';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'aciklama 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'aciklama 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'aciklama 3',
  },
];

function SearchView({navigation}) {
  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [homeData, setHomeData] = React.useState(null);
console.log(homeData)
  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    
    const data = await response.json();
    setHomeData(data);
  };
  React.useEffect(() => {
    getHomeData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS ==='android' && StatusBar.setBackgroundColor('#ecf0f1')
  
    }, [isSearchFocus])
  )
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() => navigation.navigate('Detail',{
                  keyword: homeData?.atasoz[0].madde,
                })}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
