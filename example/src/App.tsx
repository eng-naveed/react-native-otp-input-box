// example/App.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import OtpInputBox from 'react-native-otp-input-box';

const App = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        //on keyboard the input box should be scrollable
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>OTP Input Styles</Text>
        <Text style={styles.otp}>OTP: {otp}</Text>

        {/* 1. Default style */}
        <Text style={styles.label}>Default</Text>
        <OtpInputBox
          length={4}
          style={styles.otpBox}
          onChangeOtp={handleOtpChange}
        />

        {/* Secure Text Entry */}
        <Text style={styles.label}>Secure Text Entry</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          secureTextEntry
          style={styles.otpBox}
          inputStyle={styles.secureInput}
        />

        {/* Custom renderInput (emoji border) */}
        <Text style={styles.label}>Custom Render (Emoji)</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          renderInput={({
            value,
            onChangeText,
            onFocus,
            onBlur,
            ref,
            isFocused,
          }) => (
            <View style={[styles.emojiBox, isFocused && styles.emojiBoxActive]}>
              <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
                style={styles.emojiInput}
                keyboardType="numeric"
                maxLength={1}
              />
              <Text style={styles.emoji}>{isFocused ? '👀' : '🔲'}</Text>
            </View>
          )}
          style={styles.otpBox}
        />

        {/* Rounded green border */}
        <Text style={styles.label}>Rounded Green</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          inputStyle={styles.roundedGreen}
          activeInputStyle={styles.activeGreen}
          style={styles.otpBox}
        />
        {/* Underline style */}
        <Text style={styles.label}>Underline</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          inputStyle={styles.underline}
          activeInputStyle={styles.activeUnderline}
          style={styles.otpBox}
        />
        {/* Dark mode */}
        <Text style={styles.label}>Dark Mode</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          inputStyle={styles.dark}
          activeInputStyle={styles.activeDark}
          style={styles.otpBox}
        />
        {/* Custom placeholder per input */}
        <Text style={styles.label}>Custom Placeholders</Text>
        <OtpInputBox
          length={4}
          onChangeOtp={handleOtpChange}
          placeholders={['1', '2', '3', '4']}
          inputStyle={styles.placeholderBox}
          activeInputStyle={styles.activePlaceholderBox}
          style={styles.otpBox}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  otpBox: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  roundedGreen: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  activeGreen: {
    borderColor: '#388E3C',
    backgroundColor: '#C8E6C9',
  },
  underline: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  activeUnderline: {
    borderColor: '#1976D2',
    backgroundColor: '#BBDEFB',
  },
  dark: {
    backgroundColor: '#222',
    color: '#fff',
    borderColor: '#333',
  },
  activeDark: {
    borderColor: '#fff',
    backgroundColor: '#444',
  },
  placeholderBox: {
    borderColor: '#FF9800',
    backgroundColor: '#FFF3E0',
    color: '#FF9800',
  },
  activePlaceholderBox: {
    borderColor: '#F57C00',
    backgroundColor: '#FFE0B2',
  },
  emojiBox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 8,
    margin: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  emojiBoxActive: {
    borderColor: '#673AB7',
    backgroundColor: '#ede7f6',
  },
  emojiInput: {
    width: 36,
    height: 36,
    textAlign: 'center',
    fontSize: 20,
    color: '#222',
    backgroundColor: 'transparent',
  },
  emoji: {
    position: 'absolute',
    top: -18,
    fontSize: 18,
  },
  otp: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  secureInput: {
    borderColor: '#333',
    backgroundColor: '#f8f9fa',
  },
});

export default App;
