import DateFnsUtils from '@date-io/date-fns';
import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { KeyboardDatePicker, MaterialUiPickersDate, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';

import ExpPanel from '../ExpPanel';
import { sorts } from './constants';
import { styles } from './styles';

export interface IFilters {
  q: string;
  from: MaterialUiPickersDate;
  to: string | null;
  sortBy: ESortBy;
}

export enum ESortBy {
  publishedAt = 'publishedAt',
  relevancy = 'relevancy',
  popularity = 'popularity',
}

interface IFiltersPanelProps {
  onChange: (filters: IFilters) => void;
}

const FiltersPanel: React.FC<IFiltersPanelProps> = ({ onChange }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [filters, setFilters] = useState<IFilters>({
    q: '',
    from: null,
    to: null,
    sortBy: ESortBy.publishedAt,
  });

  const handleFilterChange = (
    filter_name: 'q' | 'from' | 'to' | 'sortBy',
    value: string | ESortBy | MaterialUiPickersDate,
  ) => {
    setFilters({ ...filters, [filter_name]: value });
  };

  const sortOptions = sorts.map(sort => (
    <MenuItem key={sort.value} value={sort.value}>
      {sort.name}
    </MenuItem>
  ));
  return (
    <ExpPanel detailsClass={classes.content} className={classes.panel} header="Фильтры">
      <div>
        <TextField
          onChange={(e: any) => handleFilterChange('q', e.target.value)}
          value={filters.q}
          className={`${classes.item} ${classes.searchItem}`}
          label="Поиск"
        />
        <FormControl className={classes.item}>
          <InputLabel>Сортировка</InputLabel>
          <Select onChange={(e: any) => handleFilterChange('sortBy', e.target.value)} value={filters.sortBy}>
            {sortOptions}
          </Select>
        </FormControl>
      </div>
      <div className={classes.dateRow}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.item}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="С"
            value={filters.from}
            onChange={(date: MaterialUiPickersDate) => handleFilterChange('from', date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            className={classes.item}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="До"
            value={filters.to}
            onChange={(date: MaterialUiPickersDate) => handleFilterChange('to', date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <Button onClick={() => onChange(filters)}>Применить</Button>
        </MuiPickersUtilsProvider>
      </div>
    </ExpPanel>
  );
};

export default FiltersPanel;
