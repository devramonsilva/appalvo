import faker from 'faker';
// utils

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Muito pratico e de facil entendimento',
  'Serviço prestado de muita competencia',
  'Alcancei nota maxima apos trabalho revisado por voces',
  'Profissionais muito atenciosos'
];

const posts = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
