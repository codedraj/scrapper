/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { AppContext } from 'App';
// import { CabinSharp } from '@mui/icons-material';

let serverUrl = process.env.REACT_APP_SERVER_URI;

const Form = () => {
  const [value, setValue] = useState('');
  const [myData, setMyData] = useState([]);

  const { userId, isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = '/';
      return;
    }
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
        >
          Enter HTML
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Copy the HTML and paste it into the text field.
        </Typography>
      </Box>
      {myData.map((x, i) => {
        return <h6 key={i + 1}>{x}</h6>;
      })}
      <form id="form">
        <Button
          sx={{
            marginBottom: 4,
          }}
          type="submit"
          variant="contained"
          onClick={async (e) => {
            e.preventDefault();
            let target = serverUrl;
            // console.log(value);
            const formdata = new FormData();
            formdata.append('html', value);
            const resp = await fetch(`${target}/scrapper`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify({
                html: value,
                userId: userId,
              }),
            });
            const newData = await resp.json();
            setMyData(newData);
            // console.log(myData);
          }}
        >
          Get Data
        </Button>
        <TextField
          id="standard-multiline-flexible"
          label="HTML"
          fullWidth
          multiline
          maxRows={100}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
      </form>
    </Box>
  );
};

export default Form;
