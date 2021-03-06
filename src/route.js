import { mostrarMenu} from "./templates/templateMenu.js";
import { dataMenu } from "./controller/controller.js";
import { mostrarPedido } from "./templates/templatePedido.js";

export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
}

const changeRouter = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return showTemplate(hash); //el que carga por defecto, primera vez :3
    } else if (hash === '#/menu' || hash=== '#/inicio' || hash === '#/cocina') {
      return showTemplate(hash);
    } else {
      return showTemplate('#/404');
    }
    // return showTemplate(hash);
  }
  
  const showTemplate = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const contenido = document.getElementById('contenido')
    contenido.innerHTML = '';
    switch (router) {
      case 'menu':
        dataMenu((arrDatos) => {
          contenido.appendChild(mostrarMenu(arrDatos)); 
          contenido.appendChild(mostrarPedido());
        })
        break;
      // case 'inicio':
      //   contenido.appendChild(mostrarDesayuno());
      //   break;
      // case 'cocina':
      //   contenido.appendChild(mostrarAlmuerzoCena()); 
      //   break;

      default:
      dataMenu((arrDatos) => {
        contenido.appendChild(mostrarMenu(arrDatos)); 
        contenido.appendChild(mostrarPedido());
      })
         
    }
  };
  
  export const initRouterBurgerQueen = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
    if ('onhashchange' in window) {
       window.onhashchange = () => changeRouter(window.location.hash)
    };
  }