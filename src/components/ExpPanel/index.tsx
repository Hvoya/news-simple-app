import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

interface IExpPanelProps {
  children: React.ReactNode;
  header: React.ReactNode;
  className?: string;
}

const ExpPanel: React.FC<IExpPanelProps> = ({ children, header, className }) => {
  return (
    <ExpansionPanel className={className}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>{header}</ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpPanel;
