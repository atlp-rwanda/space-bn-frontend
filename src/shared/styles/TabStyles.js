import { makeStyles } from '@material-ui/core/styles'

const Component = ({ classes }) => (
    <Tabs value={0}>
        <Tab classes={{ root: classes.tab }} label="One" />
        <Tab classes={{ root: classes.tab }} label="Two" />
    </Tabs>
);


// this is injected as classes prop into the wrapping component
const styles = {
    tab: {
        minWidth: 200,  
        width: 200,  
    }
};
export default withStyles(styles)(Component);