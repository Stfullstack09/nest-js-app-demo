import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
export async function generatePassword(password: string) {
    return bcrypt.hash(password, saltOrRounds);
}
