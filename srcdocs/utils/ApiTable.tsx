import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

export default (data: any) => (
    <Table size='small' style={{marginBottom: '20px'}}>
        <TableHead>
            <TableRow>
                <TableCell>Prop Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Data Type</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.data.map((x: any) => (
                <TableRow key={x}>
                    <TableCell>{x.name}</TableCell>
                    <TableCell>{x.description}</TableCell>
                    <TableCell>{x.type}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);
