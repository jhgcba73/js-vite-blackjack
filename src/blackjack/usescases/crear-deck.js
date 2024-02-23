import _ from 'underscore';


// Esta función crea un nuevo deck

/**
 * esta funcion crea una nuevo deck
 * @param {Array<string>} tiposDeCartas 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array} retorna un nuevo arreglo de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('tipos de carta es obligatorio como un arreglo de string')

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tipos especiales es obligatorio como un arreglo de string')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}