import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import "./SearchBox.css";

interface SearchBoxProps {
  searchProducts: (searchText: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchProducts }) => {
  const [inputText, setInputText] = useState<string>("");

  const onChangeHandler = (inputText: string) => {
    setInputText(inputText);
    searchProducts(inputText);
  };
  return (
    <div>
      <Container maxWidth="sm" className="sb-container">
        <Paper className="sb-paper">
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  placeholder="Enter product name here..."
                  data-testid="search-input"
                  size="small"
                  value={inputText}
                  onChange={(e) => onChangeHandler(e.currentTarget.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                data-testid="search-button"
                onClick={(e) => searchProducts(inputText)}
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default SearchBox;
