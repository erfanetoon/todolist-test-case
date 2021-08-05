import React from "react";
import { Box, Grid } from "@material-ui/core";
import Form from "./../form/form";
import Dialog from "./../dialog/dialog";
import { Title, Wrapper, ViewIcon, EditIcon, DeleteIcon } from "./styles";

const Event = ({ data, type }) => {
  const [open, setOpen] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleView = () => {
    setOpenView(true);
  };

  const handleDelete = () => {
    setDeleteItem(true);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Grid container alignItems="center" justify="space-between">
          <Title>{data.title}</Title>
          {type === "view" && (
            <Box>
              <ViewIcon onClick={handleView} />
            </Box>
          )}
          {type === "edit" && (
            <Box>
              <EditIcon onClick={handleEdit} />
              <DeleteIcon onClick={handleDelete} />
            </Box>
          )}
        </Grid>
      </Wrapper>
      {open && <Form open={open} setOpen={setOpen} data={data} type="edit" />}
      {deleteItem && (
        <Dialog
          open={deleteItem}
          setOpen={setDeleteItem}
          data={data}
          type="delete"
        />
      )}
      {openView && (
        <Dialog open={openView} setOpen={setOpenView} data={data} type="view" />
      )}
    </React.Fragment>
  );
};

export default Event;
