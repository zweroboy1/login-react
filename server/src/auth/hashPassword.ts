import { pbkdf2 } from 'crypto';

export const hashPassword = (
  password: string,
  salt: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const iterations = 10000;
    const keyLength = 64;
    const digest = 'sha512';

    pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve(derivedKey.toString('hex'));
      }
    });
  });
};
