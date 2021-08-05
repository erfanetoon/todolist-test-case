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
import { addEvent, editEvent } from "./../../lib/redux/events/action";
import { toast } from "react-toastify";
import { CloseButton, TextArea, Input, CalendarWrapper } from "./styles";

const Form = ({ open, setOpen, data, type, loading, addEvent, editEvent }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    if (type === "edit") {
      setTitle(data.title);
      setDescription(data.description);
      setTime(new Date(data.time));
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length < 3) {
      toast.error("Title is invalid, its character must be more than 3", {
        position: "bottom-right",
      });
    } else if (description.length < 15) {
      toast.error(
        "Description is invalid, its character must be more than 15",
        {
          position: "bottom-right",
        }
      );
    } else if (time === null) {
      toast.error("Time is invalid", {
        position: "bottom-right",
      });
    } else {
      if (type === "add") {
        await addEvent({ title, description, time });
        handleClose();
      } else if (type === "edit") {
        const date = new Date(time);
        await editEvent(data.id, {
          title,
          description,
          time: date.toDateString(),
        });
        handleClose();
      }
    }
  };

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
          <div>{type === "add" ? "Add Event" : "Edit " + data.title}</div>
          <CloseButton onClick={handleClose} />
        </Grid>
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit}>
          <div>
            <CalendarWrapper
              locale="en-EN"
              defaultValue={time}
              onChange={(date) => setTime(date.toDateString())}
            />
          </div>
          <div>
            <Input
              id="title"
              disabled={loading}
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
            />
          </div>
          <div>
            <TextArea
              id="description"
              rows={5}
              disabled={loading}
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
          </div>
          <Box textAlign="center">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {type === "add" ? "Add" : "Edit"}
            </Button>
          </Box>
        </form>
      </DialogContent>
    </DialogContainer>
  );
};

const MapStateToProps = (state) => ({
  loading: state.events.eventLoading,
  events: state.events.events,
});

export default connect(MapStateToProps, { addEvent, editEvent })(Form);
