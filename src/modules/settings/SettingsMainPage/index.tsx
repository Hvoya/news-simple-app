import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select, TextField, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ExpPanel from '../../../components/ExpPanel';
import { setHeader } from '../../../store/actions/header';
import { setSettings } from '../../../store/actions/settings';
import { IStore } from '../../../store/types';
import { fontFamilyTypes, fontSizes, themeTypes } from '../constants';
import { styles } from './styles';

const SettingsMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader({
      title: 'Настройки',
    }));
  }, [dispatch]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const {
    font_size,
    theme_type,
    font_family,
    news_per_page  } = useSelector((store: IStore) => store.settings);
  const fontSizeOptions = fontSizes.map((size) => <MenuItem value={size}>{size}px</MenuItem>);
  const themeOptions = themeTypes.map((type) => <MenuItem value={type.value}>{type.name}</MenuItem>);
  const fontFamilyOptions = fontFamilyTypes.map((type) => <MenuItem value={type}>{type}</MenuItem>);
  function handleChangeSettings(field: string, value: any) {
    dispatch(setSettings({ [field]: value }));
  }

  return (
    <Grid container className={classes.container}>
    <Grid className={classes.bottomSpacing} item xs={12}>
      <h4>Здесь вы можете изменить внешний вид приложения.</h4>
    </Grid>
    <Grid className={classes.bottomSpacing} item xs={12}>
      <ExpPanel header={<Typography >Шрифт</Typography>}>
        <FormControl className={classes.formControl}>
          <InputLabel>Размер шрифта</InputLabel>
          <Select
            value={font_size}
            onChange={(e) => handleChangeSettings('font_size', e.target.value)}
          >
            {fontSizeOptions}
          </Select>
        </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Тип шрифта</InputLabel>
              <Select
                value={font_family}
                onChange={(e) => handleChangeSettings('font_family', e.target.value)}
              >
                {fontFamilyOptions}
              </Select>
            </FormControl>
      </ExpPanel>
    </Grid>
      <Grid className={classes.bottomSpacing} item xs={12}>
        <ExpPanel header={<Typography>Стили</Typography>}>
          <FormControl className={classes.formControl}>
            <InputLabel>Тема приложения</InputLabel>
            <Select
              value={theme_type}
              onChange={(e) => handleChangeSettings('theme_type', e.target.value)}
            >
              {themeOptions}
            </Select>
          </FormControl>
        </ExpPanel>
      </Grid>
      <Grid item xs={12}>
        <ExpPanel header={<Typography>Контент</Typography>}>
          <FormControl className={classes.formControl}>
            <TextField
              value={news_per_page}
              inputProps={{ min: '5', max: '20', step: '1' }}
              label="Количество новостей на странице"
              type="number"
              onChange={(e) => handleChangeSettings('news_per_page', e.target.value)}
            />
          </FormControl>
        </ExpPanel>
      </Grid>
  </Grid>
  );
};

export default SettingsMainPage;
