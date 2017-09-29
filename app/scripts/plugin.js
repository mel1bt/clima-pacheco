import mostrarCiudades from './app';

$.fn.pacheco = function(opciones){
  const {ciudades} = opciones;
  mostrarCiudades(ciudades, $('.row.marketing'));
  console.log(opciones);

  $('.row.marketing').on ('click', '.ciudad',    function() {
    const id =  $(this).find('p').data('id');
    const modal = $('.modal')

    const [ciudad] = ciudades.filter(ciudad => ciudad.id == id);
    modal.removeClass('inactivo');
    const {nombre, descripcion} = ciudad;
    modal.find('h4').text(nombre);
    modal.find('p').text(descripcion);

    console.log(`${id}`);
    }
  )
};
