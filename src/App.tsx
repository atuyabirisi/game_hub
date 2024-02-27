import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" " aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          NAVIGATION BAR
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            SIDEPANEL
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          MAIN AREA
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
