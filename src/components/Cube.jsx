function Cube() {
  return (
    <div className="cube-scene">

      <div className="cube">

        <div className="cube-face cube-front"></div>
        <div className="cube-face cube-back"></div>
        <div className="cube-face cube-right"></div>
        <div className="cube-face cube-left"></div>
        <div className="cube-face cube-top"></div>
        <div className="cube-face cube-bottom"></div>

      </div>

      <div className="cube-platform"></div>

      <div className="small-cube small-one"></div>
      <div className="small-cube small-two"></div>
      <div className="small-cube small-three"></div>

    </div>
  );
}

export default Cube;