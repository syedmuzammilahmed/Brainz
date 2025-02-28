import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "./Splash";
import Login from "./Login"
import Register from "./Register";
import Gender from "./Gender";
import Goal from "./Goal";
import Height from "./Height";
import Weight from  "./Weigth";
import GoalWeight from "./GoalWeight";
import TrainingLevelSelection from './TrainingLevel';
import Activity from "./Activity";
import Fitness from "./Fitness";
import HeartbeatMeasure from './HeartbeatMeasure';
import SettingsScreen from './Settings';
import BottomTabs from './BottomTabs'

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Splash"}>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Gender" component={Gender} options={{ headerShown: false }} />
                <Stack.Screen name="Goal" component={Goal} options={{ headerShown: false }} />
                <Stack.Screen name="Height" component={Height} options={{ headerShown: false }} />
                <Stack.Screen name="Weight" component={Weight} options={{ headerShown: false }} />
                <Stack.Screen name="GoalWeight" component={GoalWeight} options={{ headerShown: false }} />
                <Stack.Screen name="TrainingLevelSelection" component={TrainingLevelSelection} options={{ headerShown: false }} />
                <Stack.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
                <Stack.Screen name="Fitness" component={Fitness} options={{ headerShown: false }} />
                <Stack.Screen name="HeartbeatMeasure" component={HeartbeatMeasure} options={{ headerShown: false }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    </NavigationIndependentTree>
    );
}
