import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import ContentList from '../component/ContentList';

export default function ChoosePage({navigation}) {
  const [problem,setProblem] = useState();

  // 페이지가 렌더링되기 이전에 실행될 함수
  useEffect(() => {
    const readDB = async() => {      
      try {
        const data = await getDocs(collection(db,"past_questions"));
        setProblem(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        console.log(data.docs.map(doc => ({...doc.data()})))
        // setlicenseList(license.docs.map(doc => ({ ...doc.data(), id: doc.id})));
      } catch (error) {
        console.log(error.message);
      }
    }

    readDB();
  }, [])

  return (
    <View style={styles.container}>
      {problem?.map((row, idx) => {
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
  }
})