import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import ShopServiceCard from './ServiceCard';

// ----------------------------------------------------------------------

ServiceList.propTypes = {
  services: PropTypes.array.isRequired
};

export default function ServiceList({ services, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {services.map((service) => (
        <Grid key={service.id} item xs={12} sm={6} md={3}>
          <ShopServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
}
