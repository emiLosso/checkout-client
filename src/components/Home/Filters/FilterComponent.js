import React, { Component } from 'react';


class FilterComponent extends Component {
  
  closeAllSelect(elmnt) {
  	  /*a function that will close all select boxes in the document,
  	  except the current select box:*/
  	  var x, y, i, arrNo = [];
  	  x = document.getElementsByClassName("select-items");
  	  y = document.getElementsByClassName("select-selected");

  	  for (i = 0; i < y.length; i++) {
  	    // eslint-disable-next-line
  	    if (elmnt == y[i]) {
  	      arrNo.push(i)
  	    } else {
  	      y[i].classList.remove("select-arrow-active");
  	    }
  	  }

  	  for (i = 0; i < x.length; i++) {
  	    if (arrNo.indexOf(i)) {
  	      x[i].classList.add("select-hide");
  	    }
  	  }
  }


  render() {
    return (
	  	<div className="custom-select">
	  	  <select>
	  	    <option value="Tipo">{ this.props.name }</option>
	  	  </select>

	  	  <div className="select-selected" onClick={e => {
	  	  	e.stopPropagation();
	  	  	this.closeAllSelect(e.target);
	  	  	e.target.nextSibling.classList.toggle("select-hide");
	  	  	e.target.classList.toggle("select-arrow-active");
	  	  }}>
	  	  	{ this.props.selected.name }
	  	  </div>

	  	  <div className="select-items select-hide"> 
	      	  {
	      	  	this.props.options.map(option => (
	      	  		<div
	      	  			key={option.name}
	      	  			className={`${option.name === this.props.selected.name ? 'same-as-selected' : ''}`} 
	      	  			onClick={e => {
	      	  				this.closeAllSelect();
	      	  				this.props.select(option);
	      	  			}}
	      	  		>
	      	  			{ option.name }
	      	  		</div>
	      	  	))
	      	  }
	  	  </div>

	  	</div>
    );
  }
}

export default FilterComponent;
