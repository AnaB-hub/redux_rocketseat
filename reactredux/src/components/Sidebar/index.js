import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const { modules } = this.props;

    return (
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
  }
}
