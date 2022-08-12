import { InnerLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>Community</InnerLogo>
        <div></div>
      </InnerWrapper>
    </Wrapper>
  );
}
