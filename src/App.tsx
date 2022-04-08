/*
 * @Author: hft
 * @Date: 2022-04-07 15:54:41
 * @LastEditors: hft
 * @LastEditTime: 2022-04-08 11:19:14
 * @Description: file content
 */
import React from 'react';
import ExampleOne from './example/example01';
import ExampleTwo from './example/example02';
import ExampleThree from './example/example03';
import ExampleFour from './example/example04';
import ExampleFive from './example/example05';
import ExampleSix from './example/example06';
// import './App.css';

function App() {
  return (
    <div >
      <div>
        <h2>例子1</h2>
        <ExampleOne name='vortesnail' age={25} />
      </div>
      <div>
        <h2>例子2</h2>
        <ExampleTwo title='是标题啊' content='是内容啊' />
      </div>
      <div>
        <h2>例子3</h2>
        <ExampleThree />
      </div>
      <div>
        <h2>例子4</h2>
        <ExampleFour />
      </div>
      <div>
        <h2>例子5</h2>
        <ExampleFive />
      </div>
      <div>
        <h2>例子6</h2>
        <ExampleSix />
      </div>
    </div>
  );
}

export default App;
