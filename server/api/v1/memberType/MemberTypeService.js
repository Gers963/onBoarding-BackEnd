/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import models from '../../../models';
import MemberTypeValidation from './MemberTypeValidation';

const { MemberType } = models

class MemberTypeService {

  async validate(operation, data) {
    if (
      MemberTypeValidation != null &&
      Object.keys(MemberTypeValidation) != null &&
      Object.keys(MemberTypeValidation).length > 0 &&
      operation != null &&
      MemberTypeValidation[operation] != null
    ) {
      await MemberTypeValidation[operation].strict().validate(data);
    }
  }

  async all() {
    try {
      const memberTypes = await MemberType.findAll();
      return memberTypes;
    } catch (error) {
      return { error };
    }
  }

  async byId(id) {
    try {
      const memberType = await MemberType.findOne({ where: { id } });
      if (!memberType) return { msg: 'MemberType not exist!' };
      return memberType;
    } catch (error) {
      return { error };
    }
  }

  async update(newMemberType, id) {
    try {
      const memberTypeExistent = await MemberType.findOne({ where: { id } });
      if (!memberTypeExistent) return { msg: 'MemberType not exist!' };
      Object.assign(memberTypeExistent, newMemberType);
      const memberType = await memberTypeExistent.save();
      return memberType;
    } catch (error) {
      return { error };
    }
  }

  async delete(id) {
    try {
      const memberTypeExistent = await MemberType.findOne({ where: { id } });
      if (!memberTypeExistent) return { msg: 'MemberType not exist!' };
      await memberTypeExistent.destroy();
      return { msg: 'Membertype has been deleted!' };
    } catch (error) {
      return { error };
    }
  }

  async create(memberType) {
    try {
      await this.validate('create', memberType);
      const newMemberType = await MemberType.create(memberType);
      return newMemberType;
    } catch (error) {
      return (error.errors);
    }
  }
}

export default new MemberTypeService();
