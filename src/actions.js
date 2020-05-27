// Action Creator - function that creates action objects. Simplifies the code
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random() * 10)
    };
};