function RandomNumber(props) {
  const minNum = Math.ceil(props.min);
  const maxNum = Math.floor(props.max);
  const RandomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  
  return (
  <div className = "Random">
  <p>Random value between {props.min} and {props.max} = {RandomNum}</p>
  </div>
    );
}

export default RandomNumber