import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import type { TextInputProps, StyleProp, ViewStyle } from 'react-native';

interface OtpInputBoxProps extends TextInputProps {
  length: number;
  autoFocus?: boolean;
  onChangeOtp: (otp: string) => void;
  style?: ViewStyle;
  inputStyle?: StyleProp<ViewStyle>;
  activeInputStyle?: StyleProp<ViewStyle>;
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: string;
  placeholders?: string[];
  renderInput?: (props: {
    value: string;
    index: number;
    isFocused: boolean;
    onChangeText: (value: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    ref: (ref: TextInput | null) => void;
    style: StyleProp<ViewStyle>;
    inputProps: TextInputProps;
  }) => React.ReactNode;
  inputProps?: TextInputProps;
  onInputFocus?: (index: number) => void;
  onInputBlur?: (index: number) => void;
}

const OtpInputBox: React.FC<OtpInputBoxProps> = ({
  length,
  style,
  onChangeOtp,
  inputStyle,
  activeInputStyle,
  keyboardType = 'numeric',
  placeholder,
  placeholders,
  renderInput,
  inputProps = {},
  onInputFocus,
  onInputBlur,
  ...props
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    if (value === '') {
      updatedOtp[index] = '';
      setOtp(updatedOtp);
      onChangeOtp(updatedOtp.join(''));
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      return;
    }
    if (/^\d$/.test(value)) {
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      onChangeOtp(updatedOtp.join(''));
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
    if (onInputFocus) onInputFocus(index);
  };

  const handleBlur = (index: number) => {
    setFocusedIndex((prev) => (prev === index ? null : prev));
    if (onInputBlur) onInputBlur(index);
  };

  return (
    <View style={[styles.container, style]}>
      {otp.map((digit, index) => {
        const isFocused = focusedIndex === index;
        const mergedStyle = [
          styles.input,
          inputStyle,
          isFocused && activeInputStyle,
        ];
        const inputPlaceholder = placeholders?.[index] ?? placeholder;

        const refCallback = (ref: TextInput | null) => {
          if (ref) inputRefs.current[index] = ref;
        };
        const inputNodeProps = {
          value: digit,
          ref: refCallback,
          style: mergedStyle,
          keyboardType,
          maxLength: 1,
          selectTextOnFocus: true,
          autoFocus: props?.autoFocus && index === 0,
          onChangeText: (value: string) => handleChange(value, index),
          onFocus: () => handleFocus(index),
          onBlur: () => handleBlur(index),
          placeholder: inputPlaceholder,
          ...inputProps,
          ...props,
        };
        if (renderInput) {
          return renderInput({
            value: digit,
            index,
            isFocused,
            onChangeText: (value: string) => handleChange(value, index),
            onFocus: () => handleFocus(index),
            onBlur: () => handleBlur(index),
            ref: refCallback,
            style: mergedStyle,
            inputProps: { ...inputProps, ...props },
          });
        }
        return <TextInput key={index} {...inputNodeProps} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default OtpInputBox;
