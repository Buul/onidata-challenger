import styled, { css } from 'styled-components';

import { addSpacingBottom } from '../utils/components/SpacingBottom/SpacingBottom.styles';

import { AlertStyled } from './Alert.types';

const variantWrapper = {
  info: css`
    background: ${({ theme }) => theme.colors.alertBackground.info};
    border-left: 2px solid ${({ theme }) => theme.colors.alert.info};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.alertBackground.error};
    border-left: 2px solid ${({ theme }) => theme.colors.alert.error};
  `,
  warning: css`
    background: ${({ theme }) => theme.colors.alertBackground.warning};
    border-left: 2px solid ${({ theme }) => theme.colors.alert.warning};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.alertBackground.success};
    border-left: 2px solid ${({ theme }) => theme.colors.alert.success};
  `,
};

const variantMessage = {
  info: css`
    color: ${({ theme }) => theme.colors.alert.info};
  `,
  error: css`
    color: ${({ theme }) => theme.colors.alert.error};
  `,
  warning: css`
    color: ${({ theme }) => theme.colors.alert.warning};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.alert.success};
  `,
};

export const AlertWrapper = styled.div<AlertStyled>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '239px')};
  height: 56px;
  padding: 0 18px;
  display: flex;
  align-items: center;

  ${({ spacing }) => spacing && addSpacingBottom(spacing)};
  ${({ variant }) => variantWrapper[variant || 'info']};
`;

export const AlertMessage = styled.span<AlertStyled>`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-left: ${({ theme }) => theme.spacing.sm};
  ${({ variant }) => variantMessage[variant || 'info']};
`;
