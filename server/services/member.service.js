import Member from '../models/member.model.js';

class MemberService {
  constructor() {
    this.model = Member;
  }
  async getAllMembers() {
    return this.model.find();
  }
  async getMember(memberId) {
    return this.model.findById(memberId);
  }

  async addMember(args) {
    return this.model.create(args);
  }
  async deleteMember(memberId) {
    return this.model.findByIdAndDelete(memberId);
  }
  async updateMember(id, updateDocument) {
    return this.model.findByIdAndUpdate(id, updateDocument, {
      new: true,
    });
  }
}

export default new MemberService();
