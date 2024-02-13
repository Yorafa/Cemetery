"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

// props: people
export default function Tombstones({ people }: any) {

    const [allpeople, setAllpeople] = React.useState([]);
    const [peoplePage, setPeoplePage] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [mxPage, setMxPage] = React.useState(1);
    // click button to copy epitaph
    const copyEpitaph = (epitaph: string) => {
        navigator.clipboard.writeText(epitaph);
    };
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setPeoplePage(allpeople.slice((value - 1) * 3, value * 3));
    }
    React.useEffect(() => {
        if (people === undefined) {
            return;
        }
        setMxPage(Math.ceil(people.length / 3));
        setAllpeople(people);
        setPeoplePage(people.slice(0, 3));
    }, [people]);

    return (
        <>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {peoplePage.map((person: any) => (
                    <Grid
                        item
                        key={person.name + person.epitaph}
                        xs={12}
                        sm={6}
                        md={3}
                    >
                        {/* set card background img as public/tombstone.png */}
                        <Card
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            }}
                            style={{ borderRadius: '35% 35% 0 0', }}
                        >
                            <CardContent sx={{ textAlign: 'center', }}>
                                <Typography component="h3" variant="h6">
                                    {person.name}
                                </Typography>
                                <Typography>
                                    {person.timeline.birth.substring(0, 10)} : {person.timeline.death.substring(0, 10)}
                                </Typography>
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                <Typography
                                    variant="subtitle2"
                                >
                                    {person.epitaph}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    component="a"
                                    onClick={() => copyEpitaph(person.epitaph)}
                                >
                                    Copy this Epitaph
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Divider
                sx={{
                    my: 2,
                    opacity: 0.2,
                }}
            />
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Pagination count={mxPage} page={page} onChange={handlePageChange} />
            </Grid>
        </>
    );
}