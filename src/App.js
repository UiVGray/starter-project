import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Fridge',
    amount: 699.99
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 25),
    description: 'MacBook',
    amount: 1754.72
  },
  {
    id: 'c3',
    date: new Date(2022, 3, 1),
    description: 'Jeans',
    amount: 49.99
  }
];

const App = () => {

const [costs, setCosts] = useState(INITIAL_COSTS);

const addCostHandler = (cost) => {
  
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  });
};
  
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
};

export default App;
