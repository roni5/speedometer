import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.color}</p>
        <p>${this.props.item.price}</p>
      </div>
    );
  }
}

export default Item;
// let data = { speed: 30, history: [20, 25, 29] };
// var mappy = new Map([[1, 2], [3, 4]]);
// history = [{ speed: 20 }, { speed: 25 }, { speed: 29 }];
// data.speed;
// console.log(history.map(items => items.speed));
// console.log(data.history[0]);
// let result = data;
// result;
// function setData(data) {
//   let socData = data;
//   return socData.history;
// }
// console.log(setData(data));
// datas = [2, 3, 5, 6, 7];

// let newResult = JSON.parse(result.history[0]);
// newResult;
// console.log(newResult);

            // <div className="App">
            //   <strong>
            //     {/* {socData.map(items => console.log(`$items + you`))} Speed */}
            //   </strong>
            //   {/* // <input value={socData.data} onChange={changeValue} />; } */}
            //   {/* {console.log( JSON.stringify( results), 'I am here I am here' )} */}
            //   {/* {console.log(socData.data, 'speedy')} */}
            //   {/* {console.log(results, 'new result')} */}

            //   <header className="App-header">
            //     <SVG width={100} />
            //     <p className="center">Speedometer</p>
            //     {socData.map(data => (
            //       <div> {data} Hey thier hey ther</div>
            //     ))}
            //   </header>
            //   <Speed />

            //   <div className="container">
            //     <Button>click {result}</Button>
            //     {/* <button onClick={() => handleData}>{Speed}handleData</button> */}
            //     <div className="card">Hello </div>
            //   </div>
            // </div>;
