const axios = require('axios');
const WEAVY_INSTANCE_URL = 'https://f8d5f9c8926745a1b3c5c38b7de50d9a.weavy.io';
const API_KEY = 'wys_lJEZqfj8JtG4ZWGaII7kOlTsdrSeEi2qKUzk';

const CustomerController = {
    saveCustomer: async function(req, res) {
        const { username, email, password, displayName } = req.body;
        try {
            const response = await axios.post(
                `${WEAVY_INSTANCE_URL}/api/users`,
                {
                    username: username,
                    email: email,
                    password: password,
                    displayName: displayName
                },
                {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('User saved:', response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error saving user:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to save user' });
        }
    },

    
}

module.exports = CustomerController;
