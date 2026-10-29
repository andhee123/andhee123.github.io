const generateParameterContent = () => {
  const name = document.querySelector("#name");
  const params = getQueryParameter("to");

  if (params) {
    weddingToElement.innerHTML = `<h2 class="text-2xl font-semibold mb-8">${params}</h2>`;
    name.value = params;
  } else {
    weddingToElement.innerHTML = `<h2 class="text-2xl font-semibold mb-8">Tamu Undangan</h2>`;
  }
};
