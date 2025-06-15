import apexStandingsData from './src/Components/esports/StandindsData';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.get('/apexlegends/standings', (req, res) => {
  
  apexStandingsData.forEach(team => {
    team.totalPoints = team.pointsByDay.reduce((sum, p) => sum + p, 0);
  });


  apexStandingsData.sort((a, b) => b.totalPoints - a.totalPoints);

 
  apexStandingsData.forEach((team, index) => {
    team.rank = index + 1;
  });

  res.json(apexStandingsData);
});


app.post('/api/email', (req, res) => {
  const { email } = req.body;

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  
  fs.readFile('emails.txt', 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading file:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    
    data = data || '';

    
    if (data.includes(email)) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    
    fs.appendFile('emails.txt', `${email}\n`, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      
      return res.status(200).json({ message: 'Email saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
