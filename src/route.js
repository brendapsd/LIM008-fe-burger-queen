import { pageOrder} from "./templates/templateMenu.js";
import { pageOrder1 } from "./templates/templatePedido.js";
import { mostrarDesayuno } from "./templates/templateDesayuno.js";
import { mostrarAlmuerzoCena } from "./templates/templateAlmuerzoCena.js";

export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
}

const changeRouter = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return showTemplate(hash); //el que carga por defecto, primera vez :3
    } else if (hash === '#/home' || hash=== '#/desayuno' || hash === '#/almuerzocena') {
      return showTemplate(hash);
    } else {
      return showTemplate('#/404');
    }
    // return showTemplate(hash);
  }
  
  const showTemplate = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const contenido = document.getElementById("contenido")
    contenido.innerHTML = '';
    switch (router) {
      case 'home':
        contenido.appendChild(pageOrder());
        contenido.appendChild(pageOrder1());
        break;
      case 'desayuno':
        contenido.appendChild(mostrarDesayuno());
        break;
      case 'almuerzocena':
        contenido.appendChild(mostrarAlmuerzoCena()); 
        break;
      default:
        contenido.appendChild(pageOrder());
        contenido.appendChild(pageOrder1());
    }
  };
  
  export const initRouterBurgerQueen = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
    if ('onhashchange' in window) {
       window.onhashchange = () => changeRouter(window.location.hash)
    };
  }