// material
import { Container, Stack, Typography, Button } from '@material-ui/core';
// components
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Page from '../components/Page';
import { ServiceList } from '../components/_dashboard/services';
//
import SERVICES from '../_mocks_/services';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  return (
    <Page title="Serviços | Alvo Consultoria">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Serviços
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            Novo Serviço
          </Button>
        </Stack>

        <ServiceList services={SERVICES} />
      </Container>
    </Page>
  );
}
