import DashBoardMyPagePresenter from "./DashBoardMyPage.presenter";
import { deleteUser, updatePassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../../../../../pages/_app";
import { useState } from "react";

const DashBoardMyPageContainer = () => {
  const router = useRouter();
  const currnetUser: any = useAuth();

  //회원 탈퇴기능
  async function deleteAccount() {
    try {
      await deleteUser(currnetUser);
      confirm("회원탈퇴가 완료되었습니다.");
      router.push("/");
    } catch {
      alert("회원탈퇴 실패");
    }
  }

  return <DashBoardMyPagePresenter deleteAccount={deleteAccount} />;
};

export default DashBoardMyPageContainer;
