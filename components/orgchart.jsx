// OrgChart.jsx
import React, { useState } from 'react';
import agentData from './orgData';
import AgentModal from './AgentModal';
import './OrgChart.css';

const OrgChart = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const openModal = (agentKey) => {
    setSelectedAgent(agentData[agentKey]);
  };

  const closeModal = () => {
    setSelectedAgent(null);
  };

  const levelOne = ['founder'];
  const levelTwo = ['bobby'];
  const levelThree = [
    'projects', 'ops', 'accounting', 'audit', 'bizdev', 'devops', 'support', 'events', 'legal'
  ];

  const renderCards = (keys) => (
    <div className="org-level">
      {keys.map((key) => (
        <div className="org-card" key={key} onClick={() => openModal(key)}>
          {agentData[key].title}
        </div>
      ))}
    </div>
  );

  return (
    <div className="org-chart-container">
      {renderCards(levelOne)}
      {renderCards(levelTwo)}
      {renderCards(levelThree)}

      {selectedAgent && (
        <AgentModal agent={selectedAgent} onClose={closeModal} />
      )}
    </div>
  );
};

export default OrgChart;

