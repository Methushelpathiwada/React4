import React from 'react'

const Students = () => {
  return (
    <div>
      <h1>Students</h1>
      <center/><table className="table  table-hover" border="3px">
  <thead>
    <tr class=" table table-dark table-striped-columns">
      <th scope="col">S.N.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-light">
      <th scope="row">1</th>
      <td>Dp</td>
      <td>Keerthi</td>
      <td>Duke</td>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Manoj</td>
      <td>Jaffa</td>
      <td>BurgMann..</td>
    </tr>
    <tr className="table-light">
      <th scope="row">3</th>
      <td>Uday</td>
      <td>Sub-Inspector</td>
      <td>Eluru</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Students