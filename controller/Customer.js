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

    updateCustomer: async function(req, res) {
        const { userId } = req.params;
        const { username, email, password, displayName } = req.body;

        try {
            const response = await axios.put(
                `${WEAVY_INSTANCE_URL}/api/users/${userId}`,
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

            console.log('User updated:', response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error updating user:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to update user' });
        }
    },

    getCustomer: async function(req, res) {
        const { userId } = req.params;

        try {
            const response = await axios.get(
                `${WEAVY_INSTANCE_URL}/api/users/${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`
                    }
                }
            );

            console.log('User retrieved:', response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error retrieving user:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to retrieve user' });
        }
    },

    deleteCustomer: async function(req, res) {
        const { userId } = req.params;

        try {
            const response = await axios.delete(
                `${WEAVY_INSTANCE_URL}/api/users/${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`
                    }
                }
            );

            console.log('User deleted:', response.data);
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error deleting user:', error.response ? error.response.data : error.message);
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}

module.exports = CustomerController;
