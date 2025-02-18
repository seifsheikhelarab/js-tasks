# Vehicle and Bicycle Classes

This project demonstrates the use of ES6 classes in JavaScript by implementing a basic `Vehicle` class and a `Bicycle` subclass.

## Description

- **Vehicle Class**
  - **Properties:**
    - `color` (default: `"blue"`)
    - `numberOfWheels` (default: `4`)
    - `horn` (default: `"beep beep"`)
  - **Method:**
    - `honkHorn()` — Logs the value of the horn to the console.

- **Bicycle Subclass**
  - Inherits from `Vehicle`.
  - **Overrides in the constructor:**
    - `numberOfWheels` default changes from `4` to `2`.
    - `horn` default changes from `"beep beep"` to `"honk honk"`.


## Usage

- To test the classes, run the `main.js` file using Node.js:
  ```bash
  node main.js
  ```

This will create instances of `Vehicle` and `Bicycle` and demonstrate the behavior of the `honkHorn()` method.
