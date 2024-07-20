import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('details')}
      />
    </SafeAreaView>
  );
};

export default HomePage;
