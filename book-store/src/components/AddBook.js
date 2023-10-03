import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const history = useNavigate();
  const apiUrl = "http://localhost:5000/books";

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post(apiUrl, {
        name: inputs.name,
        author: inputs.author,
        description: inputs.description,
        price: Number(inputs.price),
        image: inputs.image,
        available: checked,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending the request:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs, checked);
      await sendRequest();
      history("/books");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
