const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 3000;

const sevenWonders = {
  'Great Wall of China': {
    name: 'Great Wall of China',
    image:
      'https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg?w=600&q=60',
    yearBuilt: '7th Century',
  },
  'Chichén Itzá': {
    name: 'Chichén Itzá',
    image:
      'https://cdn.britannica.com/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg',
    yearBuilt: '9th Century',
  },
  Petra: {
    name: 'Petra',
    image:
      'https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg?w=600&q=60',
    yearBuilt: '5th Century',
  },
  'Machu Picchu': {
    name: 'Machu Picchu',
    image:
      'https://cdn.britannica.com/30/94530-050-99493FEA/Machu-Picchu.jpg?w=600&q=60',
    yearBuilt: '15th Century',
  },
  'Christ the Redeemer': {
    name: 'Christ the Redeemer',
    image:
      'https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg?w=600&q=60',
    yearBuilt: '1926',
  },
  Colosseum: {
    name: 'Colosseum',
    image:
      'https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg?w=600&q=60',
    yearBuilt: '69 AD',
  },
  'Taj Mahal': {
    name: 'Taj Mahal',
    image:
      'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg?w=600&q=60',
    yearBuilt: '1628',
  },
};

app.get('/', (req, res) => {
  res.json(sevenWonders);
});

app.get('/api/:name', (req, res) => {
  let wonderName = req.params.name;
  if (sevenWonders[wonderName]) {
    res.json(sevenWonders[wonderName]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
