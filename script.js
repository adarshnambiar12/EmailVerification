const emailForm = document.getElementById("email-form");
const emailVerificationContainer = document.getElementById("email-verification");
const otpVerificationContainer = document.getElementById("otp-verification");
const otpInput = document.querySelectorAll(".otp");
const verifyOTP = document.getElementById("verify-otp");

//Send OTP on Submit Button Click
emailForm.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Send the OTP
    sendOTP();
});

//Do this for each OTP Input
otpInput.forEach((input, index) => {
    input.addEventListener("input", () => {
        const nextInput = otpInput[index + 1];
        if (input.value && nextInput) {
            nextInput.focus();
        }
        checkAllInputsFilled();
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
            const prevInput = otpInput[index - 1];
            if (prevInput && !input.value) {
                prevInput.value = "";
                prevInput.focus();
            }
        } else if (event.key === "ArrowLeft") {
            const prevInput = otpInput[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        } else if (event.key === "ArrowRight") {
            const nextInput = otpInput[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        } else if (!/[0-9]/.test(event.key)) {
            event.preventDefault(); // Prevent input of non-numeric characters
        }
    });
});

// Check if all inputs are filled whenever there's an input event
function checkAllInputsFilled() {
    const allFilled = Array.from(otpInput).every((input) => input.value);
    verifyOTP.disabled = !allFilled; // Disable the button if not all inputs are filled
    if (allFilled) {
        verifyOTP.click(); // Automatically click the button if all inputs are filled
    }
}

let sentOtp;
verifyOTP.addEventListener("click", () => {
    const userOtp = Array.from(otpInput)
        .map((input) => input.value)
        .join("");

    // Here, you can send the OTP value to your server for verification
    console.log("OTP Value:", userOtp);

    if (userOtp == sentOtp) {
        alert('Email Address Successfully Verified !');
        // Redirect to the thank you page upon successful verification
        window.location.href = "thankyou.html";
    } else {
        alert('Invalid OTP');
    }
});

// sendOTP function
function sendOTP() {
    console.log("Sending OTP...");
    const emailId = document.getElementById('email-input');

    let sentOtp = Math.floor(100000 + Math.random() * 900000);

    const emailBody = `
        <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
            <h1 style="color: #333; text-align: center; margin-bottom: 20px;">Email Verification</h1>
            <h2 style="color: #555; text-align: center; margin-bottom: 20px;">Please use the following One-Time Password (OTP) to verify your email:</h2>
            <div style="font-weight: 600; font-size: 24px; text-align: center; background-color: #fff; padding: 10px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                ${sentOtp}
            </div>
            <p style="color: #666; text-align: center; margin-top: 20px;">If you didn't request this verification, you can safely ignore this email.</p>
        </div>
    `;

    Email.send({
        SecureToken: "150064e4-9018-437f-8208-9959bad7f069",
        From: "adarshproject@outlook.com",
        To: emailId.value,
        Subject: "Email from OTP Verification Project",
        Body: emailBody,
    }).then(message => {
        if (message === 'OK') {
            // Hide the email verification container
            emailVerificationContainer.classList.add("fade-out");
            emailVerificationContainer.style.display = "none";

            // Show the OTP verification container after a delay
            setTimeout(function () {
                otpVerificationContainer.classList.add("show", "fade-in");
            }, 500);

            alert("OTP Successfully Sent to " + emailId.value);
        }
    });
}

//Convert all email input characters to Lowercase
function lowercase(input) {
    input.value = input.value.toLowerCase();
}