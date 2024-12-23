const source = [
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "ico-albero",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "ico-stella",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "ico-neve",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/dance.gif"
    }
];

// recupero il main DOM
const mainDiv = document.getElementsByTagName('main');
const overlayDiv = document.getElementById('overlay');

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalBtn = document.getElementById('modal-button');
const reset = document.getElementById('reset-btn');

// recupero gli elementi dalla memoria se ce ne sono
let clickedCards = JSON.parse(localStorage.getItem('clickedCards')) || [];
console.log(clickedCards);

//Per il numero di caselle...
for (let i = 0; i < 25; i++) {

    //crea un div
    const card = document.createElement('div');
    //assegna la classe box
    card.classList.add('box');

    //creo un titolo e ci aggiungo un numero
    const cardNumer = document.createElement('h2');
    cardNumer.innerText = i + 1;

    // creo l'elemento immagine e lo popolo
    const cardIcon = document.createElement('img');
    cardIcon.src = `./images/icons/${source[i].icon}.png`

    // aggiungi gli elementi nel alla card
    card.appendChild(cardIcon);
    card.appendChild(cardNumer);
    // aggiungo la card al DOM
    mainDiv[0].appendChild(card);

    if (clickedCards.includes(i)) {
        card.classList.add('open');
    }

    // aggiungo il click alle card e...
    card.addEventListener('click', function () {

        clickedCards.push(i);
        // console.log(clickedCards);

        // aggiungo la card cliccata alla localStorage
        localStorage.setItem('clickedCards', JSON.stringify(clickedCards));

        // se il tipo = immagine
        if (source[i].type == 'image') {
            // creo un'immagine
            const modalImg = document.createElement('img');
            // la popolo
            modalImg.src = `./${source[i].url}`;
            // inserisco nella modale
            modalContent.appendChild(modalImg);
        } else {
            // altrimenti faccio le stesse operazioni ma con il testo
            const modalText = document.createElement('p');
            modalText.innerText = source[i].text;
            modalContent.appendChild(modalText);
        }

        // compare l'immagine
        modal.classList.remove('d-none');
        // attivo l'overlay
        overlayDiv.classList.add('overlay');
        // cambio aspetto alla card
        card.classList.add('open');
    })

    // al click del bottone 'chiudi'
    modalBtn.addEventListener('click', function () {
        // la modale si chiude
        modal.classList.add('d-none');
        // il contenuto della modale viene azzerato
        modalContent.innerHTML = '';
        // l'overlay si disattiva
        overlayDiv.classList.remove('overlay')
    })

}

reset.addEventListener('click', function () {
    console.log('reset');
    localStorage.clear();
    clickedCards = [];

    const cards = document.querySelectorAll('.box');
    cards.forEach((element) => element.classList.remove('open'));
})