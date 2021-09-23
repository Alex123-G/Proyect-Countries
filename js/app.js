// const main = document.getElementById("banderas");
const main = document.getElementById("banderas");
const fragmnet = document.createDocumentFragment();
const template = document.getElementById(`template`).content;

const callApi = async () => {
	try {
		const dir = await fetch(`https://restcountries.com/v2/all`);
		const data = await dir.json();
		// console.log(data);
		formClient(data);
		// viewData2(info_data);
	} catch (error) {
		// alert("");
		// console.log(error);
		console.log("Hubo un problema con la API, por favor intentarlo mas tarde.");
	}
};

const viewData = info_data => {
	let elements = ``;
	info_data.forEach(element => {
		// Diferencia entre concatenarlo y hacer con fragmnet ,con concaternacion cambias el valor o crear a elementos,mientras que con fragment estas creando elementos que despues es dificl accedes a ellos denuevo .
		// Intentar hacer  con inner html.
		elements += `<article class="card">
					<img src="${element.flags[0]}" alt="${element.name}" class="img-fluid" />
					<div class="card-content">
						<h3 class="card-content__title">${element.name}</h3>
						<p class="card-content__population">
							<b>Population: </b>
							${element.population}
						</p>
						<p class="card-content__region">
							<b>Region: </b>
							${element.region}
						</p>
						<p class="card-content__capital">
							<b>Capital: </b>
							${element.capital}
						</p>
					</div>
				</article>`;
	});
	main.innerHTML = elements;
};

const viewData2 = info_data => {
	// console.log(info_data);
	info_data.forEach(element => {
		main.innerHTML = ``;
		const template_copy = template.cloneNode(true);
		const imagen = template_copy.querySelector(`.img-fluid`);
		const title = template_copy.querySelector(`.card-content__title`);
		const population = template_copy.querySelector(`.card-content__population`);
		const region = template_copy.querySelector(".card-content__region");
		const capital = template_copy.querySelector(".card-content__capital");
		imagen.setAttribute(`src`, `${element.flags[0]}`);
		imagen.setAttribute("alt", `${element.name}`);
		title.textContent = `${element.name}`;
		population.innerHTML = `<b>Population: </b>${element.population}`;
		region.innerHTML = `<b>Region: </b>${element.region}`;
		capital.innerHTML = `<b>Capital: </b>${element.capital}`;
		fragmnet.appendChild(template_copy);
	});
	main.appendChild(fragmnet);
};

// LLamando a la Api
callApi();
