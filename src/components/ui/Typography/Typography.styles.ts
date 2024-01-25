import styled, { css } from 'styled-components';

import { addSpacingBottom } from '@/components/ui/utils/components/SpacingBottom/SpacingBottom.styles';
import breakpoints from '@/utils/mediaQueries/media';

import { TypographyStyled } from './Typography.types';

const TypographyBase = css<TypographyStyled>`
  text-align: ${({ align }) => align};
  ${({ spacing }) => spacing && addSpacingBottom(spacing)};
`;

const variants = {
  title: () => css`
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: ${({ theme }) => theme.lineHeight.base};
    color: ${({ theme }) => theme.colors.text.dark};

    /* @media (min-width: ${breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize.lg};
    } */
  `,
  subTitle: () => css`
    font-weight: ${({ theme }) => theme.fontWeight.base};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: ${({ theme }) => theme.lineHeight.high};
    color: ${({ theme }) => theme.colors.text.dark};

    /* @media (min-width: ${breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSize.md};
    } */
  `,

  menu: () => css`
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
  `,
};

export const H5 = styled.h5<TypographyStyled>`
  ${TypographyBase}

  ${({ variant }) => variants[variant || 'title']}
`;

export const ParagraphSmall = styled.p<TypographyStyled>`
  ${TypographyBase}

  ${({ variant }) => variants[variant || 'title']}
`;

export const Span = styled.span<TypographyStyled>`
  ${TypographyBase}
  ${({ variant }) => variants[variant || 'title']}
`;
