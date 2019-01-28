import React from 'react';
import Button from '../Button';
import Icon from '../../Icon/Icon';

export default (
  <Button
    uxpId="button1"
    stretched
    type="error"
    mode="filled"
    icon={<Icon uxpId="button2" size="s" icon="TickerSvg" />}
    size="s"
  >
    Merge!
  </Button>
);
