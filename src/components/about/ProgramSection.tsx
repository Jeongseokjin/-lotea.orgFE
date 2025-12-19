import Link from 'next/link';

export default function ProgramSection() {
  return (
    <section className="program-section">
      <div className="program-box">
        <h2 className="program-title">역량 강화 프로그램</h2>
        <p className="program-description">
          중소 물류기업과 청년 인력의 역량 강화를 위한 맞춤형 교육 프로그램을 운영합니다.<br />
          실무 중심의 교육과 현장 전문가의 멘토링을 통해 물류 전문 인력을 양성합니다.
        </p>
        
        <div className="program-items">
          <div className="program-item">
            <h3 className="program-item-title">실무 교육</h3>
            <p className="program-item-text">현장 중심의 실무 교육 프로그램</p>
          </div>
          
          <div className="program-item">
            <h3 className="program-item-title">멘토링</h3>
            <p className="program-item-text">전문가 1:1 멘토링 지원</p>
          </div>
          
          <div className="program-item">
            <h3 className="program-item-title">자격증</h3>
            <p className="program-item-text">물류 관련 자격증 취득 지원</p>
          </div>
        </div>
      </div>

      <div className="program-cta">
        <Link href="/join" className="program-btn">
          사업 참여 문의하기
        </Link>
      </div>
    </section>
  );
}
