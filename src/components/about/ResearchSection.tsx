import Image from 'next/image';

export default function ResearchSection() {
  return (
    <section className="research-section">
      <div className="research-content">
        <div className="research-image">
          <Image 
            src="/images/research.jpg" 
            alt="조사연구"
            width={480}
            height={340}
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="research-info">
          <h2 className="research-title">조사·연구 사업</h2>
          <p className="research-text">
            물류기업의 프로세스 혁신, 물류비 절감, 스마트물류·자동화·IT 도입 등에 관한 조사, 연구 및 정책, 산업 과제를 수행합니다.
          </p>
          <ul className="research-list">
            <li>물류 프로세스 혁신 연구</li>
            <li>물류비 절감 방안 개발</li>
            <li>스마트물류 기술 도입 연구</li>
            <li>자동화 시스템 구축 지원</li>
            <li>IT 솔루션 적용 연구</li>
            <li>정책 및 산업 과제 수행</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
