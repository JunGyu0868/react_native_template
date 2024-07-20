import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '@/pages/home';
import DetailsPage from '@/pages/details/index';

const Stack = createNativeStackNavigator();

const RouterContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='details' component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterContainer;
