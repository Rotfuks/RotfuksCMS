import infoResolver from './infoResolver';

const nodeResolver = {
  Node: {
    __resolveType(node) {
      if (node.title) {
        return 'GeneralInfo';
      }}}};

export default [nodeResolver, infoResolver];