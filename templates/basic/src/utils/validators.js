// Email validation
export const isValidEmail = (email = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Password validation
export const isValidPassword = (password = '') => password.length >= 8;

// Phone number (basic)
export const isValidPhone = (phone = '') => /^[0-9]{10,15}$/.test(phone);

// Required field
export const isRequired = (value) => value !== null && value !== undefined && value !== '';

// Username
export const isValidUsername = (username = '') => /^[a-zA-Z0-9_]{3,20}$/.test(username);
