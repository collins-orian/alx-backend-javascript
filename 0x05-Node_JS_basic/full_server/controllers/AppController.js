/**
 * Contains the miscellaneous route handlers.
 * @author Oshioregbeme Collins Inaboya <https://github.com/collins-orian>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
