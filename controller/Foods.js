const Foods
    = require('../model/Foods');

const FoodsController = {

    getAllFoods: async function(request, response) {
        try {
            const foodsList
                = await Foods.find();
            response.status(200)
                .json(foodsList);
        } catch (err) {
            console.error(err);
            response.status(500).json(
                {error: 'Something ' +
                        'went wrong!'});
        }
    },

    saveFoods: async function(request, response) {
        try {
            const foodsData = request.body;
            const foods
                = await Foods
                .create(foodsData);
            response.status(200).json(foods);
        } catch (err) {
            console.error(err);
            response.status(500).json(
                {error: 'Something ' +
                        'went wrong!'});
        }
    },

    updateFoods: async function(request, response) {
        try {
            const foodsData = request.body;
            const foods
                = await Foods
                .updateOne(foodsData);
            response.status(200).json(foods);
        } catch (err) {
            console.error(err);
            response.status(500).json(
                {error: "Can't updates. Please try again later!"});
        }
    },

    deleteFoods: async function(request, response) {
        try {
            const foodsData = request.body;
            const foods
                = await Foods
                .deleteOne(foodsData);
            response.status(200).json(foods);
        } catch (err) {
            console.error(err);
            response.status(500).json(
                {error: "Can't delete this foods. Please try again later!"});
        }
    },

    getFoods: async function(request, response){
        try {
            const foodsId = request.body.foods_id;
            console.log('Querying for foods_id:', foodsId);
            const foods = await Foods
                .findOne({foods_id: foodsId});
            response.status(200).json(foods);
        } catch (err) {
            console.error(err);
            response.status(500).json(
                {error: 'Something ' +
                        'went wrong!'});
        }
    }
}

module.exports = FoodsController;