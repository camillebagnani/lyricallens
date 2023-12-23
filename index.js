const ideaContainer = $('.ideaContainer')
const pokemonContainer = $('.pokemonContainer')
const emptyPokemonDiv = $('.show')
const description = $('.description')
const button = $('.button')
const today = dayjs();

$('.date').text(today.format('MMM D, YYYY'));

class DailyPrompt {
    constructor(prompt, link) {
        this.prompt = prompt;
        this.link = link;
    }
}

const ideaOne = new DailyPrompt('"King of the universe"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0FYgbU053OIe4Mg6EtxSgp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaTwo = new DailyPrompt('"Make the world disappear"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/16bZGlnZqGuMzhcB38fWpx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>');
const ideaThree = new DailyPrompt('"Lento" (en Español)', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4JFZ0ilVg7CenXhnDcJb4u?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaFour = new DailyPrompt('"Fighting the boundary"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6rsbsdiGDrYvhbb1K7ziTL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaFive = new DailyPrompt('"On the water"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0qUdIt9DmD5znk3aghrdy4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaSix = new DailyPrompt('"Morning in the Aves"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6mWlah5Cxz8qTcW17pbj7h?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaSeven = new DailyPrompt('"Where the devils come play"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4s20MoJlD866bBq411j5bH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaEight = new DailyPrompt('"The world, open wide"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/36L76Hw2KS60na0cxlh8E0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaNine = new DailyPrompt('"Watching it all through a screen"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4Sf5gXjMvciYzNGSrQx7BK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTen = new DailyPrompt('"And you\'re alive, like you\'re back in Salt Lake"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1vXt2d3QwSTYKhgw1pZwMZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaEleven = new DailyPrompt('"Take the next ticket"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2X485T9Z5Ly0xyaghN73ed?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwelve = new DailyPrompt('"Nothing sacred, nothing lost"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3FI0iAAAjmR31xpZEwbdys?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaThirteen = new DailyPrompt('"Is all the mystery gone?"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5iXnD2VizcAbErpkcuNQ6I?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaFourteen = new DailyPrompt('"To dust"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5QLHGv0DfpeXLNFo7SFEy1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaFifteen = new DailyPrompt('"By the birch tree"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6R7qvSSuG7Hy7C15ESlHIv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaSixteen = new DailyPrompt('"Best behaviour"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/40dJCw4xU6Bd5ie9rfagNo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaSeventeen = new DailyPrompt('"Salad days"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5VdaMUzoQetwxQwtWAd022?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaEighteen = new DailyPrompt('"Hold the summer in your hands"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7csmE9cfy9NUDYQzN7fDfT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaNineteen = new DailyPrompt('"From the driver seat"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5d3SvGX2RQpdDftzI47kuI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwenty = new DailyPrompt('"Through alleys"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4EvzBvvreh74hcVAsUvfjD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwentyOne = new DailyPrompt('I hear that red\'s in style"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6AgtouHw1KrKy1PsoLjY3o?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwentyTwo = new DailyPrompt('"Ice is slowly melting"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6dGnYIeXmHdcikdzNNDMm2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwentyThree = new DailyPrompt ('"Yellow"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwentyFour = new DailyPrompt ('"Coming home"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2J6vC0xW1gEaP1aEeL4Lrx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')
const ideaTwentyFive = new DailyPrompt ('"No excuses"', '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5IU7VALvsWfzC8W5rjLNT0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>')

const ideasArray = [ideaOne, ideaTwo, ideaThree, ideaFour, ideaFive, ideaSix, ideaSeven, ideaEight, ideaNine, ideaTen, ideaEleven, ideaTwelve, ideaThirteen, ideaFourteen, ideaFifteen, ideaSixteen, ideaSeventeen,ideaEighteen, ideaNineteen, ideaTwenty, ideaTwentyOne, ideaTwentyTwo, ideaTwentyThree, ideaTwentyFour, ideaTwentyFive];

ideaContainer.html(`A photography prompt generator based on song lyrics.`)

let index = 0;

button.on('click', function () {

    if (index < ideasArray.length) {
        ideaContainer.html(`
        <div class="prompt">${ideasArray[index].prompt}</div>
        <div class="song">${ideasArray[index].link}</div>
        `)
        index++
    } else {
        index = 0;
    }

    emptyPokemonDiv.removeClass('show').addClass('hidden')
    // description.removeClass('description').addClass('description-hide')

})

const randomPokemon = (apiObj) => {
    const {url, type, name} = apiObj;
    const apiUrl = `${url}${type}/${name}`;

    fetch(apiUrl)
        .then( (raw_data) => raw_data.json())
        .then( (data) => {
            pokemonContainer.removeClass('hidden')
            pokemonContainer.html(`<img class="pokemon" src= ${data.sprites.front_default}>`)
        })
        
        .catch( (err) => {
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

function getRandomInt(min,max) {
    var randomInt = Math.floor(Math.random() * (max-min) + min);
    // console.log(randomInt);
    return randomInt;
}

function Randomize() {
    const searchValue = getRandomInt(1,649);
    randomPokemon(makeURL(searchValue));
}

button.on("click", Randomize)