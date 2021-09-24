import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Header = styled.View`
  height: 90px;
  background-color: #202020;
  justify-content: center;
  align-items: center;
  border-color: #707070;
  border-left-color: #202020;
  border-right-color: #202020;
  border-top-color: #202020;
  border-style: solid;
  border-width: 2px;
`;

export const TextTitle = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;

export const TextTitle2 = styled(TextTitle)`
  font-size: 20px;
`;

export const ViewTextInfo = styled.View`
  width: 80px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TextoDescricao = styled.Text`
  font-size: 13px;
  color: #fff;
`;

export const ViewTextDescription = styled.View`
  flex: 1;
`;

export const TextDescription = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
`;

export const ViewTotal = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding-top: 20px;
  /* padding-horizontal: 20; */
`;

export const ViewImageInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
