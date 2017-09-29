import mostrarCiudades from './mostrar-ciudades';
import resaltarCiudad from './resaltar-ciudad';

$.fn.pacheco = function(opciones){
  const {ciudades} = opciones;
mostrarCiudades(ciudades, $(this));
  resaltarCiudad($(this), ciudades);
};
