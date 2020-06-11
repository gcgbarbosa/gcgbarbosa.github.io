  import React from "react";
  import Box from "@material-ui/core/Box";
  import Paper from "@material-ui/core/Paper";
  import Typography from "@material-ui/core/Typography";

  export default function MiniCV() {

    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={1} mb={5} item>
          <Paper>  
            <Box pt={4}>
              <Typography align="center" variant="h3">
                Education
              </Typography>
            </Box>
            <Box p={4} display="flex" flexDirection="colum" >
              <Typography align="left" variant="h1" >
                <Box fontSize='h4.fontSize' item>
                    University of Arizona
                </Box>
                <Box fontSize='h6.fontSize' item>
                  Doctor of Philosophy - PhD, Computer Science
                </Box>
                <Box fontSize='subtitle2.fontSize' item>
                    2019-2024
                </Box>
              </Typography>
            </Box>
            <Box p={4} pt={0} display="flex" flexDirection="colum" >
              <Typography align="left" variant="h1" >
                <Box fontSize='h4.fontSize' item>
                    Federal University of Bahia
                </Box>
                <Box fontSize='h6.fontSize' item>
                  Master of Science - MS, Computer Science
                </Box>
                <Box fontSize='subtitle2.fontSize' item>
                    2016-2018
                </Box>
              </Typography>
            </Box>
            <Box p={4} pt={0} display="flex" flexDirection="colum" >
              <Typography align="left" variant="h1">
                <Box fontSize='h4.fontSize' item>
                    Universidade Estadual do Sudoeste da Bahia
                </Box>
                <Box fontSize='h6.fontSize' item>
                  Bachelor of Science - BS, Information Systems
                </Box>
                <Box fontSize='subtitle2.fontSize' item>
                    2010-2014
                </Box>
              </Typography> </Box> </Paper>
        </Box>
        <Box width={1} item>
          <Paper>
          <Box pt={5}>
            <Typography align="center" variant="h3">
              Last publications
            </Typography>
          </Box>
          <Box p={5} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h4.fontSize' item>
                  Parsing as Tagging
              </Box>
              <Box fontSize='h6.fontSize' item>
                R Vacareanu, <strong>GCG Barbosa</strong>, MA Valenzuela-Escarcega, M Surdeanu
              </Box>
              <Box fontSize='h5.fontSize' item>
                  Proceedings of The 12th Language Resources and Evaluation Conference, 5225-5231
              </Box>
              <Box fontSize='subtitle2.fontSize' item>
                  2020
              </Box>
            </Typography>
          </Box>
          <Box p={5} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h4.fontSize' item>
                The Center for Data and Knowledge Integration for Health (CIDACS)
              </Box>
              <Box fontSize='h6.fontSize' item>
                Bethania de Araujo Almeida, Mauricio Lima Barreto, Maria Yuri Ichihara, Marcos Ennes Barreto, Liliana Cabral, Rosemeire Fiaccone, Roberto P Carreiro, Carlos Teles, Robespierre Pita, Gerson Penna, Manoel Barral-Netto, M Sanni Ali, <strong>George Barbosa</strong>, Spiros Denaxas, Laura Rodrigues, Liam Smeeth
              </Box>
              <Box fontSize='h5.fontSize' item>
                International Journal of Population Data Science
              </Box>
              <Box fontSize='subtitle2.fontSize' item>
                  2019
              </Box>
            </Typography>
          </Box>
          <Box p={5} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h4.fontSize' item>
                CIDACS-RL: A novel search engine-based record linkage system for huge datasets with high accuracy and scalability
              </Box>
              <Box fontSize='h6.fontSize' item>
                <strong>George CG Barbosa</strong>, Mohamed S Ali, Bruno Araujo, Maria Y Ichihara, Sandra Reis, Samila Sena, Julia M Pescarini, Rosemeire L Fiaccone, Leila D Amorim, Robespierre Pita, Marcos E Barreto, Liam Smeeth, Mauricio L Barreto
              </Box>
              <Box fontSize='h5.fontSize' item>
                Pharmacoepidemiology and Drug Safety
              </Box>
              <Box fontSize='subtitle2.fontSize' item>
                  2019
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
