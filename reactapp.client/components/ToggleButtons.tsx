import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

// Define a type for the radio structure
type RadioType = {
  name: string;
  value: string;
};

const ToggleButtons: React.FC = () => {
  const [radioValue, setRadioValue] = useState<string>('1');

  const radios: RadioType[] = [
    { name: 'Yearly', value: '1' },
    { name: 'Monthly', value: '2' },
  ];

  return (
    <ButtonGroup style={{marginTop:'5px'}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={radioValue === radio.value ? 'primary' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
    </ButtonGroup>
  );
};

export default ToggleButtons;
