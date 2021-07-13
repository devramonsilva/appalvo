// npm install --save-dev @iconify/react @iconify-icons/eva
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
// eslint-disable-next-line import/no-unresolved
import personDoneFill from '@iconify-icons/eva/person-done-fill';
import edit2Fill from '@iconify-icons/eva/edit-2-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Pessoas',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Serviços',
    path: '/dashboard/services',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Login',
    path: '/login',
    icon: getIcon(personDoneFill)
  },
  {
    title: 'Cadastrar',
    path: '/register',
    icon: getIcon(edit2Fill)
  }
];

export default sidebarConfig;
