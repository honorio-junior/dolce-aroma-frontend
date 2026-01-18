import axios from 'axios';

export const getDestaques = async () => {
    const result = await axios.get('/api/destaques');
    return result.data;
};

export const getCardapioResumo = async () => {
    const result = await axios.get('/api/cardapio-resumo');
    return result.data;
};

export const getRota = async () => {
    const result = await axios.get('/api/rota');
    return result.data;
};

export const getEntrega = async () => {
    const result = await axios.get('/api/taxa-entrega');
    return result.data;
};

export const getContatos = async () => {
    const result = await axios.get('/api/contatos');
    return result.data;
};

// setores

export const getCardapioBar = async () => {
    const result = await axios.get('/api/cardapio-bar');
    return result.data;
};

export const getCardapioFeirinha = async () => {
    const result = await axios.get('/api/cardapio-feirinha');
    return result.data;
};

export const getCardapioComercio = async () => {
    const result = await axios.get('/api/cardapio-comercio');
    return result.data;
};

export const getCardapioCafeteria = async () => {
    const result = await axios.get('/api/cardapio-cafeteria');
    return result.data;
};
