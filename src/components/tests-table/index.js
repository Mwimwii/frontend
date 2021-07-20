import React, { useEffect, useState } from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'TEST',
    dataIndex: 'test',
    key: 'test',
    className: 'bg-transparent text-gray-6',
  },
  {
    title: 'CODE',
    dataIndex: 'code',
    key: 'code',
    className: 'bg-transparent text-gray-6',
    render: (text) => {
      return <a className="text-blue">{text}</a>
    },
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price',
    className: 'text-right bg-transparent text-gray-6',
    render: (text) => <span className="font-weight-bold">K {text}</span>,
  },
]

const TestsTable = () => {
  const [data, setData] = useState([  {
    "key": "1",
    "actionName": "New Users",
    "location": "New York",
    "phone": "+1 800 364 4774",
    "value": "+3,125"
  }]);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://127.0.0.1:5000/tests/', requestOptions)
      .then(response => response.json())
      .then(responseJson => setData(responseJson.response));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div>
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  )
}

export default TestsTable
