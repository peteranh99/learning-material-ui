import { Grid } from '@material-ui/core';
import './App.css';
import Content from './defines/features/Content';
import Header from './defines/features/Header';

function App(props) {
    return (
        <div className="App">
            <Grid container direction="column">
                <Grid item>
                    <Header></Header>
                </Grid>
                <Grid container item>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}><Content />
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
