import * as S from '../../../style';
import Profile from './Profile';
import ArrowRight from '../../../../../public/svg/ArrowRight.svg';
import LocationMarker from '../../../../../public/svg/LocationMarker.svg';
import Clock from '../../../../../public/svg/Clock.svg';

function SingleContent() {
  return (
    <S.SingleContent>
      <Profile />
      <S.ContentTitle>공덕팟</S.ContentTitle>
      <S.Info>
        <S.Route>
          <LocationMarker />
          <S.From> 공덕역 5호선 </S.From>
          <ArrowRight />
          <S.To> 공덕역 6호선 </S.To>
        </S.Route>
        <S.Time>
          <Clock />
          <S.StartTime>08월 15일 (화) 오전 11:30 출발 </S.StartTime>
        </S.Time>
      </S.Info>
      <S.Line />
    </S.SingleContent>
  );
}

export default SingleContent;
