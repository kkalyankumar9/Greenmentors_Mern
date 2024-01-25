// ForgotResetPasswordPage.js

import React, { useState } from 'react';

const ForgotResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:8000/email/forgot_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Email sent successfully. Check your email for the reset link.');
      } else {
        setMessage('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Internal server error:', error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:8000/email/reset_password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.ok) {
        setMessage('Password reset successfully.');
      } else {
        setMessage('Error resetting password. Please try again.');
      }
    } catch (error) {
      console.error('Internal server error:', error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleForgotPassword(); }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Request Password Reset</button>
      </form>

      <h2>Reset Password</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotResetPasswordPage;
