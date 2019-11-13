import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

function StyledRadio(props) {
  const styles = useStyles()

  return (
    <Radio
      className={styles.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(styles.icon, styles.checkedIcon)} />}
      icon={<span className={styles.icon} />}
      {...props}
    />
  );
}

export default function Choices({choices, value, onChange}) {
  return (
    <FormControl component="fieldset">
      <RadioGroup defaultValue={value} onChange={onChange} aria-label="gender" name="customized-radios">
          {choices.map((choice, index) => (
            <FormControlLabel key={index} value={index} control={<StyledRadio />} label={choice.value} />
          ))}
      </RadioGroup>
    </FormControl>
  )
}
