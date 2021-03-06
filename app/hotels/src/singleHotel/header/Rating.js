// @flow

import * as React from 'react';
import { Stars } from '@kiwicom/react-native-app-shared';
import {
  TranslationFragment,
  DummyTranslation,
} from '@kiwicom/react-native-app-translations';

type Props = {|
  stars?: ?number,
  score?: ?number,
  description?: ?string,
|};

export default function Rating({ stars, score, description }: Props) {
  const reviewDelimiter = score && description ? ' ' : '';
  const review = `${score || ''}${reviewDelimiter}${description || ''}`;
  const starsDelimiter = stars && (score || description) ? ' - ' : '';

  return (
    <TranslationFragment>
      <Stars rating={stars || 0} />
      <DummyTranslation id={starsDelimiter} />
      <DummyTranslation id={review} />
    </TranslationFragment>
  );
}
