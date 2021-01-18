/* eslint-disable class-methods-use-this */
import MemberService from './MemberService';

export class MemberController {
  all(req, res) {
    MemberService.all().then((response) => res.json(response));
  }

  byId(req, res) {
    MemberService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  update(req, res) {
    MemberService.update(req.body, req.params.id).then((r) => res.status(201).json(r));
  }

  delete(req, res) {
    MemberService.delete(req.params.id).then((r) => res.status(201).json(r));
  }

  create(req, res) {
    MemberService.create(req.body).then((r) => res.status(201).json(r));
  }
}
export default new MemberController();
