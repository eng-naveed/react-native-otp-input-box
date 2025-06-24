````markdown
# 🔐 react-native-otp-input-box

A simple, customizable, and powerful **OTP (One-Time Password)** input component for React Native. Designed to provide a smooth and seamless OTP entry experience on both **iOS** and **Android** devices.

Whether you’re implementing mobile number verification, secure logins, or any OTP-based flows, this component gives you full control over the UI and behavior of OTP fields.

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install react-native-otp-input-box
# or
yarn add react-native-otp-input-box
```
````

## 📸 Demo

![Demo](./assets/demo.gif)

---

## ✨ Features

- 🔢 Dynamic OTP input fields (any length)
- ⚡ Auto-focus & intelligent navigation
- 🎨 Custom styling for inputs and container
- 🧩 Plug-and-play usage with advanced customization
- 📱 Works perfectly on both Android and iOS
- 🛠️ Support for placeholder, render customization, and focus callbacks

---

## 🚀 Usage

A basic example of how to use the component:

```jsx
import React from 'react';
import { View } from 'react-native';
import OtpInputBox from 'react-native-otp-input-box';

const MyComponent = () => {
  return (
    <View>
      <OtpInputBox
        length={6}
        onChangeOtp={(otp) => console.log('Entered OTP:', otp)}
        autoFocus={true}
      />
    </View>
  );
};
```

---

## ⚙️ Props

| Prop               | Type                                           | Default      | Description                                                     |
| ------------------ | ---------------------------------------------- | ------------ | --------------------------------------------------------------- |
| `length`           | `number`                                       | **Required** | Number of OTP input boxes to display                            |
| `onChangeOtp`      | `(otp: string) => void`                        | **Required** | Callback that receives the full OTP string as the user types    |
| `autoFocus`        | `boolean`                                      | `false`      | Automatically focuses the first input when the component mounts |
| `keyboardType`     | `'default'`, `'numeric'`, `'number-pad'`, etc. | `'numeric'`  | Keyboard type for each input box                                |
| `placeholder`      | `string`                                       | `undefined`  | Placeholder text for all input boxes                            |
| `placeholders`     | `string[]`                                     | `undefined`  | Individual placeholders for each input field                    |
| `style`            | `ViewStyle`                                    | `undefined`  | Custom style for the input container                            |
| `inputStyle`       | `StyleProp<ViewStyle>`                         | `undefined`  | Style for each individual input field                           |
| `activeInputStyle` | `StyleProp<ViewStyle>`                         | `undefined`  | Additional style for the currently focused input                |
| `renderInput`      | `({ ...props }) => React.ReactNode`            | `undefined`  | Custom render function to fully override the input UI           |
| `inputProps`       | `TextInputProps`                               | `{}`         | Additional props to pass to each `TextInput`                    |
| `onInputFocus`     | `(index: number) => void`                      | `undefined`  | Callback when an input field gains focus                        |
| `onInputBlur`      | `(index: number) => void`                      | `undefined`  | Callback when an input field loses focus                        |

---

## 🧑‍💻 Author

Made with ❤️ by [Naveed Khan](https://github.com/eng-naveed)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💬 Feedback / Contribute

Feel free to open issues or pull requests. Contributions are welcome!

```

