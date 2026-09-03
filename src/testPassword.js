const bcrypt = require("bcrypt");

const password = "password123";

const hashPassword = async () => {
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Original:", password);
    console.log("Hashed:", hashedPassword);
};

hashPassword();