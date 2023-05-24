# Form Validation
This project uses HTML, CSS and JavaScript to validate user input on a form.

![screencapture-lalitkumar4-github-io-client-side-form-validation-2023-04-23-21_13_04](https://user-images.githubusercontent.com/64465383/233849846-744eb906-7674-469f-ba93-c5ea007cf115.png)

## Features

1. Form Submission Prevention: The code prevents the form from being submitted until all the fields are validated successfully.
2. Input Field Access: The code accesses various form elements using their respective IDs (`username`, `email`, `password`, `password2`) using `document.getElementById()`.
3. Event Listeners: Event listeners are added to the form, password field, and eye icon to handle form submission, password visibility, and eye icon toggling.
4. Input Validation: The `checkInputes()` function validates the input fields for the following conditions:
- Feature Username Validation: Checks if the username is required and meets certain validation criteria defined in the isUsername() function.
- Feature Email Validation: Checks if the email is required and matches the pattern defined in the isEmail() function.
- Feature Password Validation: Checks if the password is required and meets specific complexity requirements defined in the isPassword() function.
- Feature Confirm Password Validation: Checks if the confirm password matches the password field.
5. Visual Feedback: The `setErrorFor()` and `setSuccessFor()` functions are used to add visual feedback to the input fields by adding CSS classes (`error` and `success`) to the parent elements (`form-control`).
6. Password Visibility: The eye icon's visibility is controlled based on whether the password field has a value or is empty. The `iconVisibleHide()` function handles the visibility logic, and the `toggleVisibility()` function toggles the password field visibility and updates the eye icon's class.

## Credits

This project was inspired by Florin Pop YouTube [tutorial](https://www.youtube.com/watch?v=rsd4FNGTRBw&t=83s&ab_channel=FlorinPop). Thanks to Florin for their tutorial that served as a valuable reference.
