  import React from "react";
  import Box from "@material-ui/core/Box";
  import Paper from "@material-ui/core/Paper";
  import Typography from "@material-ui/core/Typography";

  export default function MiniCV() {

    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={1} mb={4} item>
          <Paper>  
            <Box pt={4} >
              <Typography align="center" variant="h4">
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
                    hopefully soon
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
                    2018
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
                    2014
                </Box>
              </Typography> </Box> </Paper>
        </Box>
        <Box width={1} item>
          <Paper>
          <Box pt={4}>
            <Typography align="center" variant="h4">
              Recent publications
            </Typography>
          </Box>
          <Box p={4} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h5.fontSize' item>
                Examining the quality of record linkage process using nationwide Brazilian administrative databases to build a large birth cohort
              </Box>
              <Box fontSize='h6.fontSize' item>
                Daniela Almeida, David Gorender, Maria Yury Ichihara, Samila Sena, Luan Menezes, <strong>George CG Barbosa</strong>, Rosimeire L Fiaccone, Enny Paixao, Robespierre Pita, Mauricio L Barreto
              </Box>
              <Box fontSize='h5.fontSize' item>
                BMC Medical Informatics and Decision Making
              </Box>
              <Box fontSize='subtitle2.fontSize' item>
                  2020
              </Box>
            </Typography>
          </Box>
          <Box p={4} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h5.fontSize' item>
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
          <Box p={4} pt={0} display="flex" flexDirection="colum" >
            <Typography align="left" variant="h1" >
              <Box fontSize='h5.fontSize' item>
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
        </Paper>
      </Box>
    </Box>
  );
}
