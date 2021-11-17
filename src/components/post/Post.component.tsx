import React from 'react';
import Author from './author';
import Painting from './painting';
import Statistics from './statistics';
import {IPaintingStatisticsProps} from './statistics/Statistics.component';
import styles from './Post.module.scss';
import {injectClassNames} from "@/utils/css";

export interface IPaintingProps {
  uri: string,
  name: string,
  originalSize: {
    height: number,
    width: number
  },
  authorName: any,
  stats: IPaintingStatisticsProps
}

export default function Post(props: IPaintingProps): JSX.Element {
  return (
    <article className={ injectClassNames('block', styles['post']) }>
      <Author { ...props } />
      <Painting { ...props } />
      <Statistics { ...props } />
    </article>
  );
}