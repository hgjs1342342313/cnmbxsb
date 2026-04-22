const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'posts.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function loadPosts() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

function savePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

app.get('/api/posts', (req, res) => {
  const posts = loadPosts();
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const words = ['cnm', 'bxsb', 'cnmbxsb'];
  const word = words[Math.floor(Math.random() * words.length)];
  const posts = loadPosts();
  const post = { word, timestamp: new Date().toISOString() };
  posts.push(post);
  savePosts(posts);
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
