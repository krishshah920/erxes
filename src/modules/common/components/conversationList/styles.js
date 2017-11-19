import styled, { css } from 'styled-components';
import { colors, dimensions } from '../../styles';

const ConversationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const RowContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const FlexContent = styled.div`
  flex: 1;

  span {
    margin-top: ${dimensions.unitSpacing}px;
  }

  > span + span {
    margin-left: 5px;
  }
`;

const CheckBox = styled.div`
  margin-top: ${dimensions.unitSpacing}px;
  margin-right: ${dimensions.unitSpacing}px;
`;

const MainInfo = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    float: left;
    margin-right: ${dimensions.unitSpacing}px;
  }
`;

const CustomerName = styled.div`
  font-weight: 500;
`;

const SmallText = styled.div`
  color: ${colors.colorCoreGray};
  font-size: 12px;
`;

const MessageContent = styled.div`
  margin-top: ${dimensions.unitSpacing}px;
  word-break: break-word;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const RowItem = styled.li`
  padding: ${dimensions.coreSpacing}px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${colors.borderPrimary};
  transition: all ease 0.3s;

  background: ${props => props.isActive && colors.bgActive};

  ${props =>
    !props.isRead &&
    css`
      background: ${colors.bgUnread};

      ${MessageContent} {
        font-weight: 600;
      }
    `};
  &:hover {
    background: ${props =>
      !props.isRead || props.isActive ? '' : colors.bgLight};
    cursor: pointer;
  }
`;

const AssigneeImg = styled.img`
  height: 25px;
  line-height: 25px;
  border-radius: 25px;
`;

const AssigneeWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-end;
`;

export {
  ConversationItems,
  AssigneeImg,
  AssigneeWrapper,
  RowItem,
  RowContent,
  FlexContent,
  CheckBox,
  MainInfo,
  CustomerName,
  SmallText,
  MessageContent
};
