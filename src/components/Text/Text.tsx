/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { TypographyVariant, Color } from '../../theme/theme';

export type Props = {
  variant: TypographyVariant;
  color: Color;
};

const StyledText = styled.p<Props>`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  font-weight: ${({ theme, variant }) => theme.typography[variant].weight};
  font-size: ${({ theme, variant }) => theme.typography[variant].size}px;
  color: ${({ color }) => color};
`;

const Text: React.FC<Props> = (props) => {
  const theme = useTheme();
  const textColor =
    props.color in theme.colors
      ? theme.colors[props.color as Color]
      : props.color;

  // @ts-ignore
  return <StyledText {...props} color={textColor} />;
};

export default Text;
