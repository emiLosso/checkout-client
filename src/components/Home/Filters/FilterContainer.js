import React, { Component } from 'react';

import FilterComponent from './FilterComponent';

import FetchUtil from '../../../libs/utils/FetchUtil.js';
import Constants from '../../../constants.js';


class FilterContainer extends Component {

  constructor(props) {
  	super(props);

  	this.state = {
  		brands: [],
  		models: [],
  		carTypes: [{'name': 'Auto'}, {'name': 'Camioneta'}],
  		selectedBrand: {'name': 'Marca'},
  		selectedCarType: {'name': 'Tipo'},
  		selectedModel: {'name': 'Modelo'}
  	}
  }

  componentWillMount() {
  	FetchUtil.get(Constants.apiUrls.brands())
		.then(brands => brands && this.setState({ brands }));
  }

  getModels(brandId) {
  	FetchUtil.get(Constants.apiUrls.models(brandId))
		.then(models => models && this.setState({ models }));
  }

  goToFilterPage() {
  	console.log(this.state.selectedBrand, this.state.selectedModel, this.state.selectedCarType);
  }

  canFilter() {
  	const selectedCarType = ((this.state.selectedCarType.name !== "Tipo") && (this.state.selectedCarType.name !== null));
  	const selectedBrand = ((this.state.selectedBrand.name !== 'Marca') && (this.state.selectedBrand.name !== null));
  	const selectedModel = ((this.state.selectedModel.name !== 'Modelo') && (this.state.selectedModel.name !== null));
  	
  	return (selectedBrand && selectedCarType && selectedModel);
  }

  render() {
    return (
      <div className="filters">
      	<div className="filters__title"> Encontrá los mejores precios!</div>

      	<div className="filters__container">

      		<FilterComponent 
      			name="Tipo" selected={this.state.selectedCarType}
      			options={this.state.carTypes}
      			select={selectedCarType => this.setState({ selectedCarType })}
      		/>

      		<FilterComponent 
      			name="Marca" selected={this.state.selectedBrand}
      			options={this.state.brands}
      			select={selectedBrand => {
      				this.getModels(selectedBrand.id);
      				this.setState({ selectedBrand });
      			}}
      		/>

      		<FilterComponent 
      			name="Modelo" selected={this.state.selectedModel}
      			options={this.state.models}
      			select={selectedModel => this.setState({ selectedModel })}
      		/>

	      	<button className="btn" disabled={!this.canFilter()}>
	      		<span className="btn__title" onClick={e => this.goToFilterPage()}> BUSCAR </span>
	      	</button>

      	</div>
      </div>
    );
  }
}

export default FilterContainer;
