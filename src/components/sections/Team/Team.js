import React from "react";
import PropTypes from "prop-types";

import Teammate from "../../blocks/Teammate";

import "./Team.scss";

const Team = ({ team }) => {
  const renderTeammate = teammate => (
    <Teammate key={teammate.name} {...teammate} />
  );

  return (
    <section className="team">
      <div className="team__container container">
        <main className="team__main">{team.map(renderTeammate)}</main>
      </div>
    </section>
  );
};

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Team;
