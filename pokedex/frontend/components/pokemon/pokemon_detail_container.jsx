import {connect} from 'react-redux';
import {requestPokemon} from '../../actions/pokemon_actions';
import {selectPokemon} from '../../reducers/selectors';
import {PokemonDetail} from './pokemon_detail';


const mapStateToProps = (state, ownProps) => { 
  return {
  banana: "banana",
  pokemon: state.entities.pokemon[ownProps.match.params.id]
}};

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)) // dispatch requestAllPokemon action.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);