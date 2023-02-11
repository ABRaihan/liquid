import { useState } from 'react';

const buttonStyle = {
  padding: '5px 10px',
};

const initialInputs = {
  num1: '',
  num2: '',
  result: 0,
};
const getId = generateId();
export default function Calculator() {
  const [inputs, setInputs] = useState({ ...initialInputs });
  const [histories, setHistories] = useState([]);
  const handleInputChange = (e) => {
    const input = e.target;
    setInputs({ ...inputs, [input.name]: input.value });
  };
  const generateHistory = (data) => {
    setHistories([data, ...histories]);
  };

  const handleOperationClick = (operation) => {
    const operationValue = handleCalculation(operation);
    const history = {
      id: getId.next().value,
      values: { ...inputs, result: operationValue },
      operation,
      createdAt: new Date(),
    };
    generateHistory(history);
  };
  const handleCalculation = (operation) => {
    const generateValue = new Function(`return ${Number(inputs.num1)} ${operation} ${Number(inputs.num2)}`);
    const operationValue = generateValue();
    setInputs((prev) => ({ ...prev, result: operationValue }));
    return operationValue;
  };
  const handleClear = () => {
    setInputs({ ...initialInputs });
  };
  const handleRestore = (historyData) => {
    setInputs({ ...historyData.values });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>
        Result:
        {' '}
        {inputs.result}
      </h1>
      <div>
        <label>Inputs</label>
        <br />
        <input name="num1" type="number" value={inputs.num1} onChange={handleInputChange} />
        <br />
        <input name="num2" type="number" value={inputs.num2} onChange={handleInputChange} />
      </div>
      <div>
        <p>Operations</p>
        <button style={buttonStyle} type="button" onClick={handleOperationClick.bind(null, '+')}> + </button>
        <button style={buttonStyle} type="button" onClick={handleOperationClick.bind(null, '-')}> - </button>
        <button style={buttonStyle} type="button" onClick={handleOperationClick.bind(null, '*')}> * </button>
        <button style={buttonStyle} type="button" onClick={handleOperationClick.bind(null, '/')}> / </button>
        <button style={buttonStyle} type="button" onClick={handleOperationClick.bind(null, '%')}> % </button>
        <button style={buttonStyle} type="button" onClick={handleClear}> Clear </button>
      </div>
      <div>
        <h3>Histories</h3>
        {!histories.length ? <p>There is no histories</p>
          : (
            <ul>
              {histories.map((item, index) => (
                <li key={item.id}>
                  <p>
                    <strong>{index + 1}. </strong>
                    Operation: {item.values.num1} {item.operation} {item.values.num2}, Result: {item.values.result}
                  </p>
                  <p>{item.createdAt.toLocaleTimeString('en-US')}</p>
                  <button style={buttonStyle} type="button" onClick={handleRestore.bind(null, item)}>Restore</button>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
}

function* generateId() {
  let id = 0;
  while (true) yield id++;
}
