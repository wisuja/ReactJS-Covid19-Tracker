import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

export default function Cards({ data: { confirmed, deaths, recovered, lastUpdate } }) {
  if (!confirmed)
    return (
      <Typography color='textSecondary' gutterBottom>Loading...</Typography>
    )

  let categories = [
    {
      type: 'infected',
      text: 'Number of active cases of COVID-19',
      value: confirmed.value
    },
    {
      type: 'recovered',
      text: 'Number of recoveries from COVID-19',
      value: recovered.value
    },
    {
      type: 'deaths',
      text: 'Number of deaths caused by COVID-19',
      value: deaths.value
    }
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {categories.map((category) => (
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[`${category.type}`])}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom className={styles.capitalize}>{category.type}</Typography>
              <Typography variant='h5'>
                <CountUp start={0} end={category.value} duration={2.5} separator=','>
                </CountUp>
              </Typography>
              <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant='body2'>{category.text}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
