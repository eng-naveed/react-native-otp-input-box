Your current README is already well-structured and informative, but it can be improved for clarity, professionalism, and discoverability. Here’s an improved version that:

- Fixes markdown syntax (removes extra backticks).
- Adds badges for npm and license.
- Improves the introduction and usage instructions.
- Clarifies contribution guidelines.
- Adds a table of contents for easier navigation.

---

# 🔐 react-native-otp-input-box

[![npm version](https://img.shields.io/npm/v/react-native-otp-input-box.svg)](https://www.npmjs.com/package/react-native-otp-input-box)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

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

If you want this in markdown for direct copy-paste or would like help integrating more information (like advanced usage, FAQ, or troubleshooting), just let me know!
