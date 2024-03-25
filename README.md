# Email Verification using SMTP

This repository contains code to demonstrate webpage of Email verification using SMTP (Simple Mail Transfer Protocol) using JavaScript.

## Introduction

Email verification is an essential part of many web applications to ensure the validity of user-provided email addresses. This repository provides a basic email verification process using SMTP. Upon form submission, it sends a One-Time Password (OTP) to the provided email address. The OTP input is divided into six separate input fields, allowing users to enter each digit individually. The script handles input events, automatically advancing to the next input field when entering a digit, go to the previous input when backspaced and checking if all fields are filled. Upon verification, the OTP is compared with the one sent to the user's email. Additionally, the email body contains the OTP for verification, which itself is a HTML snippet which maked the email body in a structured manner. If the OTP matches, an alert confirms successful verification, and the user is redirected to a "thank you" page. The sendOTP() function generates a random OTP and sends it via email using SMTP. Users need to replace placeholders like ENTER_YOUR_TOKEN and ENTER_FROM_EMAIL with their SMTP credentials.

## Getting Started

To use this code in your project, follow these steps:

## Create SMTP Credentials

Proceed to https://smtpjs.com or any other Service and follow the steps to create SMTP Credentials.

## Clone the Repository:

git clone https://github.com/adarshnambiar12/EmailVerification.git

## Navigate to the Directory:

cd EmailVerification

## Modify Credentials:

Open the script.js file and replace your Credentials at line 96 and 97. 

## Run the Application:

Open the index.html in your Web Browser and test the Webpage.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Contact
For any questions or inquiries, feel free to contact.