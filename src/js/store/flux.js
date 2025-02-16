const URL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      starShips: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: async () => {
        const store = getStore();
        const actions = getActions();
        const detail = [];

        const response = await fetch(URL + "people");
        const body = await response.json();
        const people = body.results;
        for (const character of people) {
          const characterDetails = await actions.getDetails(character);
          // console.log(characterDetails);
          detail.push(characterDetails.result);
        }
        console.log(detail);

        setStore({ characters: detail });
        console.log("Characters in Store:", store.characters);
        return detail;
      },
      getDetails: async (character) => {
        const response = await fetch(character.url);
        const data = await response.json();
        return data;
      },

      getPlanets: async () => {
        const store = getStore();
        const actions = getActions();
        const planetDetail = [];

        const response = await fetch(URL + "planets");
        const body = await response.json();
        const starWarsplanets = body.results;
        // console.log("here are the planets",starWarsplanets)

        for (const planet of starWarsplanets) {
          const allPlanetDetail =  await actions.getPlanetDetails(planet);
          planetDetail.push(allPlanetDetail.result);
          console.log("here are your details",planetDetail)
        }
        setStore({planets : planetDetail})
        // console.log("planets:",  store.planets)
      },
      getPlanetDetails: async (planet) => {
        const response = await fetch(planet.url);
        const data = await response.json();
        return data;
      },

      getStarships: async () => {
        const store = getStore();
        const actions = getActions();
        const starShipDetail = [];
        
        const response = await fetch(URL + "starships");
        const body = await response.json();
        const starShip = body.results;
        for (const ship of starShip) {
         const starWarsShip = await actions.getStarShipDetails(ship);
          starShipDetail.push(starWarsShip.result);
          // console.log("here are my ships", starShipDetail)
        }
        setStore ({starShips : starShipDetail})
        
      },
      getStarShipDetails: async (ship) => {
        const response = await fetch(ship.url);
        const data = await response.json();
        return data;
      },

      addFavorites: async () => {
        // get uid when heart is click and add to favorites array
      },

      getAllActions: async () => {
        const actions = getActions();
        await Promise.all([
          actions.getCharacters(),
          actions.getPlanets(),
          actions.getStarships(),
          console.log("here is the data:" , getAllActions())
        ]);
      },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      toggleFavorite: (item) => {
        const store = getStore();
        const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

        if (isFavorite) {
          setStore({
            favorites: store.favorites.filter(fav => fav.uid !== item.uid),
          });
        } else {
          setStore({ favorites: [...store.favorites, item] });
        }
      },

      
      removeFavorite: (uid) => {
        const store = getStore();
        setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
      },

     
      clearFavorites: () => {
        setStore({ favorites: [] });
      },
    },
  };
};

    

export default getState;
