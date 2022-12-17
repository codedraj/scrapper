/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import deleteIcon from './delete.png';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import pencil from './pencil.png';
import { enumDealStatus } from 'common/enums';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'App';
import { useTheme } from '@emotion/react';
import phone from './phone.png';
import checkList from './check-list.png';
import postIt from './post-it.png';
import { HomeViewContext } from '../../Home';

const Hero = () => {
  const { allLeads } = useContext(HomeViewContext);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let smallIconSx = {
    maxHeight: isMd
      ? { xs: 233 / 8, md: 167 / 8 }
      : { xs: 233 / 8, md: 167 / 8 },
    maxWidth: isMd
      ? { xs: 350 / 4, md: 250 / 4 }
      : { xs: 350 / 8, md: 250 / 8 },
  };
  let mdIconSx = {
    maxHeight: isMd
      ? { xs: 233 / 4, md: 167 / 4 }
      : { xs: 233 / 4, md: 167 / 4 },
    maxWidth: isMd
      ? { xs: 350 / 4, md: 250 / 4 }
      : { xs: 350 / 8, md: 250 / 8 },
  };

  const {
    setComments,
    setDealStatus,
    setBName,
    setLink,
    setNumber,
    setSalesRep,
    setId,
  } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <Grid container>
      {allLeads.map((x, i) => {
        return (
          <Grid
            key={i}
            boxShadow={4}
            display="flex"
            flexDirection={'column'}
            item
            margin={1}
            padding={2}
            justifyContent="center"
            container
            alignItems={'center'}
            xs={12 * 2}
            md={6 * 2}
          >
            <Box
              sx={{ width: '100%', marginBottom: 2 }}
              justifyContent={'flex-start'}
              alignItems="center"
            >
              <Link
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                marginRight={2}
                fontSize={isMd ? 32 : 24}
                target={'#blank'}
                href={x.link}
              >
                {x.bName}
              </Link>
            </Box>
            <Box
              sx={{ width: '100%', marginBottom: 2 }}
              justifyContent={'flex-start'}
              display="flex"
              flexDirection={isMd ? 'row' : 'column'}
            >
              <Box
                flex={2}
                display={'flex'}
                flexDirection="column"
                justifyContent={'flex-start'}
                alignItems="flex-start"
                textAlign={'center'}
                // marginRight={1}
                // width="100%"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: 4,
                  }}
                >
                  <Box
                    component="img"
                    display={'inline-block'}
                    sx={smallIconSx}
                    alt="The house from the offer."
                    src={checkList}
                  />
                  <Typography
                    marginLeft={1}
                    fontSize={21}
                    display={'inline-block'}
                  >
                    {x.dealStatus
                      ? enumDealStatus[x.dealStatus]
                      : enumDealStatus[0]}
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    component="img"
                    display={'inline-block'}
                    sx={smallIconSx}
                    alt="The house from the offer."
                    src={phone}
                  />
                  <Typography
                    marginLeft={1}
                    fontSize={21}
                    display={'inline-block'}
                  >
                    {/* {/^[a-zA-Z0-9]+$/.test(x.number) ? x.number : '12342154213'} */}
                    {x.number}
                  </Typography>
                </div>
              </Box>

              <Box flex={7}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Notes
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    value={x.comments}
                    disabled
                    // onChange={handleChange('amount')}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box component={'img'} sx={smallIconSx} src={postIt} />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box flex={1}>{/* <Box>{x.salesRep}</Box> */}</Box>
              <Box>
                <IconButton
                  sx={{
                    marginRight: 4,
                  }}
                  onClick={async () => {
                    const resp = await fetch(
                      'http://localhost:3002/delete/' + x._id,
                      {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      },
                    );
                    const data = await resp.json();
                    if (data.deleted) {
                      window.alert('Deleted Successfully');
                    }
                    navigate('/all');
                  }}
                >
                  <Box
                    component="img"
                    sx={mdIconSx}
                    alt="The house from the offer."
                    src={deleteIcon}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    marginRight: 2,
                  }}
                  onClick={() => {
                    setComments(x.comments);
                    setDealStatus(x.dealStatus);
                    setId(x._id);
                    setBName(x.bName);
                    setLink(x.link);
                    setSalesRep(x.salesRep);
                    setNumber(x.number);
                    navigate('/edit');
                  }}
                >
                  <Box
                    component="img"
                    sx={mdIconSx}
                    alt="The house from the offer."
                    src={pencil}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Hero;
