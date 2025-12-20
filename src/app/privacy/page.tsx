// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 물류테트리스협회",
  description: "물류테트리스협회 개인정보처리방침",
};

const EFFECTIVE_DATE = "2025-12-20";
const VERSION = "v1.0";

const ORG = {
  name: "물류테트리스협회",
  address: "충청북도 청주시 상당구 상당로 127, 자연타워 501-135호",
  대표자: "심영민/협회장",
  email: "james@lotea.org",
  phone: "0504-0812-9773",
  dept: "협회장실",
};

const PRIVACY_OFFICER = {
  name: "심영민",
  title: "협회장(개인정보 보호책임자)",
  dept: "협회장실",
  phone: "0504-0812-9773",
  email: "james@lotea.org",
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "28px 16px" }}>
      {children}
    </div>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ margin: "0 0 8px 0", fontSize: 28 }}>{children}</h1>;
}
function Meta({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "rgba(0,0,0,0.65)", fontSize: 13 }}>{children}</div>;
}
function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} style={{ margin: "26px 0 10px 0", fontSize: 18 }}>
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 10px 0", lineHeight: 1.75, fontSize: 14 }}>{children}</p>;
}
function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 10px 20px", lineHeight: 1.75, fontSize: 14 }}>
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="목차"
      style={{
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: 12,
        padding: 14,
        marginTop: 18,
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>목차</div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} style={{ textDecoration: "underline" }}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function PrivacyPage() {
  const toc = [
    { id: "p1", label: "1. 개인정보의 처리 목적" },
    { id: "p2", label: "2. 처리하는 개인정보 항목 및 처리 방법" },
    { id: "p3", label: "3. 개인정보의 처리 및 보유기간" },
    { id: "p4", label: "4. 개인정보의 제3자 제공" },
    { id: "p5", label: "5. 개인정보 처리의 위탁" },
    { id: "p6", label: "6. 개인정보의 국외 이전(해당 시)" },
    { id: "p7", label: "7. 개인정보의 파기절차 및 파기방법" },
    { id: "p8", label: "8. 정보주체의 권리·의무 및 행사방법" },
    { id: "p9", label: "9. 개인정보의 안전성 확보조치" },
    { id: "p10", label: "10. 개인정보 자동 수집 장치의 설치·운영 및 거부" },
    { id: "p11", label: "11. 개인정보 보호책임자 및 담당부서" },
    { id: "p12", label: "12. 권익침해 구제방법" },
    { id: "p13", label: "13. 개인정보처리방침의 변경" },
  ];

  return (
    <Container>
      <H1>물류테트리스협회 개인정보처리방침</H1>
      <Meta>
        시행일자: {EFFECTIVE_DATE} · 버전: {VERSION}
      </Meta>

      <Toc items={toc} />

      <P>
        {ORG.name}(이하 “협회”)는 「개인정보 보호법」 등 관련 법령에 따라 정보주체의 개인정보를 보호하고,
        고충을 원활하게 처리하기 위하여 본 개인정보처리방침을 수립·공개합니다.
      </P>

      <SectionTitle id="p1">1. 개인정보의 처리 목적</SectionTitle>
      <P>협회는 다음 목적 범위에서 개인정보를 처리합니다.</P>
      <Ul
        items={[
          "회원가입 및 회원관리(본인 확인, 자격 확인, 공지 전달, 민원 처리)",
          "교육·세미나·행사 운영(신청 접수, 안내, 출결/수료, 만족도 조사)",
          "연구·정책·산업동향 자료 제공 및 뉴스레터 발송(동의한 경우)",
          "회비/참가비/후원금 결제 및 정산(해당 시), 회계·세무 처리",
          "문의 대응 및 분쟁 처리, 서비스 개선을 위한 통계·분석",
        ]}
      />

      <SectionTitle id="p2">2. 처리하는 개인정보 항목 및 처리 방법</SectionTitle>
      <P>
        협회는 서비스 제공에 필요한 최소한의 개인정보를 적법하게 수집·이용합니다. 수집 경로는 웹사이트
        회원가입/신청폼, 이메일, 전화, 오프라인 신청서 등입니다.
      </P>
      <Ul
        items={[
          "필수(회원가입/기본): 이름, 이메일, 휴대전화번호, 소속(회사/기관/학교), 비밀번호(암호화 저장)",
          "필수(행사/교육 신청): 이름, 연락처, 이메일, 소속",
          "선택: 뉴스레터/홍보 수신 동의, 설문 응답(관심 주제/직무역량 등), 프로필 이미지(해당 시)",
        ]}
      />
      <P>
        협회는 원칙적으로 주민등록번호 등 고유식별정보 및 민감정보를 수집·처리하지 않습니다. 불가피하게 처리해야
        하는 경우, 관련 법령 근거 또는 별도 동의를 받습니다.
      </P>

      <SectionTitle id="p3">3. 개인정보의 처리 및 보유기간</SectionTitle>
      <P>
        협회는 개인정보 처리목적 달성 시 지체 없이 파기합니다. 다만, 관계 법령에 따라 보존이 필요한 경우 해당
        기간 동안 보관합니다.
      </P>
      <Ul
        items={[
          "회원정보: 회원 탈퇴 시까지(단, 분쟁·부정이용 방지를 위해 내부 기준에 따라 최소 기간 보관할 수 있음)",
          "교육/행사 신청 및 운영 기록: 프로그램 종료 후 1~3년(수료 확인, 통계, 민원 대응 목적)",
          "문의/민원 기록: 처리 완료 후 3년",
          "결제/회계·세무 증빙(해당 시): 관련 법령에 따른 보관기간",
        ]}
      />

      <SectionTitle id="p4">4. 개인정보의 제3자 제공</SectionTitle>
      <P>
        협회는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령 근거가 있거나 정보주체의
        사전 동의를 받은 경우에 한하여 제공할 수 있습니다. 제3자 제공이 발생하는 경우, 제공받는 자/목적/항목/보유·이용기간을 사전에 고지합니다.
      </P>

      <SectionTitle id="p5">5. 개인정보 처리의 위탁</SectionTitle>
      <P>
        협회는 원활한 서비스 제공을 위해 개인정보 처리업무를 위탁할 수 있으며, 위탁 시 관련 법령에 따라 계약을 통해
        개인정보가 안전하게 관리되도록 합니다. 아래는 예시이며, 실제 사용 중인 업체 기준으로 업데이트하십시오.
      </P>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.15)", padding: 8 }}>
                수탁자
              </th>
              <th style={{ textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.15)", padding: 8 }}>
                위탁업무 내용
              </th>
              <th style={{ textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.15)", padding: 8 }}>
                위탁 항목(예시)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["[호스팅/클라우드]", "웹사이트 운영·DB 보관", "회원정보, 접속로그"],
              ["[메일 발송 서비스]", "뉴스레터/안내 메일 발송", "이메일, 이름"],
              ["[결제대행(PG)]", "참가비/회비/후원 결제 처리(해당 시)", "결제 승인 관련 정보"],
              ["[설문/폼 서비스]", "신청/만족도 조사", "응답 정보"],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", padding: 8 }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle id="p6">6. 개인정보의 국외 이전(해당 시)</SectionTitle>
      <P>
        협회가 국외 사업자(해외 메일링/설문/클라우드 등)를 이용하여 개인정보를 국외로 이전하는 경우, 이전 받는 자,
        이전 국가, 이전 일시/방법, 이전 항목, 이용 목적, 보유·이용기간, 거부 방법 및 거부 시 불이익을 고지하고 필요한 절차를 이행합니다.
        국외 이전이 없다면 본 항목은 “해당 없음”으로 표시하거나 삭제할 수 있습니다.
      </P>

      <SectionTitle id="p7">7. 개인정보의 파기절차 및 파기방법</SectionTitle>
      <Ul
        items={[
          "파기절차: 내부 파기 계획 수립 → 파기 대상 선별 → 파기 승인 → 파기 및 기록 보관",
          "파기방법: 전자파일은 복구 불가능한 방식으로 삭제, 종이는 분쇄 또는 소각",
        ]}
      />

      <SectionTitle id="p8">8. 정보주체의 권리·의무 및 행사방법</SectionTitle>
      <P>
        정보주체는 협회에 대해 개인정보 열람, 정정·삭제, 처리정지, 동의 철회 등을 요구할 수 있습니다.
      </P>
      <Ul
        items={[
          `행사방법: 이메일(${ORG.email}) 또는 서면 요청`,
          "협회는 관련 법령에 따라 지체 없이 조치합니다.",
          "만 14세 미만 아동의 개인정보를 처리하는 경우, 법정대리인이 권리를 행사할 수 있습니다(해당 시).",
        ]}
      />

      <SectionTitle id="p9">9. 개인정보의 안전성 확보조치</SectionTitle>
      <P>협회는 개인정보의 안전성 확보를 위해 다음 조치를 시행합니다(운영 실태에 맞게 조정).</P>
      <Ul
        items={[
          "관리적 조치: 내부관리계획 수립, 정기 교육, 접근권한 최소화",
          "기술적 조치: 비밀번호 암호화, 접근통제, 로그관리, 악성코드 방지, 백업",
          "물리적 조치: 자료보관 장소 접근통제, 문서 잠금장치 등",
        ]}
      />

      <SectionTitle id="p10">10. 개인정보 자동 수집 장치의 설치·운영 및 거부</SectionTitle>
      <P>
        협회는 서비스 품질 개선을 위해 쿠키(cookie) 등 자동 수집 장치를 사용할 수 있습니다. 이용자는 브라우저
        설정을 통해 쿠키 저장을 거부할 수 있습니다.
      </P>

      <SectionTitle id="p11">11. 개인정보 보호책임자 및 담당부서</SectionTitle>
      <Ul
        items={[
          `개인정보 보호책임자: ${PRIVACY_OFFICER.name} (${PRIVACY_OFFICER.title})`,
          `담당부서: ${PRIVACY_OFFICER.dept}`,
          `연락처: ${PRIVACY_OFFICER.phone}`,
          `이메일: ${PRIVACY_OFFICER.email}`,
          `주소: ${ORG.address}`,
        ]}
      />

      <SectionTitle id="p12">12. 권익침해 구제방법</SectionTitle>
      <P>
        개인정보 침해에 대한 신고·상담이 필요할 경우, 개인정보분쟁조정위원회, 개인정보침해신고센터 등 관계기관을
        통해 구제를 받을 수 있습니다.
      </P>

      <SectionTitle id="p13">13. 개인정보처리방침의 변경</SectionTitle>
      <P>
        본 처리방침의 내용 추가·삭제·수정이 있을 경우, 시행일 최소 7일 전(중요 변경은 30일 전)부터 공지합니다.
      </P>
      <Ul items={[`공고일자: ${EFFECTIVE_DATE}`, `시행일자: ${EFFECTIVE_DATE}`]} />

      <div
        style={{
          marginTop: 28,
          padding: 14,
          borderRadius: 12,
          border: "1px solid rgba(0,0,0,0.10)",
          background: "rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 6 }}>협회 연락처</div>
        <div style={{ fontSize: 14, lineHeight: 1.7 }}>
          <div>단체명: {ORG.name}</div>
          <div>소재지: {ORG.address}</div>
          <div>대표자: {ORG.대표자}</div>
          <div>부서: {ORG.dept}</div>
          <div>연락처: {ORG.phone}</div>
          <div>이메일: {ORG.email}</div>
        </div>
      </div>
    </Container>
  );
}
