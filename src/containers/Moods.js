import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { updateCoffee, updateSnack, updateNap, updateStudy } from '../actions/moodsActions';
import { getActions, getFace } from '../selectors/moodsSelectors';


// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection} />
    <Face emoji={emoji} />
  </>
);

const mapStateToProps = state => ({
  actions: getActions(state),
  emoji: getFace(state),
});

const moodsMethod = {
  DRINK_COFFEE: updateCoffee,
  EAT_SNACKS: updateSnack,
  TAKE_NAP: updateNap,
  STUDY: updateStudy
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(moodsMethod[name]({}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
