# 🔐 react-native-otp-input-box

[![npm version](https://img.shields.io/npm/v/react-native-otp-input-box.svg)](https://www.npmjs.com/package/react-native-otp-input-box)
[![license](https://img.shields.io/npm/l/react-native-otp-input-box.svg)](https://github.com/eng-naveed/react-native-otp-input-box/blob/main/LICENSE)
[![issues](https://img.shields.io/github/issues/eng-naveed/react-native-otp-input-box.svg)](https://github.com/eng-naveed/react-native-otp-input-box/issues)
[![stars](https://img.shields.io/github/stars/eng-naveed/react-native-otp-input-box.svg)](https://github.com/eng-naveed/react-native-otp-input-box/stargazers)

A simple, customizable, and powerful **OTP (One-Time Password)** input component for React Native. Designed to provide a smooth OTP entry experience on both **iOS** and **Android**.

Whether you’re implementing mobile number verification, secure logins, or any OTP-based flow, this component gives you full control over the UI and behavior of OTP fields.

---

## 📚 Table of Contents

- [Installation](#installation)
- [Demo](#demo)
- [Features](#features)
- [Usage](#usage)
- [Props](#props)
- [Author](#author)
- [License](#license)
- [Contributing](#contributing)

---

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install react-native-otp-input-box
# or
yarn add react-native-otp-input-box
```

---

## 📸 Demo

<img src="./Demo/demo.gif" alt="Demo" width="300" height="580" />

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

const MyComponent = () => (
  <View>
    <OtpInputBox
      length={6}
      onChangeOtp={(otp) => console.log('Entered OTP:', otp)}
      autoFocus={true}
    />
  </View>
);
```

---

## ⚙️ Props

| Prop               | Type                                           | Default      | Description                                                     |
|--------------------|------------------------------------------------|--------------|-----------------------------------------------------------------|
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

## 👤 Author

Made with ❤️ by [Naveed Khan](https://github.com/eng-naveed)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/eng-naveed/react-native-otp-input-box/issues) or submit a pull request.

---

## 🏷 Tags

`react-native-otp` &nbsp; `otp-input` &nbsp; `otp` &nbsp; `sms-verification` &nbsp; `authentication` &nbsp; `react-native-component` &nbsp; `typescript`

<!-- 
TAGS: 
react-native-otp, react-native-otp-input-box, react-native otp, react native otp input, react native input box, otp input, sms verification, react native sms input, react native components, react native ui, mobile authentication, mobile otp, one time password input, otp input react native, otp textbox, 6 digit otp input, typescript react native component, react native typescript ui, custom otp input react native, lightweight otp input, react-native-component, react native auth component, mobile verification input, react-native-login, otp-field, otp entry react native, 4 digit otp react native, 6 digit otp react native, otp focus input, react-native-otp-view, react native secure input
-->

