import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles=makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        display: 'flex',
        margin: theme.spacing(1, 0.1, 1),
        background: 'var(--color-primary-lighter)',
        color:'var(--color-button-text)'
      },
}));