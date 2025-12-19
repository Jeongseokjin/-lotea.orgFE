import Link from 'next/link';

export default function BusinessSection() {
  return (
    <section className="business-section">
      <h2 className="business-title">주요 사업</h2>
      <p className="business-subtitle">물류산업 발전을 위한 다양한 사업을 추진합니다</p>
      
      <div className="business-cards">
        {/* 조사·연구 */}
        <div className="business-card">
          <h3 className="business-card-title">조사·연구</h3>
          <p className="business-card-text">
            물류기업의 프로세스 혁신, 물류비 절감, 스마트물류·자동화·IT 도입 등에 관한 조사, 연구 및 정책, 산업 과제 수행
          </p>
        </div>

        {/* 교육·네트워킹 */}
        <div className="business-card">
          <h3 className="business-card-title">교육·네트워킹</h3>
          <p className="business-card-text">
            물류산업 관련 세미나, 포럼, 컨퍼런스, 직무 설명회 등 정보 교류 및 네트워킹 행사 개최
          </p>
        </div>

        {/* 역량 강화 */}
        <div className="business-card">
          <h3 className="business-card-title">역량 강화</h3>
          <p className="business-card-text">
            중소 물류기업과 청년 인력의 역량 강화를 위한 교육 프로그램 운영 및 지원
          </p>
        </div>
      </div>

      <Link href="/about" className="business-btn">
        사업 자세히 보기
      </Link>
    </section>
  );
}
