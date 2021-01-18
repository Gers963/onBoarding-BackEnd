import * as express from 'express';
// eslint-disable-next-line import/no-named-as-default
import MemberTypeController from './MemberTypeController';

export default express
  .Router()
  .delete('/delete/:id', MemberTypeController.delete)
  .put('/update/:id', MemberTypeController.update)
  .post('/create', MemberTypeController.create)
  .get('/list', MemberTypeController.all)
  .get('/:id', MemberTypeController.byId);
