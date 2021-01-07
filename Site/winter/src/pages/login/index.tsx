import React from 'react';

import { Container, TextField , Grid , Button } from '@material-ui/core';

import logoImg from '../../assets/images/Winter-Forest.svg';
import { useStyles } from './styles';

function Login(){
    const classes = useStyles();
    return(
        <Container maxWidth="xs">
            <div className={classes.main}>
            
            <img src={logoImg} alt="Logo" />
            
            <form className={classes.form} noValidate>
            
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="senha"
                type="password"
                id="password"
                autoComplete="current-password"
            />
             <div className="buttons-container">

            <Button
                type="submit"
                fullWidth
                className={classes.submit}
                >
                Cadastro
            </Button>
            <Button
                type="submit"
                fullWidth
                className={classes.submit}
                >
                Logar
            </Button>
            <Grid>

            </Grid>
            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                href="/" 
                className={classes.submit}
                >
                Voltar
            </Button>
            
        </form>
        </div>
        
        </Container>
    )

}

export default Login;