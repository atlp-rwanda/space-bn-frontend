import React from "react";
import { RemoveCircle, AddCircleOutline } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {RequestContext} from '../../contexts/RequestContext';



class GroupedButtons extends React.Component {
  state = { counter: 1 };

  static contextType = RequestContext;

  handleIncrement = () => {
    this.setState((state) => {
      this.context.guestChange(state.counter + 1)
      return ({ counter: state.counter + 1 })
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      this.context.guestChange(state.counter - 1)
      return({ counter: state.counter - 1 })
    });
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <div style={{position: 'relative', display: 'inline-block'}} >
        <TextField
          id="guest"
          disabled
          label="Guest"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
         
        />
        <RemoveCircle
          onClick={this.handleDecrement}
          data-testid="decr"
          style={{
            position: "absolute",
            left: "1rem",
            top: "1rem",
            color: "rgba(233, 30, 30, 0.7)",
            cursor: "pointer",
          }}
        />
        {displayCounter && (
          <Typography
            disabled
            style={{ position: "absolute", right: "5.5rem", top: "1rem" }}
          >
            {this.state.counter}
          </Typography>
        )}
        <AddCircleOutline
          onClick={this.handleIncrement}
          data-testid="incr"
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            color: "rgba(52, 168, 83, 0.7)",
            cursor: "pointer",
            
          }}
        />
      </div>
    );
  }
}

export default GroupedButtons;
