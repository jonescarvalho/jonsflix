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

export default {
  create,
};
