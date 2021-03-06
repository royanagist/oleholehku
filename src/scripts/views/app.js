import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import LogoutInitiator from '../utils/logout-initiator';

class App {
  constructor({
    button, drawer, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._logout = logout;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
    LogoutInitiator.init({
      logout: this._logout,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const current = document.querySelector('.active');
    current.classList.remove('active');

    switch (url) {
      case '/home':
        document.getElementById('home').className += ' active';
        break;
      case '/about':
        document.getElementById('about').className += ' active';
        break;
      case '/explore':
        document.getElementById('explore').className += ' active';
        break;
      case '/explore/:id':
        document.getElementById('explore').className += ' active';
        break;
      default:
        document.getElementById('home').className += ' active';
        break;
    }
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
