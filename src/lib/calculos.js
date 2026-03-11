/**
 * Calcula el costo total de un producto basado en sus materiales
 * @param {Array} receta - Arreglo de materiales con cantidades
 */

export function calcularCostoTotal(receta){
  if(!receta) return 0;
  return receta.reduce((acc, item) => {
    const unitario = item.materiales.costo_unitario || 0;
    const flete = item.materiales.costo_flete || 0;
    const cantidad = item.cantidad_necesaria || 0;
    return acc + (unitario + flete ) * cantidad;
  }, 0);
}

export function estimarFechaEntrega(diasConfeccion){
  const hoy = new Date();
  hoy.setDate(hoy.getDate() + diasConfeccion);
  return hoy.toLocaleDateString('es-AR');
}

export function calcularConfeccion(materialesUsados) {
  let costoTotal = 0;
  let tiempoTotalMinutos = 0;

  materialesUsados.forEach(item => {
    costoTotal += item.cantidad_necesaria * item.materiales.costo_unitario;
    tiempoTotalMinutos += item.materiales.tiempo_procesamiento_minutos;
  });

  return { 
    costo: costoTotal, 
    tiempo: tiempoTotalMinutos 
  };
}

