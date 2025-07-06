// Validation patterns
export const patterns = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  name: /^[a-zA-Z\s]{2,50}$/,
};

// Validation messages
export const messages = {
  required: "This field is required",
  email: "Please enter a valid email address",
  phone: "Please enter a valid phone number",
  name: "Name must be 2-50 characters long",
  message: "Message must be at least 10 characters long",
  minLength: (min) => `Must be at least ${min} characters long`,
  maxLength: (max) => `Must be no more than ${max} characters long`,
};

// Validation functions
export const validateEmail = (email) => {
  if (!email) return messages.required;
  if (!patterns.email.test(email)) return messages.email;
  return null;
};

export const validatePhone = (phone) => {
  if (!phone) return null; // Phone is optional
  if (!patterns.phone.test(phone)) return messages.phone;
  return null;
};

export const validateName = (name) => {
  if (!name) return messages.required;
  if (!patterns.name.test(name)) return messages.name;
  return null;
};

export const validateMessage = (message) => {
  if (!message) return messages.required;
  if (message.length < 10) return messages.message;
  return null;
};

export const validateService = (service) => {
  const validServices = [
    "residential",
    "commercial",
    "renovation",
    "maintenance",
    "finishing",
    "management",
  ];

  if (!service) return null; // Service is optional
  if (!validServices.includes(service)) return "Please select a valid service";
  return null;
};

// Form validation
export const validateContactForm = (data) => {
  const errors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateMessage(data.message);
  if (messageError) errors.message = messageError;

  const serviceError = validateService(data.service);
  if (serviceError) errors.service = serviceError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
