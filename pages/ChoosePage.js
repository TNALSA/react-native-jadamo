import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import { useContext, useEffect, useState } from 'react';

import ContentList from '../component/ContentList';
import AppContext from '../Appcontext';

export default function ChoosePage({navigation}) {
  const myContext = useContext(AppContext);

  // 페이지가 렌더링되기 이전에 실행될 함수
  useEffect(() => {
    myContext.readDocs();
  }, [])

  return (
    <View style={styles.container}>
      {myContext.problem?.map((row, idx) => {
        return(
          <>
            <ContentList index={idx} name={row.id} navigation={navigation}/>
          </>
        );
      })}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9', // 배경색 추가
  },
})