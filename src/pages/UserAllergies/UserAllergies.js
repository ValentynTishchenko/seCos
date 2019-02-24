import React from 'react';
import PropTypes from 'prop-types';

export class UserAllergies extends React.Component {

  render() {
    const {allergies, goBack, isAllergiesLoaded, isAllergiesLoading} = this.props;
    let content;
    if (isAllergiesLoading) {
      content = (<div>spinner</div>);
    } else {
      if (isAllergiesLoaded) {
        content = allergies.length > 0 ? (<section>you have some allergies</section>) : (<sections>it is safe for you</sections>  )
      } else {
        goBack();
      }
    }

    return (
      <section className='user-allergies-page'>
        {content}
        <button onClick={goBack}>Back</button>
      </section>
    );
  }

  static propTypes = {
    goBack: PropTypes.func.isRequired,
    allergies: PropTypes.array,
    isAllergiesLoaded: PropTypes.bool,
    isAllergiesLoading: PropTypes.bool,
  };

  static defaultProps = {
    allergies: []
  };
}
