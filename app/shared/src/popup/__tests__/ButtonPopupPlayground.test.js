// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import ButtonPopup from '../ButtonPopup';

const noop = () => {};

describe('ButtonPopup playground', () => {
  it('renders in playground', () => {
    PlaygroundRenderer.render(
      <ButtonPopup
        buttonTitle={<DummyTranslation id="Save" />}
        isVisible={true}
        onSave={noop}
        onClose={noop}
      >
        <DummyTranslation id="Child" />
      </ButtonPopup>,
    );
  });
});
