import React from "react";
import {
  Dialog as DialogContainer,
  DialogTitle,
  DialogContent,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import { connect } from "react-redux";
import { deleteEvent } from "./../../lib/redux/events/action";
import month from "./../../lib/constant/month";
import { CloseButton, StyledDiv, Title, Description } from "./styles";

const Dialog = ({ open, setOpen, data, type, deleteEvent }) => {
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    if (type === "view") {
      setDate(new Date(data.time));
    }
  }, [data]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await deleteEvent(data.id);
    handleClose();
  };

  if (type === "delete") {
    return (
      <DialogContainer
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Grid container alignItems="center" justify="space-between">
            <div>Delete {data.title}</div>
            <CloseButton onClick={handleClose} />
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container alignItems="center" justify="center">
            <Box mx={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Box>
            <Box mx={2}>
              <Button color="primary" variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </DialogContent>
      </DialogContainer>
    );
  } else if (type === "view") {
    return (
      <DialogContainer
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Grid container alignItems="center" justify="space-between">
            <div>{data.title} Details</div>
            <CloseButton onClick={handleClose} />
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <Grid alignItems="center" justify="center" container>
            {date && (
              <React.Fragment>
                <StyledDiv>{date.getFullYear()}</StyledDiv>
                <StyledDiv>{month[date.getMonth()]}</StyledDiv>
                <StyledDiv>{date.getDay()}</StyledDiv>
              </React.Fragment>
            )}
          </Grid>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
        </DialogContent>
      </DialogContainer>
    );
  } else {
    return null;
  }
};

export default connect(null, { deleteEvent })(Dialog);
