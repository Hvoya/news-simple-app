import {
  Checkbox,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentWrapper from '../../../components/ContentWrapper';
import ExpPanel from '../../../components/ExpPanel';
import SourcesSelect from '../../../components/SourcesSelect';
import { setHeader } from '../../../store/actions/header';
import { setSettings } from '../../../store/actions/settings';
import { EFontFamily, ELang, ETheme, IState } from '../../../store/types';
import { fontFamilyTypes, fontSizes, langs, themeTypes } from '../constants';
import { styles } from './styles';

type TSttingsFields =
  | 'font_family'
  | 'font_size'
  | 'theme_type'
  | 'news_per_page'
  | 'news_lang'
  | 'sources'
  | 'is_endless_news_list';

type TSettingsValues = number | string[] | EFontFamily | ETheme | ELang | boolean;

const SettingsMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHeader({
        title: 'Настройки',
      }),
    );
  }, [dispatch]);

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { font_size, theme_type, font_family, news_per_page, news_lang, sources, is_endless_news_list } = useSelector(
    (store: IState) => store.settings,
  );

  const fontSizeOptions = fontSizes.map(size => (
    <MenuItem key={size} value={size}>
      {size}px
    </MenuItem>
  ));
  const themeOptions = themeTypes.map(type => (
    <MenuItem key={type.value} value={type.value}>
      {type.name}
    </MenuItem>
  ));
  const fontFamilyOptions = fontFamilyTypes.map(type => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));
  const newsLangOptions = langs.map(lang => (
    <MenuItem key={lang.value} value={lang.value}>
      {lang.name}
    </MenuItem>
  ));

  function handleChangeSettings(field: TSttingsFields, value: TSettingsValues) {
    dispatch(setSettings({ [field]: value }));
  }

  function handleChangeNewsPerPage(value: number) {
    if (value > 20) {
      value = 20;
    }
    if (value < 5) {
      value = 5;
    }
    dispatch(setSettings({ news_per_page: value }));
  }

  return (
    <ContentWrapper>
      <Typography className={classes.heading} gutterBottom variant="h2" component="div">
        Здесь вы можете изменить внешний вид приложения.
      </Typography>
      <div className={classes.panelsContainer}>
        <ExpPanel
          detailsClass={classes.fontSettings}
          className={classes.bottomSpacing}
          header={<Typography>Шрифт</Typography>}
        >
          <FormControl className={`${classes.formControl} ${classes.fontSettingsFormControl}`}>
            <InputLabel>Размер шрифта</InputLabel>
            <Select value={font_size} onChange={(e: any) => handleChangeSettings('font_size', e.target.value)}>
              {fontSizeOptions}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Тип шрифта</InputLabel>
            <Select value={font_family} onChange={(e: any) => handleChangeSettings('font_family', e.target.value)}>
              {fontFamilyOptions}
            </Select>
          </FormControl>
        </ExpPanel>
        <ExpPanel className={classes.bottomSpacing} header={<Typography>Стили</Typography>}>
          <FormControl className={classes.formControl}>
            <InputLabel>Тема приложения</InputLabel>
            <Select value={theme_type} onChange={(e: any) => handleChangeSettings('theme_type', e.target.value)}>
              {themeOptions}
            </Select>
          </FormControl>
        </ExpPanel>
        <ExpPanel detailsClass={classes.contentSettings} header={<Typography>Контент</Typography>}>
          <FormControl className={`${classes.newsPerPage} ${classes.contentSettingsFormControl}`}>
            <TextField
              value={news_per_page}
              inputProps={{ min: '5', max: '20', step: '1' }}
              label="Количество новостей на странице"
              type="number"
              onChange={(e: any) => handleChangeNewsPerPage(parseInt(e.target.value, 10))}
            />
          </FormControl>
          <FormControl className={`${classes.formControl} ${classes.contentSettingsFormControl}`}>
            <InputLabel>Язык новостей</InputLabel>
            <Select value={news_lang} onChange={(e: any) => handleChangeSettings('news_lang', e.target.value)}>
              {newsLangOptions}
            </Select>
          </FormControl>
          <SourcesSelect
            className={`${classes.formControl} ${classes.contentSettingsFormControl}`}
            onChange={(value: string[]) => handleChangeSettings('sources', value)}
            values={sources}
            lang={news_lang}
          />
          <div className={`${classes.endlessNewsControl} ${classes.contentSettingsFormControl}`}>
            <span>Включить бесконечную подгрузку новостей:</span>
            <Checkbox
              checked={is_endless_news_list}
              onChange={(e: any) => handleChangeSettings('is_endless_news_list', e.target.checked)}
              value="is_endless_news_list"
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
            />
          </div>
        </ExpPanel>
      </div>
    </ContentWrapper>
  );
};

export default SettingsMainPage;
