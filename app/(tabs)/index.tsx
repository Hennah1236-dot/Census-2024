import { Image, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {

  const navigation = useNavigation();

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("IndicativeInfo");
  };

  const handleSignIn = () => {
    (navigation as any).navigate("auth");
  };

  const handleSignUp = () => {
    (navigation as any).navigate("signup");
  };


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '', dark: '' }}
      headerImage={
        <Image
          source={require('@/assets/images/header.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
      <ThemedText style={styles.title}>Log In Here</ThemedText>
      </ThemedView>

      <ThemedView style={styles.backColor}>

        
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          placeholderTextColor="#888"
        />
        
        <ThemedText>Forget Password?</ThemedText>

        <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
          <ThemedText style={styles.buttonText}>Log In</ThemedText>
        </TouchableOpacity>
      
        
      </ThemedView>

      <ThemedText style={styles.text}>Don't have an account? Create Account</ThemedText>

      <ThemedView style={styles.stepContainer}>
      <TouchableOpacity style={styles.buttonSecondary} onPress={() => handleSignUp()}>
        <ThemedText style={styles.buttonText}>Create Account</ThemedText>

      </TouchableOpacity>
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backColor: {
    backgroundColor: '#00000040',
    padding: 40,
    borderRadius: 8,
  },
  text:{
    marginTop: 20,
  },
  reactLogo: {
    height: 168,
    width: 390,
    bottom: 0,
    left: 0,
    top: 60,
    position: 'relative',
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff", // White background for inputs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Elevation for Android shadow
  },
  button: {
    backgroundColor: "#FF9900", // Modern green color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: -15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#4CAF50", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
