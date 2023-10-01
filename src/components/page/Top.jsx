import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

export const Top = () => {
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SearchInput />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
