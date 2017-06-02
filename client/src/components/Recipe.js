/* eslint-disable */
import React from 'react';
import {connect} from 'react-redux';
import {submitRecipe, fetchRecipes} from '../actions';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipes(this.props.restaurantId))
  }
  render() {
    if(!this.props.haveRecipe) {
      return <p>{this.props.errorMessage}</p>
    }
    const recipesList = this.props.recipes.map((recipe, index) => {
      const {name, ingredients, cookingTime, instructions} = recipe;
      return <li key={index}>
        <p className="name">{name}</p>
        <p className="ingredients">{ingredients}</p>
        <p className="instructions">{instructions}</p>
        <p className="cookingTime">{cookingTime}</p>
      </li>
    })
    return (
      <ul className="ind-recipes-container">{recipesList}</ul>
    )
  }
}
export const mapStateToProps = (state, props) => ({
  recipes: state.currentRecipes.recipes,
  haveRecipe: state.haveRecipe,
  errorMessage: state.error
})

export default connect(mapStateToProps)(Recipe);
