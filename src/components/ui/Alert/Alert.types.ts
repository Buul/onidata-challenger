import { HtmlHTMLAttributes } from 'react';

import { SpacingBottomType } from '@/types/SpacingBottom';

type Variants = 'info' | 'warning' | 'success' | 'error';

export type AlertStyled = {
  fullWidth?: boolean;
  variant?: Variants;
  spacing?: SpacingBottomType;
};

export type AlertProps = HtmlHTMLAttributes<HTMLDivElement> & AlertStyled;
