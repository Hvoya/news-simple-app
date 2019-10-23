import {
  FormControl,
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

  function handleChangeNewsPerPage(value: number) {
    if (value > 20) { value = 20; }
    if (value < 5) { value = 5; }
    dispatch(setSettings({ news_per_page: value }));
  }

  return (
     <div>
       <Typography className={classes.bottomSpacing} gutterBottom variant="h2" component="div">
         Здесь вы можете изменить внешний вид приложения.
       </Typography>
       <div className={classes.panelsContainer}>
         <ExpPanel className={classes.bottomSpacing} header={<Typography >Шрифт</Typography>}>
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
         <ExpPanel className={classes.bottomSpacing} header={<Typography>Стили</Typography>}>
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
         <ExpPanel className={classes.bottomSpacing} header={<Typography>Контент</Typography>}>
           <FormControl className={classes.newsPerPage}>
             <TextField
               value={news_per_page}
               inputProps={{ min: '5', max: '20', step: '1' }}
               label="Количество новостей на странице"
               type="number"
               onChange={(e) => handleChangeNewsPerPage(parseInt(e.target.value, 10))}
             />
           </FormControl>
         </ExpPanel>
       </div>
     </div>
  );
};

export default SettingsMainPage;
