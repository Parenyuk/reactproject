
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Priority(props) {



    const classes = useStyles();
    const [state, setState] = React.useState({
        priority: props.priority,

    });

    const handleChange = (event) => {
        const priority = event.target.value;
        setState({
            ...state,
            priority: priority
        });
        debugger
        props.changePriority(props.taskId, priority)
    };

    return (

        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="priority-native-simple">priority</InputLabel>
                <Select
                    native
                    value={state.priority}
                    onChange={handleChange}
                    inputProps={{
                        name: 'priority',
                        id: 'priority-native-simple',
                    }}
                >
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
                </Select>
            </FormControl>

        </div>
    );
}

// value={props.priority}