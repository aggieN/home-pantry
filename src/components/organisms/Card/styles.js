import styled from 'styled-components';
import Heading from 'components/atoms/Heading';

export const Wrapper = styled.div`
  box-shadow: -7px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 1.5rem;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.greyLight};
  width: 100%;
  height: 5rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

export const StyledHeading = styled(Heading)`
  display: block;
  padding: 1rem 2rem;
`;

export const ListWrapper = styled.div`
  padding: 2rem;
`;
