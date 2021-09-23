// Variables
const filtroSelect = document.getElementById("filtroSelect");

const callApiFilter = async region => {
	try {
		const dir = await fetch(`https://restcountries.com/v2/continent/${region}`);
		const data = await dir.json();
		// console.log(data);
		viewData2(data);
	} catch (error) {
		console.log("Hubo un problema con la API, por favor intentarlo mas tarde.");
	}
};

const callApiAll = async () => {
	try {
		const dir = await fetch(`https://restcountries.com/v2/all`);
		const data = await dir.json();
		viewData2(data);
	} catch (error) {
		console.log("Hubo un problema con la API, por favor intentarlo mas tarde.");
	}
};
filtroSelect.addEventListener(`click`, () => {
	// console.log(filtroSelectIndex);
	let selected = filtroSelect.options[filtroSelect.selectedIndex].value.toLowerCase();
	console.log(selected);

	switch (selected) {
		case "africa":
			callApiFilter(selected);
			break;
		case "americas":
			callApiFilter(selected);
			break;
		case "asia":
			callApiFilter(selected);
			break;
		case "europe":
			callApiFilter(selected);
			break;
		case "oceania":
			callApiFilter(selected);
			break;

		case "all":
			callApiAll();
			break;
	}
});
