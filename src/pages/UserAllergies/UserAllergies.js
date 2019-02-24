import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

export class UserAllergies extends React.Component {

  renderSomeBadScreen = () => {
    const {allergies} = this.props;
    return (
      <section>
        <dl>
          {allergies.map((item, index) => {
            return (<React.Fragment>
              <div key={index} className='allergy'>
                <br />
                <div className='details-left'></div>
                <dt className='title'>
                  {item.name}
                </dt>
                <dd className='context'>
                  {item.disease || 'very bad disease'}
                </dd>
                <div className='details'>
                  <p>Details</p>
                </div>
              </div>
            </React.Fragment>);
          })}
        </dl>
      </section>
    );
  };

  renderGodScreen = () => {
    const {goBack} = this.props;
    return (
      <sections>
        <p className='cong-text'>This cosmetic safe for you</p>
        <p>
          <button className='back-btn' onClick={goBack}>Return back to scanner</button>
        </p>
      </sections>
    );
  };

  render() {
    const {allergies, goBack, isAllergiesLoaded, isAllergiesLoading} = this.props;
    let content;
    // content = allergies.length > 0 ? this.renderSomeBadScreen() : this.renderGodScreen();
    if (isAllergiesLoading) {
      content = (<div>spinner</div>);
    } else {
      if (isAllergiesLoaded) {
        content = allergies.length > 0 ? this.renderSomeBadScreen() : this.renderGodScreen();
      } else {
        goBack();
      }
    }

    return (
      <section className='user-allergies-page'>
        {content}
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
