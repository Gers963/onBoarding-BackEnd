import * as express from 'express';
// eslint-disable-next-line import/no-named-as-default
import MemberController from './MemberController';

export default express
  .Router()
  .delete('/delete/:id', MemberController.delete)
  .put('/update/:id', MemberController.update)
  .post('/create', MemberController.create)
  .get('/list', MemberController.all)
  .get('/:id', MemberController.byId);
