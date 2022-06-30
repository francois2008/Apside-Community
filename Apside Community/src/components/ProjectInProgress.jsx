import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import projectList from '../../data/project.json';
import Utils from '../utils/Utils';


function ProjectInProgress() {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size='medium' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell>MY PROJECTS</TableCell>

          <TableCell align='right'>Customer</TableCell>
          <TableCell align='right'>Project Manager</TableCell>
          <TableCell align='right'>Start date</TableCell>
          <TableCell align='right'>Estimed end</TableCell>
          <TableCell align='right'>techno</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {projectList.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              {row.name}
            </TableCell>
            <TableCell align='right'>{row.customer}</TableCell>
            <TableCell align='right'>
              {Utils.getUserById(row.manager).name}
            </TableCell>
            <TableCell align='right'>{row.date_start}</TableCell>
            <TableCell align='right'>{row.date_end}</TableCell>
            <TableCell align='right'>{row.techno.map((el) => el)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default ProjectInProgress;