import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import cover from "../../../../assets/folder-cover.png";
import { Title } from "react-native-paper";

const SampleImage1 =
  "https://images.pexels.com/photos/29022274/pexels-photo-29022274/free-photo-of-tranquil-tree-lined-pathway-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const SampleImage2 =
  "https://images.pexels.com/photos/5179560/pexels-photo-5179560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const ContentContainer = styled(View)`
  justify-content: center;
`;

const UserCaptureContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  /* gap: 10px; */
`;

const CoverImage = styled(Image)`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 5px;
  z-index: 10;
`;

const FolderContainer = styled(View)`
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100px;
`;

const FirstImage = styled(Image)`
  width: 85px;
  height: 85px;
  border-radius: 5px;
  object-fit: cover;
`;

const CardWrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
`;

const FolderTitle = styled(Text)`
  font-size: 13px;
  text-align: center;
`;

const ContainerTitle = styled(Title)`
  font-size: 16px;
  text-align: start;
  margin: 10px 0 5px 5px;
`;

export default function GalleryContent() {
  return (
    <ContentContainer>
      <ContainerTitle>Your Capture</ContainerTitle>
      <UserCaptureContainer>
        <ImageFolder title={"Artificial Container"} firstImage={SampleImage1} />
        <ImageFolder title={"Natural Container"} firstImage={SampleImage2} />
      </UserCaptureContainer>
    </ContentContainer>
  );
}

function ImageFolder({
  title,
  firstImage,
}: {
  title: string;
  firstImage: any;
}) {
  return (
    <FolderContainer>
      <CardWrapper>
        <CoverImage source={cover} />
        <FirstImage source={{ uri: firstImage }} />
      </CardWrapper>
      <FolderTitle>{title}</FolderTitle>
    </FolderContainer>
  );
}
