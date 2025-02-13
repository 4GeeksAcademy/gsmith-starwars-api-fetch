const URL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      starships: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: async () => {
        try {
          const response = await fetch(URL + "people");
          const body = await response.json();
          const people = body.results;

          setStore({ characters: people });
        } catch (err) {
          console.error(err);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch(URL + "planets");
          const body = await response.json();
          const planets = body.results;
          setStore({ planets: planets });
        } catch (err) {
          console.error(err);
        }
      },

      getStarships: async () => {
        try {
          const response = await fetch(URL + "starship");
          const body = await response.json();
          const starship = body.results;
          setStore({ starships: starship });
        } catch (err) {
          console.error(err);
        }
      },

      addFavorites: async () => {},

      getAllActions: async () => {
        const actions = getActions();
        await actions.getCharacters();
        await actions.getPlanets();
        await actions.getStarships();
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
    },
  };
};

export default getState;
