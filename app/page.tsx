import { FileText, UserLock } from "lucide-react";
import { isProd } from "./common/utils";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img
          src={
            isProd
              ? "/travelate-public/play_store_512.png"
              : "/play_store_512.png"
          }
          alt="트래블릿 로고"
          width={256}
          height={256}
        />
        <h1 className="text-4xl font-bold tracking-tight">트래블릿</h1>
        <h2>여행 동행을 발견하는 새로운 방법, 트래블릿</h2>
        <ol className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            메일:{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              travelate.official@gmail.com
            </code>
          </li>
          <li className="tracking-[-.01em]">
            오픈카톡:{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              <a
                target="_blank"
                href="https://open.kakao.com/o/sPlZDLAh"
                rel="noopener noreferrer"
              >
                https://open.kakao.com/o/sPlZDLAh
              </a>
            </code>
          </li>
        </ol>

        <div className="flex gap-2 flex-col">
          <p>안녕하세요, 트래블릿 개발자입니다! ㅎㅎ</p>
          <p>
            저는 해외여행을 좋아하는 직장인인데요! 여행이 혼자 하는 것보다는
            다른 사람과 함께 할 때 더 재미 있더라구요! 친구나 연인과 함께 여행을
            떠나는 게 가장 베스트지만, 현실적으로 일정을 맞추는 것이 어려워 혼자
            여행을 떠날 때도 많은 것 같아요 ㅎㅎ
          </p>
          <p>
            혼자 여행할 때마다 네이버 카페 유랑에서 동행을 구하곤 했는데요! 그
            때마다 여러가지 불편함이 있었고, 그 후로 동행 관련 앱들도 여러가지
            살펴봤지만 저도 다른 방법으로 문제를 해결해보고 싶어서 이 앱을
            만들게 되었습니다 ㅎㅎ
          </p>
          <p>
            아직 부족한 점이 많지만, 많은 피드백 주시면 열심히 반영하고 수정하여
            더욱 좋은 앱으로 만들어 가겠습니다!
          </p>
          <p>감사합니다.</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://resolute-individual-7c4.notion.site/2175339584a28094bb87dedb87329a74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText />
          이용약관
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://resolute-individual-7c4.notion.site/20c5339584a28070b715f35ba9c986e0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserLock />
          개인정보처리방침
        </a>
      </footer>
    </div>
  );
}
