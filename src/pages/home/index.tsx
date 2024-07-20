import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HomeTextWrapper>Home</HomeTextWrapper>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('details')}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const HomeTextWrapper = styled.Text`
  font-size: 18px;
  color: blue;
`;
