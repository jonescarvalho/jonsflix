import config from '../config';

const URL_CATEGORIIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIIES}?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
};
