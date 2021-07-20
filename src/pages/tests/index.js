import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersHeading2 from '@vb/widgets/Headers/Heading2'
import TestsTable from 'components/tests-table'

const Tests = () => {
  return (
    <div>
      <Helmet title="Tests" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-top card-top-primary">
            <div className="card-header">
              <HeadersHeading2
                data={{
                  title: 'ABC CLINIC Tests',
                  description:
                    'ABC CLINIC wants to display the tests it performs on a website and the cost of each test so that the general public can easily access the data.',
                }}
              />
            </div>
            <div className="card-body">
              <TestsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tests
