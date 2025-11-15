import axios from 'axios';

export const getDestaques = async () => {
    const result = await axios.get('http://localhost:3000/destaques');
    return result.data;
};

export const getCardapioResumo = async () => {
    const result = await axios.get('http://localhost:3000/catalogo');
    return result.data;
};
export const getCardapio = async () => {
    const result = await axios.get('http://localhost:3000/catalogo');
    return result.data;
};

export const getRota = async () => {
    const result = await axios.get('http://localhost:3000/rota');
    return result.data;
};

export const getEntrega = async () => {
    const result = await axios.get('http://localhost:3000/entrega');
    return result.data;
};
