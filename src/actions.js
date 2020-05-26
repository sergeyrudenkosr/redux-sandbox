// Action Creator - function that creates action objects. Simplifies the code
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (payload) => ({type: 'RND', payload});