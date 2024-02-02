import { useState } from 'react';
import { BtnWrapper, CheckBox, ButtonLabel } from './styled';

const Toggle = () => {
  const [latestSort, setLatestSort] = useState(true);

  const toggleHandler = () => {
    setLatestSort((prev) => !prev);
  };

  return (
    <BtnWrapper>
      <CheckBox type="checkbox" id="toggleBtn" onChange={toggleHandler} />
      <ButtonLabel htmlFor="toggleBtn" latestSort={latestSort} />
    </BtnWrapper>
  );
};

export default Toggle;
