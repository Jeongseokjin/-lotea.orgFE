export default function MembershipSection() {
  return (
    <section className="membership-section">
      <h2 className="section-title">회원 가입 안내</h2>
      <p className="section-subtitle">물류산업 발전에 관심있는 모든 분들을 환영합니다</p>
      
      <div className="membership-cards">
        {/* 정회원 카드 */}
        <div className="membership-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
            </svg>
          </div>
          <h3 className="card-title">정회원</h3>
          <ul className="card-features">
            <li>물류 관련 기업 및 단체</li>
            <li>모든 사업 참여 가능</li>
            <li>의결권 보유</li>
          </ul>
        </div>

        {/* 준회원 카드 */}
        <div className="membership-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 className="card-title">준회원</h3>
          <ul className="card-features">
            <li>물류산업 종사자 개인</li>
            <li>교육 및 행사 참여</li>
            <li>정보 제공 서비스</li>
          </ul>
        </div>

        {/* 학생회원 카드 */}
        <div className="membership-card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          </div>
          <h3 className="card-title">학생회원</h3>
          <ul className="card-features">
            <li>물류 관련 전공 학생</li>
            <li>교육 프로그램 우대</li>
            <li>취업 지원 서비스</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
