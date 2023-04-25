import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle submitting the form data to a server
  };

  return (
    <View style={styles.container}>
      <View style={styles.tittle1}>
      <Text style={styles.title}>Login</Text>
       
      <Text style= {{color:'black'}}>By Signing in you are agreeing </Text>
      <Text style={{color: '#036BB9',marginTop:10}}>Our Terms and Privacy Policy </Text>
      </View>

      <View style= {{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Text style= {{color:'#036BB9', borderBottomWidth:2, borderColor:"#036BB9"}}> Login</Text>
      <Text style= {{color:'#E5E5E5', marginLeft:20}} > Register</Text>
      </View>

      <View style={{width:'100%',padding:20}}>
      <View style={styles.inputContainer}>
        <Image source={require('./mail.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
         
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./lock.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
         <Image source={require('./Group 2.png')} style={styles.rightIcon} />
      </View>
       <View style= {{flexDirection: 'row',justifyContent: 'space-between'}}>
      <Image source={require('./Rectangle 7.png')} style={styles.rightIcon} />
      <Text > Remember Password</Text>
      <Text style= {{color:'blue'}} > Forget password</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
     
      <View style={styles.passwordIconContainer}>
        
      </View>
      <View style={styles.text}>
       <Text style={{color:"#747070"}}>or connect withhhhh</Text></View>
      </View>
      <View>
        <Image source={require('./Group.png')} style={styles.icon} />
        <Image source={require('./instagram 1.png')} style={styles.icon} />
        <Image source={require('./pinterest 1.png')} style={styles.icon} />
        <Image source={require('./linkedin 1.png')} style={styles.icon} /> 

       
        </View>
       <View style={styles.bottomIconContainer}>
        <Image source={require('./image 11.png')} style={styles.bottomIcon} />
      </View>
       <View style={styles.overlapIconContainer}>
          <Image source={require('./Subtract.png')} style={styles.overlapIcon} />
        </View>
        <View style={styles.overlapIconContainer2}>

          <Image source={require('./Frame 450.png')} style={styles.overlapIcon} />
          <Text style= {{color:'#FFFFFF'}}>Login with touch</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  text:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
   tittle1: {
     flex:0.5,
    alignItems: "center",
    justifyContent:'center',
    //backgroundColor:'red',
    marginBottom: 20,
  },
  textAbove: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30
    //marginBottom: 20,
   
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //borderWidth: 1,
    borderBottomWidth:1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    width: 50,
    height: 35,
    marginLeft:10,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    flex:0.1
    
  },

  
  
  overlapIconContainer: {
    position: 'absolute',
    bottom: -10,
  },
  overlapIconContainer2: {
    justifyContent: "space-between",
    alignItems: "center",
    height:"10%",
    position: 'absolute',
    bottom: 30,
  },
  
  
});

export default LoginScreen;