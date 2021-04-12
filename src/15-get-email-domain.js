/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 *вернуть все.после собаки
 */
function getEmailDomain(email) {
  const domen = email.slice(email.lastIndexOf('@') + 1);

  return domen;
}

module.exports = getEmailDomain;
