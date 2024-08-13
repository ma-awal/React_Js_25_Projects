import React, { useState } from 'react';
import './accordion.css';
import data from './data.js';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="accordion-wrapper">
      <h1>Accordion</h1>

      <div className="accordion ">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="accordion-item" key={dataItem.id}>
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="accordion-title"
                >
                  <h3>{dataItem.title}</h3>
                  <span>{selected === dataItem.id ? '-' : '+'}</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="accordion-content">
                    <p>{dataItem.text}</p>
                  </div>
                ) : null}
              </div>
            ))
          : 'No Data is Available'}
      </div>
    </div>
  );
}
