import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Alexs cool app</Text>
      <Text>{count}</Text>
      <Button title="decrement" onPress={() => setCount(count - 1)}></Button>
    </View>
  );
}
 

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
