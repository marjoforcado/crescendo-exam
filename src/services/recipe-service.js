import axios from 'axios';

const recipeService = {
  async getRecipes$() {
    try {
      const resp = await axios.get('/api/recipes');

      return resp;
    }
    catch (e) {
      console.log(e);
    }
  },
};

export default recipeService;
