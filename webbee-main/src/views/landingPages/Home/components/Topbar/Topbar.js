import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { enumDealStatus } from 'common/enums';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import WebbeeLogo from 'svg/logos/Webbee';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Topbar = () => {
  const [filterProspectStatus, setFilterProspectStatus] = React.useState([]);
  const [filterInformation, setFilterInformation] = React.useState([]);

  const handleChangeFilterProspectStatus = (event) => {
    const {
      target: { value },
    } = event;
    setFilterProspectStatus(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeFilterInformation = (event) => {
    const {
      target: { value },
    } = event;
    setFilterInformation(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      width={'100%'}
    >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Prospect Status
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterProspectStatus}
          onChange={handleChangeFilterProspectStatus}
          input={<OutlinedInput label="Prospect Status" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {enumDealStatus.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filterProspectStatus.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Information Available
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterInformation}
          onChange={handleChangeFilterInformation}
          input={<OutlinedInput label="Information Available" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {['Phone Number', 'Website'].map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filterInformation.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
