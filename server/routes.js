import MemberRouter from './api/v1/member/MemebrRouter';
import MemberTypeRouter from './api/v1/memberType/MemberTypeRouter';

export default function routes(app) {
  app.use('/api/v2/member', MemberRouter);
  app.use('/api/v2/member/type', MemberTypeRouter);
}
