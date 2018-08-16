import React from 'react';
import { storiesOf } from '@storybook/react';
import test from '../../../../util/withTests';

import '../../../../styles.scss';

import Title from '../../Elements/Title';
import Subtitle from '../../Elements/Subtitle';
import Container from '../../Layout/Container';
import Hero from './Hero';

storiesOf('Bulma.Layout.Hero', module)
  .addDecorator(test(/Hero/))
  .add('with no props', () => <Hero>Title</Hero>)
  .add('with body', () => (
    <Hero>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with primary ', () => (
    <Hero primary>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with info', () => (
    <Hero info>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with success', () => (
    <Hero success>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with warning', () => (
    <Hero warning>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with danger', () => (
    <Hero danger>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with light', () => (
    <Hero light>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with dark', () => (
    <Hero dark>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with bold', () => (
    <Hero primary bold>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with size=medium', () => (
    <Hero primary size="medium">
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with size=large', () => (
    <Hero primary size="large">
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with fullHeight', () => (
    <Hero primary fullHeight>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
    </Hero>
  ))
  .add('with fullHeight, header and footer', () => (
    <Hero primary fullHeight>
      <Hero.Head>Hero Head</Hero.Head>
      <Hero.Body>
        <Container>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Container>
      </Hero.Body>
      <Hero.Foot>Hero Foot</Hero.Foot>
    </Hero>
  ));
