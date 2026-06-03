// Complete frontend code
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
const App = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  // Render patient registration form
  return (
    <View>
      <Text>Patient Registration</Text>
      <TextInput placeholder='Name' />
      <TextInput placeholder='Email' />
      <Button title='Register' />
    </View>
  );
};
export default App;