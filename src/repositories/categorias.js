import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function create(obj) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

function update(obj) {
  return fetch(`${URL_CATEGORIES}/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

function deletecategory(obj) {
  return fetch(`${URL_CATEGORIES}/${obj.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

export default {
  create,
  update,
  getAllCategoriesWithVideos,
  getAll,
  deletecategory,
};
