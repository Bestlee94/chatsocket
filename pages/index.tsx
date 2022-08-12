import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const onClickBoards = () => {
    router.push("/boards");
  };
  return (
    <div style={{ cursor: "pointer", marginTop: "50px" }}>
      <h1 onClick={onClickBoards}>게시판으로 이동하기</h1>
    </div>
  );
}
