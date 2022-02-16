import styles from './Stopwatch.module.scss';

const Stopwatch = props => {

  return (
    <div className={styles.stopwatch}>
          <span>{("0" + Math.floor(props.time / 3600000) % 24).slice(-2)}:</span>
          <span>{("0" + Math.floor(props.time / 60000) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor(props.time / 1000) % 60).slice(-2)}.</span>
          <span>{("0" + (props.time / 10) % 100).slice(-2)}</span>
    </div>
  );
}

export default Stopwatch;