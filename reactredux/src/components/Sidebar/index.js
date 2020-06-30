import React from "react";

import { connect } from "react-redux";

const Sidebar = ({ modules }) => (
  <aside>
    {modules.map((module) => {
      return (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => {
              return <li key={lesson.id}>{lesson.title}</li>;
            })}
          </ul>
        </div>
      );
    })}
  </aside>
);

export default connect((state) => ({ modules: state }))(Sidebar);
