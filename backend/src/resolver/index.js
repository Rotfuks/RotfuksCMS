import infoResolver from './infoResolver';
import navigationResolver from "./navigationResolver";

const nodeResolver = {
  Node: {
    __resolveType(node) {
      if (node.title) {
        return 'GeneralInfo';
      }}}};

export default [nodeResolver, infoResolver, navigationResolver];