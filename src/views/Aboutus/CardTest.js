import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { styles} from '../../shared/styles/AboutStyles';


export default function CardTestmonial(props){
    const classes = styles();
    return(
        <Card number="2" style={{width: '200px'}}>
            <CardContent className={classes.cardContant}>                
                <Avatar className={classes.avatar}  alt="Remy Sharp" src={props.image} />
                <Typography variant="body2" component="p" style={{marginTop: '30px'}}>
                {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}