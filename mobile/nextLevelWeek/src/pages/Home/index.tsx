import React, { useEffect, useState, ChangeEvent } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api'

interface City {
  name: string;
}

interface State {
  id: number;
  name: string;
  uf: string;
}

interface Select {
  label: string,
  value: string;
}

const Home = () => {

    const [ states, setStates ] = useState<Select[]>([]);
    const [ selectedState, setSelectedState ] = useState('')

    const [ cities, setCities ] = useState<Select[]>([]);
    const [ selectedCity, setSelectedCity ] = useState('')

    const navigation = useNavigation();

    let arr_conv: React.SetStateAction<Select[]> = [];

    function handleNavigateToPoint() {
        navigation.navigate( 'Points' );
    }

    useEffect( () => {

      api.get( 'states' ).then( res => {

        const lsStates = res.data;
        let i =0;

        lsStates.map( ( state: State ) => {
          arr_conv[i] = { label: state.name, value: state.uf };

         i++;
        } )

        setStates( arr_conv );
        
      } );
    }, []);

    useEffect( () => {
      
      api.get( `cities/${selectedState}` ).then( res => {

        const lsCities = res.data;
        let i = 0;

        lsCities.map( ( state: State ) => {
          arr_conv[i] = { label: state.name, value: state.uf };

         i++;
        } )

        setCities( arr_conv );
      } )
    }, [selectedState]);

    return (
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={ Platform.OS === 'ios' ? 'padding' : undefined } 
      >
            <ImageBackground 
                style={styles.container} 
                source={require('../../assets/home-background.png')}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main} >
                    <Image source={require('../../assets/logo.png')} />
                    <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                    <Text style={styles.description}> Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente </Text>
                </View>

                <View style={styles.footer}>
                    <RNPickerSelect 
                      placeholder={{
                          label: 'Seleciona um estado',
                          value: null,
                      }}
                      onValueChange={ value => setSelectedState( value )  }
                      items = { states }
                    />

                    <View style={{ marginBottom: 20 }} />

                    <RNPickerSelect 
                      placeholder={{
                          label: 'Seleciona uma cidade',
                          value: null,
                      }}
                      onValueChange={ value => setSelectedCity( value )  }
                      items = { cities }
                    />

                   

                    <RectButton style={styles.button}  onPress={handleNavigateToPoint}>
                        <View style={styles.buttonIcon} >
                            <Text>
                                <Icon name="arrow-right" color="#fff" size={24}/>
                            </Text>
                        </View>

                        <Text style={styles.buttonText} >
                            Entrar
                        </Text>
                    </RectButton>

                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,    
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 20,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },

  });

export default Home;