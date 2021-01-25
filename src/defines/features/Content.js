import books from "../data/bookData";
import Book from "./book";
import React from 'react';
import { Box, Grid } from "@material-ui/core";

const Content = props => {
    const booksHtml = books.map((book) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Box my={2}>
                    <Book book={book}></Book>
                </Box>
            </Grid>
        )
    })
    return (
        <Grid container spacing={4} >
            {booksHtml}
        </Grid>

    )
}
export default Content;