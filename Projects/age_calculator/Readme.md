# Form Validation

This an **Age Calculator** that allows users to input their birth date and calculate their age in years, months, and days.

### Screenshot

![screenshot](./assets/images/desktop.jpeg)

### Links

[Live site](https://mahmoodhashem.github.io/JavaScript-Projects/Projects/age_calculator/index.html)

### Features

1. **User Input Fields** :

* The app has three input fields for the user to enter their birth date:
  * **Day** (e.g., 15)
  * **Month** (e.g., 10 for October)
  * **Year** (e.g., 1990)

1. **Form Submission** :

* A form is provided for users to submit their birth date information. The form submission triggers the calculation of the age.

1. **Real-time Validation** :

* The app validates the input fields to ensure they are filled out and contain valid values:
  * **Required Fields** : Users must fill in all fields.
  * **Range Checks** : The app ensures that the day, month, and year are within acceptable ranges (e.g., valid days for the month, valid month numbers).

1. **Error Handling** :

* If the input is invalid, the app displays custom error messages adjacent to the relevant input fields, guiding users to correct their entries.

1. **Age Calculation** :

* Upon successful submission, the app calculates the user's age based on the current date and the provided birth date. It computes:
  * Total **Years**
  * Total **Months**
  * Remaining **Days**

1. **Output Display** :

* The calculated age is displayed on the page, clearly showing the years, months, and days.
