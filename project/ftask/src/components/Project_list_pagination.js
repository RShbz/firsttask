import React, { Component } from 'react'

export default class Project_list_pagination extends Component {
    
    render() {
        return (
            <div>
            <nav aria-label="Page">
  <ul className="pagination">
    <li className="page-item disabled">
      <a className="page-link" href="!#" tabindex="-1" aria-disabled="true">Önceki</a>
    </li>
    <li className="page-item"><a className="page-link" href="!#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="!#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="!#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="!#">Sonraki</a>
    </li>
  </ul>
</nav>
</div>
        )
    }

    
};

