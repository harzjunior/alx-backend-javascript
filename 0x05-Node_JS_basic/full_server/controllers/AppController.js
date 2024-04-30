/**
 * Contains the misc. route handler.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
