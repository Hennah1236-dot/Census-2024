import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useFonts } from 'expo-font';


const CensusFormScreen: React.FC = () => {
  const [peopleCount, setPeopleCount] = useState<string>('');
  const [isAdditionalPeople, setIsAdditionalPeople] = useState<boolean>(false);


  

  return (
    <View style={styles.container}>
      {/* Census Header */}
      <Image source={require('@/assets/images/header.png')}style={styles.logo} />

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Total Person</Text>

        <Text style={styles.question}>
          1A. How many people (including visitors), slept here in your household on the night of Sunday 16th June 2024?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="State the number of people here"
          keyboardType="numeric"
          value={peopleCount}
          onChangeText={(text) => setPeopleCount(text)}
        />

        <Text style={styles.question}>
          1B. Are there any additional individuals, such as children, domestic servants, lodgers, or friends who stayed here on June 16th, 2024, that you haven't listed?
        </Text>
        <View style={styles.switchContainer}>
          <Text>Yes</Text>
          <Switch
            value={isAdditionalPeople}
            onValueChange={(value) => setIsAdditionalPeople(value)}
          />
          <Text>No</Text>
        </View>

        {isAdditionalPeople && <Text style={styles.additionalText}>If “Yes”, add them to the list.</Text>}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Continue pressed')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  yearText: {
    fontSize: 40,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 18,
    color: 'black',
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
  },
  questionContainer: {
    backgroundColor: '#EEE',
    padding: 20,
    borderRadius: 10,
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  additionalText: {
    color: '#FFA500',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
},
  logo: {
    width: 420,
    height: 220,
    top: -50,
    
  },
});

export default CensusFormScreen;
