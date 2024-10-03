const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'auditdb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});


app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM user_details', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/api/users/:das_id', (req, res) => {
    const { das_id } = req.params;
    
    db.query('SELECT * FROM user_details WHERE das_id = ?', [das_id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).json({ message: 'User not found.' });
        res.json(results[0]);
    });
});

// Login route
app.post('/login', (req, res) => {
    const { das_id, password } = req.body;

    if (!das_id || !password) {
        return res.status(400).json({ success: false, message: 'Please provide das_id and password.' });
    }

    db.query('SELECT * FROM user_details WHERE das_id = ?', [das_id], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Database error.' });

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }

        const user = results[0];

        if (user.password === password) {
            delete user.password;
            return res.json({ success: true, message: 'Login successful!', user });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
