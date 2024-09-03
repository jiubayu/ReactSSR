import React from 'react';
import styles from './Home.css';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import withStyles from 'isomorphic-style-loader-react18/withStyles';

 function Home() {
  // console.log(styles, styles._getContent(), styles._getCss(), 'styles---')
  // useStyles(styles);
  return (
    <div className={styles.theme}>Home</div>
  )
}

export default withStyles(styles)(Home);