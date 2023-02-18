import MemberService from '../services/member.service.js';

export default {
  Mutation: {
    addMember: (_, { memberData }) => {
      return MemberService.addMember(memberData);
    },
    deleteMember: (_, { id }) => {
      return MemberService.deleteMember(id);
    },

    updateMember: (_, { id, document }) => {
      return MemberService.updateMember(id, document);
    },
  },
  Query: {
    getAllMembers: () => {
      return MemberService.getAllMembers();
    },
    getMember: (_, { id }) => {
      return MemberService.getMember(id);
    },
  },
};
