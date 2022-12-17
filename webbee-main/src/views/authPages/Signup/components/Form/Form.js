/* eslint-disable react/no-unescaped-entities */
import React, {
  useContext,
  //  useEffect,
  useState,
} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AppContext } from 'App';
import { enumDealStatus } from 'common/enums';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const Form = () => {
  const {
    comments,
    // setComments,
    dealStatus,
    // setDealStatus,
    bName,
    // setBName,
    link,
    // setLink,
    number,
    // setNumber,
    id,
    // setId
    salesRep,
    // setSalesRep
  } = useContext(AppContext);

  const updateFetch = async () => {
    const resp = await fetch(`http://localhost:3002/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comments: commentsValue,
        salesRep: salesRepValue,
        dealStatus: dealStatusValue,
      }),
    });
    const data = await resp.json();
    console.log(data);
  };

  const [dealStatusValue, setDealStatusValue] = useState(dealStatus);
  const [commentsValue, setCommentsValue] = useState(comments);
  const [salesRepValue, setSalesRepValue] = useState(salesRep);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!(comments && dealStatus && bName && number)) {
  //     navigate('/all');
  //   }
  // }, []);

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
          <a href={link} target="#blank">
            {link}
          </a>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          {bName}
        </Typography>
        <Typography color="text.secondary">{number}</Typography>
      </Box>
      <form
      //  onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your Comments
            </Typography>
            <TextField
              label="comments *"
              multiline
              variant="outlined"
              name={'comments'}
              fullWidth
              value={commentsValue}
              onChange={(e) => {
                setCommentsValue(e.target.value);
              }}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Sales Rep
            </Typography>
            <TextField
              label="Sales Rep *"
              multiline
              variant="outlined"
              name={'salesRep'}
              fullWidth
              value={salesRepValue}
              onChange={(e) => {
                setSalesRepValue(e.target.value);
              }}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Deal Status
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                value={dealStatusValue}
                name="radio-buttons-group"
                onChange={(e) => {
                  setDealStatusValue(e.target.value);
                }}
              >
                {enumDealStatus.map((x, i) => {
                  return (
                    <FormControlLabel
                      value={i}
                      key={i + 1}
                      control={<Radio />}
                      label={x}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={'100%'}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(commentsValue);
                  console.log(dealStatusValue);
                  updateFetch();
                }}
                size={'large'}
                variant={'contained'}
                type={'submit'}
              >
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
