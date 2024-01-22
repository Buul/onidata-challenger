import { FC } from 'react';

import { icons } from '@/components/ui/utils/alertIcons';

import * as Styled from './Alert.styled';
import { AlertProps } from './Alert.types';

const Alert: FC<AlertProps> = ({
  children,
  spacing,
  fullWidth,
  variant = 'info',
}) => (
  <Styled.AlertWrapper
    spacing={spacing}
    fullWidth={fullWidth}
    variant={variant}
  >
    {icons[variant]}
    <Styled.AlertMessage variant={variant}>{children}</Styled.AlertMessage>
  </Styled.AlertWrapper>
);

export default Alert;
