
/**
 * Validate an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean}
 */

export function validate(email: string): boolean {

  // eslint-disable-next-line no-useless-escape
  const emailVerificationRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  
  if (!email) return false;

  if (email.length > 256) return false;

  if (!emailVerificationRegex.test(email)) return false;

  // Further checking of some things regex can't handle
  const [account, address] = email.split('@');
  if (account.length > 64) return false;

  const domainParts = address.split('.');
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;

  return true;

}