let carta = {
    id: 778,
    nome: "Krosan Cloudscraper",
    costoDiLancio: {
        mana: 7,
        bianco: 0,
        blu: 0,
        nero: 0,
        rosso: 0,
        verde: 3
    },

    manaConvertito: function(){
        let somma = 0;
        for(let key in carta.costoDiLancio){
            somma += carta.costoDiLancio[key];
        }
        return somma;

    },

    tipo: "Creature",
    sottoTipo: "Beast Mutant",

    espansione: {
        edizione: 7,
        nome: "Time Spiral Timeshifted",
        rarita: "Rara",
        numeroCarteEspansione: 290,
    },
    numeroCarta: 82,

    abilita: [
        {
            costo: "2 verde",
            descrizione: "At the beginning of your upkeep, sacrifice Krosan Cloudscraper unless you pay"
        },
        {
            costo: "7 mana, 2 verde",
            descrizione: "Morph (You may cast this card face down as a 2/2 creature for 3. Turn it face up any time for its morph cost.)"
        }
    ],

    storiaCarta: "",
    artista: "Ron Spears",
    forza: 13,
    costituzione: 13,
    bordo: "Nero"

};

console.log( carta.manaConvertito() );

let abilitaHTML = `<strong>Non ha abilità</strong>`;
if(carta.abilita.length){
    abilitaHTML = `<ul class="abilita-carta">`;
    for(let i = 0; i < carta.abilita.length; i++){
        const abilitaCorrente = carta.abilita[i];
        abilitaHTML += `<li>Descrizione ${i+1}: <br>${abilitaCorrente.descrizione}</li>`;
        abilitaHTML += `<li>Costo abilità ${i+1}: <br>${abilitaCorrente.costo}`;
        abilitaHTML += `<hr>`

    }
    abilitaHTML += `</ul>`;
};

// alt + 96 = ``
let stampaHTML = 
    `<ul class="elementi-carta pt-5">
        <li>Nome carta: ${carta.nome}</li>
        <li>Costo di lancio:
            <ul>
                <li>Mana: ${carta.costoDiLancio.mana}</li>
                <li>Bianco: ${carta.costoDiLancio.bianco}</li>
                <li>Blu: ${carta.costoDiLancio.blu}</li>
                <li>Nero: ${carta.costoDiLancio.nero}</li>
                <li>Rosso: ${carta.costoDiLancio.rosso}</li>
                <li>Verde: ${carta.costoDiLancio.verde}</li>
            </ul>
        </li>
        <li>Costo mana convertito: ${carta.manaConvertito()}</li>
        <li>Tipo: ${carta.tipo} - ${carta.sottoTipo}</li>
        <li>Forza/Costituzione: ${carta.forza}/${carta.costituzione}</li>
        <li>Abilità: ${abilitaHTML}</li>
        <li>Espansione: 
            <ul>
                <li>Edizione: ${carta.espansione.edizione}</li>
                <li>Nome edizione: ${carta.espansione.nome}</li>
                <li>Rarità carta: ${carta.espansione.rarita}</li>
                <li>Numero carta: ${carta.numeroCarta}/${carta.espansione.numeroCarteEspansione}</li>
            </ul>
        </li>
        <li>Storia carta: ${carta.storiaCarta}</li>
        <li>Artista: ${carta.artista}</li>
        <li>Bordo della carta: ${carta.bordo}</li>
    </ul>`
    

document.getElementById("descrition-card").innerHTML += stampaHTML;

document.getElementById("image-card").innerHTML = `<img class="pt-5" src="img/krosan-card.jpg" alt="krosan-card">`;