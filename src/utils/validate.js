const checkValidData = (email, password, fullName) => {
	// Full name validation
	if (fullName !== null && !fullName.trim())
		return "Full name cannot be empty.";

	if (fullName !== null) {
		const isFullNameValid = /^[a-zA-Z\s]+$/.test(fullName);
		if (!isFullNameValid)
			return "Full name is not valid. Only alphabets and spaces are allowed.";
	}

	// Email validation
	if (!email) return "Email cannot be empty.";

	const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
		email
	);

	if (!isEmailValid) return "Email is not valid.";

	// Password validation
	if (!password) return "Password cannot be empty.";

	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
		password
	);

	if (!isPasswordValid)
		return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";

	return null; // No errors
};

export { checkValidData };
