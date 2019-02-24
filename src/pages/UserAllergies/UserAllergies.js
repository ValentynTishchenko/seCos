import React from 'react';
import PropTypes from 'prop-types';

export class UserAllergies extends React.Component {

  render() {
    const {allergies, goBack} = this.props;
    return (
      <section className='user-allergies-page'>
        <button onClick={goBack}>Back</button>
      </section>
    );
  }

  static propTypes = {
    goBack: PropTypes.func.isRequired,
    allergies: PropTypes.array,
  };

  static defaultProps = {
    allergies: []
  };
}
