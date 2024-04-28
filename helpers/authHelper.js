import bcrypt from "bcrypt";

export const hashPass = async (password) => {
    try{
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);
        return hashedPass;
    } catch (error) {
        console.log(error);
    }
};

export const comparePass = async (password, hashPass) => {
    return bcrypt.compare(password, hashPass);
};