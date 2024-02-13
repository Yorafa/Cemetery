"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Tombstones from './tombstone';
import axios from 'axios';
import SubmitDialog from './submitDialog';


export default function Header() {
    const [quote, setQuote] = React.useState('哈哈，我死啦 ^q^');
    const [people, setPeople] = React.useState([]);
    const [searchName, setSearchName] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const getRandomPeople = async () => {
        try {
            const response = await axios.get('http://localhost:8000/people/random');
            setPeople(response.data.people);
            const randomNum = Math.floor(Math.random() * response.data.people.length);
            const randomQuote = response.data.people[randomNum].epitaph;
            setQuote(randomQuote);
        } catch (error) {
            console.error(error);
        }
    }

    const getPeopleByName = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/people/${searchName}`);
            setPeople(response.data.people);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    React.useEffect(() => {
        getRandomPeople();
    }, []);

    return (
        <Box
            id="hero"
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        component="h4"
                        variant="h4"
                        color="error"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {quote}
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Search your name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        <Button variant="contained" color="primary" onClick={getPeopleByName}>
                            Search
                        </Button>
                        <Button variant="contained" color="primary" onClick={getRandomPeople}>
                            Shuffle
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                            Create a new one
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <SubmitDialog 
                open={open}
                onClose={handleClose}
            />
            <Tombstones people={people} />
        </Box>
    );
}
