/* eslint-disable class-methods-use-this */
import MemberTypeService from './MemberTypeService';

export class MemberTypeController {
  all(req, res) {
    MemberTypeService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    MemberTypeService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  update(req, res) {
    MemberTypeService.update(req.body, req.params.id).then((r) => res.status(201).json(r));
  }

  delete(req, res) {
    MemberTypeService.delete(req.params.id).then((r) => res.status(201).json(r));
  }

  create(req, res) {
    MemberTypeService.create(req.body).then((r) => res.status(201).json(r));
  }
}
export default new MemberTypeController();
