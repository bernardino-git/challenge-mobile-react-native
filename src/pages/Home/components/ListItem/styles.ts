import styled from 'styled-components/native';
import { Constants } from '../../../../assets/Constants';

export const Image = styled.Image`
  width: ${Constants.AVATAR_SIZE};
  height: ${Constants.AVATAR_SIZE};
  border-radius: ${Constants.AVATAR_SIZE};
  margin-right: ${Constants.SPACING / 2};
`;

export const Title = styled.Text`
  font-size: 22;
  font-weight: 700;
`;

export const ContentCard = styled.View`
  flex-direction: row;
  align-items: center;
`;
