import React, { Component } from 'react';
import { track } from '../../helpers/events';
import { storeItem, getItemFromStorage } from '../../helpers/localStorage';
import { ContactInfo, Plans, TermsSection, PageFooter } from './view';
import { Wrapper } from './style';

class Support extends Component {
  componentDidMount() {
    track('support', 'viewed', null);
  }

  render() {
    return (
      <Wrapper data-e2e-id="support-page">
        <ContactInfo />
        <TermsSection />
        <PageFooter />
      </Wrapper>
    );
  }
}
export default Support;