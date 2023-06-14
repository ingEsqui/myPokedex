import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
    <Navigation/>
    </NavigationContainer>
  );
}