import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image')
  .add('Default', () => (
    <Image />
  ))
  .add('with imageSrc', () => (
    <Image imageSrc="https://i.pinimg.com/originals/95/21/43/9521433436bee243df1b51b566f80cc8.jpg" />
  ))
