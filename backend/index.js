const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "2a281a38-124d-4d40-b3c7-bf4709705b5e" } }
    );
    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);
