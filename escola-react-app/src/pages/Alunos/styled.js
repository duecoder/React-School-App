import styled from 'styled-components';
import { errorColor, iconColor, primaryColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid ${iconColor};
  }

  .edit-icon {
    color: ${iconColor};
    padding-top: 5px;
    padding-right: 5px;
  }

  .remove-icon {
    color: red;
    padding-top: 5px;
    padding-right: 5px;
  }

  .user-circle {
    color: ${iconColor};
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  }
`;

export const ProfilePic = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  }
`;
