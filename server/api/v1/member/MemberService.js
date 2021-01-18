import models from '../../../models';
import MemberValidation from './MemberValidation';
/* eslint-disable class-methods-use-this */

const { Member } = models

class MemberService {

  async validate(operation, data) {
    if (
      MemberValidation != null &&
      Object.keys(MemberValidation) != null &&
      Object.keys(MemberValidation).length > 0 &&
      operation != null &&
      MemberValidation[operation] != null
    ) {
      await MemberValidation[operation].strict().validate(data);
    }
  }

  async all() {
    try {
      const members = await Member.findAll();
      return members;
    } catch (error) {
      return { error: error.stack };
    }
  }

  async byId(id) {
    try {
      const member = await Member.findOne({ where: { id } });
      if (!member) return { msg: 'Member not exist!' };
      return member;
    } catch (error) {
      return { error };
    }
  }

  async update(newMember, id) {
    try {
      const memberExistent = await Member.findOne({ where: { id } });
      if (!memberExistent) return { msg: 'MemberType not exist!' };
      Object.assign(memberExistent, newMember);
      const member = await memberExistent.save();
      return member;
    } catch (error) {
      return { error };
    }
  }

  async delete(id) {
    try {
      const memberExistent = await Member.findOne({ where: { id } });
      if (!memberExistent) return { msg: 'Member not exist!' };
      await memberExistent.destroy();
      return { msg: 'Member has been deleted!' };
    } catch (error) {
      return { error };
    }
  }

  async create(member) {
    try {
      await this.validate('create', member);
      const newMember = await Member.create(member);
      return newMember;
    } catch (error) {
      return (error.errors);
    }
  }
}

export default new MemberService();
