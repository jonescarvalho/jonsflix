import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

function update(objVideo) {
  return fetch(`${URL_VIDEOS}/${objVideo.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const response = await resposta.json();
        return response;
      }
      throw new Error('não foi possivel receber os dados');
    });
}

function deleteVideo(objVideo) {
  return fetch(`${URL_VIDEOS}/${objVideo.id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
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
  return fetch(`${URL_VIDEOS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível receber os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_VIDEOS}?_expand=categoria`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível receber os dados :(');
    });
}

export default {
  create,
  deleteVideo,
  getAll,
  getAllWithVideos,
  update
};
