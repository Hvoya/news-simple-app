import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useEffect, useState } from 'react';
import { ELang, ISource } from '../../store/types';
import { fetchSources } from './dal';
import styles from './styles';

interface ISourcesSelectProps {
  lang: ELang;
  values: string[];
  onChange: (values: string[]) => void;
}

const SourcesSelect: React.FC<ISourcesSelectProps> = ({ lang, values, onChange }) => {
  const [sources, setSources] = useState<ISource[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchSources(lang).then(res => {
      const { sources: fetchedSources } = res.data;
      setSources(fetchedSources);
      // При смене языка поумолчанию выбираем первые 3 источника
      onChange(fetchedSources.slice(0, 3).map(source => source.id));
    });
  }, [lang]);

  const items = sources.map(source => (
    <MenuItem key={source.id} value={source.id}>
      {source.name}
    </MenuItem>
  ));

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (value.length === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);
    onChange(value);
  };

  return (
    <FormControl error={isError} className={classes.container}>
      <InputLabel htmlFor="select-multiple">Источники</InputLabel>
      <Select
        multiple
        value={values}
        onChange={handleChange}
        input={<Input id="select-multiple" />}
        // MenuProps={MenuProps}
      >
        {items}
      </Select>
      {isError && <FormHelperText>Минимум 1 источник</FormHelperText>}
    </FormControl>
  );
};

export default SourcesSelect;
