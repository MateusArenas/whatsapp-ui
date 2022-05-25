import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Status, Calls, Chats, Camera, Settings} from "../icons";

const Tab = createBottomTabNavigator();

// screens
import ConversationsScreen from "../screens/ConversationsScreen";
import StatusScreen from "../screens/StatusScreen";

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <StatusBar style="auto" />
            <Tab.Navigator
                initialRouteName="Conversations"
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#F6F6F6',
                        borderTopColor: '#A6A6AA'
                    },
                    headerStyle: {
                        backgroundColor: '#F6F6F6',
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: '#8D8D8F'
                }}
            >
                <Tab.Screen
                    name="Status"
                    component={StatusScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            if (focused)
                                return <Status fill={color}/>
                            return <Status fill={color}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="Calls"
                    component={ConversationsScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            if (focused)
                                return <Calls fill={color}/>
                            return <Calls fill={color}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="Camera"
                    component={ConversationsScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            if (focused)
                                return <Camera fill={color}/>
                            return <Camera fill={color}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="Conversations"
                    component={ConversationsScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            if (focused)
                                return <Chats fill={color}/>
                            return <Chats fill={color}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={ConversationsScreen}
                    options={{
                        tabBarIcon: ({focused, color}) => {
                            if (focused)
                                return <Settings fill={color}/>
                            return <Settings fill={color}/>
                        }
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}