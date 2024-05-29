import React from 'react';
import styled from 'styled-components';
import { FaUserPlus, FaCrown, FaEnvelope, FaTasks, FaComments, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

const actions = [
  { icon: <FaUserPlus />, label: 'Add Users' },
  { icon: <FaCrown />, label: 'Add Admins' },
  { icon: <FaEnvelope />, label: 'Send an Update' },
  { icon: <FaTasks />, label: 'Add to a Task' },
  { icon: <FaComments />, label: 'Go to Chat' },
  { icon: <FaCalendarAlt />, label: 'Create an Event' },
  { icon: <FaFileAlt />, label: 'Create a Form' },
];

const QuickActions = () => {
  return (
    <ActionsContainer>
      {actions.map((action, index) => (
        <ActionCard key={index}>
          <ActionIcon>{action.icon}</ActionIcon>
          <ActionLabel>{action.label}</ActionLabel>
        </ActionCard>
      ))}
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100px;
  margin: 10px;
  background-color: #e6f1fc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ActionIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: #4da6ff;
`;

const ActionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export default QuickActions;
