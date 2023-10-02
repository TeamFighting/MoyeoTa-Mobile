import * as S from '../../../style';
import ProfileSample from '../../../../../public/svg/ProfileSample.svg';
function Profile() {
  return (
    <S.ProfileInfo>
      <S.ProfileLeft>
        <ProfileSample />
        <S.ProfileName>효린</S.ProfileName>
        <S.ProfileSex>여</S.ProfileSex>
        <S.Dot />
        <S.ProfileTime>2시간 전</S.ProfileTime>
      </S.ProfileLeft>
      <S.ProfileDistance>18km</S.ProfileDistance>
    </S.ProfileInfo>
  );
}

export default Profile;
