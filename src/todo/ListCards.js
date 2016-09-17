import React, { Component } from 'react';

import './ListCards.css';
/**
 * Componente principal que está sendo renderizado
 */
class ListCards extends Component {

  /**
   * Renderiza o componente
   */
  render() {
    return (
      <div className="todo-grid">
        
			
		<form method="post">
			<fieldset>
					<legend>What is Your Favorite Pet?</legend>
							<input type="checkbox" name="animal" value="Cat" />Cats <br />
							<input type="checkbox" name="animal" value="Dog" />Dogs<br />						
			</fieldset>
		</form>
      </div>
    );
  }
}

// Exporta o componente
export default ListCards;
