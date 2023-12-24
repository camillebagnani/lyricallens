const ideaContainer = $('.ideaContainer')
const pokemonContainer = $('.pokemonContainer')
const emptyPokemonDiv = $('.show')
const description = $('.description')
const button = $('.button')
const backButton = $('.backButton')
const today = dayjs();

$('.date').text(today.format('MMM D, YYYY'));

class DailyPrompt {
    constructor(prompt, link) {
        this.prompt = prompt;
        this.link = link;
    }
}

const ideaOne = new DailyPrompt('"Well-kept"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6szkoIUdwt8BOzOOeaM0f2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwo = new DailyPrompt('"Technicolored"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7I1IwNGzIkv9Nlh8bQc5Xz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThree = new DailyPrompt('"Slow (Lento)"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JFZ0ilVg7CenXhnDcJb4u?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaFour = new DailyPrompt('"In the twilight (黄昏に)"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6rsbsdiGDrYvhbb1K7ziTL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaFive = new DailyPrompt('"On the water"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0qUdIt9DmD5znk3aghrdy4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaSix = new DailyPrompt('"Morning in the Aves"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6mWlah5Cxz8qTcW17pbj7h?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaSeven = new DailyPrompt('"Head trip"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/26jmYkPs4hCsx8n6b51wRp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaEight = new DailyPrompt('"Outside the café"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Zj3UZgeP5fKJV9iO6mt6d?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaNine = new DailyPrompt('"Watching it all through a screen"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4Sf5gXjMvciYzNGSrQx7BK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTen = new DailyPrompt('"And you\'re alive, like you\'re back in Salt Lake"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1vXt2d3QwSTYKhgw1pZwMZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaEleven = new DailyPrompt('"Shadow"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2X485T9Z5Ly0xyaghN73ed?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwelve = new DailyPrompt('"The colours change"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3FI0iAAAjmR31xpZEwbdys?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThirteen = new DailyPrompt('"No direction"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1dB0NylVkpjdOe8DiekIs7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaFourteen = new DailyPrompt('"The earth below"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5QLHGv0DfpeXLNFo7SFEy1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaFifteen = new DailyPrompt('"By the birch tree"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6R7qvSSuG7Hy7C15ESlHIv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaSixteen = new DailyPrompt('"Best behaviour"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/40dJCw4xU6Bd5ie9rfagNo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaSeventeen = new DailyPrompt('"Salad days"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5VdaMUzoQetwxQwtWAd022?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaEighteen = new DailyPrompt('"Silver"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7csmE9cfy9NUDYQzN7fDfT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaNineteen = new DailyPrompt('"From the driver seat"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5d3SvGX2RQpdDftzI47kuI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwenty = new DailyPrompt('"Through alleys"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4EvzBvvreh74hcVAsUvfjD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyOne = new DailyPrompt('I hear that red\'s in style"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6AgtouHw1KrKy1PsoLjY3o?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyTwo = new DailyPrompt('"Ice is slowly melting"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyThree = new DailyPrompt('"Yellow"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyFour = new DailyPrompt('"Coming home"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2J6vC0xW1gEaP1aEeL4Lrx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyFive = new DailyPrompt('"Snow"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5IU7VALvsWfzC8W5rjLNT0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentySix = new DailyPrompt('"King of the universe"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0FYgbU053OIe4Mg6EtxSgp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentySeven = new DailyPrompt('"Sinking"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6xlO0KbxxktH6OnY56wkwF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyEight = new DailyPrompt('"Fading"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4yYvWFUWMaKMXtoJKJnmZk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwentyNine = new DailyPrompt('"Pattern"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5JtPGzRgrWxkXX9LoROq3d?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThirty = new DailyPrompt('"Like clockwork"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3BOiQtFYI4EE27CyNwm9rU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThirtyOne = new DailyPrompt('"Things that make sounds"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hc71nKsUgtwQ3z52KEKQk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThirtyTwo = new DailyPrompt('"Here we are"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/769PAogOgq1KurfwLjWj2J?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');

const ideasArray = [ideaOne, ideaTwo, ideaThree, ideaFour, ideaFive, ideaSix, ideaSeven, ideaEight, ideaNine, ideaTen, ideaEleven, ideaTwelve, ideaThirteen, ideaFourteen, ideaFifteen, ideaSixteen, ideaSeventeen, ideaEighteen, ideaNineteen, ideaTwenty, ideaTwentyOne, ideaTwentyTwo, ideaTwentyThree, ideaTwentyFour, ideaTwentyFive, ideaTwentySix, ideaTwentySeven, ideaTwentyEight, ideaTwentyNine, ideaThirty, ideaThirtyOne, ideaThirtyTwo];

ideaContainer.html(`A photography prompt generator based on song lyrics.`)

button.on('click', function () {
    updateIndex('forward');
    updateHTML();
})

backButton.on('click', function () {
    updateIndex('back');
    updateHTML();
})

let index = 0;

function updateIndex(direction) {
    if (direction === 'back') {
        index = (index > 0) ? index - 1 : ideasArray.length - 1;
    } else if (direction === 'forward') {
        index = (index < ideasArray.length - 1) ? index + 1 : 0;
    }
    console.log(index)
}

function updateHTML() {
    ideaContainer.html(`
    <div class="prompt">${ideasArray[index].prompt}</div>
    <div class="song">${ideasArray[index].link}</div>
    `)

    emptyPokemonDiv.removeClass('show').addClass('hidden')
    backButton.removeClass('hidden')
}

const randomPokemon = (apiObj) => {
    const { url, type, name } = apiObj;
    const apiUrl = `${url}${type}/${name}`;

    fetch(apiUrl)
        .then((raw_data) => raw_data.json())
        .then((data) => {
            pokemonContainer.removeClass('hidden')
            pokemonContainer.html(`<img class="pokemon" src= ${data.sprites.front_default}>`)
        })

        .catch((err) => {
            pokemonContainer.innerHTML = `<p>... Oh? Error occured.</p>`
        })
}

function makeURL(value) {
    const apiObj = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        name: value,
    }
    return apiObj
}

function getRandomInt(min, max) {
    var randomInt = Math.floor(Math.random() * (max - min) + min);
    // console.log(randomInt);
    return randomInt;
}

function Randomize() {
    const searchValue = getRandomInt(1, 649);
    randomPokemon(makeURL(searchValue));
}

button.on("click", Randomize)

// button.on('click', function () {

//     if (index < ideasArray.length) {
//         ideaContainer.html(`
//         <div class="prompt">${ideasArray[index].prompt}</div>
//         <div class="song">${ideasArray[index].link}</div>
//         `)
//         index++
//     } else {
//         index = 0;
//     }

//     emptyPokemonDiv.removeClass('show').addClass('hidden')
//     backButton.removeClass('hidden')

// })

// backButton.on('click', function () {
//     if (index > 0) {
//         index--;
//         ideaContainer.html(`
//             <div class="prompt">${ideasArray[index].prompt}</div>
//             <div class="song">${ideasArray[index].link}</div>
//         `);
//     } else {
//         // If at the beginning, loop to the end
//         index = ideasArray.length - 1;
//         ideaContainer.html(`
//             <div class="prompt">${ideasArray[index].prompt}</div>
//             <div class="song">${ideasArray[index].link}</div>
//         `);
//     }
// })

// backButton.on('click', function() {
//     if (index > 0) {
//         ideaContainer.html(`
//         <div class="prompt">${ideasArray[index].prompt}</div>
//         <div class="song">${ideasArray[index].link}</div>
//         `)
//         index--
//     }
// })