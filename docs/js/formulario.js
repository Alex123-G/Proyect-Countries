const form = document.getElementById(`form`);
const name_pais = document.getElementById(`name_pais`);

const formClient = async data => {
	// keyup => Significa cuando se use el teclado es decri se esta escribiendo
	form.addEventListener(`keyup`, e => {
		// preventDefault() => Hace que la accion no termine
		e.preventDefault();
		// creamos una variable la cual tendra el valor del valor del input nombre pais yese contenido se transformara en minuscula.
		const letterClient = name_pais.value.toLowerCase();
		// filter recorre un arreglo y crear otro con los datos que cumplan la condicion de filter.
		const arrayFilter = data.filter(item => {
			const letterApi = item.name.toLowerCase();
			if (letterApi.indexOf(letterClient) !== -1) {
				// console.log(item);
				return item;
			}
		});
		// viewData(arrayFilter);
		viewData2(arrayFilter);
	});
};
