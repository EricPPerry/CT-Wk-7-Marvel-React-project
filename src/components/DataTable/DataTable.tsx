import React, {useState} from 'react';
import {DataGrid, GridColDef, GridValueGetterParams, GridDataContainer} from '@material-ui/data-grid';
import {server_calls} from '../../api';
import {useGetData} from '../../custom-hooks';
import { Button,
Dialog,
DialogActions,
DialogContent,
DialogContentText,
DialogTitle} from '@material-ui/core';
import {HeroForm} from '../../components/HeroForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 270 },
    { field: 'character_name', headerName: 'Hero Name', width: 175 },
    { field: 'description', headerName: 'Description', width: 230 },
    { field: 'comics_appeared_in', headerName: '# of Comics Appeared in', width: 90},
    { field: 'super_power', headerName: 'Super Power(s)', width: 500},
  ];


interface gridData{
  data:{
    id?: string;
  }
}

export const DataTable = () => {

    let {heroData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})

    let handleOpen = () => {
      setOpen(true)
    }

    let handleClose = () => {
      setOpen(false)
    }

    let deleteData = () => {
      server_calls.delete(gridData.data.id!)
      getData()
    }

    console.log(gridData.data.id)

    return (
        <div style={{ height: 500, width: '100%' }}>
          <h2>Heroes in collection</h2>
          <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onRowSelected = {setData} />
          <Button variant="contained" color="primary" onClick={handleOpen}>Update Existing Hero</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Update Hero</DialogTitle>
              <DialogContent>
                  <DialogContentText>Update Hero</DialogContentText>
                  <HeroForm id={gridData.data.id!}/>
              </DialogContent>
              <DialogActions>
                  <Button onClick = {handleClose} color="primary">Cancel</Button>
              </DialogActions>
          </Dialog>
        </div>
    )
}