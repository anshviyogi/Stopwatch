import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ExportCSV } from './ExportCSV'

function SplitTable() {
    const data = useSelector(data => data)
    if(data.data === null){
      return
    }
  return (
    <div>
      <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Minutes</th>
          <th>Seconds</th>
        </tr>
      </thead>
      <tbody>
        {
          data.data.map((data,index) =>{
            return(
              <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.minutes}</td>
             <td>{data.seconds}</td>
             </tr>
            )
          })
        }
        
      </tbody>
    </Table>

{/* Exporting data file - xlx format */}
    <ExportCSV csvData={data.data} fileName='StopwatchData'/>
    </Container>
    </div>
  )
}

export default SplitTable