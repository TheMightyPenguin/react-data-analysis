import styled from 'styled-components';
import { Theme } from '../../theme/theme';

export type Props = {
  spacing: keyof Theme['spacing'];
};

const Stack = styled.div<Props>`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({ theme, spacing }) =>
      theme.spacing[spacing]}px !important;
  }
`;

export default Stack;
