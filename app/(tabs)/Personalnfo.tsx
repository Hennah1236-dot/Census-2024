import React, { useState } from 'react';

import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from "@react-native-picker/picker";




const CensusForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [relationship, setRelationship] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [nonPngCitizenDetail, setNonPngCitizenDetail] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/header.png')} style={styles.logo} />
            <Text style={styles.sectionHeader}>Personal Information</Text>
    
      {/* Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      {/* Surname */}
      <TextInput
        style={styles.input}
        placeholder="Enter Surname"
        value={surname}
        onChangeText={setSurname}
      />

      {/* Relationship */}
      <Picker
        selectedValue={relationship}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) => setRelationship(itemValue)}>
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Parent" value="Parent" />
        <Picker.Item label="Spouse" value="Spouse" />
        <Picker.Item label="Child" value="Child" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      {/* Marital Status */}
      <Picker
        selectedValue={maritalStatus}
        style={styles.picker}
        onValueChange={(itemValue: React.SetStateAction<string>) => setMaritalStatus(itemValue)}>
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Single" value="Single" />
        <Picker.Item label="Married" value="Married" />
        <Picker.Item label="Widowed" value="Widowed" />
        <Picker.Item label="Divorced" value="Divorced" />
      </Picker>

      {/* Gender */}
      

      {/* Date of Birth */}
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YY"
        value={dob}
        onChangeText={setDob}
      />

      {/* Citizenship */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setCitizenship('PNG Citizen')}>
        <Text style={styles.checkbox}>{citizenship === 'PNG Citizen' ? <Text>☑</Text> : <Text>☐</Text>}</Text>
        <Text>PNG Citizen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setCitizenship('Non-PNG Citizen')}>
        <Text style={styles.checkbox}>{citizenship === 'Non-PNG Citizen' ? <Text>☑</Text> : <Text>☐</Text>}</Text>
        <Text>Non-PNG Citizen</Text>
      </TouchableOpacity>

      {citizenship === 'Non-PNG Citizen' && (
        <TextInput
          style={styles.input}
          placeholder="Specify"
          value={nonPngCitizenDetail}
          onChangeText={setNonPngCitizenDetail}
        />
      )}

      {/* Continue Button */}
      <Button title="Continue" onPress={() => { /* Handle form submission */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e0e0',
  
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  logo: {
    width: 420,
    height: 220,
    alignSelf: 'center',
    
  }
  
});

export default CensusForm;
