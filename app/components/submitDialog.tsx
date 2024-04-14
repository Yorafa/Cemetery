import React from 'react';
import { Dialog, Box, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

interface SubmitDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function SubmitDialog(props: SubmitDialogProps) {
    const [name, setName] = React.useState('');
    const [bornDate, setBornDate] = React.useState('');
    const [diedDate, setDiedDate] = React.useState('');
    const [epitaph, setEpitaph] = React.useState('');

    const postPeople = async (data: any) => {
        try {
            const response = await axios.post('api/people', data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        props.onClose();
    }

    const handleSubmit = () => {
        if (name === '' || bornDate === '' || diedDate === '' || epitaph === '') {
            return;
        }
        if (!isValidDateForm(bornDate) || !isValidDateForm(diedDate)) {
            return;
        }
        if (epitaph.length > 100) {
            return;
        }
        const data = {
            name: name,
            timeline:{
                birth: bornDate,
                death: diedDate
            },
            epitaph: epitaph
        }
        postPeople(data);
    }

    const isValidDateForm = (date: string) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ mt: 3, mr: 4, ml:4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            error={name === ''}
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* check date in format yyyy-mm-dd */}
                        <TextField
                            error={bornDate === '' || !isValidDateForm(bornDate)}
                            name="BornDate"
                            required
                            fullWidth
                            id="BornDate"
                            label="BornDate"
                            autoFocus
                            value={bornDate}
                            onChange={(e) => setBornDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={diedDate === '' || !isValidDateForm(diedDate)}
                            name="DiedDate"
                            required
                            fullWidth
                            id="DiedDate"
                            label="DiedDate"
                            autoFocus
                            value={diedDate}
                            onChange={(e) => setDiedDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={epitaph === '' || epitaph.length > 100}
                            required
                            fullWidth
                            id="epitaph"
                            label="Epitaph"
                            name="epitaph"
                            autoFocus
                            value={epitaph}
                            onChange={(e) => setEpitaph(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </Dialog >
    )

}
