// import { CourierClient } from "@trycourier/courier";
const CourierClient = require("@trycourier/courier");

const courier = CourierClient.CourierClient({
  authorizationToken: "pk_test_D07JAMMRRGMK5XNRC73CVY1E0A8S",
});

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @param {string} html
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text, html) => {
  const { requestId } = await courier.send({
    message: {
      to: {
        email: to,
      },
      content: {
        title: subject,
        body: html,
      },
      routing: {
        method: "single",
        channels: ["email"],
      },
    },
  });

  return;
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = "Reset password";
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = "Email Verification";
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

// export default { sendEmail, sendResetPasswordEmail, sendVerificationEmail };
module.exports = { sendEmail, sendResetPasswordEmail, sendVerificationEmail };
