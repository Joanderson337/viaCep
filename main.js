const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const inputBairro = document.getElementById('js-input-bairro');
const inputCepDado = document.getElementById('js-input-cep-dados');
const inputLogradouro = document.getElementById('js-input-logradouro');
const inputEstado = document.getElementById('js-input-estado');
const inputCidade = document.getElementById('js-input-cidade');
const inputDdd = document.getElementById('js-input-ddd');

const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-error');

btnBuscarCep.addEventListener('click', () => {
  if(inputCep.value !== "") {
    
    axios({
      method: 'GET',
      url: `https://viacep.com.br/ws/${inputCep.value}/json/`
    })
    .catch(() => alert('Digite um cep correto!'))
    .then(response => {
      let data = response.data;
      inputBairro.value = data.bairro;
      inputCepDado.value = data.cep;
      inputLogradouro.value = data.logradouro;
      inputEstado.value = data.uf;
      inputCidade.value = data.localidade;
      inputDdd.value = data.ddd;

      areaDados.style.display = "block";
      msgErro.style.display = 'none';
    });
  } else {
    inputBairro.value = "";
    inputCepDado.value = "";
    inputLogradouro.value = "";
    inputEstado.value = "";
    areaDados.style.display = "none";
    msgErro.style.display = 'block';
  }
})